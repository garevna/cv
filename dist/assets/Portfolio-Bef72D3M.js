import{d as k,m as B,u as M,r as b,o as D,w as S,c as r,a as g,b as t,t as v,e as _,F as C,f as $,g as c,_ as V,h as d,i as N,j as w,k as f,l as H,p as A,n as x}from"./index-CWY593ZO.js";const R="/cv/assets/dgtek-AY33nxil.png",E="/cv/assets/pineapple-C9c7K-ta.png",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20class='icon-open-in-new'%3e%3cstyle%3e%20.icon-open-in-new%20{%20fill:%20%23075;%20}%20.icon-open-in-new:hover%20{%20filter:%20brightness(0.5);%20}%20%3c/style%3e%3cpath%20d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3%203,3.9%203,5V19A2,2%200%200,0%205,21H19A2,2%200%200,0%2021,19V12H19V19Z'%20/%3e%3c/svg%3e",G="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Слой_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2067%2058.8'%20style='enable-background:new%200%200%2067%2058.8;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.yellow-letter{fill:%23FFA200;}%20.blue-letter{fill:%2309B;}%20%3c/style%3e%3cpath%20class='yellow-letter'%20d='M35.2,5.8l-5.7,34.1c-0.7,4.1-1.5,7-2.5,8.9c-1,1.9-2.8,3.5-5.4,4.9s-6,2-10.3,2c-2.5,0-5.2-0.3-8.1-0.8%20l1.4-8.7c1.7,0.3,3.3,0.5,4.8,0.5c2.9,0,4.9-0.4,6.1-1.2s1.9-1.8,2.2-3c0.3-1.2,1-4.7,2-10.4l4.4-26.3C24.1,5.8,35.2,5.8,35.2,5.8z'%20/%3e%3cpath%20class='blue-letter'%20d='M56.3,26.3c-2.2-1.1-5.2-2.1-9-3c-2.7-0.7-4.4-1.3-5.4-2c-0.9-0.7-1.4-1.7-1.4-3s0.6-2.5,1.7-3.4%20c1.2-0.9,2.7-1.4,4.7-1.4c4.2,0,6.9,1.9,8,5.8l9.6-2.2C61.8,8.8,56,4.8,46.9,4.8c-2.3,0-4.4,0.3-6.2,0.9l-4.3,24.9%20c1.9,1,4.4,1.9,7.6,2.8c3.5,1,5.8,1.8,6.8,2.5s1.5,1.8,1.5,3.3c0,1.6-0.6,2.9-1.9,3.9s-3.1,1.5-5.5,1.5c-5.3,0-8.5-2.3-9.5-7h-0.1%20L33,50.5c3.2,1.8,7,2.7,11.4,2.7c6,0,10.6-1.5,13.8-4.4c3.2-3,4.9-6.6,4.9-11c0-2.7-0.6-5.1-1.8-7C60.2,28.8,58.5,27.3,56.3,26.3z'%20/%3e%3c/svg%3e",P=`
The main parts of the portal are:

  • Partner provisioning portal
  • Admin provisioning portal

The admin dashboard provides various login options with different access rights.

The supervisor can change access rights settings, add new categories of rights, etc.
Supervisor can add new admins and set their roles and access rights.
The supervisor can change portal settings affecting the schemas of displayed data, calculation formulas, etc.

The main functions of the portal are:

Edit polygons showing the coverage area and search by address to determine the possible dates of connection of a customer.

Send requests and responses to partners.

Processing of client' connection requests from resellers, queue management, scheduling, setting up free lots depending on the number of connection teams.

Calculating the cost of connecting a client.

Creation of financial reports for shareholders.

Import/export DB of clients from/to Excel.

Using Telegram chat bot for emergency customer requests.

Reactive reflection of changes made by resellers in the admin portal, as well as in reseller portals of changes made by admins.

...A lot of other features.

___________________________________________

Google Maps, Geoscape, Google Charts for reports.`,L={class:"container"},q={key:0,class:"role"},z={key:1,class:"stack"},J={class:"stack-items"},I={key:0},F=k({__name:"ExpandedText",props:B({isActive:Boolean,text:String,role:{type:String,default:"Senior JS | Vue.js developer"},stack:{type:String,default:"Vue.js • Vue router • Vuex • Vuetify • REST API • web-workers • IndexedDB • npm registry"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const s=M(i,"modelValue"),o=i,a=b([]),l=b([]);function p(){let n=0;for(let e=0;e<a.length;e++){const u=a[e]||`
`;for(let m=0;m<u.length;m++)setTimeout(()=>{o.isActive&&(l[e]=u.slice(0,m+1))},4*n++)}s.value=!0}function h(){let n=0;for(let e=0;e<l.length;e++)for(let u=0;u<=l[e].length;u++)setTimeout(()=>{l[e]=l[e].slice(0,-1)},n++);return s.value=!1,new Promise(e=>e(!0))}return D(()=>{o.text?(a.push(...o.text.split(`
`)),l.push(...new Array(a.length).fill("")),h()):console.warn("props.text is not defined")}),S(o,async(n,e)=>{n.isActive?p():await h()}),(n,e)=>(c(),r("div",L,[i.isActive?(c(),r("div",q,[e[0]||(e[0]=g(" Role: ")),t("span",null,v(o.role),1)])):_("",!0),i.isActive?(c(),r("div",z,[e[1]||(e[1]=t("b",null,"Stack: ",-1)),t("span",J,v(o.stack),1)])):_("",!0),(c(!0),r(C,null,$(l,(u,m)=>(c(),r("p",{key:m},[u.length?(c(),r("span",I,v(u),1)):_("",!0)]))),128))]))}}),j=V(F,[["__scopeId","data-v-f9d71c25"]]),U={ref:"container-for-portal-description",class:"container"},K={key:0,class:"container"},Y=["width","height"],O=k({__name:"Portal",props:{isActive:Boolean},setup(i){let s=d(!1);const o=d(P),a=N("container-for-portal-description");b({width:320});let l=d(360),p=d(360*1.77777777777);return S(s,function(h){if(a.value){const n=a.value.getBoundingClientRect();l.value=n.width,p.value=Math.floor(n.width/1.77777777777)}}),(h,n)=>(c(),r("div",null,[t("div",U,[w(j,{isActive:i.isActive,text:o.value,modelValue:f(s),"onUpdate:modelValue":n[0]||(n[0]=e=>H(s)?s.value=e:s=e)},null,8,["isActive","text","modelValue"])],512),i.isActive&&f(s)?(c(),r("div",K,[t("iframe",{width:f(l),height:f(p),src:"https://www.youtube.com/embed/videoseries?list=PLaum0i8Jzw-uzioRfS95KUfMyH4Y3unkT&autoplay=1",title:"Portal",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Y)])):_("",!0)]))}}),T=`
Maintenance (content editing, customisation of the forms and complex form fields with validation, feedback customisation) of active pages (subdomains).

Creation and maintenance of new pages with a common start page (deploy without the need to set up subdomains).

Frontend: Vue.js, Vuetify, Nuxt

Backend: Node.js, Express.`,W={key:0,href:"https://garevna.github.io/pineapple-lands-editor",target:"_blank"},Z={__name:"Pineapple",props:{isActive:Boolean},setup(i){const s=d(T);return(o,a)=>(c(),r(C,null,[w(j,{text:s.value,isActive:i.isActive,role:"Senior Vue.js | Nuxt.js | Node.js developer",stack:"Vue.js • Nuxt.js • Vuex • Vuetify • Node.js • Express"},null,8,["text","isActive"]),i.isActive?(c(),r("a",W,a[0]||(a[0]=[t("button",{class:"demo"},[g(" Demo version "),t("img",{src:y,width:"24",height:"24",alt:"Open demo version",class:"highlighted-on-hover",style:{"vertical-align":"text-bottom"}})],-1)]))):_("",!0)],64))}},Q=V(Z,[["__scopeId","data-v-86386c14"]]),X={},ee={class:"logo-box"};function te(i,s){return c(),r("div",ee,s[0]||(s[0]=[t("span",{class:"over"},"Lessons",-1),t("span",{class:"glitch"},"JS",-1),t("span",{class:"noise"},null,-1)]))}const se=V(X,[["render",te],["__scopeId","data-v-1061ceee"]]),oe={class:"highlighted-on-hover"},ne={class:"highlighted-on-hover"},ie={class:"button"},le=k({__name:"Portfolio",setup(i){let s=d(!1),o=d(!1);A("source-data",x(()=>s.value?P:o.value?T:"")),A("target-component",x(()=>s.value?"dgtek":o.value?"pineapple":""));function a(){s.value=!s.value,o.value=s.value?!1:o.value}function l(){o.value=!o.value,s.value=o.value?!1:s.value}const p=x(()=>s.value?"▲":"▼"),h=x(()=>o.value?"▲":"▼");return(n,e)=>(c(),r("main",null,[e[5]||(e[5]=t("h2",null,"Portfolio",-1)),t("button",{onClick:a,class:"button"},[e[1]||(e[1]=t("img",{src:R,alt:"DGtek logo",width:"64"},null,-1)),t("h4",null,[e[0]||(e[0]=g(" Portal ")),t("span",oe,v(p.value),1)])]),w(O,{isActive:f(s)},null,8,["isActive"]),t("button",{onClick:l,class:"button"},[e[3]||(e[3]=t("img",{src:E,alt:"Pineapple logo",width:"52"},null,-1)),t("h4",null,[e[2]||(e[2]=g(" CMS ")),t("span",ne,v(h.value),1)])]),w(Q,{isActive:f(o)},null,8,["isActive"]),t("button",ie,[w(se,{width:"56px",heigh:"56px"}),e[4]||(e[4]=t("h4",null,[g(" JS-lessons "),t("a",{href:"https://garevna.github.io/js-lessons/",target:"_blank",rel:"noopener"},[t("img",{src:y,width:"24",height:"24",alt:"JS-lessons",class:"highlighted-on-hover"})])],-1))]),e[6]||(e[6]=t("button",{class:"button"},[t("img",{src:G,width:"64",height:"64",alt:"js-quiz"}),t("h4",null,[g(" JS-lessons "),t("a",{href:"https://garevna.github.io/js-quiz/",target:"_blank",rel:"noopener"},[t("img",{src:y,width:"24",height:"24",alt:"JS-quiz",class:"highlighted-on-hover"})])])],-1))]))}});export{le as default};
