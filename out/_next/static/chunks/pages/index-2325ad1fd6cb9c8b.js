(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(9703),a=r(7294),l=r(7375);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var o=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=a.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,l=s(e,o);return a.createElement("img",c({width:r,height:t,ref:n,alt:i},l))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,h=e.src,f=e.srcSet,x=e.align,j=e.fit,g=e.loading,m=e.ignoreFallback,p=e.crossOrigin,b=s(e,d),v=null!=g||m||void 0===r&&void 0===o,k=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,c=e.onError,s=e.crossOrigin,o=e.sizes,d=e.ignoreFallback,u=(0,a.useState)("pending"),h=u[0],f=u[1];(0,a.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,a.useRef)(),j=(0,a.useCallback)((function(){if(r){g();var e=new Image;e.src=r,s&&(e.crossOrigin=s),t&&(e.srcset=t),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){g(),f("loaded"),null==i||i(e)},e.onerror=function(e){g(),f("failed"),null==c||c(e)},x.current=e}}),[r,s,t,o,i,c,n]),g=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,l.Gw)((function(){if(!d)return"loading"===h&&j(),function(){g()}}),[h,j,d]),d?"loaded":h}(c({},e,{ignoreFallback:v})),y=c({ref:n,objectFit:j,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||a.createElement(t.m$.img,c({as:u,className:"chakra-image__placeholder",src:r},y)):a.createElement(t.m$.img,c({as:u,src:h,srcSet:f,crossOrigin:p,loading:g,className:"chakra-image"},y))}));i.Ts&&(h.displayName="Image")},8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3884)}])},603:function(e,n,r){"use strict";r.d(n,{Et:function(){return s},Pg:function(){return o}});var t=r(5893),i=r(1664),a=r(8527),l=r(4651),c=r(917),s=function(e){var n=e.children,r=e.id,c=e.title,s=e.thumbnail;return(0,t.jsx)(a.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(r),children:(0,t.jsxs)(a.fG,{cursor:"pointer",children:[(0,t.jsx)(l.Ee,{src:s,alt:c,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(a.AB,{href:"/works/".concat(r),children:(0,t.jsx)(a.xv,{mt:2,fontSize:20,children:c})}),(0,t.jsx)(a.xv,{fontSize:14,children:n})]})})})},o=function(){return(0,t.jsx)(c.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(2023),a=r(9008),l=r(603),c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(a.default,{children:[(0,t.jsxs)("title",{children:[r," - Juan Martin Ruiz"]}),(0,t.jsx)("meta",{name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"og:title",content:r})]}),n,(0,t.jsx)(l.Pg,{})]})})}},3562:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(4632).Z.p(t());n.Z=i},7578:function(e,n,r){"use strict";var t=r(5893),i=r(2023),a=r(6052),l=(0,a.m$)(i.E.div,{shouldForwardProp:function(e){return(0,a.x9)(e)||"transition"===e}});n.Z=function(e){var n=e.children,r=e.delay,i=void 0===r?0:r;return(0,t.jsx)(l,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:n})}},3884:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return k}});var t=r(5893),i=r(1664),a=r(8527),l=r(949),c=r(4651),s=r(5193),o=r(894),d=r(8485),u=r(3562),h=r(4632);function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(){var e=f(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return x=function(){return e},e}function j(){var e=f(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return j=function(){return e},e}var g=(0,h.Z)(a.xu)(x()),m=h.Z.span(j()),p=r(2857),b=r(7578),v=r(2370),k=function(){return(0,t.jsx)(p.Z,{children:(0,t.jsxs)(a.W2,{children:[(0,t.jsx)(a.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:(0,l.ff)("whiteAlpha.500","whiteAlpha.200"),children:"Hello, I'm a full-stack developer based in Argentina!"}),(0,t.jsxs)(a.xu,{display:{md:"flex"},children:[(0,t.jsxs)(a.xu,{flexGrow:1,children:[(0,t.jsx)(a.X6,{as:"h2",variant:"page-title",children:"Juan Martin Ruiz"}),(0,t.jsx)("p",{children:"Full Stack Developer (React / Node and Databases)"})]}),(0,t.jsx)(a.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,t.jsx)(c.Ee,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",maxWidth:"100px",display:"inline-block",borderRadius:"full",src:"/images/perfil-prueba.jpg",alt:"Profile image"})})]}),(0,t.jsxs)(b.Z,{delay:.1,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Work"}),(0,t.jsx)(u.Z,{children:"I am a full-time developer based in Buenos Aires with a passion for creating digital things / services. When I'm not online, I love to go for a run."}),(0,t.jsx)(a.xu,{align:"center",my:4,children:(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.zx,{rightIcon:(0,t.jsx)(d.XC,{}),colorScheme:"teal",children:"My portfolio"})})})]}),(0,t.jsxs)(b.Z,{delay:.2,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Bio"}),(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"1985"}),"Born in Capitan Sarmiento, Argentina."]}),(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"2010"}),"I have completed different courses related to Java, JS, SQL, etc."]}),(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"2013"}),"Worked at Kikai Labs"]}),(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"2017 to present"}),"Works as a freelance"]})]}),(0,t.jsxs)(b.Z,{delay:.3,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"I \u2665"}),(0,t.jsx)(u.Z,{children:"Art, Music, Running, Football"})]}),(0,t.jsxs)(b.Z,{delay:.3,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"On the web"}),(0,t.jsxs)(a.aV,{children:[(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://github.com/jmr85",target:"_blank",children:(0,t.jsx)(s.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(o.JO,{as:v.JOq}),children:"@jmr85"})})}),(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://twitter.com/juanmartinruiz",target:"_blank",children:(0,t.jsx)(s.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(o.JO,{as:v.JUd}),children:"@juanmartinruiz"})})}),(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://www.linkedin.com/in/juanmartinruiz/",target:"_blank",children:(0,t.jsx)(s.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(o.JO,{as:v.gXb}),children:"Linkedin"})})})]})]})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);