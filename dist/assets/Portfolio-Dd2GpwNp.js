import{d as v,r as g,w as b,c as n,t as p,a as f,b as r,e as k,F as m,f as A,o as a,_ as x,u as T,g as h,h as D,i as y,j as _}from"./index-C0EYIW8O.js";const P="/cv/assets/dgtek-AY33nxil.png",w="/cv/assets/JS-tH2WMQZP.gif",S=`
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

Google Maps, Geoscape, Google Charts for reports.`,B={key:0,class:"grey"},C={key:1,class:"stack"},V={key:0},q=v({__name:"ExpandedText",props:{isActive:Boolean,sourceData:{type:Array,required:!0},role:{type:String,default:"Senior developer"},stack:{type:String,default:"Vue.js • Vue router • Vuetify • REST API • web-workers • IndexedDB"}},setup(l){const s=l,o=g(new Array(s.sourceData.length).fill(""));function c(){let e=0;for(let t=0;t<s.sourceData.length;t++){const i=s.sourceData[t]||`
`;for(let d=0;d<i.length;d++)setTimeout(()=>{o[t]=i.slice(0,d+1)},4*e++)}}function u(){let e=0;for(let t=0;t<o.length;t++)for(let i=0;i<=o[t].length;i++)setTimeout(()=>{o[t]=o[t].slice(0,-1)},e++);return new Promise(t=>t(!0))}return b(s,async(e,t)=>{e.isActive?c():await u()}),(e,t)=>(a(),n(m,null,[l.isActive?(a(),n("div",B,"Role: "+p(s.role),1)):f("",!0),l.isActive?(a(),n("div",C,[t[0]||(t[0]=r("b",null,"Stack: ",-1)),k(p(s.stack),1)])):f("",!0),(a(!0),n(m,null,A(o,(i,d)=>(a(),n("p",{key:d},[i.length?(a(),n("span",V,p(i),1)):f("",!0)]))),128))],64))}}),j=x(q,[["__scopeId","data-v-4300ab0b"]]),E={ref:"container-for-portal-description",class:"container"},R={key:0,class:"container"},M=["width","height"],$=v({__name:"Portal",props:{isActive:Boolean},setup(l){const s=g(S.split(`
`)),o=T("container-for-portal-description");g({width:320});let c=h(360),u=h(360*1.77777777777);return D(()=>{if(o.value){const e=o.value.getBoundingClientRect();c.value=e.width,u.value=Math.floor(e.width/1.77777777777)}}),(e,t)=>(a(),n(m,null,[r("div",E,[y(j,{isActive:l.isActive,sourceData:s},null,8,["isActive","sourceData"])],512),l.isActive?(a(),n("div",R,[r("iframe",{width:_(c),height:_(u),src:"https://www.youtube.com/embed/videoseries?list=PLaum0i8Jzw-uzioRfS95KUfMyH4Y3unkT&autoplay=1",title:"Portal",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,M)])):f("",!0)],64))}}),G=v({__name:"Portfolio",setup(l){let s=h(!1),o=h("▼");function c(){s.value=!s.value,o.value=s.value?"▲":"▼"}return(u,e)=>(a(),n("main",null,[e[1]||(e[1]=r("h2",null,"Portfolio",-1)),r("button",{onClick:c},[e[0]||(e[0]=r("img",{src:P,alt:"DGtek logo",width:"64"},null,-1)),r("h4",null,"Portal "+p(_(o)),1)]),r("div",null,[y($,{isActive:_(s)},null,8,["isActive"])]),e[2]||(e[2]=r("a",{href:"https://garevna.github.io/js-lessons/",target:"_blank",rel:"noopener"},[r("img",{width:"64",src:w,alt:"js-lessons icon"})],-1)),e[3]||(e[3]=r("a",{href:"https://garevna.github.io/js-quiz/",target:"_blank",rel:"noopener"},[r("img",{width:"64",src:w,alt:"js-quiz icon"})],-1))]))}});export{G as default};
