if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>n(e,a),u={module:{uri:a},exports:o,require:r};s[a]=Promise.all(l.map((e=>u[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-00b24671"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Advance_BaseInfo.md.5db303a8.js",revision:null},{url:"assets/Advance_BaseInfo.md.5db303a8.lean.js",revision:null},{url:"assets/Advance_BindDevice.md.b9bc9bde.js",revision:null},{url:"assets/Advance_BindDevice.md.b9bc9bde.lean.js",revision:null},{url:"assets/Advance_CoreConfig.md.28963328.js",revision:null},{url:"assets/Advance_CoreConfig.md.28963328.lean.js",revision:null},{url:"assets/Advance_DataStruct.md.dadc4b05.js",revision:null},{url:"assets/Advance_DataStruct.md.dadc4b05.lean.js",revision:null},{url:"assets/Advance_ExportAndImport.md.2b0e5241.js",revision:null},{url:"assets/Advance_ExportAndImport.md.2b0e5241.lean.js",revision:null},{url:"assets/Advance_HTTPCall.md.3e17b22e.js",revision:null},{url:"assets/Advance_HTTPCall.md.3e17b22e.lean.js",revision:null},{url:"assets/Advance_MarkdownTemplate.md.1f672a87.js",revision:null},{url:"assets/Advance_MarkdownTemplate.md.1f672a87.lean.js",revision:null},{url:"assets/Advance_TransURL.md.59f2dbbe.js",revision:null},{url:"assets/Advance_TransURL.md.59f2dbbe.lean.js",revision:null},{url:"assets/Advance_WebConsole.md.b54743e5.js",revision:null},{url:"assets/Advance_WebConsole.md.b54743e5.lean.js",revision:null},{url:"assets/app.8b0a4448.js",revision:null},{url:"assets/chunks/Badge.167f4610.js",revision:null},{url:"assets/chunks/ChatMessage.vue_vue_type_style_index_0_lang.3277c88f.js",revision:null},{url:"assets/chunks/commonjsHelpers.725317a4.js",revision:null},{url:"assets/chunks/framework.d8868ba7.js",revision:null},{url:"assets/chunks/PageInfo.vue_vue_type_script_setup_true_lang.576d70b4.js",revision:null},{url:"assets/chunks/pwa.5861a2ca.js",revision:null},{url:"assets/chunks/theme.647dcd73.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/CodeAdapter_Pack.md.6f60bd06.js",revision:null},{url:"assets/CodeAdapter_Pack.md.6f60bd06.lean.js",revision:null},{url:"assets/CodeAdapter_Protocol.md.88dde35a.js",revision:null},{url:"assets/CodeAdapter_Protocol.md.88dde35a.lean.js",revision:null},{url:"assets/CodePlugins_BotCall.md.6f85285f.js",revision:null},{url:"assets/CodePlugins_BotCall.md.6f85285f.lean.js",revision:null},{url:"assets/CodePlugins_Class.md.718d91d2.js",revision:null},{url:"assets/CodePlugins_Class.md.718d91d2.lean.js",revision:null},{url:"assets/CodePlugins_CookBook.md.f1124810.js",revision:null},{url:"assets/CodePlugins_CookBook.md.f1124810.lean.js",revision:null},{url:"assets/CodePlugins_Env.md.3f8573fd.js",revision:null},{url:"assets/CodePlugins_Env.md.3f8573fd.lean.js",revision:null},{url:"assets/CodePlugins_Exsample.md.1d762699.js",revision:null},{url:"assets/CodePlugins_Exsample.md.1d762699.lean.js",revision:null},{url:"assets/CodePlugins_GetDataPath.md.58800e55.js",revision:null},{url:"assets/CodePlugins_GetDataPath.md.58800e55.lean.js",revision:null},{url:"assets/CodePlugins_GetPluginsConfig.md.51f737f2.js",revision:null},{url:"assets/CodePlugins_GetPluginsConfig.md.51f737f2.lean.js",revision:null},{url:"assets/CodePlugins_PluginsConfig.md.c759b9b3.js",revision:null},{url:"assets/CodePlugins_PluginsConfig.md.c759b9b3.lean.js",revision:null},{url:"assets/CodePlugins_PluginsDataBase.md.9ddba050.js",revision:null},{url:"assets/CodePlugins_PluginsDataBase.md.9ddba050.lean.js",revision:null},{url:"assets/CodePlugins_Resp.md.5481db9f.js",revision:null},{url:"assets/CodePlugins_Resp.md.5481db9f.lean.js",revision:null},{url:"assets/CodePlugins_Scheduler.md.ac096104.js",revision:null},{url:"assets/CodePlugins_Scheduler.md.ac096104.lean.js",revision:null},{url:"assets/CodePlugins_Simple.md.6783fdc3.js",revision:null},{url:"assets/CodePlugins_Simple.md.6783fdc3.lean.js",revision:null},{url:"assets/CodePlugins_Start.md.f79f015e.js",revision:null},{url:"assets/CodePlugins_Start.md.f79f015e.lean.js",revision:null},{url:"assets/CodePlugins_trigger.md.ddfc6ae8.js",revision:null},{url:"assets/CodePlugins_trigger.md.ddfc6ae8.lean.js",revision:null},{url:"assets/Extra_AddCK.md.20332fc6.js",revision:null},{url:"assets/Extra_AddCK.md.20332fc6.lean.js",revision:null},{url:"assets/Extra_FAQ.md.5535b0aa.js",revision:null},{url:"assets/Extra_FAQ.md.5535b0aa.lean.js",revision:null},{url:"assets/Extra_ResourceDownload.md.20773feb.js",revision:null},{url:"assets/Extra_ResourceDownload.md.20773feb.lean.js",revision:null},{url:"assets/FAQ_index.md.7b357021.js",revision:null},{url:"assets/FAQ_index.md.7b357021.lean.js",revision:null},{url:"assets/grid.e967678d.svg",revision:null},{url:"assets/image-20231217045602155.04eb49c7.png",revision:null},{url:"assets/image-20231217045637291.c9624c71.png",revision:null},{url:"assets/image-20231217045705481.997fce43.png",revision:null},{url:"assets/image-20240601033727344.526980b7.png",revision:null},{url:"assets/image-20240601194410390.17eeb089.png",revision:null},{url:"assets/image-20240601220233918.a32e4009.png",revision:null},{url:"assets/image-20240601220452874.0d3408bf.png",revision:null},{url:"assets/image-20240609005228562.1d47dd70.png",revision:null},{url:"assets/image-20240609010120469.b650521c.png",revision:null},{url:"assets/image-20240609010309426.3cd58788.png",revision:null},{url:"assets/image-20240609020855870.630223d1.png",revision:null},{url:"assets/image-20240609021121756.653b2747.png",revision:null},{url:"assets/image-20240609022134459.408e5b93.png",revision:null},{url:"assets/image-20240609024957506.3ab8f339.png",revision:null},{url:"assets/image-20240609025018824.56106b88.png",revision:null},{url:"assets/image-20240609030325816.9c63eca0.png",revision:null},{url:"assets/image-20240609030435574.479a111f.png",revision:null},{url:"assets/image-20240609030539347.21aa0268.png",revision:null},{url:"assets/image-20240609030612851.185422c3.png",revision:null},{url:"assets/image-20240609030709698.2bce641e.png",revision:null},{url:"assets/index.md.a503a554.js",revision:null},{url:"assets/index.md.a503a554.lean.js",revision:null},{url:"assets/InstallPlugins_InstallPlugins.md.2a785b4f.js",revision:null},{url:"assets/InstallPlugins_InstallPlugins.md.2a785b4f.lean.js",revision:null},{url:"assets/InstallPlugins_PluginsList.md.bf0609c9.js",revision:null},{url:"assets/InstallPlugins_PluginsList.md.bf0609c9.lean.js",revision:null},{url:"assets/LinkBots_AdapterList.md.f02d872f.js",revision:null},{url:"assets/LinkBots_AdapterList.md.f02d872f.lean.js",revision:null},{url:"assets/LinkBots_HoshinoBot.md.7d50d417.js",revision:null},{url:"assets/LinkBots_HoshinoBot.md.7d50d417.lean.js",revision:null},{url:"assets/LinkBots_NoneBot2.md.7e0bc015.js",revision:null},{url:"assets/LinkBots_NoneBot2.md.7e0bc015.lean.js",revision:null},{url:"assets/PluginsHelp_ArknightsUID.md.14260cb1.js",revision:null},{url:"assets/PluginsHelp_ArknightsUID.md.14260cb1.lean.js",revision:null},{url:"assets/PluginsHelp_BlueArchiveUID.md.3719bce0.js",revision:null},{url:"assets/PluginsHelp_BlueArchiveUID.md.3719bce0.lean.js",revision:null},{url:"assets/PluginsHelp_GenshinUID.md.1e742c90.js",revision:null},{url:"assets/PluginsHelp_GenshinUID.md.1e742c90.lean.js",revision:null},{url:"assets/PluginsHelp_LOLegendsUID.md.5e868bae.js",revision:null},{url:"assets/PluginsHelp_LOLegendsUID.md.5e868bae.lean.js",revision:null},{url:"assets/PluginsHelp_MajsoulUID.md.6e0e5693.js",revision:null},{url:"assets/PluginsHelp_MajsoulUID.md.6e0e5693.lean.js",revision:null},{url:"assets/PluginsHelp_StarRailUID.md.6bc447cd.js",revision:null},{url:"assets/PluginsHelp_StarRailUID.md.6bc447cd.lean.js",revision:null},{url:"assets/PluginsHelp_WzryUID.md.d6278613.js",revision:null},{url:"assets/PluginsHelp_WzryUID.md.d6278613.lean.js",revision:null},{url:"assets/PluginsHelp_ZZZeroUID.md.db6c44bc.js",revision:null},{url:"assets/PluginsHelp_ZZZeroUID.md.db6c44bc.lean.js",revision:null},{url:"assets/Started_CoreConfig.md.f941c0fb.js",revision:null},{url:"assets/Started_CoreConfig.md.f941c0fb.lean.js",revision:null},{url:"assets/Started_EnvCheck.md.178b4bd0.js",revision:null},{url:"assets/Started_EnvCheck.md.178b4bd0.lean.js",revision:null},{url:"assets/Started_InstallCore.md.521f7f9e.js",revision:null},{url:"assets/Started_InstallCore.md.521f7f9e.lean.js",revision:null},{url:"assets/Started_StartCore.md.1860eecd.js",revision:null},{url:"assets/Started_StartCore.md.1860eecd.lean.js",revision:null},{url:"assets/style.5b8f1877.css",revision:null},{url:"bg.png",revision:"1f5fb5807765dae8cfc18e661bf19576"},{url:"CookBook/image-20240601033727344.png",revision:"3c0db4d606c35915bb0862a95f4c7ce0"},{url:"CookBook/image-20240601194410390.png",revision:"e48ad0d2b48bbbd447371793b2324e68"},{url:"CookBook/image-20240601220228908.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220230569.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220233918.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220452874.png",revision:"12cdcaded0c647be22a5cfd2d941a534"},{url:"CookBook/image-20240601225427010.png",revision:"5402e80f72e502a347314ab08fd97870"},{url:"CookBook/image-20240609005228562.png",revision:"bfb6f41cc41b9c2d5bbc80dccc2c5bca"},{url:"CookBook/image-20240609010120469.png",revision:"9744780968d7e9627ad0d3f810bb2a6b"},{url:"CookBook/image-20240609010309426.png",revision:"8aad758b0f5fb99e39551271c8ffb01d"},{url:"CookBook/image-20240609020855870.png",revision:"81821f590bdda387d5a82cdcd6a6c5c1"},{url:"CookBook/image-20240609021121756.png",revision:"429b2ee2aaee8228b8c82e08818128b8"},{url:"CookBook/image-20240609022134459.png",revision:"879e30ddb3bc29ecbd2a3da3a84762d3"},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"font/FiraCode-SemiBold.woff2",revision:"11804d503fc920a3da15c9869175d7db"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"MarkdownTemplate/image-20231217045602155.png",revision:"6563177853c9f41fc7d510ddca4ce02b"},{url:"MarkdownTemplate/image-20231217045637291.png",revision:"891a8ae28637f52cc26bdb1438aecc16"},{url:"MarkdownTemplate/image-20231217045705481.png",revision:"ff7b494d15e41cda770b62617a2b0bc1"},{url:"WebConsole/image-20240609024957506.png",revision:"a64deda2ec5731aa9693ac7c700fca05"},{url:"WebConsole/image-20240609025018824.png",revision:"7f7e77de31243d125dbcbb0de5d99960"},{url:"WebConsole/image-20240609030325816.png",revision:"fad9b7885b29810377f5b43cb0879340"},{url:"WebConsole/image-20240609030435574.png",revision:"ca454f504ab39753f5299f18525ab7bf"},{url:"WebConsole/image-20240609030539347.png",revision:"20c83f9c2ca12b814882a9a03a6e718b"},{url:"WebConsole/image-20240609030612851.png",revision:"98c5228e57d856335fbe60ce8372e880"},{url:"WebConsole/image-20240609030709698.png",revision:"40522194da00674f7a64fc0c142b64f3"},{url:"bg.png",revision:"1f5fb5807765dae8cfc18e661bf19576"},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"CookBook/image-20240601033727344.png",revision:"3c0db4d606c35915bb0862a95f4c7ce0"},{url:"CookBook/image-20240601194410390.png",revision:"e48ad0d2b48bbbd447371793b2324e68"},{url:"CookBook/image-20240601220228908.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220230569.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220233918.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220452874.png",revision:"12cdcaded0c647be22a5cfd2d941a534"},{url:"CookBook/image-20240601225427010.png",revision:"5402e80f72e502a347314ab08fd97870"},{url:"CookBook/image-20240609005228562.png",revision:"bfb6f41cc41b9c2d5bbc80dccc2c5bca"},{url:"CookBook/image-20240609010120469.png",revision:"9744780968d7e9627ad0d3f810bb2a6b"},{url:"CookBook/image-20240609010309426.png",revision:"8aad758b0f5fb99e39551271c8ffb01d"},{url:"CookBook/image-20240609020855870.png",revision:"81821f590bdda387d5a82cdcd6a6c5c1"},{url:"CookBook/image-20240609021121756.png",revision:"429b2ee2aaee8228b8c82e08818128b8"},{url:"CookBook/image-20240609022134459.png",revision:"879e30ddb3bc29ecbd2a3da3a84762d3"},{url:"MarkdownTemplate/image-20231217045602155.png",revision:"6563177853c9f41fc7d510ddca4ce02b"},{url:"MarkdownTemplate/image-20231217045637291.png",revision:"891a8ae28637f52cc26bdb1438aecc16"},{url:"MarkdownTemplate/image-20231217045705481.png",revision:"ff7b494d15e41cda770b62617a2b0bc1"},{url:"WebConsole/image-20240609024957506.png",revision:"a64deda2ec5731aa9693ac7c700fca05"},{url:"WebConsole/image-20240609025018824.png",revision:"7f7e77de31243d125dbcbb0de5d99960"},{url:"WebConsole/image-20240609030325816.png",revision:"fad9b7885b29810377f5b43cb0879340"},{url:"WebConsole/image-20240609030435574.png",revision:"ca454f504ab39753f5299f18525ab7bf"},{url:"WebConsole/image-20240609030539347.png",revision:"20c83f9c2ca12b814882a9a03a6e718b"},{url:"WebConsole/image-20240609030612851.png",revision:"98c5228e57d856335fbe60ce8372e880"},{url:"WebConsole/image-20240609030709698.png",revision:"40522194da00674f7a64fc0c142b64f3"},{url:"manifest.webmanifest",revision:"42cc81492e00ec87f91282ffdad4fc8c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new e.CacheFirst({cacheName:"google-font-style-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cdn-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(((raw|user-images|camo).githubusercontent.com))\/.*/i,new e.CacheFirst({cacheName:"githubusercontent-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
