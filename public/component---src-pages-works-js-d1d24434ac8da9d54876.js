(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2RVH":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("NrsX"),o=a("9eSz"),c=a.n(o),s=a("Wbzz"),d=a("aVtJ"),l=a.n(d),f=function(e){var t=e.image,a=e.item,i=e.backSideColor,o=e.backSideText,f=e.title,u=r.data;return n.a.createElement(s.Link,{className:a,to:"/"+t+"/"},n.a.createElement(l.a,{flipOnHover:!0,flipDirection:"horizontal"},n.a.createElement(d.FrontSide,{style:{padding:"0px"}},n.a.createElement(c.a,{fluid:u[t].childImageSharp.fluid})),n.a.createElement(d.BackSide,{style:{color:"black",backgroundColor:i,padding:"0px"}},n.a.createElement("h3",{style:{textAlign:"center"}},f),n.a.createElement("p",{style:{padding:"10px"}},o))))},u=(a("lDuu"),a("LbRr"));t.default=function(){return n.a.createElement("div",{className:"wrapperss"},n.a.createElement(u.a,null),n.a.createElement("div",{className:"grid"},n.a.createElement(f,{image:"puzzle",item:"grid__item__puzzle",title:"15 puzzle",backSideColor:"#664242",backSideText:"To solve the puzzle, the numbers must be rearranged into order (c) Wiki :D it's a boring project"}),n.a.createElement(f,{image:"canvas",item:"grid__item__canvas",title:"Canvas experiment",backSideColor:"white",backSideText:"My canvas experiment. bunch of circles hitting each other and change color. Don't ask why..."}),n.a.createElement(f,{image:"socket",item:"grid__item__socket",title:"Chat with socket.io",backSideColor:"#0C668D",backSideText:"One page two chat connections, build with React/Node/Socket.io client/Socket.io server"}),n.a.createElement(f,{image:"tetris",item:"grid__item__tetris",title:"Tetris",backSideColor:"#8b6b9e",backSideText:"Popular tetris game build with html canvas."}),n.a.createElement(f,{image:"winter",item:"grid__item__winter",title:"Winter challenge",backSideColor:"#16164c",backSideText:"The contest that I won and got shirt&cup. Only html+css was allowed. https://community.thenetninja.co.uk/t/december-challenge-winter-scene/83"}),n.a.createElement(f,{image:"bigBen",item:"grid__item__bigBen",title:"Clock challenge",backSideColor:"#8389a8",backSideText:"Contest to build realtime clock with only HTML/CSS/JS. https://community.thenetninja.co.uk/t/feb-code-challenge-js-clock/266"}),n.a.createElement(f,{image:"life",item:"grid__item__life",title:"Game of life",backSideColor:"#73b76e",backSideText:"Animated cells"})))}},"7sY2":function(e,t,a){"use strict";a("hHhE"),a("/SS/"),a("V+eJ"),a("8+KV"),a("0l/t"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("rE2o"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.BackSide=t.FrontSide=void 0;var i,n=(i=a("q1tI"))&&i.__esModule?i:{default:i};function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){s(e,t,a[t])}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return l(this,t),u(this,p(t).apply(this,arguments))}var a,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),a=t,(i=[{key:"render",value:function(){var e=this.props,t=e.className,a=e.cardType,i=e.style,r=e.elementType,o=e.animationDuration,s=d(e,["className","cardType","style","elementType","animationDuration"]);return n.default.createElement(r||"div",c({className:"flippy-card flippy-".concat(a," ").concat(t||"")},s,{style:c({},i||{},{transitionDuration:"".concat(o/1e3,"s")})}),this.props.children)}}])&&f(a.prototype,i),r&&f(a,r),t}(n.default.Component);t.FrontSide=function(e){e.isFlipped;var t=e.style,a=e.animationDuration,i=d(e,["isFlipped","style","animationDuration"]);return n.default.createElement(b,r({},i,{style:c({},t||{}),animationDuration:a,cardType:"front"}))};t.BackSide=function(e){e.isFlipped;var t=e.style,a=d(e,["isFlipped","style"]);return n.default.createElement(b,r({},a,{style:c({},t||{}),cardType:"back"}))},b.defaultProps={animationDuration:600}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("5NKs");t.__esModule=!0,t.default=void 0;var n,r=i(a("v06X")),o=i(a("XEEL")),c=i(a("uDP2")),s=i(a("j8BX")),d=i(a("q1tI")),l=i(a("17x9")),f=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(A&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(A&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t]}return e[0]},b=Object.create({}),m=function(e){var t=f(e),a=p(t);return b[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,A="undefined"!=typeof window,y=A&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),d.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+c+a+i+t+r+n+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,o=d.default.createElement(B,(0,s.default)({src:t},n,{ariaHidden:r}));return a.length>1?d.default.createElement("picture",null,i(a),o):o},B=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,l=e.onError,f=e.loading,u=e.draggable,p=e.ariaHidden,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:i,src:n},g,{onLoad:o,onError:l,ref:t,loading:f,draggable:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));B.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=A&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||A&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=p(t),b[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,c=void 0===o?{}:o,l=e.placeholderStyle,u=void 0===l?{}:l,p=e.placeholderClassName,b=e.fluid,m=e.fixed,h=e.backgroundColor,A=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=e.loading,C=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,s.default)({opacity:k?1:0,transition:z?"opacity "+A+"ms":"none"},c),x="boolean"==typeof h?"lightgray":h,V={transitionDelay:A+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&V,{},c,{},u),L={title:t,alt:this.state.isVisible?"":a,style:R,className:p,itemProp:v};if(b){var U=b,F=g(b);return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),x&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),F.base64&&d.default.createElement(T,{ariaHidden:!0,src:F.base64,spreadProps:L,imageVariants:U,generateSources:O}),F.tracedSVG&&d.default.createElement(T,{ariaHidden:!0,src:F.tracedSVG,spreadProps:L,imageVariants:U,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(U),d.default.createElement(B,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:a,title:t,loading:w},F,{imageVariants:U}))}}))}if(m){var P=m,N=g(m),G=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},r);return"inherit"===r.display&&delete G.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},x&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:x,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},z&&V)}),N.base64&&d.default.createElement(T,{ariaHidden:!0,src:N.base64,spreadProps:L,imageVariants:P,generateSources:O}),N.tracedSVG&&d.default.createElement(T,{ariaHidden:!0,src:N.tracedSVG,spreadProps:L,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(B,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:a,title:t,loading:w},N,{imageVariants:P}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),x=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});z.propTypes={resolutions:j,sizes:x,fixed:l.default.oneOfType([j,l.default.arrayOf(j)]),fluid:l.default.oneOfType([x,l.default.arrayOf(x)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var V=z;t.default=V},INYr:function(e,t,a){"use strict";var i=a("XKFU"),n=a("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},NrsX:function(e){e.exports=JSON.parse('{"data":{"canvas":{"id":"d5258479-b4df-57e8-aa9b-eeb0f55e33e7","childImageSharp":{"id":"93aaabd1-6bf4-52f6-9e6c-8d0ccb99b061","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABmElEQVQoz11SyU7DMBTsH/M7cOKA+AAQHDgggdgllsIJWtY2DV2JY8eJ98FxkpLwIsuj9/zG8ybuOedQrjLoUuLl8ifg2WKBjGcBj4dHYMlnwM5ZNGGMRs4ZnDawxsIzoVcdqgizlcTzeUmoIWWGhCS4eX9CsvqAVtmaaJpQxD8MqijwMXwNOetJy+i1FQqhwk74PhZ0E9Ebw8nRuFbmFdVNKS9AmIQARZRdw9IEzaFAaExFuLcT4Xh/7pH0NYZ4LtC/I6EmCxVWO7T/ltML2MEDZoJh43Srq1BJr8C6dcPu2QBXb9PKL+uCSrv2OwGnBVQlGtL7OUgmlYdtHxd+nEKp2nT/A1y3XsaEKnxFSwieg4q/S4KHwdA68RmNsX14ANVSOcoJUi0CZlxBCYPHmGGcqrVvCFNaz2O7I48mEW779wHnlENzia+CgMi8vBbfc454xpuZKgv8qEaJrkLtDIY6CokYnsg3G+Etl7UKk0OSO7TtaUQ073I1ukKRTpqRLVY2hfHExOYdT5pmZ/Uf/rfCU4v7EGyGXx8XB2eiyPgJAAAAAElFTkSuQmCC","aspectRatio":2.002688172043011,"src":"/static/694571ac70b19ed800e2eb9ed61ec83a/46604/canva.png","srcSet":"/static/694571ac70b19ed800e2eb9ed61ec83a/62d80/canva.png 125w,\\n/static/694571ac70b19ed800e2eb9ed61ec83a/e1953/canva.png 250w,\\n/static/694571ac70b19ed800e2eb9ed61ec83a/46604/canva.png 500w,\\n/static/694571ac70b19ed800e2eb9ed61ec83a/d8815/canva.png 750w,\\n/static/694571ac70b19ed800e2eb9ed61ec83a/31987/canva.png 1000w,\\n/static/694571ac70b19ed800e2eb9ed61ec83a/0aa13/canva.png 1490w","sizes":"(max-width: 500px) 100vw, 500px"}}},"puzzle":{"id":"93481b4d-d1f5-55e1-bc03-35d31a63cb45","childImageSharp":{"id":"28b9bac0-1bd4-5245-b212-0b7dc23d4566","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABJ0AAASdAHeZh94AAAEpUlEQVQ4y2VU228UdRT+bSm0UEqtJoSG3palFwSKBVpSDN4CKEi5FUmMMYaQqKCJAdHSLrTd7n1mZ2Z3dmdm223ptt1bt7SYLkTjExr+B2Piqz4YUB98//x22gaND2fPzJnvfL9zznd+K7rCaTQnFtCq59GUyKNLLeKoP42diQKc8QIajQIOSwX0hrL2s5O4nfRHQhkcUJfQpGfQGs+jmfG94XsQLm0OQlch1AhEVEIDAQekGYiYhAopBBEeR5uaxR6aUAJwlHERP/ZG5kl8HyIV57sMMZlAszK1RhjXseWrQVTeuolGvh+QZ3mAjJrbw3AMD6JTmsWe2AKEdwzVY16I8VHsU7JoMpdtXO0XNyEsAy3qNESHnEalmURNJIoN0SicWgY9QZZuGtgqaaiUwtgXyfKQDBw8eJsvbMe6pXm49EVUGAnUKDFUmBZccgridV8GfUoJfeoKemlvB1dw8S5JtRKO8r0nWkK/dxnnPIuMrTBWYuwhzo8t4J3QI/Qq39i5fcoKjvnYbZvCn9Q0NmmchWWhMVHEwTBbtkxUaQl7HJ3RBbaYh2A1VTGDsTi6Ijm0GA/sTjaVcakptCpsebeStpNrb3wJIQU46Dy6wxQl5EPNnREIzwg6lQxe1nJwjAyj2hew/X6K0mwsUZDQaq6ho6UsilNlhVMT2DA6SmUj2G4VsV/iIUlWrGkQQQ92k6w9VmBlChwRqiz5bdUbLFaY1FERCJCD3ZVFec0zjd5wjpbFISmD4748zrtT6JazOBKcx0GKcdqTRf/ILA7yux2jPzuSxkn/Ig6F5uzcHimLVz0UpbyMNUYKL2gmNicstGtZ9PmmUB23UB9L0pt4heSHmVjFbaiPTaDaSKI3OMvZFrGZ3+tVE1uMCXSESehSKMB0Cht9Pi62ggZzYXUP5SA2+QP2LNv04upixzVsufU1l9iwF7uxvIeJKKqH3BATJprLLTtVzitloNI9xATO0MxxhjP2s1B4A7QgXLE8OjhHkVBRfeMGCePYQ6EaLN4UU4UjyIPvJdGoTEL0cia7eQs6pTnsiuZwRF7GSc8cWilCh5qHk2RvBBfxppeqRtNol6bRrM3grfE59EVW7JwyzkWOQ8H0OmERbfEiL37hOaG+gI5owY4dC+TgvvA+3OcuYfjCZfoBDA18gJ7IMgnzaCfOpa8ROhW2N52Ew887amlrLfPqTeqoHOUephJoYUVlsttnTmGw/8yqJ/FLFseQjMHhG7dxjSpF6YhwkPcmUVNO5p41GTkqOmUD6gYHGVNZwQxGzg/AffY0iftxp/8U3Bff4yWgUJaOWvew7XeVZ9ggF6kQl1af54DnuRYltAf4z5IkWCaxmcEO+T4+7/8Q19+9hOtnLuOz0wO4fu4jbIs/pFDciAg7SuawXWbFd6Ur8OvX4I19SrsGf/RjBJUr9rOXcX/8GmT9KmLeE1DHjkMZPUGjHztJ7Cc2Zh03FLgKge8F8CPtMe2Hf9njtfh3Ar8vOvBnaSPfK4An6+b4L/aJwN/LVRC/Lr2IPx5tw9OH/7dnjP/2oA4/ZerxS6EOT1dq8ay0dc1qn2NLdfjr21r8PL8D/wDoF5jfvfBgvAAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/9597bcdf710595db55c19231f4ce602f/0a8d8/puzzl.png","srcSet":"/static/9597bcdf710595db55c19231f4ce602f/905ea/puzzl.png 125w,\\n/static/9597bcdf710595db55c19231f4ce602f/1b5b9/puzzl.png 250w,\\n/static/9597bcdf710595db55c19231f4ce602f/0a8d8/puzzl.png 400w","sizes":"(max-width: 400px) 100vw, 400px"}}},"bigBen":{"id":"5e72da55-15a2-55b7-959c-d1fbd4ce1749","childImageSharp":{"id":"1968b683-6b11-516d-a5d4-e4ce35269d1a","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABJ0AAASdAHeZh94AAACPElEQVQoz1WP20/TcBzF+19qNIoYImEqMObc2K1rf/313nWXrl3XlnVru3Y3XRbXh2HQEQgYmZcoIUGCBngwIg9LjM82PJCZnKeT8znf80UA490Ip900sFHSmTUDYZS7YW32+rvXGY/kXE60ccZDZkk61/VHB3brbcAT1ybBelmyKUr984vfvy6nBXmAUV4S08PPecC0kOtEC3LtFG65ne3p9O/k0wlK2IB2b3oh21I0X9Z9yLVwpqNXFEvNcqIbwC5GOTjlkHwnuCypQ6H4kuC7MNeb5VHoBArCgO0k0zAUWsgAA8GZrlSsVyuWrA9rDV8zh7rp81FOWBcB176Bg/2BMLrN5+rpxEokHMpmoshajDPUYk1vqLXNs/OfW+OPKLQJ2MDwWvAO/t94L0V4jmke7VXej52vYxHJE0sdPalXG5o5+nL4oz/YAbSHUzbk2xhpBTygmoBuEkyToB2U6tQ15epicnn15/TARCRioSlH3MYGy0jRlFbOSzHU0GQlnjXKRQUlDEFQabZKMlpeVOPoxqhbuvhsf5v0zj5oyNBKvenBvkW2DCxHxQc2ZEHsVZPkYbxbAyU+4VSzRimjFdKejgkwtu+Lx+P84WvmdE9GyuTiCyNuS6uN4oqQeeApES4911ajIjpfL6wUwUK9sKxQizL5yCmH6cS9dz73fV853pbOJzrCJOccaU0XnqpsCI3cMQurqdXbVimMPbtbYR/D9fsKvcRlHjKpeV14kly+tTugT3ZKR1tiUPEP+3WFFgC2fHIAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/fe96e5a60d43119d3e4da34ac8384383/ea6a1/bigBen.png","srcSet":"/static/fe96e5a60d43119d3e4da34ac8384383/b1930/bigBen.png 200w,\\n/static/fe96e5a60d43119d3e4da34ac8384383/6fc38/bigBen.png 400w,\\n/static/fe96e5a60d43119d3e4da34ac8384383/ea6a1/bigBen.png 800w,\\n/static/fe96e5a60d43119d3e4da34ac8384383/e4796/bigBen.png 1200w,\\n/static/fe96e5a60d43119d3e4da34ac8384383/48a8b/bigBen.png 1438w","sizes":"(max-width: 800px) 100vw, 800px"}}},"socket":{"id":"82e1c222-153c-56b8-a6aa-21fd698f9383","childImageSharp":{"id":"53df9c18-9a61-5014-9585-8731f33db602","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABJ0AAASdAHeZh94AAABuUlEQVQ4y+2Tyy5DURSG+wCCIJ7ApGJq6gFE02BYlzCo68iE9BloDxJRl5GBBxCCVLVFSoIStC4Tl0SCuGv3ufT0t/auco44nTC0kj9Ze51/fXufZC2bfWACjDFAT0PXVJNURQGPyeAOlvbPRK6pismTJlEzru8fUdYtwWbv9+P5LSmaGZPB5C8lU0xAxgPbmN89ETmvGT0pegwHX9zcozQHfOFAupkbZIN+AnKA0cMfoac1XNx+A2qqajLKH7d/AmMWQFKGgJe3Dz8DFfp1rnzAnIfrH2gN5PoVkI/NnwFfkyloNJz55nAhdmo5hxnjHFbS6j2+vIJRs6pqJjE5u3r+lZ3sYOu8ppo8ikKrp+u4unvKrl6VZwrpjCb20SpmoocIHp8jXzwRuKyHgBV9YwgE9hFcjiG8eoiNSALR9WOsh+MIh46wFz2DZ3oRvtkQtkIHCJKXfxOeSBwR8myuJTC3FENJlw+2crcXjuZhOEkOlw+NbaNo7vGL3NEkocElobrdh5o2CY1Nw6LmoFpL7yTqW0dQRz4nnWtbJRS6B2ErcA8JslHFHd7PvJRU1OlFcafX0pNTAQHfAUjhTghKDxggAAAAAElFTkSuQmCC","aspectRatio":1.2,"src":"/static/c454293a9a16acb6cd2e9b36031d2831/302af/chat.png","srcSet":"/static/c454293a9a16acb6cd2e9b36031d2831/32eef/chat.png 150w,\\n/static/c454293a9a16acb6cd2e9b36031d2831/66ea1/chat.png 300w,\\n/static/c454293a9a16acb6cd2e9b36031d2831/302af/chat.png 600w,\\n/static/c454293a9a16acb6cd2e9b36031d2831/9b5e1/chat.png 864w","sizes":"(max-width: 600px) 100vw, 600px"}}},"tetris":{"id":"8b95d7c2-dad0-5997-9be4-24ac1214f017","childImageSharp":{"id":"4eb42169-4fb7-5fc4-92dd-15da0b39f146","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABJ0AAASdAHeZh94AAABiklEQVQ4y5VTu0pDQRBNNBL8ADutUqhFFBJR8FEp4gMU3wZECyG1ID4aEZsUgpBGzYnmCmIQG7ETsRILQbD0E9TGTrAx8Tiz9+al4cYUh9mZe/bM2d25Hg9AG4l8rMEhax1oHkSMA9hiA+KSJ4u4ZVBayBEtwYkT07zCJIkWzmPN1OxGFQVtMZ+QY1jmBWZ4ijlaiPANvSLYygWsVi/oxwEfMSQCIX6gi5/o5KsIvqObE9gUTspcyb8FNarLOhFW+AR+7LNeUHBW9R26oQKnnMPf0COqa28JpxC1np+Kyi50fey8evKPmB2PnImwygkm8uTc5fdghxEZmUbsGdGaolnVPIBdzmLdfjT3u9LOZ7zFmLx6gItmbFKOU8txnmYUK/K9WdDu5jDJOJZ4h1G+oE/IbZzGhtTPjcADhnkjja4xzmf0mzH7Qkd5Qa/j7gmDpnMWYdN9G1E2ybEvMWX+HK0RQRO/DSfkLqjulKydlZyRTbrOFEHzrCOmoq6C9xgxDnRjzkEOhTxcgh8Z5Iw25CS1BQAAAABJRU5ErkJggg==","aspectRatio":1.492537313432836,"src":"/static/cc1e79a7e0584eeabf750e322d4c22ff/33973/tetri.png","srcSet":"/static/cc1e79a7e0584eeabf750e322d4c22ff/e0252/tetri.png 100w,\\n/static/cc1e79a7e0584eeabf750e322d4c22ff/a8fe3/tetri.png 200w,\\n/static/cc1e79a7e0584eeabf750e322d4c22ff/33973/tetri.png 400w,\\n/static/cc1e79a7e0584eeabf750e322d4c22ff/c4d4b/tetri.png 595w","sizes":"(max-width: 400px) 100vw, 400px"}}},"winter":{"id":"95e98e89-725c-5bec-a61d-3f3d9324ef9d","childImageSharp":{"id":"39afe717-ee09-5d4a-8cfb-fb7ebe6ce105","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABJ0AAASdAHeZh94AAACpUlEQVQoz2NQUbAREtIOMpSPMJO3VFaWE9fmFdTlF9ARFNITEtEXETMAkgpSxjJi+n39s+bOXSYuZiAoqCMsrCskpMsQoGNsb6TtqqOsLqsrKGwgJ2Fopmxho2HjpGHtpWsXrG8faOiUaOWhp2xx+86D9+8/qKnZ8PFpCgvrgTTPizOOs7AJ0HOINnMNN7TXljHyVLfw0rAykjGyVDY3VzA1kDFWkTLmE9S1cQhxd4/k59cCagMioH4GU3kVEzkjRxVzXXFdVXF9oBAvv7aQoI6AoC4btwYHn46kiC4Lq5QYg7g9owIXh6qgkC4/nyYfnxY3jyYDB782UAUnr6aeprGBvrGvnyMnlxY3rzY7h4atmbe9hm6Bp9vsaZOnNLemyatJiOgBTTdWVNeT17A2dWcIcXCR4VdTEdfoqojLyfL3j3GxtJC1sRaxNJf2iQyL8Hcv9Hdpa23p7OqszIq3MHFQkDNIjwyK83VPzUtkmJGX4xldGJpaunXdzKbu2sDU0Ik97ssWhMya6BRXkhKYmjq1v/vA/gM7du9qL8ptyE4oSY9NDAmI9HZJrslmaI4I9UusCs2sWTS7vbKxMDg1sK/La/H8iNmTPIKSAl0iw2bNmfb///8Xb940FGRM6amb0lyUFRYUaGeRVJXJkB4VklBSnVhRnxjpDjQzOjOurdp1eodHb7NHSLhHaGzYpp07aqqqFixaNG1KT31tYV5ycGZcVKibY1RGDMPipfM2BYVsqa3etn/X3v07d+7ZeuDQ3kNH9h86euDAkX3bD+y8//jRqlWr7t+7d/balY1b1x04svfg0f2nz516cO8+w92t2y+6ql8sSvv69QfQef/+/fsPBt9//vz49euz16+fvHwJ5H79/h3IBjJ+/v4NFH//+fPHr18AgA8AqRGzBTgAAAAASUVORK5CYII=","aspectRatio":2,"src":"/static/ce6c675a689f5713e2e7806cf00fdd58/ea6a1/winter.png","srcSet":"/static/ce6c675a689f5713e2e7806cf00fdd58/b1930/winter.png 200w,\\n/static/ce6c675a689f5713e2e7806cf00fdd58/6fc38/winter.png 400w,\\n/static/ce6c675a689f5713e2e7806cf00fdd58/ea6a1/winter.png 800w,\\n/static/ce6c675a689f5713e2e7806cf00fdd58/e4796/winter.png 1200w,\\n/static/ce6c675a689f5713e2e7806cf00fdd58/9f0a7/winter.png 1416w","sizes":"(max-width: 800px) 100vw, 800px"}}},"life":{"id":"da29274f-ea9a-5993-a483-4c2c7c206982","childImageSharp":{"id":"25e48d2d-33fb-585a-92a6-8d8b6de98705","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABJ0AAASdAHeZh94AAACL0lEQVQoz3VT227aQBRc78XGGAdsCAYMwZhAwEkIN1FKuCSkTUmqVqpUqWrVtE2l8lo1D/2QvvVvO8sSRJB6QNZ6PWfOzDm7ZPLtfPp9QgjRDZ1qNL4Xv/vzqXPbYpxhk6+CMYan0AXHT3CNaF4123/XJaZtxm1zDaIMyd037cNBOLsf154fUkKRoP7gAjsowGUl4/vlDKGMGnEDaUIIUDp55+ymFbTL47vR/d8veKWUYd+IGWeL04PTEtYoQykFF6n0g8H7PoqDVWoTAsWdXMpO22EvaIzr+XrOTJhJb+/178Xi10vIQWXAACaLh+vRx+Hww4AQTW1xJhXma97xvOk3C5Ve4EeFxqSeLqajeXP0eRizYhrsAFZ9Fl78mE2+nhumwVeNUQFvAFkpC71B/qufL6AlV8vtH2Sg3EpaABBN0+DQdmwpWzxmCoFWoVTQKYf9wPUdL8zKcaBDRE7k5uE6XXQJrJuWCfqdZCgHafu2VTopYo0aGJ5yBIDru1Aqe5YpZXpvO1jISW4H45AKUDbMYgRGTIeRxvQo4SQARtsIhgQ96CfbMozQdR1CIJMLBueFowKkFer5y+UUjMiSk1c58mUr5Bg1KaoY+ThtMctYlZJdhJC1QVgAjkkCtgl8g5DosgFc6di/WE4r3bK0Krj6ukGSHbXqnGGw8+VMeXOLDhdP7TzGbvKmVbqpq5O07vNq8uA6uYq8qqeE/CdZ3STBn9yqlShMLpVLyQvD+T/h1zgiDY2o9wAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/0827aa6e733f1a8e4cb8ed1a96a48917/adf82/life.png","srcSet":"/static/0827aa6e733f1a8e4cb8ed1a96a48917/905ea/life.png 125w,\\n/static/0827aa6e733f1a8e4cb8ed1a96a48917/1b5b9/life.png 250w,\\n/static/0827aa6e733f1a8e4cb8ed1a96a48917/adf82/life.png 500w,\\n/static/0827aa6e733f1a8e4cb8ed1a96a48917/b93c1/life.png 750w,\\n/static/0827aa6e733f1a8e4cb8ed1a96a48917/3e160/life.png 999w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}')},OGtf:function(e,t,a){var i=a("XKFU"),n=a("eeVq"),r=a("vhPU"),o=/"/g,c=function(e,t,a,i){var n=String(r(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Q3Rq:function(e,t,a){"use strict";a("2Spj"),a("bWfx"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=a("q1tI"))&&i.__esModule?i:{default:i};t.default=function(e){var t=e.cards,a=e.activeCardIndex,i=e.onDotClick;return n.default.createElement("div",{className:"flippy-footer"},t.map((function(e,t){return n.default.createElement("span",{key:"flippyFooterItem".concat(t),className:"flippy-footer-item".concat(a===t?" isActive":""),onClick:i.bind(null,t)},"*")})))}},aVtJ:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Flippy",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"FrontSide",{enumerable:!0,get:function(){return r.FrontSide}}),Object.defineProperty(t,"BackSide",{enumerable:!0,get:function(){return r.BackSide}}),t.default=void 0;var i,n=(i=a("qnPp"))&&i.__esModule?i:{default:i},r=a("7sY2");var o=n.default;t.default=o},qnPp:function(e,t,a){"use strict";a("hHhE"),a("/SS/"),a("8+KV"),a("0l/t"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("rE2o"),a("ioFf"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=r(a("Q3Rq"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){p(e,t,a[t])}))}return e}function d(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("G+0V");var g=function(e){function t(e){var a,i,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,n=l(t).call(this,e),a=!n||"object"!==o(n)&&"function"!=typeof n?f(i):n,p(f(a),"toggle",(function(){a.setState({isFlipped:!a.state.isFlipped})})),p(f(a),"handleFooterDotClick",(function(e,t){a.setState({isFlipped:0===e})})),p(f(a),"handleHoverOn",(function(e){a.setState({isFlipped:!0}),a.props.onMouseEnter(e)})),p(f(a),"handleTouchStart",(function(e){a.setState({isFlipped:!0,isTouchDevice:!0}),a.props.onTouchStart(e)})),p(f(a),"handleTouchEnd",(function(e){a.setState({isFlipped:!1}),a.props.onTouchEnd(e)})),p(f(a),"handleHoverOff",(function(e){a.setState({isFlipped:!1}),a.props.onMouseLeave(e)})),a.state={isFlipped:!1,isTouchDevice:!1},a}var a,r,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),a=t,g=[{key:"getDerivedStateFromProps",value:function(e,t){return s({},t,{isFlipped:"boolean"==typeof e.isFlipped?e.isFlipped:t.isFlipped})}}],(r=[{key:"render",value:function(){var e=this.props,t=e.children,a=e.style,r=e.flipDirection,o=e.flipOnHover,d=e.flipOnClick,l=this.state,f=l.isFlipped,u=l.activeCardIndex,p=l.isTouchDevice,g=o?{onMouseEnter:this.handleHoverOn,onMouseLeave:this.handleHoverOff,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}:d?{onClick:this.toggle}:{};return i.default.createElement("div",c({className:"flippy-container",style:s({},a)},g),i.default.createElement("div",{className:"flippy-cardContainer-wrapper ".concat(r)},i.default.createElement("div",{className:"flippy-cardContainer ".concat(f?"isActive":""," ").concat(p?"istouchdevice":"")},t),this.props.showNavigation&&i.default.createElement(n.default,{onDotClick:this.handleFooterDotClick,activeCardIndex:u,cards:this.props.children})))}}])&&d(a.prototype,r),g&&d(a,g),t}(i.default.Component);t.default=g,g.defaultProps={showNavigation:!1,flipDirection:"horizontal",flipOnHover:!1,flipOnClick:!0,usePrettyStyle:!0,onMouseEnter:function(){},onMouseLeave:function(){},onTouchStart:function(){},onTouchEnd:function(){},onClick:function(){}}}}]);
//# sourceMappingURL=component---src-pages-works-js-d1d24434ac8da9d54876.js.map