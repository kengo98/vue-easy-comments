# vue-easy-comments

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

### To see more features
See [Component Documentation](https://kengo98.github.io/vue-easy-comments/).
