import{_ as o}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.13c3af49.js";import{_ as e}from"./chunks/Badge.f3e0fe65.js";import{_ as t,o as c,c as r,k as a,a as s,H as n,Q as i}from"./chunks/framework.4d23d1ec.js";import"./chunks/commonjsHelpers.725317a4.js";const C=JSON.parse('{"title":"定时任务","description":"","frontmatter":{},"headers":[],"relativePath":"编写插件/Scheduler.md","filePath":"编写插件/Scheduler.md","lastUpdated":null}'),y={name:"编写插件/Scheduler.md"},E={id:"定时任务",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#定时任务","aria-label":'Permalink to "定时任务<Badge type="tip" text="普通" />"'},"​",-1),_=i(`<div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> gsuid_core.aps </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> scheduler</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> gsuid_core.gss </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> gss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@scheduler.scheduled_job</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cron&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">minute</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;*/30&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">#设定一个定时任务、每隔三十分钟执行一次</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">notice_job</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">	im </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> process(name)  </span><span style="color:#6A737D;"># 自己的业务逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BOT_ID</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> gss.active_bot: </span><span style="color:#6A737D;"># 获取全部连接中的Bot，注意，这里的BOT_ID和bot_id并不等价</span></span>
<span class="line"><span style="color:#E1E4E8;">		bot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gss.active_bot[</span><span style="color:#79B8FF;">BOT_ID</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;"># 拿到bot实例</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> bot.target_send(</span></span>
<span class="line"><span style="color:#E1E4E8;">            msg,       </span><span style="color:#6A737D;"># 具体要发送的消息</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;direct&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;"># 发送方式group或者direct</span></span>
<span class="line"><span style="color:#E1E4E8;">            target_id, </span><span style="color:#6A737D;"># 发送目标，群号或者用户id，str</span></span>
<span class="line"><span style="color:#E1E4E8;">            bot_id,    </span><span style="color:#6A737D;"># 实际bot_id、和上面的BOT_id不同，例如onebot等等</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;"># bot_self_id, 用于同平台多bot连接，例如bot自己的QQ号等，可空</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">		   </span><span style="color:#6A737D;"># msg_id,要回复的某一个msg的id，可空</span></span>
<span class="line"><span style="color:#E1E4E8;">            at_sender, </span><span style="color:#6A737D;"># 是否要at发送者，默认False</span></span>
<span class="line"><span style="color:#E1E4E8;">            sender_id, </span><span style="color:#6A737D;"># sender_id, 默认为空，主动发送时，不建议填写这两个选项</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> gsuid_core.aps </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> scheduler</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> gsuid_core.gss </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> gss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@scheduler.scheduled_job</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cron&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">minute</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;*/30&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">#设定一个定时任务、每隔三十分钟执行一次</span></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">notice_job</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">	im </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> process(name)  </span><span style="color:#6A737D;"># 自己的业务逻辑</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BOT_ID</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> gss.active_bot: </span><span style="color:#6A737D;"># 获取全部连接中的Bot，注意，这里的BOT_ID和bot_id并不等价</span></span>
<span class="line"><span style="color:#24292E;">		bot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gss.active_bot[</span><span style="color:#005CC5;">BOT_ID</span><span style="color:#24292E;">] </span><span style="color:#6A737D;"># 拿到bot实例</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> bot.target_send(</span></span>
<span class="line"><span style="color:#24292E;">            msg,       </span><span style="color:#6A737D;"># 具体要发送的消息</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;direct&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;"># 发送方式group或者direct</span></span>
<span class="line"><span style="color:#24292E;">            target_id, </span><span style="color:#6A737D;"># 发送目标，群号或者用户id，str</span></span>
<span class="line"><span style="color:#24292E;">            bot_id,    </span><span style="color:#6A737D;"># 实际bot_id、和上面的BOT_id不同，例如onebot等等</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,        </span><span style="color:#6A737D;"># bot_self_id, 用于同平台多bot连接，例如bot自己的QQ号等，可空</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">		   </span><span style="color:#6A737D;"># msg_id,要回复的某一个msg的id，可空</span></span>
<span class="line"><span style="color:#24292E;">            at_sender, </span><span style="color:#6A737D;"># 是否要at发送者，默认False</span></span>
<span class="line"><span style="color:#24292E;">            sender_id, </span><span style="color:#6A737D;"># sender_id, 默认为空，主动发送时，不建议填写这两个选项</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function b(m,u,D,A,F,g){const p=e,l=o;return c(),r("div",null,[a("h1",E,[s("定时任务"),n(p,{type:"tip",text:"普通"}),s(),d]),n(l,{readTime:"1",words:"206"}),_])}const v=t(y,[["render",b]]);export{C as __pageData,v as default};
