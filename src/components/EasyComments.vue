

<template>
    <div class="components-wrapper">
        <div class="comments-counter">
            {{ commentCount }}
            <div v-if="comments.length<2" style="display: inline-block;"> {{ textConfig.commentCount }}</div>
            <div v-if="comments.length>=2" style="display: inline-block;"> {{ textConfig.commentCountMany }}</div>
        </div>
        <div class="comments-wrapper">
            <div v-if="commentsLoaded">
                <div class="comments" v-for="comment in comments" :key="comment.id">
                    <div class="comment-wrapper" :id="'comment_'+comment.id" tabindex="0">
                        <div class="top-wrapper">
                            <div v-if="comment.userPicture != null" class="comments-image-wrapper">
                                <img v-if="comment.userPicture == ''" class="comments-user-image" src="../assets/img/no-user-img.jpg" alt="">
                                <img v-if="comment.userPicture != ''" class="comments-user-image" :src="comment.userPicture" alt="">
                            </div>
                            <div class="comments-text">
                            <strong>{{ comment.userName }}:</strong> {{ comment.text }} 
                            </div>
                        </div>
                        <div class="bottom-wrapper">
                            <a class="date-texts">{{ comment.dateCreated }}</a>
                            <div class="comments-actions">
                                <a @click="deleteCommentButtonPressed(comment)" v-if="comment.userId && comment.userId == currentUserId" class="botton-comments-texts c-danger f-bold">{{ textConfig.delete+ " " }}</a>
                                <a v-if="comment.userId && comment.userId == currentUserId" @click="updateCommentAction(comment)" class="botton-comments-texts c-success f-bold">{{ textConfig.update+ " " }}</a>
                                <a class="botton-comments-texts f-bold" @click="responseCommentAction(comment)">{{ textConfig.reply }}</a>
                            </div>
                        </div> 
                    </div>
                     
                    
                    <div class="response-wrapper">
                        <div class="comments-response" v-for="response in comment.responses" :key="response.id" :id="'comment_'+response.id" tabindex="0">
                            <div class="top-wrapper">
                                <div v-if="response.userPicture != null" class="comments-image-wrapper">
                                    <img v-if="response.userPicture == ''" class="comments-user-image" src="../assets/img/no-user-img.jpg" alt="">
                                    <img v-if="response.userPicture != ''" class="comments-user-image" :src="response.userPicture" alt="">
                                </div>
                                <div class="comments-text">
                                <strong>{{ response.userName }}: <div class="inline c-primary">@{{response.replyingTo}}</div> </strong> {{ response.text }} 
                                </div>
                            </div>
                            <div class="bottom-wrapper">
                                <a class="date-texts">{{ response.dateCreated }}</a>
                                <div class="comments-actions">
                                    <a @click="deleteCommentButtonPressed(response)" v-if="response.userId && response.userId == currentUserId" class="botton-comments-texts c-danger f-bold">{{ textConfig.delete+ " " }}</a>
                                    <a v-if="response.userId && response.userId == currentUserId" @click="updateCommentAction(response)" class="botton-comments-texts c-success f-bold">{{ textConfig.update+ " " }}</a>
                                    <a class="botton-comments-texts f-bold" @click="responseCommentAction(response)">{{ textConfig.reply }}</a>
                                </div>
                            </div>    
                        </div>
                    </div>  
                    
                </div>
            </div>
        </div>

        <div v-if="!isUpdating && !isResponding" class="new-comment-text">
            {{ textConfig.newComment }}
        </div>
        <div v-if="isUpdating" class="new-comment-text">
            {{ textConfig.updatingText }}
        </div>

        <div v-if="isResponding" class="new-comment-text">
            {{ textConfig.respondingText }} 
            <p>
                <strong class="c-success">@{{commentResponding.userName}}:</strong> 
                <label v-if="commentResponding.replyingTo" class="inline c-primary f-bold">
                    @{{commentResponding.replyingTo}}
                </label>
                {{commentResponding.text}}     
            </p>
        </div>
        
        <div class="comment-input-wrapper">
            <textarea maxlength="350" ref="commentInputRef" class="comment-input" id="comment-input" v-model="commentInput"></textarea>
            <div>
                <button v-if="!isUpdating && !isResponding" :disabled="commentInput.length==0 || sendingDataToServer" class="input-button" type="button" @click="newCommentButtonPressed">{{ textConfig.createButtonText }}</button>
                <button v-if="isUpdating"                   :disabled="commentInput.length==0 || sendingDataToServer" @click="updateCommentButtonPressed" class="input-button" type="button" > {{ textConfig.updateButtonText }} </button>
                <button v-if="isResponding"                 :disabled="commentInput.length==0 || sendingDataToServer" @click="responseCommentButtonPressed" class="input-button" type="button" > {{ textConfig.responseButtonText }} </button>
                <button v-if="isResponding || isUpdating"   @click="cancelButtonPressed" class="cancel-button" type="button" > {{ textConfig.cancelButtonText }} </button>
            </div>
        </div>
    </div>
</template>



<script src="./EasyComments.js"></script>
<style src="../assets/style.css"></style>
