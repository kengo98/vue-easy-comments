
import { ref } from 'vue'

const useCommentsData = () => {

    //attributes
    const attrNameConfig = ref({
        idName:"id", 
        commentName: "text",
        userName: "userName",
        dateCreated: "dateCreated",
        userPicture: "userPicture"
    
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