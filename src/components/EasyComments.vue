

<template>
        <div class="comment-input-wrapper">
            <input type="text" id="comment-input" v-model="commentInput">
            <button :disabled="commentInput.length==0" type="button" @click="newCommentButtonPressed">Comment</button>
        </div>
        <div class="comments-wrapper">
            <div v-if="commentsLoaded" class="comments">
                <div v-for="comment in comments" :key="comment.id">{{ comment.text }}</div>
            </div>
        </div>
</template>


<script>

import useEasyComments from './composables/useEasyComments'
import { onBeforeMount } from 'vue';

export default {

    props:{
        config:{
            idName: String,
            commentName: String
        }
    },

    setup(props){

        const {
            //attributes
            config,
            comments, 
            commentsLoaded, 
            commentInput,

            //methods
            loadComments,
            newCommentButtonPressed
        } = useEasyComments();
        
        const setConfig = () => {  
            config.value.idName = props.config.idName? props.config.idName: "id"
            config.value.commentName = props.config.commentName? props.config.commentName: "text"
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


<style >
    
</style>
