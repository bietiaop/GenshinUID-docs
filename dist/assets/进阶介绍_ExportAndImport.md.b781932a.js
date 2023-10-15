import{_ as c}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.13c3af49.js";import{_ as s}from"./chunks/Badge.f3e0fe65.js";import{_ as i,o as a,c as r,k as t,a as e,H as o,Q as p}from"./chunks/framework.4d23d1ec.js";import"./chunks/commonjsHelpers.725317a4.js";const k=JSON.parse('{"title":"迁移数据至v4","description":"","frontmatter":{},"headers":[],"relativePath":"进阶介绍/ExportAndImport.md","filePath":"进阶介绍/ExportAndImport.md","lastUpdated":null}'),l={name:"进阶介绍/ExportAndImport.md"},h={id:"迁移数据至v4",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#迁移数据至v4","aria-label":'Permalink to "迁移数据至v4<Badge type="tip" text="简单" />"'},"​",-1),m=p('<h3 id="导出genshinuid-v3数据" tabindex="-1">导出<code>GenshinUID v3</code>数据 <a class="header-anchor" href="#导出genshinuid-v3数据" aria-label="Permalink to &quot;导出`GenshinUID v3`数据&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p>无论是NoneBot2 &amp; HoshinoBot，在导出数据时，<strong>务必是最新版本</strong><code>GenshinUID v3</code></p><p>并且以下命令<strong>均需</strong><code>SUPERUSER</code>权限</p></div><ul><li><p>使用<code>gs更新</code>升级到最新版本</p></li><li><p>使用命令<code>导出v3数据</code>（时间可能比较长，等待Bot回复...）</p></li><li><p>备份{Bot目录}/data/GenshinUID这个文件夹(<code>HoshinoBot</code>对应目录为res/GenshinUID)</p></li></ul><h3 id="导入genshinuid-v3数据至genshinuid-v4" tabindex="-1">导入<code>GenshinUID v3</code>数据至<code>GenshinUID v4</code> <a class="header-anchor" href="#导入genshinuid-v3数据至genshinuid-v4" aria-label="Permalink to &quot;导入`GenshinUID v3`数据至`GenshinUID v4`&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>导入数据应该在安装完成<code>gsuid_core</code>、<code>GenshinUID v4</code>之后执行</p><p>如果你还没有安装<code>gsuid_core</code> -&gt; <a href="./../快速开始/InstallCore.html">安装教程</a></p><p>如果是自动安装Core的话，<code>Core目录</code>应该和<code>Bot目录</code>同级</p></div><ul><li><p>将[导出v3数据](#导出<code>GenshinUID v3</code>数据)中第三步的文件夹，拷贝到<code>{Core目录}/data/GenshinUID</code>内</p></li><li><p><strong>删除</strong>该文件夹<code>/data/GenshinUID</code>内<code>config.json</code>文件（如有需要可以备份）</p></li><li><p>正确启动<code>gsuid_core</code>和<code>bot</code>之后，使用命令<code>导入v3数据</code></p></li></ul>',6);function u(v,g,I,f,U,D){const n=s,d=c;return a(),r("div",null,[t("h1",h,[e("迁移数据至v4"),o(n,{type:"tip",text:"简单"}),e(),_]),o(d,{readTime:"1",words:"239"}),m])}const P=i(l,[["render",u]]);export{k as __pageData,P as default};
