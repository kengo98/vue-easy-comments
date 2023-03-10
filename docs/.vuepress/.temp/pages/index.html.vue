<template><div><h1 id="vue-easy-comments" tabindex="-1"><a class="header-anchor" href="#vue-easy-comments" aria-hidden="true">#</a> VUE EASY COMMENTS</h1>
<p>The easiest way to add comment functionality in your VUE application</p>
<h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2>
<ul>
<li>Axios : ^1.3.4</li>
<li>vue   : ^3.2.13</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> @kengo98/vue-easy-comments

OR

$ <span class="token function">yarn</span> <span class="token function">add</span> @kengo98/vue-easy-comments

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="in-a-single-component" tabindex="-1"><a class="header-anchor" href="#in-a-single-component" aria-hidden="true">#</a> In a single component</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EasyComments</span>
    <span class="token attr-name">:attrNameConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>attrNameConfig</span>
    <span class="token attr-name">:pluginConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pluginConfig<span class="token punctuation">"</span></span>
    <span class="token attr-name">:apiConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apiConfig<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EasyComments</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> EasyComments <span class="token keyword">from</span> <span class="token string">'@kengo98/EasyComments.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    EasyComments
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token literal-property property">attrNameConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">"text"</span><span class="token punctuation">,</span> 
          <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">"userName"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">userPicture</span><span class="token operator">:</span> <span class="token string">"userPicture"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dateCreated</span><span class="token operator">:</span> <span class="token string">"createdAt"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">"userId"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">commentId</span><span class="token operator">:</span> <span class="token string">"commentId"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pluginConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">useAPI</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">apiConfig</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">"https://my-web-page/api/v1"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">"/comments"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>The following parameters are required,
otherwise you will get an error <br>
- pluginConfig <br>
- apiConfig <br>
- attrNameConfig</p>
</div>
<h2 id="parameters-props" tabindex="-1"><a class="header-anchor" href="#parameters-props" aria-hidden="true">#</a> Parameters (Props)</h2>
<p>The component has the following parameters available:</p>
<table>
<thead>
<tr>
<th><strong>Props</strong></th>
<th><strong>Description</strong></th>
<th><strong>Type</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>:attrNameConfig</td>
<td>Name of the attributes from the API</td>
<td>Object</td>
</tr>
<tr>
<td>:pluginConfig</td>
<td>Component configuration</td>
<td>Object</td>
</tr>
<tr>
<td>:apiConfig</td>
<td>Data of the api from where the messages are retrieved</td>
<td>Object</td>
</tr>
<tr>
<td>:textConfig</td>
<td>Configuration of the texts displayed in the component</td>
<td>Object</td>
</tr>
<tr>
<td>:currentUserId</td>
<td>If you want to use delete and update features, if this attributes == comments.userId</td>
<td>Number</td>
</tr>
</tbody>
</table>
<h3 id="attrnameconfig" tabindex="-1"><a class="header-anchor" href="#attrnameconfig" aria-hidden="true">#</a> :attrNameConfig</h3>
<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>String</td>
<td>id field name</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
<td>text field name</td>
</tr>
<tr>
<td>userId</td>
<td>String</td>
<td>user id field name</td>
</tr>
<tr>
<td>userName</td>
<td>String</td>
<td>user name field name</td>
</tr>
<tr>
<td>userPicture</td>
<td>String</td>
<td>user image field name</td>
</tr>
<tr>
<td>dataCreated</td>
<td>String</td>
<td>comment created date field name</td>
</tr>
<tr>
<td>commentId</td>
<td>String</td>
<td>comment id field name</td>
</tr>
</tbody>
</table>
<h3 id="pluginconfig" tabindex="-1"><a class="header-anchor" href="#pluginconfig" aria-hidden="true">#</a> :pluginConfig</h3>
<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>useAPI</td>
<td>Boolean</td>
<td>True: use api options to send data to API</td>
</tr>
<tr>
<td>customDeleteConfirm</td>
<td>Boolean</td>
<td>True: handle confirmationwith custom method</td>
</tr>
<tr>
<td>noUserImage</td>
<td>String</td>
<td>path to no user image when comments does not have userPicture</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>useApi required to be <label style="color:lightseagreen">true</label>, false for upcoming features</p>
</div>
<h3 id="apiconfig" tabindex="-1"><a class="header-anchor" href="#apiconfig" aria-hidden="true">#</a> :apiConfig</h3>
<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>baseURL</td>
<td>String</td>
<td>API baseURL example: &quot;https://my-web/api/v1&quot;</td>
</tr>
<tr>
<td>endpoint</td>
<td>String</td>
<td>API endpoint example: &quot;/comments&quot;</td>
</tr>
<tr>
<td>headers</td>
<td>String</td>
<td>required headers</td>
</tr>
<tr>
<td>customDataToSend</td>
<td>Array</td>
<td>by default it only send text as defined attrNameConfig</td>
</tr>
<tr>
<td>responseSetup</td>
<td>Object{onGet: Array, onPost: Array}</td>
<td></td>
</tr>
<tr>
<td>developmentMode</td>
<td>Boolean</td>
<td>set True to show sending data and responses from server</td>
</tr>
</tbody>
</table>
<h4 id="responsesetup" tabindex="-1"><a class="header-anchor" href="#responsesetup" aria-hidden="true">#</a> responseSetup</h4>
<p>Example:
if response from server when retrieve data with GET is:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token punctuation">{</span>
    message<span class="token operator">:</span> <span class="token string">"this is a response from server"</span>
    comment<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">1</span>   
        text<span class="token operator">:</span> <span class="token string">"this is a new comment"</span>
        userId<span class="token operator">:</span> <span class="token number">10</span>
        userName<span class="token operator">:</span> <span class="token string">"myUserName"</span>
        profilePicture<span class="token operator">:</span> <span class="token string">"https://example.com/image.jpg"</span> 
        ...
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>set apiConfig:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      apiConfig<span class="token punctuation">{</span>
        <span class="token literal-property property">useApi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reponseSetup</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">onGet</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token punctuation">{</span>
    message<span class="token operator">:</span> <span class="token string">"this is a response from server"</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      comments<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token number">1</span>   
          text<span class="token operator">:</span> <span class="token string">"this is a new comment"</span>
          userId<span class="token operator">:</span> <span class="token number">10</span>
          userName<span class="token operator">:</span> <span class="token string">"myUserName"</span>
          profilePicture<span class="token operator">:</span> <span class="token string">"https://example.com/image.jpg"</span> 
          ...
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>set apiConfig:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      apiConfig<span class="token punctuation">{</span>
        <span class="token literal-property property">useApi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reponseSetup</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">onGet</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">,</span><span class="token string">"comment"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To send the data to the server is the same way</p>
<h3 id="textconfig" tabindex="-1"><a class="header-anchor" href="#textconfig" aria-hidden="true">#</a> :textConfig</h3>
<p>This changes the words displayed in the component</p>
<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Default</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>reply</td>
<td>String</td>
<td>Reply</td>
</tr>
<tr>
<td>commentCount</td>
<td>String</td>
<td>COMMENT</td>
</tr>
<tr>
<td>commentCountMany</td>
<td>String</td>
<td>COMMENTS</td>
</tr>
<tr>
<td>newComment</td>
<td>String</td>
<td>NEW COMMENT</td>
</tr>
<tr>
<td>createButtonText</td>
<td>String</td>
<td>Comment</td>
</tr>
<tr>
<td>updateButtonText</td>
<td>String</td>
<td>Update</td>
</tr>
<tr>
<td>responseButtonText</td>
<td>String</td>
<td>Reply</td>
</tr>
<tr>
<td>CancelButtonText</td>
<td>String</td>
<td>Cancel</td>
</tr>
<tr>
<td>update</td>
<td>String</td>
<td>Update</td>
</tr>
<tr>
<td>delete</td>
<td>String</td>
<td>Delete</td>
</tr>
<tr>
<td>updatingText</td>
<td>String</td>
<td>UPDATING</td>
</tr>
<tr>
<td>respondingText</td>
<td>String</td>
<td>RESPONDING:</td>
</tr>
<tr>
<td>createButtonText</td>
<td>String</td>
<td>COMMENT</td>
</tr>
</tbody>
</table>
<h2 id="upcoming-features" tabindex="-1"><a class="header-anchor" href="#upcoming-features" aria-hidden="true">#</a> upcoming features</h2>
<ul>
<li>Use component without requiring API feature</li>
</ul>
<!-- ::: tip Notice!!
These features are already in development!! :sunglasses::sunglasses:
::: --></div></template>


