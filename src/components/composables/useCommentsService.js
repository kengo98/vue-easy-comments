
//encargada de conectarse con la base de datos
import useCommentsDataHandler from "./useCommentsDataHandler"
import axios from 'axios'

const useCommentsService = (nameConfig, apiConfig) => {

    const {
        commit_appEndNewComment,
        commit_setCommentsLoaded
    } = useCommentsDataHandler();

    const api = axios.create({
        baseURL: apiConfig.baseURL,
        headers: apiConfig.headers
    })


    //methods

    const service_loadComments = async (comments, commentsLoaded) => {

        try{

            const {data} =  await api.get(apiConfig.endpoint)

            for (let i = 0; i < data.length; i++) {
                comments.value.push(
                    {
                        id: data[i][nameConfig.idName],
                        text: data[i][nameConfig.commentName],
                        userName : data[i][nameConfig.userName],
                        dateCreated: data[i][nameConfig.dateCreated],
                        userPicture: data[i][nameConfig.userPicture]
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
            dataToSend[nameConfig.commentName] = comment.value

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
        service_loadComments,
        service_createComment
    }

}

export default useCommentsService;