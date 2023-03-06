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
      @afterDelete="afterDelete"
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
      // data: {
      //   comments : [
      //           {id: 1, texto: "esto es un comentario"},
      //           {id: 2, texto: "esto es otro comentario"},
      //           {id: 3, texto: "commeeeeeeentario"}
      //   ]
      // },
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
        buttonText: "Comentar",
        reply: "Responder",
        commentCount: "COMENTARIO",
        commentCountMany: "COMENTARIOS",
        newComment: "NUEVO COMENTARIO",
        update: "Modificar",
        delete: "Eliminar"
      }
    }
  },
  setup(){

    const beforeDelete = async (response, comment) => {
      if(confirm("Desea eliminar? "))
        response(true, comment)
      else
        response(false)
    }

    const afterDelete = () => {
      alert("eliminado!!")
    }

    return {
      beforeDelete,
      afterDelete
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
