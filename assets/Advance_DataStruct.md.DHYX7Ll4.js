import{_ as n}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.B2ROFaZv.js";import{_ as o}from"./chunks/Badge.Gth0UqrR.js";import{_ as d,c,j as a,a as e,I as s,a4 as r,o as l}from"./chunks/framework.AIsPoTDm.js";import"./chunks/theme.BQQaTOTO.js";const v=JSON.parse('{"title":"数据存储结构","description":"","frontmatter":{},"headers":[],"relativePath":"Advance/DataStruct.md","filePath":"Advance/DataStruct.md","lastUpdated":1723983137000}'),p={name:"Advance/DataStruct.md"},h={id:"数据存储结构",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#数据存储结构","aria-label":'Permalink to "数据存储结构<Badge type="tip" text="简单" />"'},"​",-1),g=r(`<h2 id="gsuid-core的数据存储" tabindex="-1"><code>gsuid_core</code>的数据存储 <a class="header-anchor" href="#gsuid-core的数据存储" aria-label="Permalink to &quot;\`gsuid_core\`的数据存储&quot;">​</a></h2><ul><li>目录<code>gsuid_core/data</code>下保存着全部的插件数据 <ul><li><p>目录<code>gsuid_core/data/GsData.db</code>下保存着<code>GsCore</code><strong>大部分插件</strong>绑定的所有CK和UID数据</p></li><li><p>目录<code>gsuid_core/data/GenshinUID</code>下保存着<code>GenshinUID</code>的数据（不同的插件对应不同文件夹名称，目前以GenshinUID为示例讲解）</p><ul><li>其中<code>players</code>文件夹内保存着<code>GenshinUID</code>所有用户的<strong>面板文件</strong>和<strong>抽卡记录</strong>等</li><li>其中<code>bg</code>文件夹内<strong>可以</strong>存放部分功能的自定义背景图，重启Bot后随机调用，格式任意</li><li>其中<code>chbg</code>文件夹内可存放<strong>面板查询</strong>的自定义角色图 <ul><li>例如创建<code>chbg/达达利亚</code>文件夹，并在文件夹下放置达达利亚的图，<code>gs开启随机图</code>就将调用该目录角色图</li></ul></li><li>其中<code>resource</code>内存储着官方的图像资源、便于插件绘制图片(如缺失可用<code>下载全部资源</code>命令重新下载)</li><li>其中<code>wiki/guide</code>下存储着角色攻略图</li><li>其中<code>wiki/ref</code>下存储着角色参考面板图</li><li>其中<code>wiki/artifacts</code>下存储着绘制的圣遗物图片版资料</li></ul></li><li><p>其中<code>gsuid_core/data/GsCore/database_backup/GsData_BAK_20xx_xx_xxx.db</code>为<code>GsCore</code>数据库的<strong>备份文件</strong></p></li></ul></li></ul><h2 id="插件调用该目录" tabindex="-1">插件调用该目录 <a class="header-anchor" href="#插件调用该目录" aria-label="Permalink to &quot;插件调用该目录&quot;">​</a></h2><p>可参考<a href="./../CodePlugins/GetDataPath.html">插件编写章节</a></p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.data_store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_res_path</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以GenshinUID为例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># path目录为gsuid_core/data/GenshinUID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_res_path() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;GenshinUID&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5);function u(k,m,b,D,f,E){const i=o,t=n;return l(),c("div",null,[a("h1",h,[e("数据存储结构"),s(i,{type:"tip",text:"简单"}),e(),_]),s(t,{readTime:"1",words:"358"}),g])}const I=d(p,[["render",u]]);export{v as __pageData,I as default};
