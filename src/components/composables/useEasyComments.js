

//composable principal

import useCommentsData from "./useCommentsData";
import useCommentsService from "./useCommentsService"
import useCommentsActions from "./useCommentsActions";

const useEasyComments = (pluginConfig, apiConfig, context) => {

    const {
        attrNameConfig,
        textConfig,
        comments,
        commentsLoaded,
        commentInput,
        commentInputRef,
        sendingDataToServer,

        isUpdating,
        commentUpdating,

        isResponding, 
        commentResponding,
        commentCount
        
    } = useCommentsData();


    //with useAPI = true
    const {
        service_loadComments,
        service_createComment,
        service_deleteComment,
        service_updateComment
    } = useCommentsService(attrNameConfig.value, apiConfig);

    //with useAPI = false
    const {
        action_createComment,
        actions_loadComments
    } = useCommentsActions(attrNameConfig.value);


    //methods

    const focusComment = (id) => {
        var div = document.getElementById("comment_"+id.toString())
        div.classList.add("focusable");
        div.focus()
        window.setTimeout(function () { 
            div.classList.remove("focusable");
        }, 2000); 
    }

    const refreshInput = () => {
        commentInput.value = ""
        isUpdating.value = false
        commentUpdating.value = {}
        commentResponding.value = {}
        isResponding.value = false
        sendingDataToServer.value = false
    }

    const loadComments = async(commentsToLoad) => {
        try {
            if(pluginConfig.useAPI){
                await service_loadComments(comments, commentsLoaded)
                return
            }
            if(commentsToLoad){
                actions_loadComments(comments, commentsLoaded, commentsToLoad)
            }
        } catch (error) {
            context.emit("onError", error)
        }
    }

    const newCommentButtonPressed = async () => {
        try {
            //two cases
            //useApi = true (send data to server)
            sendingDataToServer.value = true
            var response = {ok: false};

            if(pluginConfig.useAPI){
                response = await service_createComment(comments, commentInput.value)
            }else{
                // response = 
                response = {ok: false} //por el momento
            }
                
            //useApi = false (save data, await for commit to show)
            
            if(response.ok){
                //show success message
                context.emit("onServerResponse", "created")
                refreshInput()
                focusComment(response.comment.id)
            }else{
                //show error message
                refreshInput()
            }
        } catch (error) {
            refreshInput()
            context.emit("onError", error)
        }
    }

    const deleteCommentConfirmed = async (comment) => {
        try{
            const res = await service_deleteComment(comments, comment)
            if(res.ok){
                context.emit("onServerResponse", "deleted")
            }
            sendingDataToServer.value = false
        }catch(error){
            sendingDataToServer.value = false
            context.emit("onError", error)
        }
    }

    const deleteCommentButtonPressed = async (comment) => {
        try{
            sendingDataToServer.value = true
            if(pluginConfig.customDeleteConfirm){
                await context.emit("beforeDelete", async (resolve) => {
                    if(!resolve)
                        return
                    deleteCommentConfirmed(comment)
                })
            }else{
                if(confirm("Are you sure to delete? "))
                    deleteCommentConfirmed(comment)
            }
        }catch(error){
            sendingDataToServer.value = false
            context.emit("onError", error)
        }
    }

    const updateCommentButtonPressed = async () => {

        try{
            sendingDataToServer.value = true
            var response = {ok: false};

            if(pluginConfig.useAPI){
                response = await service_updateComment(comments, commentUpdating.value, commentInput.value)
                if(response.ok){
                    context.emit("onServerResponse", "updated")
                    refreshInput()
                    focusComment(response.comment.id)
                }
                
            }else{
                response = {ok: false} //por el momento
                refreshInput()
            }
        }catch{
            sendingDataToServer.value = false
            context.emit("onError", error)
        }

    }

    const responseCommentButtonPressed = async () => {
        
        try{
            sendingDataToServer.value = true
            var response = {ok: false};

            if(pluginConfig.useAPI){
                response = await service_createComment(comments, commentInput.value, commentResponding.value)
                if(response.ok){
                    context.emit("onServerResponse", "replied")
                    refreshInput()
                    focusComment(response.comment.id)
                }
            }else{
                // response = 
                response = {ok: false} //por el momento
                refreshInput()
            }
        }catch(error){
            refreshInput()
            context.emit("onError", error)
        }
    }

    const updateCommentAction = (comment) => {
        refreshInput()
        isUpdating.value = true
        commentUpdating.value = comment
        commentInput.value = comment.text
        commentInputRef.value.focus()
    }

    const responseCommentAction = (comment) => {
        refreshInput()
        isResponding.value = true
        commentResponding.value = comment
        commentInputRef.value.focus()
    }

    const cancelButtonPressed = () => {
        refreshInput()
    }

    return {
        //atributes
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,
        commentInputRef,
        commentCount,
        sendingDataToServer,

        isUpdating,
        isResponding, 
        commentResponding,

        //methods
        loadComments,
        newCommentButtonPressed,
        deleteCommentButtonPressed,
        updateCommentButtonPressed,
        responseCommentButtonPressed,
        cancelButtonPressed,


        updateCommentAction,
        responseCommentAction,
        
    }

}

export default useEasyComments;