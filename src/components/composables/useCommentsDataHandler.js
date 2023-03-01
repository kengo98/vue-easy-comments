//se encarga de modificar los datos o estado actual del componente


const useCommentsDataHandler = () => {

    const commit_setCommentsLoaded = (commentsLoaded, status = true) => {
        commentsLoaded.value = status
    }

    const commit_appEndNewComment = (comments, newComment) => {
        let index = comments.value.length;
        comments.value.splice(index, 0, newComment);
    }

    return {
        commit_setCommentsLoaded,
        commit_appEndNewComment
    }

}

export default useCommentsDataHandler;