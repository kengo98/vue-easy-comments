//se encarga de modificar los datos o estado actual del componente


const useCommentsDataHandler = () => {

    const findCommentIndex = (comments, id) => {
        for (let i = 0; i < comments.value.length; i++) {
            for (let k = 0; k < comments.value[i].responses.length; k++) {
                if(comments.value[i].responses[k].id == id)
                    return [i, k]
            }
            if(comments.value[i].id == id)
                return [i]
        }
    }

    const commit_setCommentsLoaded = (commentsLoaded, status = true) => {
        commentsLoaded.value = status
    }

    const commit_appEndNewComment = (comments, newComment) => {
        let index = comments.value.length;
        comments.value.splice(index, 0, newComment);
    }

    const commit_appEndNewResponse = (comments, response) => {
        let index = findCommentIndex(comments, response.commentId)
        comments.value[index[0]].responses.splice(comments.value[index[0]].responses.length, 1, response);
    }

    const commit_deleteComment = (comments, comment) => {
        // let index = comments.value.findIndex((obj) => obj.id === comment.id)
        let index = findCommentIndex(comments, comment.id)

        if(index.length == 2)
            comments.value[index[0]].responses.splice(index[1], 1);
        else
            comments.value.splice(index[0], 1);

        // comments.value.splice(index, 1);
    }

    const commit_updateComment = (comments, comment) => {
        // let index = comments.value.findIndex((obj) => obj.id === comment.id)
        let index = findCommentIndex(comments, comment.id)
        if(index.length==2){
            if(comments.value[index[0]].responses[index[1]].replyingTo)
                comment.replyingTo = comments.value[index[0]].responses[index[1]].replyingTo     
            comments.value[index[0]].responses.splice(index[1], 1, comment);
        }else{
            if(comments.value.responses){
                comment.response = comments.value.respones
            }
            comments.value.splice(index[0], 1, comment);
        }
    }

    return {
        commit_setCommentsLoaded,
        commit_appEndNewComment,
        commit_deleteComment,
        commit_updateComment,
        commit_appEndNewResponse
    }

}

export default useCommentsDataHandler;