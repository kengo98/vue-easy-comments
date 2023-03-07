
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
        buttonText: ""
    })

    const commentInput = ref("")
    const comments = ref([])
    const commentsLoaded = ref(false)



    return {
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,
    }

}

export default useCommentsData;