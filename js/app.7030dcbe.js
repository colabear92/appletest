(function(){"use strict";var t={7373:function(t,n,e){var o=e(9242),a=e(3396),l=e.p+"img/free-icon-apple-logo-94225.872de99f.png";const i={class:"testApp"},u=(0,a._)("img",{src:l,style:{width:"100px"}},null,-1),r=(0,a._)("h1",null,"앱등이테스트",-1),s=(0,a._)("p",null,'"나는 Apple에 얼마나 빠져있을까?"',-1),p=(0,a._)("hr",{style:{"margin-left":"50px","margin-right":"50px","margin-bottom":"20px"}},null,-1);function c(t,n,e,o,l,c){const d=(0,a.up)("MainCompoent"),g=(0,a.up)("TestComponent"),b=(0,a.up)("ResultComponent");return(0,a.wg)(),(0,a.iD)("div",i,[u,r,s,p,0==l.page?((0,a.wg)(),(0,a.j4)(d,{key:0,page:l.page,onChangePage:n[0]||(n[0]=t=>l.page=1)},null,8,["page"])):(0,a.kq)("",!0),1==l.page?((0,a.wg)(),(0,a.j4)(g,{key:1,page:l.page,questionList:l.questionList,onChangePage:n[1]||(n[1]=t=>l.page=2),onQuestionAdd:c.questionAdd},null,8,["page","questionList","onQuestionAdd"])):(0,a.kq)("",!0),2==l.page?((0,a.wg)(),(0,a.j4)(b,{key:2,page:l.page,total:l.total,onChangePage:n[2]||(n[2]=t=>{l.page=0,l.question=[],l.total=0})},null,8,["page","total"])):(0,a.kq)("",!0)])}e(7658);const d={id:"capture",ref:"target"},g=(0,a._)("br",null,null,-1),b=(0,a._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/appletest",style:{display:"none"}},null,-1),m=(0,a._)("br",null,null,-1),h=(0,a._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,a._)("button",{class:"main-button"},"다른 테스트도 하고싶다면?")],-1);function k(t,n,e,o,l,i){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>t.$emit("changePage",1)),class:"main-button"},"테스트 시작하기"),g,(0,a._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>i.kakaoShare&&i.kakaoShare(...t))},"카카오공유"),(0,a.Uk)("  "),b,(0,a._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>i.urlCopy&&i.urlCopy(...t))},"🔗링크 복사"),m,h],512)}var f={name:"MainComponent",props:{page:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}},y=e(89);const _=(0,y.Z)(f,[["render",k]]);var v=_,q=e(7139);const w={key:0},C={key:0},x={style:{"font-size":"120%"}},P=(0,a._)("br",null,null,-1),D=(0,a._)("br",null,null,-1);function O(t,n,e,o,l,i){return(0,a.wg)(),(0,a.iD)("div",null,[l.questionPage<11?((0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.questionList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[l.questionPage===e.id+1?((0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("h2",null,(0,q.zw)(l.questionPage)+"/10",1),(0,a._)("strong",x,(0,q.zw)(e.q),1),P,D,(0,a._)("div",{class:"qbox",onClick:n[0]||(n[0]=n=>{t.$emit("questionAdd",1),i.nextQuestion()})},(0,q.zw)(e.a),1),(0,a._)("div",{class:"qbox",onClick:n[1]||(n[1]=n=>{t.$emit("questionAdd",0),i.nextQuestion()})},(0,q.zw)(e.b),1)])):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0),11==l.questionPage?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"main-button",onClick:n[2]||(n[2]=n=>t.$emit("changePage",2))},"테스트 결과 보러가기")):(0,a.kq)("",!0)])}var j={name:"TestComponent",props:{page:Number,question:Array,questionList:Object},data(){return{questionPage:1}},methods:{nextQuestion(){this.questionPage<11&&(this.questionPage+=1)}}};const A=(0,y.Z)(j,[["render",O]]);var S=A,T=e.p+"img/10.b90da648.png",L=e.p+"img/89.7586290b.png",Q=e.p+"img/67.ccbfb312.png",z=e.p+"img/45.5377b81d.png",I=e.p+"img/03.1bab57bb.png";const K={ref:"target"},$={key:0},M=(0,a._)("h4",null,"[잡스가 당신을 찬양합니다]",-1),N=(0,a._)("img",{src:T,style:{width:"200px"}},null,-1),Z=(0,a._)("p",null,'"무결점의 앱등이 바로 당신입니다."',-1),E=[M,N,Z],R={key:1},B=(0,a._)("h4",null,"[팀쿡의 돈줄]",-1),H=(0,a._)("img",{src:L,style:{width:"200px"}},null,-1),U=(0,a._)("p",null,'"팀쿡의 눈엔 당신이 돈으로 보입니다."',-1),Y=[B,H,U],F={key:2},G=(0,a._)("h4",null,"[팀쿡의 엄지척]",-1),J=(0,a._)("img",{src:Q,style:{width:"200px"}},null,-1),V=(0,a._)("p",null,'"당신은 앞으로 성장할 앱등이 입니다."',-1),W=[G,J,V],X={key:3},tt=(0,a._)("h4",null,"[아무생각 없는 팀쿡]",-1),nt=(0,a._)("img",{src:z,style:{width:"200px"}},null,-1),et=(0,a._)("p",null,'"흔하디 흔한 애플 유저"',-1),ot=[tt,nt,et],at={key:4},lt=(0,a._)("h4",null,"[재드래곤의 웃음]",-1),it=(0,a._)("img",{src:I,style:{width:"200px"}},null,-1),ut=(0,a._)("p",null,'"삼성을 한번 써보는건 어떠실까요?"',-1),rt=[lt,it,ut],st=(0,a._)("br",null,null,-1),pt={ref:"result"},ct=(0,a._)("br",null,null,-1),dt=(0,a._)("hr",{style:{"margin-left":"50px","margin-right":"50px"}},null,-1),gt=(0,a._)("br",null,null,-1),bt=(0,a._)("p",null,'"다른 사람에게도 추천해 주고 싶다면?"',-1),mt=(0,a._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/appletest",style:{display:"none"}},null,-1),ht=(0,a._)("br",null,null,-1),kt=(0,a._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,a._)("button",{class:"main-button"},"다른 테스트도 하고싶다면?")],-1);function ft(t,n,e,o,l,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",K,[10==e.total?((0,a.wg)(),(0,a.iD)("div",$,E)):(0,a.kq)("",!0),8==e.total||9==e.total?((0,a.wg)(),(0,a.iD)("div",R,Y)):(0,a.kq)("",!0),6==e.total||7==e.total?((0,a.wg)(),(0,a.iD)("div",F,W)):(0,a.kq)("",!0),4==e.total||5==e.total?((0,a.wg)(),(0,a.iD)("div",X,ot)):(0,a.kq)("",!0),e.total<4?((0,a.wg)(),(0,a.iD)("div",at,rt)):(0,a.kq)("",!0)],512),st,(0,a._)("div",pt,null,512),ct,(0,a._)("button",{class:"main-button",onClick:n[0]||(n[0]=n=>t.$emit("changePage",0))},"테스트 다시 하기"),dt,gt,bt,(0,a._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>i.kakaoShare&&i.kakaoShare(...t))},"카카오 공유"),(0,a.Uk)("  "),mt,(0,a._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>i.urlCopy&&i.urlCopy(...t))},"🔗링크 복사"),ht,kt])}var yt={data(){return{capture:!0,testurl:"dd"}},name:"ResultComponent",props:{page:Number,total:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}};const _t=(0,y.Z)(yt,[["render",ft]]);var vt=_t,qt=[{a:"다음폰도 아이폰 살거다",b:"아이폰 다시는 안살거다",q:"다음에 핸드폰을 사야한다면?",id:0},{a:"8핀 케이블은 나름 귀엽다",b:"c타입으로 바꿔야한다",q:"충전 케이블에 대한 생각은?",id:1},{a:"애플워치는 필수다",b:"시계랑 뭐가 다름?",q:"애플 워치에 대한 나의생각은?",id:2},{a:"아이패드는 인생 필수템이다",b:"커다란 아이폰 아님?",q:"아이패드란 어떤 존재인가요?",id:3},{a:"맥북이야 말로 최고의 laptop이다",b:"그램, 갤북 미만 잡",q:"당신이 생각하는 진짜 노트북은?",id:4},{a:"에어팟의 가격은 합리적이다",b:"응 QCY 3만원",q:"무선 이어폰에 대한 당신의 생각은?",id:5},{a:"맥미니가 뭔지 알고 있다.",b:"먼 미니?",q:"맥미니에 대해서 알고 있나요?",id:6},{a:"가성비의 맥북 에어",b:"응 레노버, HP는 반값",q:"맥북가격에 대해 어떻게 생각하세요?",id:7},{a:"애플티비 써봤다.",b:"애플에서 티비도 만듬?",q:"애플 티비의 존재에 대해 알고있나요?",id:8},{a:"매직마우스는 쓰레기다.",b:"이름이 뭐 저따위임",q:"매직 마우스에 대한 생각을 알려주세요",id:9}],wt={name:"App",components:{MainCompoent:v,TestComponent:S,ResultComponent:vt},data(){return{page:0,question:[],questionList:qt,total:0}},methods:{questionAdd(t){this.question.push(t),this.total+=t},kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})}}};const Ct=(0,y.Z)(wt,[["render",c]]);var xt=Ct;const Pt="3b02b75f115e3a004b1b3a4e2eaae4ed";window.Kakao.init(Pt),(0,o.ri)(xt).mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var l=n[o]={exports:{}};return t[o](l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,l){if(!o){var i=1/0;for(p=0;p<t.length;p++){o=t[p][0],a=t[p][1],l=t[p][2];for(var u=!0,r=0;r<o.length;r++)(!1&l||i>=l)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(u=!1,l<i&&(i=l));if(u){t.splice(p--,1);var s=a();void 0!==s&&(n=s)}}return n}l=l||0;for(var p=t.length;p>0&&t[p-1][2]>l;p--)t[p]=t[p-1];t[p]=[o,a,l]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/appletest/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,l,i=o[0],u=o[1],r=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(a in u)e.o(u,a)&&(e.m[a]=u[a]);if(r)var p=r(e)}for(n&&n(o);s<i.length;s++)l=i[s],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(p)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7373)}));o=e.O(o)})();
//# sourceMappingURL=app.7030dcbe.js.map