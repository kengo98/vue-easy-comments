

<template>
    <div class="components-wrapper">
        <div class="comments-counter">
            {{ comments.length }}
            <div v-if="comments.length<2" style="display: inline-block;"> {{ textConfig.commentCount }}</div>
            <div v-if="comments.length>=2" style="display: inline-block;"> {{ textConfig.commentCountMany }}</div>
        </div>
        <div class="comments-wrapper">
            <div v-if="commentsLoaded">
                <div class="comments" v-for="comment in comments" :key="comment.id">
                    <div class="top-wrapper">
                        <div class="comments-image-wrapper">
                            <img v-if="comment.userPicture == ''" class="comments-user-image" src="../assets/no-user-img.jpg" alt="">
                            <img v-if="comment.userPicture != ''" class="comments-user-image" :src="comment.userPicture" alt="">
                        </div>
                        <div class="comments-text">
                           <strong>@{{ comment.userName }}</strong> {{ comment.text }} 
                        </div>
                    </div>
                    <div class="bottom-wrapper">
                        <a class="date-texts">{{ comment.dateCreated }}</a><a class="botton-comments-texts">{{ textConfig.reply }}</a>
                    </div>    
                </div>
            </div>
        </div>

        <div class="new-comment-text">
            {{ textConfig.newComment }}
        </div>
        <div class="comment-input-wrapper">
            <input type="text" class="comment-input" id="comment-input" v-model="commentInput">
            <button :disabled="commentInput.length==0" class="input-button" type="button" @click="newCommentButtonPressed">{{ textConfig.buttonText }}</button>
        </div>
    </div>
</template>


<script>

import useEasyComments from './composables/useEasyComments'
import { onBeforeMount, ref } from 'vue';

export default {

    props:{
        attrNameConfig:{
            idAttrName: String,
            textAttrName: String,
            userIdAttrName: String,
            userNameAttrName: String,
            userImgAttrName: String,
            commentDateAttrName: String
        },
        pluginConfig:{
            useAPI: Boolean,
        },
        //if pluginConfig.useAPI = false
        data:{
            comments: Array
        },
        //if pluginConfig.useAPI = true
        apiConfig:{
            baseURL: String,
            endpoint: String,        
            headers: String,
        },

        //languageConfig
        textConfig:{
            reply: {
                type: String,
                default: "Reply"
            },
            commentCount: {
                type: String,
                default: "COMMENT"
            },
            commentCountMany: {
                type: String,
                default: "COMMENTS"
            },
            newComment: {
                type: String,
                default: "NEW COMMENT"
            },
            buttonText: {
                type: String,
                default: "Comment"
            },
        }
    },

    emits:["newComment"],

    setup(props, context){

        const {
            //attributes
            attrNameConfig,
            comments, 
            commentsLoaded, 
            commentInput,

            //methods
            loadComments,
            newCommentButtonPressed
        } = useEasyComments(props.pluginConfig, props.apiConfig);

        
        const setAttrNameConfig = () => {  
            attrNameConfig.value.idName = props.attrNameConfig?.idAttrName? props.attrNameConfig.idAttrName: "id"
            attrNameConfig.value.commentName = props.attrNameConfig?.textAttrName? props.attrNameConfig.textAttrName: "text"
            attrNameConfig.value.userName = props.attrNameConfig?.userNameAttrName? props.attrNameConfig.userNameAttrName: "userName"
            attrNameConfig.value.dateCreated = props.attrNameConfig?.commentDateAttrName? props.attrNameConfig.commentDateAttrName: "dateCreated"
            attrNameConfig.value.userPicture = props.attrNameConfig?.userImgAttrName? props.attrNameConfig.userImgAttrName: "userPicture"
        }


        const textConfig = ref({
            reply: "Reply",
            commentCount: "COMMENT",
            commentCountMany: "COMMENTS",
            newComment: "NEW COMMENT",
            buttonText: "Comment"
        })

        const setTextConfig = () => {
            if(!props.textConfig)
                return   
            textConfig.value.reply = props.textConfig.reply? props.textConfig.reply : textConfig.value.reply
            textConfig.value.commentCount = props.textConfig.commentCount? props.textConfig.commentCount : textConfig.value.commentCount
            textConfig.value.commentCountMany = props.textConfig.commentCountMany? props.textConfig.commentCountMany : textConfig.value.commentCountMany
            textConfig.value.newComment = props.textConfig.newComment? props.textConfig.newComment : textConfig.value.newComment
            textConfig.value.buttonText = props.textConfig.buttonText? props.textConfig.buttonText : textConfig.value.buttonText
        }

        

        onBeforeMount(async () => {
            setAttrNameConfig()
            setTextConfig()
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

            //methods
            newCommentButtonPressed
        }
    }

}


</script>









<style>

    .comments-counter{
        margin-bottom: 10px;
    }
    .comments-wrapper{
        height: 100%;
        position: relative;
    }
    .comments{
        padding: 10px;
        background-color: #dedede;
        margin-bottom: 5px;
        border-radius: 5px;
    }
    .top-wrapper{
        display: block;
    }
    .comments-image-wrapper{
        height: 100%;
        width: 60px;
        display: inline-block;
        text-align: center;
    }
    .comments-user-image{
        display: inline-block;
        border-radius: 50px;
        height: 40px;
        width: 40px;
    }
    .comments-text{
        width: 72%;
        display: inline-block;
        vertical-align: top;
        text-align: left;
    }
    .bottom-wrapper{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .botton-comments-texts{
        color: #0275d8;;
        opacity: 50%;
    }
    .botton-comments-texts:hover{
        cursor: pointer;
    }
    .date-texts{
        color: gray;
        opacity: 50%;
    }






    .new-comment-text{
        margin-top: 20px;
    }
    .components-wrapper{
        position: relative;
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

    }

    .comment-input-wrapper{
        text-align: center;
        margin-top: 10px;
    }

    .comment-input{
        width: 60%;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 40%);
        border: 1px solid #ccc;
        padding-left: 10px;
        outline: 0;
        background: #fff;
        height: 30px;
        border-radius: 5px;
    }

    .input-button{
        width: 70px;
        height: 37px;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 40%);
        margin-left: 3px;
        background-color: #0275d8;
        border-radius: 5px;
        color: white;
        border: 1px solid;
        outline: 0;
    }
    .input-button:disabled{
        background-color: gray;
    }
    .input-button:enabled:hover{
        cursor: pointer;
    }



    @media screen and (min-width: 420px) {
        .comment-input {
            width: 72%;
        }
        .comments-text{
            width: 80%;
        }
    }

    
    @media screen and (min-width: 600px) {
        .comment-input {
            width: 81%;
        }
        .comments-text{
            width: 86%;
        }
    }

    @media screen and (min-width: 1100px) {
        .comment-input {
            width: 90%;
        }
        .comments-text{
            width: 92%;
        }
    }


</style>
