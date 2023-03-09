
import { ref, computed } from 'vue'

const useCommentsData = () => {

    //attributes
    const attrNameConfig = ref({
        id:"", 
        text: "",
        userName: "",
        dateCreated: "",
        userPicture: "",
        userId : "",
        commentId: "",
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
        responseButtonText: "",
        updatingText: "", 
        respondingText: "",
    })

    const commentInput = ref("")
    const comments = ref([])
    const commentsLoaded = ref(false)


    const isUpdating = ref(false)
    const commentUpdating = ref({})
    const commentInputRef = ref()

    const isResponding = ref(false)
    const commentResponding = ref({})

    const sendingDataToServer = ref(false)

    const commentCount = computed(() => { 
        var count = 0
        comments.value.forEach(comment => {
            if(comment.responses)
                count = count + comment.responses.length
            count++
        });
        return count
    });

    return {
        attrNameConfig,
        textConfig,
        commentInput,
        comments,
        commentsLoaded,
        isUpdating,
        commentInputRef,
        commentUpdating,
        isResponding,
        commentResponding,
        commentCount,
        sendingDataToServer
    }

}

export default useCommentsData;