(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},995:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var r=i(260),s=i(8203),a=i(5155),o=i.n(a),n=i(7292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);i.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,7200)),"C:\\Users\\geveg\\projects\\maasec.com\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,9826))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,1354)),"C:\\Users\\geveg\\projects\\maasec.com\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,9826))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\geveg\\projects\\maasec.com\\src\\app\\page.tsx"],m={require:i,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8987:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,3219,23)),Promise.resolve().then(i.t.bind(i,4863,23)),Promise.resolve().then(i.t.bind(i,5155,23)),Promise.resolve().then(i.t.bind(i,802,23)),Promise.resolve().then(i.t.bind(i,9350,23)),Promise.resolve().then(i.t.bind(i,8530,23)),Promise.resolve().then(i.t.bind(i,8921,23))},2131:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,6959,23)),Promise.resolve().then(i.t.bind(i,3875,23)),Promise.resolve().then(i.t.bind(i,8903,23)),Promise.resolve().then(i.t.bind(i,7174,23)),Promise.resolve().then(i.t.bind(i,4178,23)),Promise.resolve().then(i.t.bind(i,7190,23)),Promise.resolve().then(i.t.bind(i,1365,23))},4103:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,1066,23))},3423:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,1902,23))},5245:()=>{},9213:()=>{},1066:(e,t,i)=>{let{createProxy:r}=i(3439);e.exports=r("C:\\Users\\geveg\\projects\\maasec.com\\node_modules\\next\\dist\\client\\image-component.js")},2326:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),i(5843);let r=i(6749),s=i(2833);function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var i,n;let l,c,d,{src:m,sizes:h,unoptimized:u=!1,priority:p=!1,loading:x,className:f,quality:g,width:v,height:b,fill:y=!1,style:w,overrideSrc:j,onLoad:N,onLoadingComplete:k,placeholder:P="empty",blurDataURL:C,fetchPriority:M,decoding:_="async",layout:S,objectFit:A,objectPosition:z,lazyBoundary:E,lazyRoot:O,...q}=e,{imgConf:R,showAltText:G,blurComplete:I,defaultLoader:L}=t,U=R||s.imageConfigDefault;if("allSizes"in U)l=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=null==(i=U.qualities)?void 0:i.sort((e,t)=>e-t);l={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=q.loader||L;delete q.loader,delete q.srcSet;let W="__next_img_default"in D;if(W){if("custom"===l.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:i,...r}=t;return e(r)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!h&&(h=t)}let H="",B=o(v),F=o(b);if((n=m)&&"object"==typeof n&&(a(n)||void 0!==n.src)){let e=a(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,H=e.src,!y){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let T=!p&&("lazy"===x||void 0===x);(!(m="string"==typeof m?m:H)||m.startsWith("data:")||m.startsWith("blob:"))&&(u=!0,T=!1),l.unoptimized&&(u=!0),W&&!l.dangerouslyAllowSVG&&m.split("?",1)[0].endsWith(".svg")&&(u=!0);let V=o(g),$=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:z}:{},G?{}:{color:"transparent"},w),J=I||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:c,blurHeight:d,blurDataURL:C||"",objectFit:$.objectFit})+'")':'url("'+P+'")',Y=J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:i,unoptimized:r,width:s,quality:a,sizes:o,loader:n}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>n({config:t,src:i,quality:a,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:n({config:t,src:i,quality:a,width:l[d]})}}({config:l,src:m,unoptimized:u,width:B,quality:V,sizes:h,loader:D});return{props:{...q,loading:T?"lazy":x,fetchPriority:M,width:B,height:F,decoding:_,className:f,style:{...$,...Y},sizes:K.sizes,srcSet:K.srcSet,src:j||K.src},meta:{unoptimized:u,priority:p,placeholder:P,fill:y}}}},6749:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:s,blurDataURL:a,objectFit:o}=e,n=r?40*r:t,l=s?40*s:i,c=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2833:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},8516:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return n}});let r=i(3264),s=i(2326),a=i(1066),o=r._(i(6352));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/maasec.com/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=a.Image},6352:(e,t)=>{"use strict";function i(e){var t;let{config:i,src:r,width:s,quality:a}=e,o=a||(null==(t=i.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return i.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+o+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},5843:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},1354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(2740);function s({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:"font-mono antialiased",children:e})})}i(1135)},7200:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>j});var r=i(2740),s=i(6301);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},m)=>(0,s.createElement)("svg",{ref:m,...n,width:t,height:t,stroke:e,strokeWidth:r?24*Number(i)/Number(t):i,className:o("lucide",a),...d},[...c.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(l)?l:[l]])),c=(e,t)=>{let i=(0,s.forwardRef)(({className:i,...r},n)=>(0,s.createElement)(l,{ref:n,iconNode:t,className:o(`lucide-${a(e)}`,i),...r}));return i.displayName=`${e}`,i},d=c("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),m=c("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),h=c("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),u=c("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),p=c("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),x=c("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),f=c("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var g=i(8516),v=i.n(g);let b=[{label:"About",id:"about"},{label:"Operations",id:"operations"},{label:"Contact",id:"contact"}];function y(){return(0,r.jsx)("header",{className:"fixed w-full z-50 transition-all duration-300 bg-white shadow-md",children:(0,r.jsxs)("nav",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(v(),{src:"../../public/acm.svg",alt:"ACM logo",width:64,height:64}),(0,r.jsx)("span",{className:"font-archivo font-bold text-xl text-black",children:"at Maastricht University"})]}),(0,r.jsx)("div",{className:"hidden md:flex gap-8 font-archivo",children:b.map(e=>(0,r.jsx)("a",{href:`#${e.id}`,className:"hover:text-black transition-colors border-b-2 text-gray-500",children:e.label},e.id))})]})})}function w(){return(0,r.jsx)("footer",{className:"bg-black py-12 border-t border-white/20 ",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-4 font-archivo text-white",children:"ACM Student Chapter of Maastricht University"}),(0,r.jsx)("p",{className:"text-white",children:"Sharing our passion of computation."}),(0,r.jsxs)("p",{className:"mt-4 text-white",children:[(0,r.jsx)("strong",{children:"Contact us:"})," ",(0,r.jsx)("a",{href:"mailto:acm@maasec.com",className:"text-blue-400",children:"acm@maasec.com"})]})]}),(0,r.jsx)("div",{className:"flex flex-col md:items-end",children:(0,r.jsx)("div",{className:"space-x-4"})})]}),(0,r.jsxs)("div",{className:"mt-8 pt-8 border-t border-white/20 text-center",children:[(0,r.jsxs)("p",{className:"text-white",children:["\xa9 ",new Date().getFullYear()," ACM Student Chapter of Maastricht University"]}),(0,r.jsxs)("p",{className:"mt-2 text-gray-400 font-archivo",children:[">//"," Made with ❤️ by irdi and dimitri @ maasec"]})]})]})})}function j(){let e=[{icon:(0,r.jsx)(d,{className:"w-12 h-12 mb-4 text-green-600"}),title:"Competitive Programming",description:"Participate in algorithmic problem-solving contests and hackathons"},{icon:(0,r.jsx)(m,{className:"w-12 h-12 mb-4 text-blue-400"}),title:"Project Development",description:"Collaborate on open-source software projects and build innovative solutions"},{icon:(0,r.jsx)(h,{className:"w-12 h-12 mb-4 text-purple-400"}),title:"Tech Talks & Seminars",description:"Attend guest lectures and seminars to explore emerging tech trends"},{icon:(0,r.jsx)(u,{className:"w-12 h-12 mb-4 text-brown-400"}),title:"Study Groups",description:"Join study sessions to enhance your understanding of computer science topics"},{icon:(0,r.jsx)(p,{className:"w-12 h-12 mb-4 text-red-400"}),title:"Hackathons",description:"Compete in team-based hackathons to develop creative tech solutions"},{icon:(0,r.jsx)(x,{className:"w-12 h-12 mb-4 text-yellow-400"}),title:"Innovation Challenges",description:"Collaborate with peers to brainstorm and develop creative solutions to various challenges"}];return(0,r.jsxs)("div",{className:"min-h-screen text-black bg-white",children:[(0,r.jsx)(y,{}),(0,r.jsx)("section",{className:"min-h-screen flex items-center relative overflow-hidden",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 py-20 text-center relative -mt-32",children:[(0,r.jsxs)("h1",{className:"text-4xl md:text-6xl font-bold mb-6 font-archivo",children:[(0,r.jsx)("span",{className:"text-black block",children:"ACM Student Chapter"}),(0,r.jsx)("span",{className:"text-black block",children:"MAASEC"})]}),(0,r.jsx)("p",{className:"text-xl md:text-2xl text-black mb-8 font-archivo",children:"Empowering students through technology and cybersecurity education"}),(0,r.jsx)("div",{className:"flex gap-4 justify-center",children:(0,r.jsx)("a",{href:"#contact",className:"group bg-white border border-gray-700 px-8 py-3 rounded hover:border-black hover:text-black transition-all duration-300 font-archivo",children:"Join Operation"})})]})}),(0,r.jsx)("section",{id:"about",className:"py-20 relative -mt-64",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center font-archivo text-black-400",children:"About Us"}),(0,r.jsx)("div",{className:"max-w-3xl mx-auto text-center",children:(0,r.jsx)("p",{className:"text-lg text-black mb-6 font-archivo",children:"We are a group of students and professionals united under the ACM banner, dedicated to fostering a community of learners and innovators. Our mission is to promote hands-on experience, collaborative learning, and skill development across various fields, empowering everyone to grow and thrive in the ever-evolving world of technology."})})]})}),(0,r.jsx)("section",{id:"operations",className:"py-20 relative bg-white/100",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center font-archivo text-black",children:"Operations"}),(0,r.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((e,t)=>(0,r.jsxs)("div",{className:"bg-white/100 p-6 rounded-lg border border-black/20 hover:border-black-400 transition-all duration-300 text-center group",children:[(0,r.jsx)("div",{className:"transform group-hover:scale-110 transition-transform duration-300",children:e.icon}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-4 font-archivo text-black-400",children:e.title}),(0,r.jsx)("p",{className:"text-black",children:e.description})]},t))})]})}),(0,r.jsx)("section",{id:"contact",className:"py-20 relative bg-white/100",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-8 font-archivo text-black",children:"Join The Operation"}),(0,r.jsx)("p",{className:"text-xl text-black mb-8 font-archivo",children:"Ready to explore the frontiers of technology and innovation?"}),(0,r.jsx)("a",{href:"https://github.com/MaaSecLab",className:"text-white hover:bg-gray-200 transition-colors",children:(0,r.jsx)(f,{className:"w-10 h-10 inline text-black"})}),(0,r.jsx)("a",{href:"https://discord.com/invite/ghpWe7wawV",className:"text-white hover:bg-gray-200 transition-colors",children:(0,r.jsx)(v(),{src:"../../public/discord.svg",alt:"discord",className:"w-10 h-10 inline"})}),(0,r.jsx)("a",{href:"https://ctftime.org/team/365940",className:"text-white hover:bg-gray-200 transition-colors",children:(0,r.jsx)(v(),{src:"../../public/ctftime.png",alt:"ctftime",className:"w-10 h-10 inline"})})]})}),(0,r.jsx)(w,{})]})}},9826:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)("/maasec.com",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[638,403,512],()=>i(995));module.exports=r})();