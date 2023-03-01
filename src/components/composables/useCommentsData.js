
import { ref } from 'vue'

const useCommentsData = () => {

    //attributes
    const config = ref({idName:"id", commentName: "text"})
    const commentInput = ref("")
    const comments = ref([])
    const commentsLoaded = ref(false)



    return {
        config,
        commentInput,
        comments,
        commentsLoaded,
    }

}

export default useCommentsData;