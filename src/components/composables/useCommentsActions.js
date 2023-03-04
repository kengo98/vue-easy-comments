

//actions, not DB required

import useCommentsDataHandler from "./useCommentsDataHandler";

const useCommentsActions = (nameConfig) => {

    const {
        commit_appEndNewComment,
        commit_setCommentsLoaded
    } = useCommentsDataHandler();


    const actions_loadComments = (comments, commentsLoaded, commentsToLoad) => {
        for (let i = 0; i < commentsToLoad.length; i++) {
            comments.value.push(
                {
                    id: commentsToLoad[i][nameConfig.id],
                    text: commentsToLoad[i][nameConfig.text],
                    userName: commentsToLoad[i][nameConfig.userName],
                    dateCreated: commentsToLoad[i][nameConfig.dateCreated],
                    userPicture: commentsToLoad[i][nameConfig.userPicture],
                    userId: commentsToLoad[i][nameConfig.userId],
                }
            )
        }

        commit_setCommentsLoaded(commentsLoaded)
    }

    const actions_createComment = (comments, newComment) => {
        console.log(nameConfig)
    }



    return {
        actions_createComment,
        actions_loadComments
    }

}

export default useCommentsActions;