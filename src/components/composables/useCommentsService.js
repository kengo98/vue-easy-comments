
//encargada de conectarse con la base de datos
import useCommentsDataHandler from "./useCommentsDataHandler"
import {ref} from 'vue'

const useCommentsService = () => {

    const nameConfig = ref({})

    const {
        commit_appEndNewComment,
        commit_setCommentsLoaded
    } = useCommentsDataHandler();


    //methods

    const service_loadComments = async (comments, commentsLoaded) => {

        try{

            const dataFromDataBase = [
                {id: 1, texto: "4 comentario"},
                {id: 2, texto: "5 comentario"},
                {id: 3, texto: "6 comentario"}
            ]

            for (let i = 0; i < dataFromDataBase.length; i++) {
                comments.value.push(
                    {
                        id: dataFromDataBase[i][nameConfig.value.idName],
                        text: dataFromDataBase[i][nameConfig.value.commentName]
                    }
                )
            }

            commit_setCommentsLoaded(commentsLoaded)
            
            return true;
        }catch(error){
            return false;
        }  
    }

    const service_createComment = async (comments, comment) => {
        try{
            //cargamos a la api 
            
            //preparing data
            const dataToSend = {}
            dataToSend[nameConfig.value.commentName] = comment.value

            const response = {
                comment : {id: comments.value.length+1, text: comment.value}
            }

            //modificamos los datos del estado
            commit_appEndNewComment(comments, response.comment)

            //retornamos el resultado
            
            return {ok:true, comment: response.comment}
            
        }catch(error){
            return false;
        }  
    }

    return {
        nameConfig,
        service_loadComments,
        service_createComment
    }

}

export default useCommentsService;