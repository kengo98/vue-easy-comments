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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>The following parameters are required,
otherwise you will get an error <br>
- pluginConfig <br>
- apiConfig</p>
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
<td>idAttrName</td>
<td>String</td>
<td>id field name</td>
</tr>
<tr>
<td>textAttrName</td>
<td>String</td>
<td>text field name</td>
</tr>
<tr>
<td>userIdAttrName</td>
<td>String</td>
<td>user id field name</td>
</tr>
<tr>
<td>userNameAttrName</td>
<td>String</td>
<td>user name field name</td>
</tr>
<tr>
<td>userImgAttrName</td>
<td>String</td>
<td>user image field name</td>
</tr>
<tr>
<td>commentDateAttrName</td>
<td>String</td>
<td>comment created date field name</td>
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
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>required to be <label style="color:lightseagreen">true</label>, false for upcoming features</p>
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
<td>String,</td>
<td>API baseURL example: &quot;https://my-web/api/v1&quot;</td>
</tr>
<tr>
<td>endpoint</td>
<td>String,</td>
<td>API endpoint example: &quot;/comments&quot;</td>
</tr>
<tr>
<td>headers</td>
<td>String,</td>
<td>required headers</td>
</tr>
</tbody>
</table>
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
<td>buttonText</td>
<td>String</td>
<td>COMMENT</td>
</tr>
</tbody>
</table>
<h2 id="upcoming-features" tabindex="-1"><a class="header-anchor" href="#upcoming-features" aria-hidden="true">#</a> upcoming features</h2>
<ul>
<li>Reply messages</li>
<li>Use component without requiring API feature</li>
<li>Custom method when 'comment button' is clicked</li>
<li>Change component colors</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Notice!!</p>
<p>These features are already in development!! 😎😎</p>
</div>
</div></template>


