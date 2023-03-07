
import useEasyComments from './composables/useEasyComments'
import { onBeforeMount } from 'vue';
import componentConfig from './componentConfig'

export default {

    props:{
        attrNameConfig:{
            type: Object,
        },
        pluginConfig:{
            useAPI: Boolean,
            customDeleteConfirm: Boolean
        },
        //if pluginConfig.useAPI = false
        data:{
            comments: Array
        },
        currentUserId: Number,
        //if pluginConfig.useAPI = true
        apiConfig:{
            baseURL: String,
            endpoint: String,        
            headers: String,
            customDataToSend: {}, //by default it only send text as defined attrNameConfig
            responseSetup: {
                onGet: Array,
                onPost: Array
            },   //setup for response
            //if response from server when retrieve data with GET is like 
            //{
            //  message: "this is a response from server"
            //  comment: {
            //     id: 1   
            //     text: "this is a new comment"
            //     userId: 10
            //     userName: "myUserName"
            //     profilePicture: "https://example.com/image.jpg" 
            //  }
            //}
            // reponseSetup: { onGet: ["comment"] }
            developmentMode: Boolean
        },

        //languageConfig
        textConfig:{
            reply: {
                type: String
            },
            commentCount: {
                type: String
            },
            commentCountMany: {
                type: String
            },
            newComment: {
                type: String
            },
            buttonText: {
                type: String
            },
        }
    },

    emits:["newComment", "beforeDelete", "afterDelete"],

    setup(props, context){

        const {
            //attributes
            attrNameConfig,
            textConfig,
            comments, 
            commentsLoaded, 
            commentInput,

            //methods
            loadComments,
            newCommentButtonPressed,
            deleteCommentButtonPressed,
        } = useEasyComments(props.pluginConfig, props.apiConfig, context);

        const {
            setup_attrNameConfig,
            setup_textConfig
        } = componentConfig()


        const componentSetup = () => {
            //text to show config
            setup_textConfig(textConfig, props.textConfig)
            //attributes names config
            setup_attrNameConfig(attrNameConfig, props.attrNameConfig)
        }

        onBeforeMount(async () => {
            componentSetup()
            if(props.pluginConfig.useAPI)
                await loadComments();
            else
                await loadComments(props.data.comments);
        })



        return{
            //attributes
            comments,
            commentsLoaded,
            commentInput,
            textConfig,
            currentUserId : props.currentUserId,

            //methods
            newCommentButtonPressed,
            deleteCommentButtonPressed
        }
    }
}