
//encargada de conectarse con la base de datos
import useCommentsDataHandler from "./useCommentsDataHandler"
import axios from 'axios'

const useCommentsService = (nameConfig, apiConfig) => {

    const {
        commit_appEndNewComment,
        commit_setCommentsLoaded,
        commit_deleteComment,
        commit_updateComment,
        commit_appEndNewResponse
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

    const pushCommentsWithConfig = (comments, dataFromServer) =>  {
        for (let i = 0; i < dataFromServer.length; i++) {
            comments.value.push(getCommentWithConfig(dataFromServer[i]))
        }
    }

    const getCommentWithConfig = (comment) => {
        return{
            id: comment[nameConfig.id],
            text: comment[nameConfig.text],
            userName : comment[nameConfig.userName],
            dateCreated: comment[nameConfig.dateCreated],
            userPicture: comment[nameConfig.userPicture],
            userId: comment[nameConfig.userId],
            commentId: comment[nameConfig.commentId],
            responses: comment.responses? comment.responses: [] 
        }
    }

    const searchParentForResponse = (comments, index) => { //recursive

        if(comments.value[index].commentId == null || comments.value[index].commentId == 0){
            return {index: index, parent: comments.value[index]}
        }
            
        let i = comments.value.findIndex((obj) => obj.id === comments.value[index].commentId)

        return searchParentForResponse(comments, i)
        
    }

    const service_loadComments = async (comments, commentsLoaded) => {

        try{

            const {data} =  await api.get(apiConfig.endpoint)

            if(apiConfig.developmentMode)
                console.log("retrieved data", data)

            var commentsFromServer = responseSetup("GET", data)

            pushCommentsWithConfig(comments, commentsFromServer)


            for (let i = comments.value.length-1; i >= 0; i--) {
                if(comments.value[i].commentId){
                    let k = comments.value.findIndex((obj) => obj.id === comments.value[i].commentId) //al que estan respondiendo
                    //si al que estan respondiendo es una respuesta, ponerlo en el mismo nivel
                    if( k!= -1){
                        if(comments.value[k].commentId == null || comments.value[k].commentId == 0){
                            comments.value[i].replyingTo = comments.value[k].userName
                            comments.value[k].responses.unshift(comments.value[i])
                        }
                        else{
                            const {parent, index} = searchParentForResponse(comments, i)
                            if(parent){
                                comments.value[i].replyingTo = comments.value[k].userName
                                comments.value[index].responses.unshift(comments.value[i])
                            }
                        }
                        comments.value.splice(i, 1);
                    }
                }
            }

            commit_setCommentsLoaded(commentsLoaded)
            
            return {ok: true, message: "data retrieved"}
        }catch(error){
            if(apiConfig.developmentMode)
                console.log(error)
            return {ok: false, message: "Error ocurred"};
        }  
    }

    const service_createComment = async (comments, comment, commentToRespond = null) => {
        try{
            //preparing data
            const dataToSend = {}
            dataToSend[nameConfig.text] = comment
            
            dataToSend[nameConfig.commentId] = commentToRespond? commentToRespond.id: null

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

            var newComment = getCommentWithConfig(data)
    
            //update state data
            if(!commentToRespond)
                commit_appEndNewComment(comments, newComment)
            else{
                newComment.replyingTo = commentToRespond.userName
                commit_appEndNewResponse(comments, newComment)
            }
                

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

    const service_updateComment = async(comments, commentObject, newComment) => {
        try{
            //preparing data
            const dataToSend = {}
            dataToSend[nameConfig.text] = newComment

            Object.keys(apiConfig.customDataToSend).forEach(key => {
                dataToSend[key] = apiConfig.customDataToSend[key]
            });

            if(apiConfig.developmentMode){
                console.log("data to send: ", dataToSend)
            }

            const {data} =  await api.put(apiConfig.endpoint+"/"+commentObject.id, dataToSend)
            if(apiConfig.developmentMode){
                console.log("response from server: ", data)
            }

            var newComment = getCommentWithConfig(data)

            //update state data
            commit_updateComment(comments, newComment)

            //return result
            return {ok:true, comment: newComment}
            
        }catch(error){
            if(apiConfig.developmentMode)
                console.log(error)
            return {ok: false};
        }  
    }






    return {
        service_loadComments,
        service_createComment,
        service_deleteComment,
        service_updateComment
    }

}

export default useCommentsService;