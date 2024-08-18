import{_,a as l}from"./chunks/ChatMessage.vue_vue_type_style_index_0_lang.BazjQ2dt.js";import{_ as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.CQAzXQdE.js";import{_ as p}from"./chunks/Badge.BLjIphQI.js";import{_ as u,c as m,j as o,a as e,I as t,w as c,a4 as s,o as f}from"./chunks/framework.AIsPoTDm.js";import"./chunks/theme.BQQaTOTO.js";const M=JSON.parse('{"title":"绑定账号","description":"","frontmatter":{},"headers":[],"relativePath":"Advance/BindDevice.md","filePath":"Advance/BindDevice.md","lastUpdated":1699769691000}'),h={name:"Advance/BindDevice.md"},k={id:"绑定账号",tabindex:"-1"},g=o("a",{class:"header-anchor",href:"#绑定账号","aria-label":'Permalink to "绑定账号<Badge type="tip" text="简单" />"'},"​",-1),b=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"💡 提醒"),o("p",null,[e("基于米游社的插件例如"),o("code",null,"GenshinUID"),e("或"),o("code",null,"StarRailUID"),e("大部分功能均需要绑定Cookie")]),o("p",null,"以下为简易向Bot绑定账号数据的教程")],-1),C={id:"一、绑定uid",tabindex:"-1"},T=o("a",{class:"header-anchor",href:"#一、绑定uid","aria-label":'Permalink to "一、绑定UID<Badge type="tip" text="简单" />"'},"​",-1),v=o("p",null,[e("向机器人发送"),o("code",null,"绑定uid"),e("即可完成绑定")],-1),x=o("blockquote",null,[o("p",null,[e("注意此为绑定原神uid, 如绑定星铁uid则发送"),o("code",null,"sr绑定uid")])],-1),y={id:"二、绑定cookie",tabindex:"-1"},D=o("a",{class:"header-anchor",href:"#二、绑定cookie","aria-label":'Permalink to "二、绑定Cookie<Badge type="tip" text="简单" />"'},"​",-1),I=s("<p>向机器人发送<code>扫码登陆</code>，按照提示打开手机米游社，进行扫码确认，即可完成绑定</p><blockquote><p>注意本身支持<strong>私聊</strong><code>添加</code>后接完整Cookie格式绑定</p><p>不过该绑定方式需要用户已经持有完整CK的前提下</p><p>建议普通用户使用<code>扫码登陆</code>完成绑定</p></blockquote>",2),P=o("p",null,"完成这两步之后，绑定即可成功完成。",-1),A={id:"三、绑定设备",tabindex:"-1"},B=o("a",{class:"header-anchor",href:"#三、绑定设备","aria-label":'Permalink to "三、绑定设备<Badge type="warning" text="实验" />"'},"​",-1),S=s('<div class="warning custom-block"><p class="custom-block-title">🚨 警告</p><p>⚠ ⚠<strong>该方法可能存在一定风险</strong> ⚠ ⚠</p><p>为了应对近期频繁出现的<code>1034</code>、<code>5003</code>、<code>-999</code>（实际上也是<code>1034</code>）错误，现有一种实验性方法</p><p>GsCore提供一种绑定设备的方法，以<strong>尽可能</strong>的减少<code>1034</code>的出现（甚至完全不出现）</p><p>该方法<strong>确实有效</strong>，但，<strong>仍旧需要一定时间</strong>和数量的样本进行观测</p><p><strong>该方法仅限安卓</strong>（苹果可以通过抓包直接构建fp的方式传入，具体在下面）</p></div><ul><li>使用<strong>常用米游社</strong>手机下载<a href="https://github.com/forchannot/get_device_info" target="_blank" rel="noreferrer">该项目</a>Action中编译的APK，并安装</li><li>打开后点击按钮复制</li><li><strong>私聊</strong>Bot<code>mys设备登录</code>+粘贴你刚刚复制的内容</li><li>发送，完成绑定</li></ul><blockquote><p>以下示例中的信息已被隐藏，实际复制的内容是一个很长的字典</p></blockquote>',3),V=s('<div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p><strong><code>mys设备登录</code>现在支持直接传入fp</strong>`</p><p>抓包之后构建一个带有<code>fp</code>和<code>device_id</code>的字典（如果可能的话可以携带<code>device_info</code>），传入即可</p></div><blockquote><p>以下示例中的信息已被隐藏，实际内容并非如此</p></blockquote>',2);function G(N,U,q,w,$,W){const a=p,d=r,n=l,i=_;return f(),m("div",null,[o("h1",k,[e("绑定账号"),t(a,{type:"tip",text:"简单"}),e(),g]),t(d,{readTime:"2",words:"658"}),b,o("h2",C,[e("一、绑定UID"),t(a,{type:"tip",text:"简单"}),e(),T]),v,x,t(i,{title:"绑定UID"},{default:c(()=>[t(n,{nickname:"Wuyi无疑"},{default:c(()=>[e("绑定uid100740568")]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("绑定UID100740568成功！")]),_:1}),t(n,{nickname:"Wuyi无疑"},{default:c(()=>[e("sr绑定uid100740568")]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("sr绑定UID100740568成功！")]),_:1})]),_:1}),o("h2",y,[e("二、绑定Cookie"),t(a,{type:"tip",text:"简单"}),e(),D]),I,t(i,{title:"扫码登陆"},{default:c(()=>[t(n,{nickname:"Wuyi无疑"},{default:c(()=>[e("扫码登陆")]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("(图片)#一张二维码#")]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("(图片)#绑定成功!!#")]),_:1})]),_:1}),P,o("h2",A,[e("三、绑定设备"),t(a,{type:"warning",text:"实验"}),e(),B]),S,t(i,{title:"绑定设备(私聊)"},{default:c(()=>[t(n,{nickname:"Wuyi无疑"},{default:c(()=>[e('mys设备登录{"oaid":"DD8ice......K110"}')]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("设备绑定成功!")]),_:1})]),_:1}),V,t(i,{title:"绑定设备(私聊)"},{default:c(()=>[t(n,{nickname:"Wuyi无疑"},{default:c(()=>[e('mys设备登录{"fp":"38fff985f","device_id":"1234-5678-9999999-wcdd"}')]),_:1}),t(n,{nickname:"GsCore"},{default:c(()=>[e("设备绑定成功!")]),_:1})]),_:1})])}const O=u(h,[["render",G]]);export{M as __pageData,O as default};
