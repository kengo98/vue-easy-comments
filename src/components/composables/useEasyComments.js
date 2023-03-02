

//composable principal

import useCommentsData from "./useCommentsData";
import useCommentsService from "./useCommentsService"
import useCommentsActions from "./useCommentsActions";


const useEasyComments = (pluginConfig, apiConfig) => {

    const {
        attrNameConfig,
        comments,
        commentsLoaded,
        commentInput,
        
    } = useCommentsData();


    //with useAPI = true
    const {
        service_loadComments,
        service_createComment
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
        const response = await service_createComment(comments, commentInput)
        if(response.ok){
            //show success message
            refreshInput()
        }else{
            //show error message
        }
    }



    return {
        //atributes
        attrNameConfig,
        commentInput,
        comments,
        commentsLoaded,

        //methods
        loadComments,
        newCommentButtonPressed,

    }

}

export default useEasyComments;