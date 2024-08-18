import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.B2ROFaZv.js";import{_ as p}from"./chunks/Badge.Gth0UqrR.js";import{_ as l,c as r,j as a,a as s,I as i,a4 as h,o as k}from"./chunks/framework.AIsPoTDm.js";import"./chunks/theme.BQQaTOTO.js";const A=JSON.parse('{"title":"调用插件配置项","description":"","frontmatter":{},"headers":[],"relativePath":"CodePlugins/GetPluginsConfig.md","filePath":"CodePlugins/GetPluginsConfig.md","lastUpdated":1723983137000}'),o={name:"CodePlugins/GetPluginsConfig.md"},d={id:"调用插件配置项",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#调用插件配置项","aria-label":'Permalink to "调用插件配置项<Badge type="tip" text="简单" />"'},"​",-1),g=h(`<p>在上一节配置完<a href="./PluginsConfig.html">插件配置项</a>之后，代码中可以调用、读取插件配置项。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .srconfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> srconfig</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取配置项的数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SignTime: List[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> srconfig.get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SignTime&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SignReportSimple: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> srconfig.get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SignReportSimple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取配置项的标题和详情(内容由之前定义的代码决定)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">srconfig.get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SignReportSimple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).title</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">srconfig.get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SignReportSimple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).desc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2);function E(_,m,u,y,f,b){const n=p,e=t;return k(),r("div",null,[a("h1",d,[s("调用插件配置项"),i(n,{type:"tip",text:"简单"}),s(),c]),i(e,{readTime:"1",words:"96"}),g])}const B=l(o,[["render",E]]);export{A as __pageData,B as default};
