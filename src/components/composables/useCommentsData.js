
import { ref } from 'vue'

const useCommentsData = () => {

    //attributes
    const attrNameConfig = ref({
        id:"", 
        text: "",
        userName: "",
        dateCreated: "",
        userPicture: "",
        userId : ""
    })
    const textConfig = ref({
        reply: "",
        commentCount: "",
        commentCountMany: "",
        newComment: "",
        update: "",
        delete: "",
        createButtonText: "",
        updateButtonText: "",
        updatingText: "", 
    })

    const commentInput = ref("")
    const comments = ref([])
    const commentsLoaded = ref(false)


    const isUpdating = ref(false)
    const commentUpdating = ref({})

    const commentInputRef = ref()



    return {
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,
        isUpdating,
        commentInputRef,
        commentUpdating
    }

}

export default useCommentsData;