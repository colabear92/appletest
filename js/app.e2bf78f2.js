(function(){"use strict";var t={4351:function(t,n,e){var a=e(9242),o=e(3396),i=e.p+"img/free-icon-apple-logo-94225.872de99f.png";const l={class:"testApp"},u=(0,o._)("img",{src:i,style:{width:"100px"}},null,-1),r=(0,o._)("h2",null,"앱등이테스트",-1),s=(0,o._)("hr",{style:{"margin-left":"50px","margin-right":"50px","margin-bottom":"20px"}},null,-1);function p(t,n,e,a,i,p){const c=(0,o.up)("MainCompoent"),g=(0,o.up)("TestComponent"),d=(0,o.up)("ResultComponent");return(0,o.wg)(),(0,o.iD)("div",l,[u,r,s,0==i.page?((0,o.wg)(),(0,o.j4)(c,{key:0,page:i.page,onChangePage:n[0]||(n[0]=t=>i.page=1)},null,8,["page"])):(0,o.kq)("",!0),1==i.page?((0,o.wg)(),(0,o.j4)(g,{key:1,page:i.page,questionList:i.questionList,onChangePage:n[1]||(n[1]=t=>i.page=2),onQuestionAdd:p.questionAdd},null,8,["page","questionList","onQuestionAdd"])):(0,o.kq)("",!0),2==i.page?((0,o.wg)(),(0,o.j4)(d,{key:2,page:i.page,total:i.total,onChangePage:n[2]||(n[2]=t=>{i.page=0,i.question=[],i.total=0})},null,8,["page","total"])):(0,o.kq)("",!0)])}e(7658);const c={id:"capture",ref:"target"},g=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1);function b(t,n,e,a,i,l){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("button",{onClick:n[0]||(n[0]=n=>t.$emit("changePage",1)),class:"main-button"},"테스트 시작하기"),g,(0,o._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>l.kakaoShare&&l.kakaoShare(...t))},"카카오 공유하기"),d],512)}var h={name:"MainComponent",props:{page:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})}}},m=e(89);const k=(0,m.Z)(h,[["render",b]]);var f=k,v=e(7139);const w={key:0},_={key:0};function q(t,n,e,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[i.questionPage<11?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.questionList,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[i.questionPage===e.id+1?((0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("h2",null,(0,v.zw)(i.questionPage)+"/10",1),(0,o._)("div",{class:"qbox",onClick:n[0]||(n[0]=n=>{t.$emit("questionAdd",1),l.nextQuestion()})},(0,v.zw)(e.a),1),(0,o._)("div",{class:"qbox",onClick:n[1]||(n[1]=n=>{t.$emit("questionAdd",0),l.nextQuestion()})},(0,v.zw)(e.b),1)])):(0,o.kq)("",!0)])))),128))])):(0,o.kq)("",!0),11==i.questionPage?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"main-button",onClick:n[2]||(n[2]=n=>t.$emit("changePage",2))},"테스트 결과 보러가기")):(0,o.kq)("",!0)])}var y={name:"TestComponent",props:{page:Number,question:Array,questionList:Object},data(){return{questionPage:1}},methods:{nextQuestion(){this.questionPage<11&&(this.questionPage+=1)}}};const C=(0,m.Z)(y,[["render",q]]);var x=C,P=e.p+"img/10.b90da648.png",D=e.p+"img/89.7586290b.png",O=e.p+"img/67.ccbfb312.png",j=e.p+"img/45.5377b81d.png",S=e.p+"img/03.1bab57bb.png";const A={ref:"target"},T={key:0},$=(0,o._)("h4",null,"[잡스가 당신을 찬양합니다]",-1),L=(0,o._)("img",{src:P,style:{width:"200px"}},null,-1),Q=(0,o._)("p",null,'"무결점의 앱등이 바로 당신입니다."',-1),K=[$,L,Q],F={key:1},I=(0,o._)("h4",null,"[팀쿡의 돈줄]",-1),M=(0,o._)("img",{src:D,style:{width:"200px"}},null,-1),N=(0,o._)("p",null,'"팀쿡의 눈엔 당신이 돈으로 보입니다."',-1),Z=[I,M,N],z={key:2},R=(0,o._)("h4",null,"[팀쿡의 엄지척]",-1),H=(0,o._)("img",{src:O,style:{width:"200px"}},null,-1),Y=(0,o._)("p",null,'"당신은 앞으로 성장할 앱등이 입니다."',-1),B=[R,H,Y],E={key:3},G=(0,o._)("h4",null,"[아무생각 없는 팀쿡]",-1),J=(0,o._)("img",{src:j,style:{width:"200px"}},null,-1),U=(0,o._)("p",null,'"흔하디 흔한 애플 유저"',-1),V=[G,J,U],W={key:4},X=(0,o._)("h4",null,"[재드래곤의 웃음]",-1),tt=(0,o._)("img",{src:S,style:{width:"200px"}},null,-1),nt=(0,o._)("p",null,'"삼성을 한번 써보는건 어떠실까요?"',-1),et=[X,tt,nt],at=(0,o._)("br",null,null,-1),ot={ref:"result"},it=(0,o._)("br",null,null,-1),lt=(0,o._)("br",null,null,-1),ut=(0,o._)("br",null,null,-1);function rt(t,n,e,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",A,[10==e.total?((0,o.wg)(),(0,o.iD)("div",T,K)):(0,o.kq)("",!0),8==e.total||9==e.total?((0,o.wg)(),(0,o.iD)("div",F,Z)):(0,o.kq)("",!0),6==e.total||7==e.total?((0,o.wg)(),(0,o.iD)("div",z,B)):(0,o.kq)("",!0),4==e.total||5==e.total?((0,o.wg)(),(0,o.iD)("div",E,V)):(0,o.kq)("",!0),e.total<4?((0,o.wg)(),(0,o.iD)("div",W,et)):(0,o.kq)("",!0)],512),at,(0,o._)("div",ot,null,512),it,(0,o._)("button",{onClick:n[0]||(n[0]=(...t)=>l.myFunction&&l.myFunction(...t)),class:"main-button"},"테스트 저장 하기"),lt,(0,o._)("button",{class:"main-button",onClick:n[1]||(n[1]=n=>t.$emit("changePage",0))},"테스트 다시 하기"),ut,(0,o._)("button",{class:"kakao-share",onClick:n[2]||(n[2]=(...t)=>l.kakaoShare&&l.kakaoShare(...t))},"카카오 공유하기")])}var st=e(2269),pt=e.n(st),ct={data(){return{capture:!0}},name:"ResultComponent",props:{page:Number,total:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})},myFunction(){pt()(this.$refs.target).then((t=>{this.capture&&(this.$refs.result.appendChild(t),this.capture=!1),t.toBlob((t=>{navigator.clipboard.write([new ClipboardItem({"image/png":t})]),alert("이미지를 클립보드에 복사했어요!")}))}))}}};const gt=(0,m.Z)(ct,[["render",rt]]);var dt=gt,bt=[{a:"다음폰도 아이폰 살거다",b:"다시는 안살거다",id:0},{a:"8핀 케이블은 나름 귀엽다",b:"c타입으로 바꿔야한다",id:1},{a:"애플워치는 필수다",b:"시계랑 뭐가 다름?",id:2},{a:"아이패드는 인생 필수템이다",b:"커다란 아이폰 아님?",id:3},{a:"맥북이야 말로 최고의 laptop이다",b:"그램, 갤북 미만 잡",id:4},{a:"에어팟의 가격은 합리적이다",b:"응 QCY 3만원",id:5},{a:"맥미니가 뭔지 알고 있다.",b:"먼 미니?",id:6},{a:"가성비의 맥북 에어",b:"응 레노버, HP는 반값",id:7},{a:"애플티비 써봤다.",b:"애플에서 티비도 만듬?",id:8},{a:"매직마우스는 쓰레기다.",b:"이름이 뭐 저따위임",id:9}],ht={name:"App",components:{MainCompoent:f,TestComponent:x,ResultComponent:dt},data(){return{page:0,question:[],questionList:bt,total:0}},methods:{questionAdd(t){this.question.push(t),this.total+=t},kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})}}};const mt=(0,m.Z)(ht,[["render",p]]);var kt=mt;const ft="3b02b75f115e3a004b1b3a4e2eaae4ed";window.Kakao.init(ft),(0,a.ri)(kt).mount("#app")}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,a,o,i){if(!a){var l=1/0;for(p=0;p<t.length;p++){a=t[p][0],o=t[p][1],i=t[p][2];for(var u=!0,r=0;r<a.length;r++)(!1&i||l>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[r])}))?a.splice(r--,1):(u=!1,i<l&&(l=i));if(u){t.splice(p--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[a,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/appletest/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,i,l=a[0],u=a[1],r=a[2],s=0;if(l.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(r)var p=r(e)}for(n&&n(a);s<l.length;s++)i=l[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(p)},a=self["webpackChunktest"]=self["webpackChunktest"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4351)}));a=e.O(a)})();
//# sourceMappingURL=app.e2bf78f2.js.map