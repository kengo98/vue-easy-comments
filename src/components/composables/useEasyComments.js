

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

        isUpdating,
        commentUpdating
        
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

    const refreshInput = () => {
        commentInput.value = ""
        isUpdating.value = false
        commentUpdating.value = {}
    }

    const loadComments = async(commentsToLoad) => {
        if(pluginConfig.useAPI){
            await service_loadComments(comments, commentsLoaded)
            return
        }
        if(commentsToLoad){
            actions_loadComments(comments, commentsLoaded, commentsToLoad)
        }
    }

    const newCommentButtonPressed = async () => {
        //two cases
        //useApi = true (send data to server)

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
        }else{
            //show error message
            refreshInput()
        }
    }

    const deleteCommentConfirmed = async (comment) => {
        const res = await service_deleteComment(comments, comment)
        if(res.ok){
            context.emit("onServerResponse", "deleted")
        }
    }

    const deleteCommentButtonPressed = async (comment) => {
        try{
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
            console.log(error)
        }
    }

    const updateCommentButtonPressed = async () => {
        var response = {ok: false};

        if(pluginConfig.useAPI){
            response = await service_updateComment(comments, commentUpdating.value, commentInput.value)
            if(response.ok){
                context.emit("onServerResponse", "updated")
                refreshInput()
            }

        }else{
            // response = 
            response = {ok: false} //por el momento
        }
    }

    const updateCommentAction = (comment) => {
        isUpdating.value = true
        commentUpdating.value = comment
        commentInput.value = comment.text
        commentInputRef.value.focus()
    }




    return {
        //atributes
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,
        commentInputRef,

        isUpdating,

        //methods
        loadComments,
        newCommentButtonPressed,
        deleteCommentButtonPressed,
        updateCommentButtonPressed,


        updateCommentAction
    }

}

export default useEasyComments;