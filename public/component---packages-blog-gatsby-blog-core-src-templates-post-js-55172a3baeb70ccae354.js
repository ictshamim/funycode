(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_education=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_education||[]).push([[621],{5365:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},9090:function(t,e,r){var n=r(5365);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},639:function(t,e,r){var n=r(7276),o=r(7321);function i(e,r,l){return o()?(t.exports=i=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.default=t.exports,t.exports.__esModule=!0),i.apply(null,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},7321:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},8850:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},5929:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},6292:function(t,e,r){var n=r(9090),o=r(8850),i=r(4595),l=r(5929);t.exports=function(t){return n(t)||o(t)||i(t)||l()},t.exports.default=t.exports,t.exports.__esModule=!0},4595:function(t,e,r){var n=r(5365);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],l=e(i);n[l]||(r.push(i),n[l]=!0)}return r}},1437:function(t,e,r){var n=r(9263);t.exports={MDXRenderer:n}},9263:function(t,e,r){var n=r(639),o=r(6292),i=r(5526),l=r(5600),s=["scope","children"];function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7378),f=r(1368).mdx,p=r(5172).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=l(t,s),a=p(e),d=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:f},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return u.createElement(d,c({},i))}},8992:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return X}});var n=r(9603),o=r(6250),i=r(120),l=r(7378),s=r(8945),a=r(4990),c=r(7425),u=r(4404),f=r(4459),p=r(8113),d=r(72),g=(0,d.ZP)((function(){return r.e(722).then(r.bind(r,722))})),b=(0,d.ZP)((function(){return r.e(521).then(r.bind(r,5521))})),v=r(3450),y=r(4626),m=r(1025),h=r(7125),x=r(6495);function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){(0,v.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={regular:{minHeight:"23rem",img:{borderRadius:"lg"}},wide:{img:{borderRadius:"lg"}},inCard:{mt:-4,mx:-4,img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}},inCardLarge:{mt:[-4,-5],mx:[-4,-5],img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}}},k=function(t){var e=t.title,r=t.thumbnail,n=t.wide,o=t.full,i=t.inCard,s=t.inCardLarge;if(!r)return null;var a=(n?"wide":o&&"full")||"regular",c=(0,h.Z)(r,"hero");return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(y.G,{image:c,alt:e,css:(0,m.i)(O(O(O({},w[a]),i&&w.inCard),s&&w.inCardLarge)),imgStyle:"wide"===a||"full"===a?w.full:void 0}),(0,x.tZ)(f.Z,{space:3}))},P=r(1437),j=r(5013),_=r(7566),S={heading:{svg:{visibility:"hidden",size:"icon.xs",position:"absolute",top:"50%",transform:"translate(0,-50%)",pl:2},":hover svg":{visibility:"visible"},pointerEvents:"painted"},link:{position:"relative"}},D=function(t){return function(e){return(0,x.tZ)(t,(0,n.Z)({},e,{css:(0,m.i)(S.heading)}),(0,x.tZ)(s.rU,{href:"#"+e.id,variant:"text."+t,sx:S.link},e.children,(0,x.tZ)(_.gjK,null)))}},C={h1:D("h1"),h2:D("h2"),h3:D("h3")},M=function(t){return(0,x.tZ)("figure",(0,n.Z)({},t,{css:(0,m.i)((function(t){return t.styles.figure}))}),t.children)},A=function(t){return(0,x.tZ)("figcaption",(0,n.Z)({},t,{css:(0,m.i)((function(t){return t.styles.figcaption}))}),t.children)},R=(0,d.ZP)((function(){return r.e(482).then(r.bind(r,482))}));function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var T=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){(0,v.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({figure:M,figcaption:A,pre:function(t){return t.children},code:function(t){return(0,x.tZ)(R,(0,n.Z)({},t,{fallback:(0,x.tZ)(j.RQ.pre,null,t.children)}))}},C),I=function(t){var e=t.body;return(0,x.tZ)(j.Zo,{components:T},(0,x.tZ)(P.MDXRenderer,null,e))},L=r(5414),U={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0}},B=function(t){var e=t.tags;return e&&e.length>0?(0,x.tZ)(s.kC,{sx:U.wrapper},(0,x.tZ)(s.X6,{variant:"h5",sx:U.heading},"Tags"),(0,x.tZ)(s.xu,{variant:"lists.badges"},e.map((function(t){var e=t.id,r=t.name,n=t.slug;return(0,x.tZ)(s.Ct,{variant:"tag",key:e,as:L.Link,to:n},r)})))):null},F={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},z=function(t){return(0,x.tZ)(s.xu,null,(0,x.tZ)(s.iz,null),(0,x.tZ)(s.kC,{sx:F.flex},(0,x.tZ)(B,t),(0,x.tZ)(b,t)))},N=["data"],X=function(t){var e=t.data,r=e.post,l=e.tagCategoryPosts,d=e.tagPosts,b=e.categoryPosts,v=(e.previous,e.next,(0,i.Z)(t,N)),y=[].concat((0,o.Z)(l?l.nodes:[]),(0,o.Z)(d?d.nodes:[]),(0,o.Z)(b?b.nodes:[])),m=v.pageContext,h=(m=void 0===m?{}:m).services,Z=void 0===h?{}:h,O=m.siteUrl;return(0,x.tZ)(a.Ar,v,(0,x.tZ)(p.Z,(0,n.Z)({},r,{siteUrl:O})),(0,x.tZ)(f.Z,null),(0,x.tZ)(a.Kq,{effectProps:{effect:"fadeInDown"}},(0,x.tZ)(a.or,null,(0,x.tZ)(u.Z,(0,n.Z)({},r,{variant:"horizontal-hero",omitExcerpt:!0,omitMedia:!0,omitCategory:r.category})))),(0,x.tZ)(f.Z,{space:1}),(0,x.tZ)(a.Kq,{effectProps:{fraction:0}},(0,x.tZ)(a.or,null,(0,x.tZ)(s.Zb,{variant:"paper-lg"},(0,x.tZ)(k,(0,n.Z)({},r,{inCard:!0})),(0,x.tZ)(I,r),(0,x.tZ)(z,(0,n.Z)({},r,{location:v.location})),Z.disqus&&(0,x.tZ)(g,r)),(0,x.tZ)(f.Z,null),r.category&&(0,x.tZ)(c.Z,{title:"Related Posts",nodes:y,variant:["horizontal-md"],columns:[1,2,2,2],limit:6,distinct:!0}))))}},7425:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(9603),o=r(120),i=r(7378),l=r(8945),s=r(6741),a=r(8175),c=r(8676),u=r.n(c),f=r(7619),p=r(3450),d=r(503),g=r(1025),b=r(7566),v={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},y=r(72),m=r(6495);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Z=(0,y.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),O=i.forwardRef((function(t,e){var r=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,s=t.autoPlay,a=t.autoplaySpeed,c=t.fade,u=t.dots,f=t.arrows,p=t.centerMode,y=t.centerPadding,h=t.controlPosition,O=t.beforeChange,w=t.children,k=(0,d.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},j={centerMode:!c,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!c)},_=k.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:x({slidesToShow:n,slidesToScroll:i},0===e?j:{})}})),S={ref:e,beforeChange:O,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:u,arrows:f,centerMode:p,centerPadding:y,infinite:!0,cssEase:c?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:c,responsive:_,css:(0,g.i)(x(x(x(x({},c?v.fade:v.slide),"bottom"===h&&v.controlBottom),"center"===h&&v.controlCenter),"over"===h&&v.controlOver)),prevArrow:(0,m.tZ)(l.hU,{sx:v.arrowPrev},(0,m.tZ)(b.bUI,null)),nextArrow:(0,m.tZ)(l.hU,{sx:v.arrowNext},(0,m.tZ)(b.Dli,null))};i&&(S=x(x(x({},S),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&s&&(S=x(x(x({},S),P),{},{speed:300,autoplaySpeed:a}));var D=w.slice(0,r[r.length-1]);return(0,m.tZ)(Z,(0,n.Z)({},S,{fallback:D}),w)})),w=O;O.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var k=r(4404),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],j=i.forwardRef((function(t,e){var r=t.nodes,i=t.variant,c=t.title,p=t.withTitleLink,d=t.limit,g=t.skip,b=t.distinct,v=t.slider,y=t.aside,h=t.asNavFor,x=t.loading,Z=(0,o.Z)(t,P),O=function(t,e){var r=e.limit,n=e.skip,o=e.distinct;if(!t)return null;if(!r&&!n&&!o)return t;var i=t;return o&&(i=u()(i,(function(t){return t.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:b,limit:d,skip:g});if(!O||!O.length)return null;var j=p?O[0].category&&O[0].category.slug:"",_=c&&""+(0,a.Z)(O.map((function(t){return t.id})).join()),S=(0,s.Z)(v?"lists.cards.slider":"lists.cards.fixed",i),D=function(t){h&&h.current&&(h.current.slickPause(),h.current.slickGoTo(t))},C=O.map((function(e,r){return(0,m.tZ)(k.Z,(0,n.Z)({key:e.id,variant:i,onMouseOver:function(){return D(r)},onFocus:function(){return D(r)},loading:t.fade?0===r?x:void 0:x},e,Z))})),M=function(){return(0,m.tZ)(l.xu,{sx:{variant:S}},v?(0,m.tZ)(w,(0,n.Z)({ref:e},Z),C):C)};return c?(0,m.tZ)(f.Z,{title:c,titleLink:j,key:_,aside:y},(0,m.tZ)(M,null)):(0,m.tZ)(M,null)})),_=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-post-js-55172a3baeb70ccae354.js.map