

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
                        <div v-if="comment.userPicture != null" class="comments-image-wrapper">
                            <img v-if="comment.userPicture == ''" class="comments-user-image" src="../assets/no-user-img.jpg" alt="">
                            <img v-if="comment.userPicture != ''" class="comments-user-image" :src="comment.userPicture" alt="">
                        </div>
                        <div class="comments-text">
                           <strong>@{{ comment.userName }}</strong> {{ comment.text }} 
                        </div>
                    </div>
                    <div class="bottom-wrapper">
                        <a class="date-texts">{{ comment.dateCreated }}</a>
                        <div class="comments-actions">
                            <a v-if="comment.userId && comment.userId == currentUserId" class="botton-comments-texts c-danger">{{ textConfig.delete+ " " }}</a>
                            <a v-if="comment.userId && comment.userId == currentUserId" class="botton-comments-texts c-success">{{ textConfig.update+ " " }}</a>
                            <a class="botton-comments-texts">{{ textConfig.reply }}</a>
                        </div>
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



<script src="./EasyComments.js"></script>
<style src="./style.css"></style>
