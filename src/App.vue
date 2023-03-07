<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="easy-comments">
    <EasyComments
      :attrNameConfig=attrNameConfig
      :pluginConfig="pluginConfig"
      :apiConfig="apiConfig"
      :textConfig = "textConfig"
      :currentUserId = "2"
      @beforeDelete="beforeDelete"
      @onServerResponse = "onServerResponse"
    ></EasyComments>
  </div>
</template>

<script>
import EasyComments from './components/EasyComments.vue';

export default {
  name: 'App',
  components: {
    EasyComments
  },
  data(){
    return{
      attrNameConfig: {
        id: "id",
        text:"text", 
        userName: "userName",
        userPicture: "userPicture",
        dateCreated: "createdAt",
        userId: "userId"
      },
      pluginConfig: {
        useAPI: true,
        customDeleteConfirm: true
      },
      apiConfig:{
        baseURL: "https://6400eee70a2a1afebee39027.mockapi.io/api/v1",
        endpoint: "/comments",
        headers: {
            'Content-Type': 'application/json'
        },
        attrToSend: ["text"],
        customDataToSend: {
          userId: 2, 
        },
        responseSetup: {
          // onGet : ["data","comments"],
          // onPost: ["comment"]
        },
        developmentMode: true
      },
      textConfig:{
        createButtonText: "Comentar",
        updateButtonText: "Modificar",
        reply: "Responder",
        commentCount: "COMENTARIO",
        commentCountMany: "COMENTARIOS",
        newComment: "NUEVO COMENTARIO",
        updatingText: "MODIFICAR: ",
        update: "Modificar",
        delete: "Eliminar"
      }
    }
  },
  setup(){

    const beforeDelete = async (resolve) => {
      if(confirm("Desea eliminar? "))
        resolve(true)
      else
        resolve(false)
    }

    const onServerResponse = (type) => {
      alert(type)
    }

    return {
      beforeDelete,
      onServerResponse
    }

  }
}
</script>

<style>
#app {
  margin-top: 60px;
}

.easy-comments{
    width: 80%;
    margin: 0 auto;
}
</style>
