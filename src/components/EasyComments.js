
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
            customDeleteConfirm: Boolean,
            noUserImage: String
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
            }, 
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
            createButtonText: {
                type: String
            },
            updateButtonText: {
                type: String
            },
            updatingText: {
                type: String
            },
            respondingText: {
                type: String
            }
        }
    },

    emits:["newComment", "beforeDelete", "onServerResponse", "onError"],

    setup(props, context){

        const {
            //attributes
            attrNameConfig,
            textConfig,
            comments, 
            commentsLoaded, 
            commentInput,
            commentInputRef,
            commentCount,
            sendingDataToServer,

            isUpdating,
            isResponding,
            commentResponding,

            //methods
            loadComments,
            newCommentButtonPressed,
            deleteCommentButtonPressed,
            updateCommentButtonPressed,
            responseCommentButtonPressed,
            cancelButtonPressed,

            updateCommentAction,
            responseCommentAction
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
            noUserImg: props.pluginConfig.noUserImage, 
            comments,
            commentsLoaded,
            commentInput,
            textConfig,
            commentInputRef,
            currentUserId : props.currentUserId,
            commentCount,
            sendingDataToServer,

            isUpdating,
            isResponding,
            commentResponding,

            //methods
            newCommentButtonPressed,
            deleteCommentButtonPressed,
            updateCommentButtonPressed,
            responseCommentButtonPressed,
            cancelButtonPressed,

            updateCommentAction,
            responseCommentAction,
            
        }
    }
}