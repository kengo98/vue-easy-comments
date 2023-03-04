
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
    const commentInput = ref("")
    const comments = ref([])
    const commentsLoaded = ref(false)



    return {
        attrNameConfig,
        commentInput,
        comments,
        commentsLoaded,
    }

}

export default useCommentsData;