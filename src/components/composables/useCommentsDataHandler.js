//se encarga de modificar los datos o estado actual del componente


const useCommentsDataHandler = () => {

    const commit_setCommentsLoaded = (commentsLoaded, status = true) => {
        commentsLoaded.value = status
    }

    const commit_appEndNewComment = (comments, newComment) => {
        let index = comments.value.length;
        comments.value.splice(index, 0, newComment);
    }

    const commit_deleteComment = (comments, comment) => {
        let index = comments.value.findIndex((obj) => obj.id === comment.id)
        comments.value.splice(index, 1);
    }

    return {
        commit_setCommentsLoaded,
        commit_appEndNewComment,
        commit_deleteComment
    }

}

export default useCommentsDataHandler;