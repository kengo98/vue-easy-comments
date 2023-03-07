

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
        
    } = useCommentsData();


    //with useAPI = true
    const {
        service_loadComments,
        service_createComment,
        service_deleteComment
    } = useCommentsService(attrNameConfig.value, apiConfig);

    //with useAPI = false
    const {
        action_createComment,
        actions_loadComments
    } = useCommentsActions(attrNameConfig.value);


    //methods

    const refreshInput = () => {
        commentInput.value = ""
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
            response = {ok: true} //por el momento
        }
            
        //useApi = false (save data, await for commit to show)
        
        if(response.ok){
            //show success message
            refreshInput()
        }else{
            //show error message
            refreshInput()
        }
    }

    const deleteCommentConfirmed = async (comment) => {
        const res = await service_deleteComment(comments, comment)
        if(res.ok){
            context.emit("afterDelete")
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




    return {
        //atributes
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,

        //methods
        loadComments,
        newCommentButtonPressed,
        deleteCommentButtonPressed

    }

}

export default useEasyComments;