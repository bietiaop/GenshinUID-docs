if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>n(e,a),u={module:{uri:a},exports:r,require:o};s[a]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-00b24671"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Advance_BaseInfo.md.1eb893ec.js",revision:null},{url:"assets/Advance_BaseInfo.md.1eb893ec.lean.js",revision:null},{url:"assets/Advance_BindDevice.md.af92f057.js",revision:null},{url:"assets/Advance_BindDevice.md.af92f057.lean.js",revision:null},{url:"assets/Advance_CoreConfig.md.3b62bd5f.js",revision:null},{url:"assets/Advance_CoreConfig.md.3b62bd5f.lean.js",revision:null},{url:"assets/Advance_DataStruct.md.48429d65.js",revision:null},{url:"assets/Advance_DataStruct.md.48429d65.lean.js",revision:null},{url:"assets/Advance_ExportAndImport.md.ac985c83.js",revision:null},{url:"assets/Advance_ExportAndImport.md.ac985c83.lean.js",revision:null},{url:"assets/Advance_HTTPCall.md.b8e958e8.js",revision:null},{url:"assets/Advance_HTTPCall.md.b8e958e8.lean.js",revision:null},{url:"assets/Advance_MarkdownTemplate.md.d21e4e69.js",revision:null},{url:"assets/Advance_MarkdownTemplate.md.d21e4e69.lean.js",revision:null},{url:"assets/Advance_TransURL.md.59db9d25.js",revision:null},{url:"assets/Advance_TransURL.md.59db9d25.lean.js",revision:null},{url:"assets/Advance_WebConsole.md.e5006c39.js",revision:null},{url:"assets/Advance_WebConsole.md.e5006c39.lean.js",revision:null},{url:"assets/app.8b0a4448.js",revision:null},{url:"assets/chunks/Badge.167f4610.js",revision:null},{url:"assets/chunks/ChatMessage.vue_vue_type_style_index_0_lang.3277c88f.js",revision:null},{url:"assets/chunks/commonjsHelpers.725317a4.js",revision:null},{url:"assets/chunks/framework.d8868ba7.js",revision:null},{url:"assets/chunks/PageInfo.vue_vue_type_script_setup_true_lang.576d70b4.js",revision:null},{url:"assets/chunks/pwa.5861a2ca.js",revision:null},{url:"assets/chunks/theme.647dcd73.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/CodeAdapter_Pack.md.f4ac24d9.js",revision:null},{url:"assets/CodeAdapter_Pack.md.f4ac24d9.lean.js",revision:null},{url:"assets/CodeAdapter_Protocol.md.cd91541b.js",revision:null},{url:"assets/CodeAdapter_Protocol.md.cd91541b.lean.js",revision:null},{url:"assets/CodePlugins_Class.md.92fb8ff2.js",revision:null},{url:"assets/CodePlugins_Class.md.92fb8ff2.lean.js",revision:null},{url:"assets/CodePlugins_CookBook.md.fad96b0e.js",revision:null},{url:"assets/CodePlugins_CookBook.md.fad96b0e.lean.js",revision:null},{url:"assets/CodePlugins_Env.md.bd36b402.js",revision:null},{url:"assets/CodePlugins_Env.md.bd36b402.lean.js",revision:null},{url:"assets/CodePlugins_Exsample.md.e1f5cb0d.js",revision:null},{url:"assets/CodePlugins_Exsample.md.e1f5cb0d.lean.js",revision:null},{url:"assets/CodePlugins_GetDataPath.md.48b0ae43.js",revision:null},{url:"assets/CodePlugins_GetDataPath.md.48b0ae43.lean.js",revision:null},{url:"assets/CodePlugins_GetPluginsConfig.md.efc68cc2.js",revision:null},{url:"assets/CodePlugins_GetPluginsConfig.md.efc68cc2.lean.js",revision:null},{url:"assets/CodePlugins_PluginsConfig.md.0b19b0c3.js",revision:null},{url:"assets/CodePlugins_PluginsConfig.md.0b19b0c3.lean.js",revision:null},{url:"assets/CodePlugins_PluginsDataBase.md.0b7c400f.js",revision:null},{url:"assets/CodePlugins_PluginsDataBase.md.0b7c400f.lean.js",revision:null},{url:"assets/CodePlugins_Resp.md.7a6cd762.js",revision:null},{url:"assets/CodePlugins_Resp.md.7a6cd762.lean.js",revision:null},{url:"assets/CodePlugins_Scheduler.md.2a20396a.js",revision:null},{url:"assets/CodePlugins_Scheduler.md.2a20396a.lean.js",revision:null},{url:"assets/CodePlugins_Simple.md.c08a957e.js",revision:null},{url:"assets/CodePlugins_Simple.md.c08a957e.lean.js",revision:null},{url:"assets/CodePlugins_Start.md.eb7a85c4.js",revision:null},{url:"assets/CodePlugins_Start.md.eb7a85c4.lean.js",revision:null},{url:"assets/CodePlugins_trigger.md.b568e90a.js",revision:null},{url:"assets/CodePlugins_trigger.md.b568e90a.lean.js",revision:null},{url:"assets/Extra_AddCK.md.1eb90f67.js",revision:null},{url:"assets/Extra_AddCK.md.1eb90f67.lean.js",revision:null},{url:"assets/Extra_FAQ.md.d887ed02.js",revision:null},{url:"assets/Extra_FAQ.md.d887ed02.lean.js",revision:null},{url:"assets/Extra_ResourceDownload.md.8458fee7.js",revision:null},{url:"assets/Extra_ResourceDownload.md.8458fee7.lean.js",revision:null},{url:"assets/FAQ_index.md.69111555.js",revision:null},{url:"assets/FAQ_index.md.69111555.lean.js",revision:null},{url:"assets/grid.e967678d.svg",revision:null},{url:"assets/image-20231217045602155.04eb49c7.png",revision:null},{url:"assets/image-20231217045637291.c9624c71.png",revision:null},{url:"assets/image-20231217045705481.997fce43.png",revision:null},{url:"assets/image-20240601033727344.526980b7.png",revision:null},{url:"assets/image-20240601194410390.17eeb089.png",revision:null},{url:"assets/image-20240601220233918.a32e4009.png",revision:null},{url:"assets/image-20240601220452874.0d3408bf.png",revision:null},{url:"assets/image-20240609005228562.1d47dd70.png",revision:null},{url:"assets/image-20240609010120469.b650521c.png",revision:null},{url:"assets/image-20240609010309426.3cd58788.png",revision:null},{url:"assets/image-20240609020855870.630223d1.png",revision:null},{url:"assets/image-20240609021121756.653b2747.png",revision:null},{url:"assets/image-20240609022134459.408e5b93.png",revision:null},{url:"assets/image-20240609024957506.3ab8f339.png",revision:null},{url:"assets/image-20240609025018824.56106b88.png",revision:null},{url:"assets/image-20240609030325816.9c63eca0.png",revision:null},{url:"assets/image-20240609030435574.479a111f.png",revision:null},{url:"assets/image-20240609030539347.21aa0268.png",revision:null},{url:"assets/image-20240609030612851.185422c3.png",revision:null},{url:"assets/image-20240609030709698.2bce641e.png",revision:null},{url:"assets/index.md.22773169.js",revision:null},{url:"assets/index.md.22773169.lean.js",revision:null},{url:"assets/InstallPlugins_InstallPlugins.md.f81b1962.js",revision:null},{url:"assets/InstallPlugins_InstallPlugins.md.f81b1962.lean.js",revision:null},{url:"assets/InstallPlugins_PluginsList.md.5f367ff6.js",revision:null},{url:"assets/InstallPlugins_PluginsList.md.5f367ff6.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/LinkBots_AdapterList.md.d5613be9.js",revision:null},{url:"assets/LinkBots_AdapterList.md.d5613be9.lean.js",revision:null},{url:"assets/LinkBots_HoshinoBot.md.a327c8d1.js",revision:null},{url:"assets/LinkBots_HoshinoBot.md.a327c8d1.lean.js",revision:null},{url:"assets/LinkBots_NoneBot2.md.f056aa20.js",revision:null},{url:"assets/LinkBots_NoneBot2.md.f056aa20.lean.js",revision:null},{url:"assets/PluginsHelp_ArknightsUID.md.6f563f71.js",revision:null},{url:"assets/PluginsHelp_ArknightsUID.md.6f563f71.lean.js",revision:null},{url:"assets/PluginsHelp_BlueArchiveUID.md.df6fc66b.js",revision:null},{url:"assets/PluginsHelp_BlueArchiveUID.md.df6fc66b.lean.js",revision:null},{url:"assets/PluginsHelp_GenshinUID.md.ecce053e.js",revision:null},{url:"assets/PluginsHelp_GenshinUID.md.ecce053e.lean.js",revision:null},{url:"assets/PluginsHelp_LOLegendsUID.md.fb304476.js",revision:null},{url:"assets/PluginsHelp_LOLegendsUID.md.fb304476.lean.js",revision:null},{url:"assets/PluginsHelp_MajsoulUID.md.06bbcca2.js",revision:null},{url:"assets/PluginsHelp_MajsoulUID.md.06bbcca2.lean.js",revision:null},{url:"assets/PluginsHelp_StarRailUID.md.4d5c15d0.js",revision:null},{url:"assets/PluginsHelp_StarRailUID.md.4d5c15d0.lean.js",revision:null},{url:"assets/PluginsHelp_WzryUID.md.996df286.js",revision:null},{url:"assets/PluginsHelp_WzryUID.md.996df286.lean.js",revision:null},{url:"assets/Started_CoreConfig.md.ab3ae477.js",revision:null},{url:"assets/Started_CoreConfig.md.ab3ae477.lean.js",revision:null},{url:"assets/Started_EnvCheck.md.262eae29.js",revision:null},{url:"assets/Started_EnvCheck.md.262eae29.lean.js",revision:null},{url:"assets/Started_InstallCore.md.f0714752.js",revision:null},{url:"assets/Started_InstallCore.md.f0714752.lean.js",revision:null},{url:"assets/Started_StartCore.md.b3b4efd7.js",revision:null},{url:"assets/Started_StartCore.md.b3b4efd7.lean.js",revision:null},{url:"assets/style.839727e9.css",revision:null},{url:"CookBook/image-20240601033727344.png",revision:"3c0db4d606c35915bb0862a95f4c7ce0"},{url:"CookBook/image-20240601194410390.png",revision:"e48ad0d2b48bbbd447371793b2324e68"},{url:"CookBook/image-20240601220228908.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220230569.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220233918.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220452874.png",revision:"12cdcaded0c647be22a5cfd2d941a534"},{url:"CookBook/image-20240601225427010.png",revision:"5402e80f72e502a347314ab08fd97870"},{url:"CookBook/image-20240609005228562.png",revision:"bfb6f41cc41b9c2d5bbc80dccc2c5bca"},{url:"CookBook/image-20240609010120469.png",revision:"9744780968d7e9627ad0d3f810bb2a6b"},{url:"CookBook/image-20240609010309426.png",revision:"8aad758b0f5fb99e39551271c8ffb01d"},{url:"CookBook/image-20240609020855870.png",revision:"81821f590bdda387d5a82cdcd6a6c5c1"},{url:"CookBook/image-20240609021121756.png",revision:"429b2ee2aaee8228b8c82e08818128b8"},{url:"CookBook/image-20240609022134459.png",revision:"879e30ddb3bc29ecbd2a3da3a84762d3"},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"MarkdownTemplate/image-20231217045602155.png",revision:"6563177853c9f41fc7d510ddca4ce02b"},{url:"MarkdownTemplate/image-20231217045637291.png",revision:"891a8ae28637f52cc26bdb1438aecc16"},{url:"MarkdownTemplate/image-20231217045705481.png",revision:"ff7b494d15e41cda770b62617a2b0bc1"},{url:"WebConsole/image-20240609024957506.png",revision:"a64deda2ec5731aa9693ac7c700fca05"},{url:"WebConsole/image-20240609025018824.png",revision:"7f7e77de31243d125dbcbb0de5d99960"},{url:"WebConsole/image-20240609030325816.png",revision:"fad9b7885b29810377f5b43cb0879340"},{url:"WebConsole/image-20240609030435574.png",revision:"ca454f504ab39753f5299f18525ab7bf"},{url:"WebConsole/image-20240609030539347.png",revision:"20c83f9c2ca12b814882a9a03a6e718b"},{url:"WebConsole/image-20240609030612851.png",revision:"98c5228e57d856335fbe60ce8372e880"},{url:"WebConsole/image-20240609030709698.png",revision:"40522194da00674f7a64fc0c142b64f3"},{url:"favicon.ico",revision:"a701077f3e3dd28b8efb0d249c8e8579"},{url:"icon.png",revision:"b6aec0ec4418eb4114d9e6d35831dbed"},{url:"CookBook/image-20240601033727344.png",revision:"3c0db4d606c35915bb0862a95f4c7ce0"},{url:"CookBook/image-20240601194410390.png",revision:"e48ad0d2b48bbbd447371793b2324e68"},{url:"CookBook/image-20240601220228908.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220230569.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220233918.png",revision:"9192b69a768c17b3222cfe9140a2d537"},{url:"CookBook/image-20240601220452874.png",revision:"12cdcaded0c647be22a5cfd2d941a534"},{url:"CookBook/image-20240601225427010.png",revision:"5402e80f72e502a347314ab08fd97870"},{url:"CookBook/image-20240609005228562.png",revision:"bfb6f41cc41b9c2d5bbc80dccc2c5bca"},{url:"CookBook/image-20240609010120469.png",revision:"9744780968d7e9627ad0d3f810bb2a6b"},{url:"CookBook/image-20240609010309426.png",revision:"8aad758b0f5fb99e39551271c8ffb01d"},{url:"CookBook/image-20240609020855870.png",revision:"81821f590bdda387d5a82cdcd6a6c5c1"},{url:"CookBook/image-20240609021121756.png",revision:"429b2ee2aaee8228b8c82e08818128b8"},{url:"CookBook/image-20240609022134459.png",revision:"879e30ddb3bc29ecbd2a3da3a84762d3"},{url:"MarkdownTemplate/image-20231217045602155.png",revision:"6563177853c9f41fc7d510ddca4ce02b"},{url:"MarkdownTemplate/image-20231217045637291.png",revision:"891a8ae28637f52cc26bdb1438aecc16"},{url:"MarkdownTemplate/image-20231217045705481.png",revision:"ff7b494d15e41cda770b62617a2b0bc1"},{url:"WebConsole/image-20240609024957506.png",revision:"a64deda2ec5731aa9693ac7c700fca05"},{url:"WebConsole/image-20240609025018824.png",revision:"7f7e77de31243d125dbcbb0de5d99960"},{url:"WebConsole/image-20240609030325816.png",revision:"fad9b7885b29810377f5b43cb0879340"},{url:"WebConsole/image-20240609030435574.png",revision:"ca454f504ab39753f5299f18525ab7bf"},{url:"WebConsole/image-20240609030539347.png",revision:"20c83f9c2ca12b814882a9a03a6e718b"},{url:"WebConsole/image-20240609030612851.png",revision:"98c5228e57d856335fbe60ce8372e880"},{url:"WebConsole/image-20240609030709698.png",revision:"40522194da00674f7a64fc0c142b64f3"},{url:"manifest.webmanifest",revision:"42cc81492e00ec87f91282ffdad4fc8c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new e.CacheFirst({cacheName:"google-font-style-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cdn-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(((raw|user-images|camo).githubusercontent.com))\/.*/i,new e.CacheFirst({cacheName:"githubusercontent-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
