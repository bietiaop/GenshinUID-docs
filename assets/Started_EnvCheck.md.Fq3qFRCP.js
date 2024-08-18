import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.B2ROFaZv.js";import{_ as p}from"./chunks/Badge.Gth0UqrR.js";import{_ as t,c as r,j as n,a as s,I as a,a4 as h,o as c}from"./chunks/framework.AIsPoTDm.js";import"./chunks/theme.BQQaTOTO.js";const x=JSON.parse('{"title":"确认环境有无缺失","description":"","frontmatter":{},"headers":[],"relativePath":"Started/EnvCheck.md","filePath":"Started/EnvCheck.md","lastUpdated":1723983137000}'),d={name:"Started/EnvCheck.md"},o={id:"确认环境有无缺失",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#确认环境有无缺失","aria-label":'Permalink to "确认环境有无缺失<Badge type="tip" text="简单" />"'},"​",-1),g=h(`<ul><li>确保安装<code>Python</code>环境（版本须<code>&gt;=3.7</code>， 建议<code>&gt;=3.10</code>，不建议<code>&gt;=3.12</code>）</li><li>部分插件不支持3.10以下的python版本（例如<code>StarrailUID</code>），<code>GenshinUID</code>支持3.7版本</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令行内输入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下为回复示例、无需输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回复类似Python 3.10.10的信息，即为已经安装python环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3.x.x</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>确保安装<code>git</code>环境</li></ul><div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p>如果你没有安装<code>git</code>且的系统是<code>ubuntu</code>，安装<code>git</code>只需要输入<code>sudo apt-get install git</code></p></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令行内输入(注意v为小写)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下为回复示例、无需输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回复类似git version 2.38.1.windows.1的信息，即为已经安装Git环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>确保安装<code>poetry</code>(版本须<code>&gt;=1.4.0</code>)<strong>或者</strong><code>pdm</code>（建议使用<code>pdm</code>） <ul><li><code>poetry</code>和<code>pdm</code>二选一即可</li></ul></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># PDM</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令行内输入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pdm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下为回复示例、无需输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回复类似PDM (PDM, version 2.10.4)的信息，即为已经安装PDM环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PDM,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x.x.x</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Poetry</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令行内输入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">poetry</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下为回复示例、无需输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回复类似Poetry (version 1.4.1)的信息，即为已经安装Poetry环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Poetry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (version </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">x.x.x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p>如果你没有安装<code>poetry</code>，只需要输入<code>pip install poetry</code>即可安装</p></div>`,9);function b(u,m,y,v,F,_){const i=p,e=l;return c(),r("div",null,[n("h1",o,[s("确认环境有无缺失"),a(i,{type:"tip",text:"简单"}),s(),k]),a(e,{readTime:"1",words:"311"}),g])}const B=t(d,[["render",b]]);export{x as __pageData,B as default};
