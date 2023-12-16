import{_ as p}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.576d70b4.js";import{_ as t}from"./chunks/Badge.167f4610.js";import{_ as c,o as r,c as i,k as s,a,H as n,Q as l}from"./chunks/framework.d8868ba7.js";import"./chunks/commonjsHelpers.725317a4.js";const I=JSON.parse('{"title":"手动安装Core","description":"","frontmatter":{},"headers":[],"relativePath":"Started/InstallCore.md","filePath":"Started/InstallCore.md","lastUpdated":1702760448000}'),d={name:"Started/InstallCore.md"},y={id:"手动安装core",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#手动安装core","aria-label":'Permalink to "手动安装Core<Badge type="danger" text="普通" />"'},"​",-1),h=l('<div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p>如需选择<code>自动安装Core</code>、可<strong>直接跳转</strong>至对应Bot的安装文档</p><p><strong>推荐使用本方法安装Core</strong></p></div><ul><li><p>在<code>Bot目录</code>的上级（例如你的bot目录为<code>./Wuyi/nb2</code>,则cd至<code>./Wuyi</code>处）</p></li><li><p>输入安装core命令</p></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/Genshin-bots/gsuid_core.git</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--depth=1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--single-branch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/Genshin-bots/gsuid_core.git</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--depth=1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--single-branch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>进入文件夹内</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gsuid_core</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gsuid_core</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>执行<code>poetry install</code>安装依赖</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7),E=l(`<div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gsuid_core</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugins</span></span>
<span class="line"><span style="color:#6A737D;"># 安装v4 GenshinUID</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/KimigaiiWuyi/GenshinUID.git</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--depth=1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--single-branch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gsuid_core</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugins</span></span>
<span class="line"><span style="color:#6A737D;"># 安装v4 GenshinUID</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/KimigaiiWuyi/GenshinUID.git</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--depth=1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--single-branch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>🎉你已经成功安装GsCore</li></ul>`,2);function g(_,b,m,C,F,v){const e=t,o=p;return r(),i("div",null,[s("h1",y,[a("手动安装Core"),n(e,{type:"danger",text:"普通"}),a(),u]),n(o,{readTime:"1",words:"150"}),h,s("ul",null,[s("li",null,[a("安装所需插件"),n(e,{type:"tip",text:"可选"})])]),E])}const S=c(d,[["render",g]]);export{I as __pageData,S as default};
