

# VUE EASY COMMENTS

The easiest way to add comment functionality in your VUE application


## Dependencies

* Axios : ^1.3.4
* vue   : ^3.2.13


## Installation

``` sh
$ npm install @kengo98/vue-easy-comments

OR

$ yarn add @kengo98/vue-easy-comments

```


## Usage

### In a single component
``` vue

<template>
    <EasyComments
    :attrNameConfig=attrNameConfig
    :pluginConfig="pluginConfig"
    :apiConfig="apiConfig"
    >
    </EasyComments>
</template>

<script>

import EasyComments from '@kengo98/EasyComments.vue';

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
          userId: "userId",
          commentId: "commentId"
        },
        pluginConfig: {
            useAPI: true
        },
        apiConfig:{
            baseURL: "https://my-web-page/api/v1",
            endpoint: "/comments",
            headers: {
                'Content-Type': 'application/json'
            }
        },
    }
  }
}
</script>

```

::: danger
The following parameters are required, 
otherwise you will get an error <br>
    - pluginConfig <br>
    - apiConfig <br>
    - attrNameConfig
:::


## Parameters (Props)

The component has the following parameters available:


|    **Props**   | **Description**                                       | **Type** |
|----------------|-------------------------------------------------------|----------|
|:attrNameConfig | Name of the attributes from the API                   | Object   |
|:pluginConfig   | Component configuration                               | Object   |
|:apiConfig      | Data of the api from where the messages are retrieved | Object   |
|:textConfig     | Configuration of the texts displayed in the component | Object   |
|:currentUserId  | If you want to use delete and update features, if this attributes == comments.userId         | Number   |

### :attrNameConfig 

|      **Key**      | **Type** | **Description**                 |
|---------------------|----------|---------------------------------|
| id                  | String   | id field name                   |
| text                | String   | text field name                 |
| userId              | String   | user id field name              |
| userName            | String   | user name field name            |
| userPicture         | String   | user image field name           |
| dataCreated         | String   | comment created date field name |
| commentId           | String   | comment id field name           |

### :pluginConfig

| **Key**             | **Type** | **Description**                              |
|-----------          |----------|-------------------------------------------   |
| useAPI              | Boolean  | True: use api options to send data to API    |
| customDeleteConfirm | Boolean  | True: handle confirmationwith custom method  |
| noUserImage         | String   | path to no user image when comments does not have userPicture    |


::: warning
useApi required to be <label style="color:lightseagreen">true</label>, false for upcoming features
:::

### :apiConfig

| **Key** | **Type** | **Description**                               |
|-----------|----------|-----------------------------------------------|
| baseURL               | String                               | API baseURL example: "https://my-web/api/v1" |
| endpoint              | String                               | API endpoint example: "/comments"             |
| headers               | String                               | required headers                              |
| customDataToSend      | Array                                | by default it only send text as defined attrNameConfig |
| responseSetup         | Object{onGet: Array, onPost: Array}   |                                               |
| developmentMode       | Boolean                               | set True to show sending data and responses from server                             |

#### responseSetup
Example: 
if response from server when retrieve data with GET is: 
``` json
  {
    message: "this is a response from server"
    comment: {
        id: 1   
        text: "this is a new comment"
        userId: 10
        userName: "myUserName"
        profilePicture: "https://example.com/image.jpg" 
        ...
    }
  }        
```

set apiConfig:

``` vue
<script>
  setup(){
    return{
      apiConfig{
        useApi: true,
        reponseSetup: { onGet: ["comment"] }
      }
    }
  }
</script>
            
```

Another example:

``` json
  {
    message: "this is a response from server"
    data: {
      comments: {
        {
          id: 1   
          text: "this is a new comment"
          userId: 10
          userName: "myUserName"
          profilePicture: "https://example.com/image.jpg" 
          ...
        }
      }
    }
  }
```

set apiConfig:

``` vue
<script>
  setup(){
    return{
      apiConfig{
        useApi: true,
        reponseSetup: { onGet: ["data","comment"] }
      }
    }
  }
</script>
            
```

To send the data to the server is the same way


### :textConfig

This changes the words displayed in the component

|     **Key**         | **Type** | **Default** |
|------------------   |----------|-------------|
| reply               | String   | Reply       |
| commentCount        | String   | COMMENT     |
| commentCountMany    | String   | COMMENTS    |
| newComment          | String   | NEW COMMENT |
| createButtonText    | String   | Comment     |
| updateButtonText    | String   | Update      |
| responseButtonText  | String   | Reply       |
| CancelButtonText    | String   | Cancel      |
| update              | String   | Update      |
| delete              | String   | Delete      |
| updatingText        | String   | UPDATING    |
| respondingText      | String   | RESPONDING: |
| createButtonText    | String   | COMMENT     |


## upcoming features

* Use component without requiring API feature
<!-- ::: tip Notice!!
These features are already in development!! :sunglasses::sunglasses:
::: -->