
//encargada de conectarse con la base de datos
import useCommentsDataHandler from "./useCommentsDataHandler"
import axios from 'axios'

const useCommentsService = (nameConfig, apiConfig) => {

    const {
        commit_appEndNewComment,
        commit_setCommentsLoaded,
        commit_deleteComment
    } = useCommentsDataHandler();

    const api = axios.create({
        baseURL: apiConfig.baseURL,
        headers: apiConfig.headers
    })


    //methods

    const responseSetup = (setup, data) => {
        if(apiConfig.responseSetup){
            if(setup == "POST" && apiConfig.responseSetup.onPost){
                switch(apiConfig.responseSetup.onPost.length){
                    case 1:
                        return  data[apiConfig.responseSetup.onPost[0]]
                    case 2:
                        return  data[apiConfig.responseSetup.onPost[0]][apiConfig.responseSetup.onPost[1]]
                    case 3: 
                        return  data[apiConfig.responseSetup.onPost[0]][apiConfig.responseSetup.onPost[1]][apiConfig.responseSetup.onPost[2]]
                    default:
                        return data
                }
            }
            if(setup == "GET" && apiConfig.responseSetup.onGet){
                switch(apiConfig.responseSetup.onGet.length){
                    case 1:
                        return  data[apiConfig.responseSetup.onGet[0]]
                    case 2:
                        return  data[apiConfig.responseSetup.onGet[0]][apiConfig.responseSetup.onGet[1]]
                    case 3: 
                        return  data[apiConfig.responseSetup.onGet[0]][apiConfig.responseSetup.onGet[1]][apiConfig.responseSetup.onGet[2]]
                    default:
                        return data
                }
            }
            return data
        }else{
            return data
        }
    }

    const setupNewMessage = (data) => {
        
        var newComment = responseSetup("POST",data)

        return newComment = {
            id: newComment[nameConfig.id],
            text: newComment[nameConfig.text],
            userName : newComment[nameConfig.userName],
            dateCreated: newComment[nameConfig.dateCreated],
            userPicture: newComment[nameConfig.userPicture],
            userId: newComment[nameConfig.userId]
        }
    }

    const service_loadComments = async (comments, commentsLoaded) => {

        try{

            const {data} =  await api.get(apiConfig.endpoint)

            if(apiConfig.developmentMode)
                console.log("retrieved data", data)

            var commentsFromServer = responseSetup("GET", data)

            for (let i = 0; i < data.length; i++) {
                comments.value.push(
                    {
                        id: commentsFromServer[i][nameConfig.id],
                        text: commentsFromServer[i][nameConfig.text],
                        userName : commentsFromServer[i][nameConfig.userName],
                        dateCreated: commentsFromServer[i][nameConfig.dateCreated],
                        userPicture: commentsFromServer[i][nameConfig.userPicture],
                        userId: commentsFromServer[i][nameConfig.userId]
                    }
                )
            }

            commit_setCommentsLoaded(commentsLoaded)
            
            return {ok: true, message: "data retrieved"}
        }catch(error){
            if(apiConfig.developmentMode)
                console.log(error)
            return {ok: false, message: "Error ocurred"};
        }  
    }

    const service_createComment = async (comments, comment) => {
        try{
            //preparing data
            const dataToSend = {}
            dataToSend[nameConfig.text] = comment
            
            Object.keys(apiConfig.customDataToSend).forEach(key => {
                dataToSend[key] = apiConfig.customDataToSend[key]
            });

            if(apiConfig.developmentMode){
                console.log("data to send: ", dataToSend)
            }

            const {data} =  await api.post(apiConfig.endpoint, dataToSend)
            if(apiConfig.developmentMode){
                console.log("response from server: ", data)
            }

            var newComment = setupNewMessage(data)

            //update state data
            commit_appEndNewComment(comments, newComment)

            //return result
            return {ok:true, comment: newComment}
            
        }catch(error){
            if(apiConfig.developmentMode)
                console.log(error)
            return {ok: false};
        }  
    }

    const service_deleteComment = async (comments, comment) => {

        try{

            const {data} =  await api.delete(apiConfig.endpoint+"/"+comment.id)

            if(apiConfig.developmentMode)
                console.log("deleted data", data)
            
            commit_deleteComment(comments, comment)
            
            return {ok: true, message: "comment deleted"}
        }catch(error){
            if(apiConfig.developmentMode)
                console.log(error)
            return {ok: false, message: "Error ocurred"};
        }  
    }






    return {
        service_loadComments,
        service_createComment,
        service_deleteComment
    }

}

export default useCommentsService;