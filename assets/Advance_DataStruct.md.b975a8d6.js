import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.576d70b4.js";import{_ as c}from"./chunks/Badge.167f4610.js";import{_ as p,o as l,c as r,k as a,a as s,H as e,Q as i}from"./chunks/framework.d8868ba7.js";import"./chunks/commonjsHelpers.725317a4.js";const k=JSON.parse('{"title":"数据存储结构","description":"","frontmatter":{},"headers":[],"relativePath":"Advance/DataStruct.md","filePath":"Advance/DataStruct.md","lastUpdated":1702760448000}'),d={name:"Advance/DataStruct.md"},_={id:"数据存储结构",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#数据存储结构","aria-label":'Permalink to "数据存储结构<Badge type="tip" text="简单" />"'},"​",-1),u=i(`<h2 id="gsuid-core的数据存储" tabindex="-1"><code>gsuid_core</code>的数据存储 <a class="header-anchor" href="#gsuid-core的数据存储" aria-label="Permalink to &quot;\`gsuid_core\`的数据存储&quot;">​</a></h2><ul><li><p>目录<code>gsuid_core/GsData.db</code>下保存着<code>GenshinUID</code>绑定的所有CK和UID数据</p></li><li><p>目录<code>gsuid_core/data</code>下保存着全部的插件数据</p></li><li><p>目录<code>gsuid_core/data/GenshinUID</code>下保存着<code>GenshinUID</code>的数据</p></li><li><p>其中<code>config.json</code>内可以调整功能开关，也可以在<code>网页控制台</code>中进行调整</p></li><li><p>其中<code>GsData_BAK_20xx_xx_xxx.db</code>为<code>GenshinUID</code>绑定的CK和UID数据的<strong>备份文件</strong></p></li><li><p>其中<code>players</code>文件夹内保存着<code>GenshinUID</code>所有用户的<strong>面板文件</strong>和<strong>抽卡记录</strong>等</p></li><li><p>其中<code>bg</code>文件夹内<strong>可以</strong>存放部分功能的自定义背景图，重启Bot后随机调用，格式任意</p></li><li><p>其中<code>chbg</code>文件夹内可存放<strong>面板查询</strong>的自定义角色图</p><ul><li>例如创建<code>chbg/达达利亚</code>文件夹，并在文件夹下放置达达利亚的图，<code>gs开启随机图</code>就将调用该目录角色图</li></ul></li><li><p>其中<code>resource</code>内存储着官方的图像资源、便于插件绘制图片(如缺失可用<code>下载全部资源</code>命令重新下载)</p></li><li><p>其中<code>wiki/guide</code>下存储着角色攻略图</p></li><li><p>其中<code>wiki/ref</code>下存储着角色参考面板图</p></li><li><p>其中<code>wiki/artifacts</code>下存储着绘制的圣遗物图片版资料</p></li></ul><h2 id="插件调用该目录" tabindex="-1">插件调用该目录 <a class="header-anchor" href="#插件调用该目录" aria-label="Permalink to &quot;插件调用该目录&quot;">​</a></h2><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> gsuid_core.data_store </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_res_path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 以GenshinUID为例</span></span>
<span class="line"><span style="color:#6A737D;"># path目录为gsuid_core/data/GenshinUID</span></span>
<span class="line"><span style="color:#E1E4E8;">path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_res_path() </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GenshinUID&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> gsuid_core.data_store </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_res_path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 以GenshinUID为例</span></span>
<span class="line"><span style="color:#6A737D;"># path目录为gsuid_core/data/GenshinUID</span></span>
<span class="line"><span style="color:#24292E;">path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_res_path() </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GenshinUID&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,4);function g(m,y,D,b,E,f){const n=c,o=t;return l(),r("div",null,[a("h1",_,[s("数据存储结构"),e(n,{type:"tip",text:"简单"}),s(),h]),e(o,{readTime:"1",words:"344"}),u])}const v=p(d,[["render",g]]);export{k as __pageData,v as default};
