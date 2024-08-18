import{_ as k,a as r}from"./chunks/ChatMessage.vue_vue_type_style_index_0_lang.DTkzfQyS.js";import{_ as d}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.B2ROFaZv.js";import{_ as E}from"./chunks/Badge.Gth0UqrR.js";import{_ as o,c,j as l,a as s,I as i,w as a,a4 as e,o as g}from"./chunks/framework.AIsPoTDm.js";import"./chunks/theme.BQQaTOTO.js";const N=JSON.parse('{"title":"多步回话","description":"","frontmatter":{},"headers":[],"relativePath":"CodePlugins/Resp.md","filePath":"CodePlugins/Resp.md","lastUpdated":1723983137000}'),y={name:"CodePlugins/Resp.md"},F={id:"多步回话",tabindex:"-1"},u=l("a",{class:"header-anchor",href:"#多步回话","aria-label":'Permalink to "多步回话 <Badge type="warning" text="普通" />"'},"​",-1),m=l("blockquote",null,[l("p",null,"有时候我们希望某用户在触发机器人命令之后"),l("p",null,[s("还需要再接收"),l("strong",null,"一次或多次"),s("来自"),l("strong",null,"该用户或不同用户"),s("的消息")]),l("p",null,"才会继续执行业务逻辑和事件流程"),l("p",null,"那么该怎么处理呢？")],-1),b=l("h2",{id:"单用户",tabindex:"-1"},[s("单用户 "),l("a",{class:"header-anchor",href:"#单用户","aria-label":'Permalink to "单用户"'},"​")],-1),_=e(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.bot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bot</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.sv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SV</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.models </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Event</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sv_switch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SV(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试开关&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@sv_switch.on_fullmatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_resp_msg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bot: Bot, ev: Event):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始多步会话测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.receive_resp(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;接下来你说的话我都会提取出来噢？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你说的是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 吧？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="多用户" tabindex="-1">多用户 <a class="header-anchor" href="#多用户" aria-label="Permalink to &quot;多用户&quot;">​</a></h2>`,3),C=e(`<h3 id="代码示例-1" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例-1" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.bot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bot</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.sv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SV</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsuid_core.models </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Event</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> async_timeout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeout</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sv_switch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SV(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试开关&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@sv_switch.on_fullmatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始多用户测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_resp_msg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bot: Bot, ev: Event):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始多步会话测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;接下来开始游戏！？所有人的会话我都会收集起来的哦！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.receive_mutiply_resp()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你说的是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 吧？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下为在规定时间内结束收集回复的代码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常用于定时结束游戏</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@sv_switch.on_fullmatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始一场60秒的游戏&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_time_limit_resp_msg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bot: Bot, ev: Event):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;接下来开始60秒的游戏！？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeout(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 限制时长60秒</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.receive_mutiply_resp()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你说的是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 吧？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    except</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> asyncio.TimeoutError:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.send(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;时间到!!现在开始计算每个人的分数...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">💡 提醒</p><p>可以看到<code>Bot.receive_resp()</code>后续<strong>只会接受触发该命令的用户</strong>的消息</p><p>但是<code>Bot.receive_mutiply_resp()</code>会接受后续<strong>全部用户的信息</strong></p></div><p>注意到<code>Bot.send_option()</code>和<code>Bot.receive_mutiply_resp()</code>均会调用<code>Bot.receive_resp()</code></p><p>他们三个的参数都差不多，实际使用，功能区别如下：</p><ul><li><p><code>Bot.send_option()</code>只会发送按钮（仅在QQGroup）或者在<code>unsuported_platform</code>参数为<code>True</code>的的情况下，为所有不适配按钮的发送多选消息。</p></li><li><p><code>Bot.receive_resp()</code>在上面这个方法的基础上，还会等待<strong>触发命令用户</strong>的<strong>下一条回复</strong>。</p></li><li><p><code>Bot.receive_mutiply_resp()</code>则是在上面方法的基础上，还会等待该群<strong>接下来所有用户</strong>的回复</p></li></ul><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><code>reply</code>参数可以填入<code>Bot.send()</code>内可填入的任何值，会让Bot发送一次消息，然后继续执行流程</p></li><li><p><code>option_list</code>参数可以填入类型<code>List[str], List[Button]</code></p><ul><li>会按照列表，每行两个，发送按钮（仅在QQGroup ）</li><li>该参数也可以填入<code>List[List[str]], List[List[Button]]</code>，代表每行几个按钮</li></ul></li></ul>`,9);function A(D,B,f,v,w,x){const t=E,h=d,n=r,p=k;return g(),c("div",null,[l("h1",F,[s("多步回话 "),i(t,{type:"warning",text:"普通"}),s(),u]),i(h,{readTime:"3",words:"819"}),m,b,i(p,{title:"聊天界面"},{default:a(()=>[i(n,{nickname:"Wuyi无疑"},{default:a(()=>[s("开始测试")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("开始多步会话测试")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("接下来你说的话我都会提取出来噢？")]),_:1}),i(n,{nickname:"干扰用户",type:"danger",tag:"用户"},{default:a(()=>[s("你们在说什么呢？")]),_:1}),i(n,{nickname:"Wuyi无疑"},{default:a(()=>[s("我爱你")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("你说的是 我爱你 吧？")]),_:1})]),_:1}),_,i(p,{title:"聊天界面"},{default:a(()=>[i(n,{nickname:"Wuyi无疑"},{default:a(()=>[s("开始多用户测试")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("开始多步会话测试")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("接下来开始游戏！？所有人的会话我都会收集起来的哦！")]),_:1}),i(n,{nickname:"群友A",type:"danger",tag:"用户"},{default:a(()=>[s("你们在说什么呢？")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("你说的是 你们在说什么呢？ 吧？")]),_:1}),i(n,{nickname:"Wuyi无疑"},{default:a(()=>[s("我爱你")]),_:1}),i(n,{nickname:"GsCore"},{default:a(()=>[s("你说的是 我爱你 吧？")]),_:1})]),_:1}),C])}const G=o(y,[["render",A]]);export{N as __pageData,G as default};
