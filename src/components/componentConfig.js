
const componentConfig = () => {

    const setup_attrNameConfig = (attrNameConfig, prop) => {
        attrNameConfig.value.id = prop?.id? prop.id: "id"
        attrNameConfig.value.text = prop?.text? prop.text: "text"
        attrNameConfig.value.userName = prop?.userName? prop.userName: "userName"
        attrNameConfig.value.dateCreated = prop?.dateCreated? prop.dateCreated: "dateCreated"
        attrNameConfig.value.userPicture = prop?.userPicture? prop.userPicture: "userPicture"
        attrNameConfig.value.userId = prop?.userId? prop.userId: "userId"
    }

    const setup_textConfig = (textConfig, prop) => {
        if(!prop)
            return   
        textConfig.value.reply = prop.reply? prop.reply : "Reply",
        textConfig.value.commentCount = prop.commentCount? prop.commentCount : "COMMENT"
        textConfig.value.commentCountMany = prop.commentCountMany? prop.commentCountMany : "COMMENTS"
        textConfig.value.newComment = prop.newComment? prop.newComment : "NEW COMMENT"
        textConfig.value.buttonText = prop.buttonText? prop.buttonText : "Comment"
        textConfig.value.update = prop.update? prop.update : "Update"
        textConfig.value.delete = prop.delete? prop.delete : "Delete"
    }

    return {
        setup_attrNameConfig,
        setup_textConfig
    }

}

export default componentConfig;