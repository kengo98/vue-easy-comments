

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
    - apiConfig
:::



## Parameters (Props)

The component has the following parameters available:


|    **Props**   | **Description**                                       | **Type** |
|----------------|-------------------------------------------------------|----------|
|:attrNameConfig | Name of the attributes from the API                   | Object   |
|:pluginConfig   | Component configuration                               | Object   |
|:apiConfig      | Data of the api from where the messages are retrieved | Object   |
|:textConfig     | Configuration of the texts displayed in the component | Object   |

### :attrNameConfig 

|      **Key**      | **Type** | **Description**                 |
|---------------------|----------|---------------------------------|
| idAttrName          | String   | id field name                   |
| textAttrName        | String   | text field name                 |
| userIdAttrName      | String   | user id field name              |
| userNameAttrName    | String   | user name field name            |
| userImgAttrName     | String   | user image field name           |
| commentDateAttrName | String   | comment created date field name |

### :pluginConfig

| **Key** | **Type** | **Description**                           |
|-----------|----------|-------------------------------------------|
| useAPI    | Boolean  | True: use api options to send data to API |

::: warning
required to be <label style="color:lightseagreen">true</label>, false for upcoming features
:::

### :apiConfig

| **Key** | **Type** | **Description**                               |
|-----------|----------|-----------------------------------------------|
| baseURL   | String,  | API baseURL example: "https://my-web/api/v1" |
| endpoint  | String,  | API endpoint example: "/comments"             |
| headers   | String,  | required headers                              |

### :textConfig

This changes the words displayed in the component

|     **Key**    | **Type** | **Default** |
|------------------|----------|-------------|
| reply            | String   | Reply       |
| commentCount     | String   | COMMENT     |
| commentCountMany | String   | COMMENTS    |
| newComment       | String   | NEW COMMENT |
| buttonText       | String   | COMMENT     |


## upcoming features

* Reply messages
* Use component without requiring API feature
* Custom method when 'comment button' is clicked
* Change component colors
::: tip Notice!!
These features are already in development!! :sunglasses::sunglasses:
:::