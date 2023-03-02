

<template>
    <div class="components-wrapper">
        <div class="comments-counter">
            3 COMENTARIOS
        </div>
        <div class="comments-wrapper">
            <div v-if="commentsLoaded">
                <div class="comments" v-for="comment in comments" :key="comment.id">
                    <div class="top-wrapper">
                        <div class="comments-image-wrapper">
                            <img class="comments-user-image" src="../assets/no-user-img.jpg" alt="">
                        </div>
                        <div class="comments-text">
                           <strong>UserName</strong> {{ comment.text }} Lorem Ipsum is simply dummy text of the printing anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beend typesetting industry. Lorem Ipsum has been
                        </div>
                    </div>
                    <div class="bottom-wrapper">
                        <a class="date-texts">Sabado 20 de febrero</a><a class="botton-comments-texts">Responder</a>
                    </div>    
                </div>
            </div>
        </div>

        <div class="new-comment-text">
            Nuevo Comentario
        </div>
        <div class="comment-input-wrapper">
            <input type="text" class="comment-input" id="comment-input" v-model="commentInput">
            <button :disabled="commentInput.length==0" class="input-button" type="button" @click="newCommentButtonPressed">Comentar</button>
        </div>
    </div>
</template>


<script>

import useEasyComments from './composables/useEasyComments'
import { onBeforeMount } from 'vue';

export default {

    props:{
        attrNameConfig:{
            idAttrName: String,
            textAttrName: String,
            userIdAttrName: String,
            userNameAttrName: String,
            userImgAttrName: String,
            commentDateAttrName: String
        }
    },

    setup(props){

        const {
            //attributes
            attrNameConfig,
            comments, 
            commentsLoaded, 
            commentInput,

            //methods
            loadComments,
            newCommentButtonPressed
        } = useEasyComments();
        
        const setConfig = () => {  
            attrNameConfig.value.idName = props.attrNameConfig?.idAttrName? props.attrNameConfig.idAttrName: "id"
            attrNameConfig.value.commentName = props.attrNameConfig?.textAttrName? props.attrNameConfig.textAttrName: "text"
        }

        onBeforeMount(async () => {
            setConfig()
            await loadComments();
        })



        return{
            //attributes
            comments,
            commentsLoaded,
            commentInput,

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
        width: 89%;
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



    @media screen and (min-width: 400px) {
        .comment-input {
            width: 72%;
        }
    }

    
    @media screen and (min-width: 600px) {
        .comment-input {
            width: 81%;
        }
    }

    @media screen and (min-width: 1100px) {
        .comment-input {
            width: 90%;
        }
    }


</style>
