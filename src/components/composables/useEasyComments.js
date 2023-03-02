

//composable principal

import useCommentsData from "./useCommentsData";
import useCommentsService from "./useCommentsService"


const useEasyComments = () => {

    const {
        attrNameConfig,
        comments,
        commentsLoaded,
        commentInput,
        
    } = useCommentsData();


    const {
        nameConfig,
        service_loadComments,
        service_createComment
    } = useCommentsService();


    //methods

    const refreshInput = () => {
        commentInput.value = ""
    }

    const loadComments = async() => {
        nameConfig.value = attrNameConfig.value
        await service_loadComments(comments, commentsLoaded)
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