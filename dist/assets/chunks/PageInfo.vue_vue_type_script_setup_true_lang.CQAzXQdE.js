import{o as X,c as tt,j as E,d as lt,s as ht,u as dt,h as rt,I as it,a as st,t as at}from"./framework.AIsPoTDm.js";import{c as R,g as et}from"./theme.BQQaTOTO.js";const mt={style:{display:"inline-block"},viewBox:"0 0 20 20",width:"1.2em",height:"1.2em"},$t=E("path",{fill:"currentColor",d:"M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0m2.5 14.5L9 11V4h2v6l3 3z"},null,-1),_t=[$t];function vt(v,W){return X(),tt("svg",mt,[..._t])}const pt={name:"ooui-clock",render:vt},Mt={style:{display:"inline-block"},viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},gt=E("path",{fill:"currentColor",d:"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144l.997-3.655a.5.5 0 0 1 .964 0l.997 3.655l1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"},null,-1),Dt=[gt];function yt(v,W){return X(),tt("svg",Mt,[...Dt])}const Yt={name:"bi-file-earmark-word-fill",render:yt};var K={exports:{}},ot;function ut(){return ot||(ot=1,function(v,W){(function(m,p){v.exports=p()})(R,function(){var m=1e3,p=6e4,b=36e5,S="millisecond",l="second",d="minute",u="hour",c="day",w="week",$="month",j="quarter",k="year",H="date",i="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},T=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},A={s:T,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+T(r,2,"0")+":"+T(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,$),a=t-e<0,o=n.clone().add(r+(a?-1:1),$);return+(-(r+(t-e)/(a?e-o:o-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:$,y:k,w,d:c,D:H,h:u,m:d,s:l,ms:S,Q:j}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},M="en",Y={};Y[M]=U;var N="$isDayjsObject",I=function(s){return s instanceof G||!(!s||!s[N])},z=function s(n,t,r){var e;if(!n)return M;if(typeof n=="string"){var a=n.toLowerCase();Y[a]&&(e=a),t&&(Y[a]=t,e=a);var o=n.split("-");if(!e&&o.length>1)return s(o[0])}else{var h=n.name;Y[h]=n,e=h}return!r&&e&&(M=e),e||!r&&M},g=function(s,n){if(I(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new G(t)},f=A;f.l=z,f.i=I,f.w=function(s,n){return g(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var G=function(){function s(t){this.$L=z(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[N]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,a=r.utc;if(e===null)return new Date(NaN);if(f.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(y);if(o){var h=o[2]-1||0,_=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],h,o[3]||1,o[4]||0,o[5]||0,o[6]||0,_)):new Date(o[1],h,o[3]||1,o[4]||0,o[5]||0,o[6]||0,_)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return f},n.isValid=function(){return this.$d.toString()!==i},n.isSame=function(t,r){var e=g(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return g(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<g(t)},n.$g=function(t,r,e){return f.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,a=!!f.u(r)||r,o=f.p(t),h=function(F,O){var V=f.w(e.$u?Date.UTC(e.$y,O,F):new Date(e.$y,O,F),e);return a?V:V.endOf(c)},_=function(F,O){return f.w(e.toDate()[F].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(O)),e)},D=this.$W,x=this.$M,L=this.$D,Z="set"+(this.$u?"UTC":"");switch(o){case k:return a?h(1,0):h(31,11);case $:return a?h(1,x):h(0,x+1);case w:var B=this.$locale().weekStart||0,q=(D<B?D+7:D)-B;return h(a?L-q:L+(6-q),x);case c:case H:return _(Z+"Hours",0);case u:return _(Z+"Minutes",1);case d:return _(Z+"Seconds",2);case l:return _(Z+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,a=f.p(t),o="set"+(this.$u?"UTC":""),h=(e={},e[c]=o+"Date",e[H]=o+"Date",e[$]=o+"Month",e[k]=o+"FullYear",e[u]=o+"Hours",e[d]=o+"Minutes",e[l]=o+"Seconds",e[S]=o+"Milliseconds",e)[a],_=a===c?this.$D+(r-this.$W):r;if(a===$||a===k){var D=this.clone().set(H,1);D.$d[h](_),D.init(),this.$d=D.set(H,Math.min(this.$D,D.daysInMonth())).$d}else h&&this.$d[h](_);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[f.p(t)]()},n.add=function(t,r){var e,a=this;t=Number(t);var o=f.p(r),h=function(x){var L=g(a);return f.w(L.date(L.date()+Math.round(x*t)),a)};if(o===$)return this.set($,this.$M+t);if(o===k)return this.set(k,this.$y+t);if(o===c)return h(1);if(o===w)return h(7);var _=(e={},e[d]=p,e[u]=b,e[l]=m,e)[o]||1,D=this.$d.getTime()+t*_;return f.w(D,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||i;var a=t||"YYYY-MM-DDTHH:mm:ssZ",o=f.z(this),h=this.$H,_=this.$m,D=this.$M,x=e.weekdays,L=e.months,Z=e.meridiem,B=function(O,V,P,Q){return O&&(O[V]||O(r,a))||P[V].slice(0,Q)},q=function(O){return f.s(h%12||12,O,"0")},F=Z||function(O,V,P){var Q=O<12?"AM":"PM";return P?Q.toLowerCase():Q};return a.replace(C,function(O,V){return V||function(P){switch(P){case"YY":return String(r.$y).slice(-2);case"YYYY":return f.s(r.$y,4,"0");case"M":return D+1;case"MM":return f.s(D+1,2,"0");case"MMM":return B(e.monthsShort,D,L,3);case"MMMM":return B(L,D);case"D":return r.$D;case"DD":return f.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return B(e.weekdaysMin,r.$W,x,2);case"ddd":return B(e.weekdaysShort,r.$W,x,3);case"dddd":return x[r.$W];case"H":return String(h);case"HH":return f.s(h,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return F(h,_,!0);case"A":return F(h,_,!1);case"m":return String(_);case"mm":return f.s(_,2,"0");case"s":return String(r.$s);case"ss":return f.s(r.$s,2,"0");case"SSS":return f.s(r.$ms,3,"0");case"Z":return o}return null}(O)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var a,o=this,h=f.p(r),_=g(t),D=(_.utcOffset()-this.utcOffset())*p,x=this-_,L=function(){return f.m(o,_)};switch(h){case k:a=L()/12;break;case $:a=L();break;case j:a=L()/3;break;case w:a=(x-D)/6048e5;break;case c:a=(x-D)/864e5;break;case u:a=x/b;break;case d:a=x/p;break;case l:a=x/m;break;default:a=x}return e?a:f.a(a)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),a=z(t,r,!0);return a&&(e.$L=a),e},n.clone=function(){return f.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),nt=G.prototype;return g.prototype=nt,[["$ms",S],["$s",l],["$m",d],["$H",u],["$W",c],["$M",$],["$y",k],["$D",H]].forEach(function(s){nt[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),g.extend=function(s,n){return s.$i||(s(n,G,g),s.$i=!0),g},g.locale=z,g.isDayjs=I,g.unix=function(s){return g(1e3*s)},g.en=Y[M],g.Ls=Y,g.p={},g})}(K)),K.exports}var St=ut();const J=et(St);var ct={exports:{}};(function(v,W){(function(m,p){v.exports=p()})(R,function(){var m="minute",p=/[+-]\d\d(?::?\d\d)?/g,b=/([+-]|\d\d)/g;return function(S,l,d){var u=l.prototype;d.utc=function(i){var y={date:i,utc:!0,args:arguments};return new l(y)},u.utc=function(i){var y=d(this.toDate(),{locale:this.$L,utc:!0});return i?y.add(this.utcOffset(),m):y},u.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var c=u.parse;u.parse=function(i){i.utc&&(this.$u=!0),this.$utils().u(i.$offset)||(this.$offset=i.$offset),c.call(this,i)};var w=u.init;u.init=function(){if(this.$u){var i=this.$d;this.$y=i.getUTCFullYear(),this.$M=i.getUTCMonth(),this.$D=i.getUTCDate(),this.$W=i.getUTCDay(),this.$H=i.getUTCHours(),this.$m=i.getUTCMinutes(),this.$s=i.getUTCSeconds(),this.$ms=i.getUTCMilliseconds()}else w.call(this)};var $=u.utcOffset;u.utcOffset=function(i,y){var C=this.$utils().u;if(C(i))return this.$u?0:C(this.$offset)?$.call(this):this.$offset;if(typeof i=="string"&&(i=function(M){M===void 0&&(M="");var Y=M.match(p);if(!Y)return null;var N=(""+Y[0]).match(b)||["-",0,0],I=N[0],z=60*+N[1]+ +N[2];return z===0?0:I==="+"?z:-z}(i),i===null))return this;var U=Math.abs(i)<=16?60*i:i,T=this;if(y)return T.$offset=U,T.$u=i===0,T;if(i!==0){var A=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(U+A,m)).$offset=U,T.$x.$localOffset=A}else T=this.utc();return T};var j=u.format;u.format=function(i){var y=i||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return j.call(this,y)},u.valueOf=function(){var i=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*i},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var k=u.toDate;u.toDate=function(i){return i==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var H=u.diff;u.diff=function(i,y,C){if(i&&this.$u===i.$u)return H.call(this,i,y,C);var U=this.local(),T=d(i).local();return H.call(U,T,y,C)}}})})(ct);var wt=ct.exports;const xt=et(wt);var ft={exports:{}};(function(v,W){(function(m,p){v.exports=p()})(R,function(){return function(m,p,b){m=m||{};var S=p.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(c,w,$,j){return S.fromToBase(c,w,$,j)}b.en.relativeTime=l,S.fromToBase=function(c,w,$,j,k){for(var H,i,y,C=$.$locale().relativeTime||l,U=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],T=U.length,A=0;A<T;A+=1){var M=U[A];M.d&&(H=j?b(c).diff($,M.d,!0):$.diff(c,M.d,!0));var Y=(m.rounding||Math.round)(Math.abs(H));if(y=H>0,Y<=M.r||!M.r){Y<=1&&A>0&&(M=U[A-1]);var N=C[M.l];k&&(Y=k(""+Y)),i=typeof N=="string"?N.replace("%d",Y):N(Y,w,M.l,y);break}}if(w)return i;var I=y?C.future:C.past;return typeof I=="function"?I(i):I.replace("%s",i)},S.to=function(c,w){return d(c,w,this,!0)},S.from=function(c,w){return d(c,w,this)};var u=function(c){return c.$u?b.utc():b()};S.toNow=function(c){return this.to(u(this),c)},S.fromNow=function(c){return this.from(u(this),c)}}})})(ft);var Tt=ft.exports;const Ot=et(Tt);var bt={exports:{}};(function(v,W){(function(m,p){v.exports=p(ut())})(R,function(m){function p(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var b=p(m),S={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l,d){return d==="W"?l+"周":l+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(l,d){var u=100*l+d;return u<600?"凌晨":u<900?"早上":u<1100?"上午":u<1300?"中午":u<1800?"下午":"晚上"}};return b.default.locale(S,null,!0),S})})(bt);J.extend(xt);J.locale("zh-cn");J.extend(Ot);function kt(v){return v&&J(v instanceof Date?v:v.trim()).isValid()?J(v).utc().local().format("YYYY-MM-DD"):null}function Ht(v){return v?J(v).utc().local().fromNow():null}const Lt={class:"border-b-1 border-[var(--vp-c-divider)] w-full border-b-solid mt-[24px] pb-[12px] flex gap-[12px] mb-[12px] flex-wrap max-w-[85%]"},Ct={class:"flex gap-[4px] items-center"},Ut={class:"flex gap-[4px] items-center"},jt="Choi Yang",It=lt({__name:"PageInfo",props:{readTime:{},words:{}},setup(v){var l,d,u;const W=ht(jt),{frontmatter:m,page:p}=dt();kt((l=m.value)==null?void 0:l.date),(d=m.value)!=null&&d.author&&(W.value=(u=m.value)==null?void 0:u.author);const b=rt(()=>new Date(p.value.lastUpdated)),S=rt(()=>b.value.toISOString());return Ht(S.value),(c,w)=>{const $=Yt,j=pt;return X(),tt("div",null,[E("section",Lt,[E("div",Ct,[it($),st(" 字数统计:"),E("span",null,at(c.words)+" 字",1)]),E("div",Ut,[it(j),st(" 阅读时长:"),E("span",null,at(c.readTime)+" 分钟",1)])])])}}});export{It as _};
