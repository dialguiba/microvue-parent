(function(){var n={7137:function(n,e,t){t(6992),t(8674),t(9601),t(7727),t(1539),t(8783),t(3948),t.e(896).then(t.bind(t,7896))},1829:function(n,e,t){"use strict";var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!==typeof child1)return n();t.l("https://dialguiba.github.io/microvue-child1/remoteEntry.js",(function(t){if("undefined"!==typeof child1)return n();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+o+": "+i+")",r.name="ScriptExternalLoadError",r.type=o,r.request=i,e(r)}),"child1")})).then((function(){return child1}))},9429:function(n,e,t){"use strict";var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!==typeof child2)return n();t.l("https://dialguiba.github.io/microvue-child2/remoteEntry.js",(function(t){if("undefined"!==typeof child2)return n();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+o+": "+i+")",r.name="ScriptExternalLoadError",r.type=o,r.request=i,e(r)}),"child2")})).then((function(){return child2}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.c=e,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(a=0;a<n.length;a++){r=n[a][0],o=n[a][1],i=n[a][2];for(var f=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(f=!1,i<u&&(u=i));f&&(n.splice(a--,1),e=o())}return e}i=i||0;for(var a=n.length;a>0&&n[a-1][2]>i;a--)n[a]=n[a-1];n[a]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){var n,e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);t.r(i);var u={};n=n||[null,e({}),e([]),e(e)];for(var f=2&o&&r;"object"==typeof f&&!~n.indexOf(f);f=e(f))Object.getOwnPropertyNames(f).forEach((function(n){u[n]=function(){return r[n]}}));return u["default"]=function(){return r},t.d(i,u),i}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"-legacy."+{144:"27f3dae0",335:"91e510c3",458:"c5a0a45c",707:"67fa4977",896:"884e1435"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+".78386091.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="@vue-cli/consumer:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var f,c;if(void 0!==i)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var s=a[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+i){f=s;break}}f||(c=!0,f=document.createElement("script"),f.charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+i),f.src=r),n[r]=[o];var d=function(e,t){f.onerror=f.onload=null,clearTimeout(h);var o=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var e={335:[6335],458:[3458],707:[1707]},r={1707:["default","./Button",1829],3458:["default","./Section",1829],6335:["default","./MainComponent",9429]};t.f.remotes=function(o,i){t.o(e,o)&&e[o].forEach((function(e){var o=t.R;o||(o=[]);var u=r[e];if(!(o.indexOf(u)>=0)){if(o.push(u),u.p)return i.push(u.p);var f=function(t){t||(t=new Error("Container missing")),"string"===typeof t.message&&(t.message+='\nwhile loading "'+u[1]+'" from '+u[2]),n[e]=function(){throw t},u.p=0},c=function(n,e,t,r,o,c){try{var a=n(e,t);if(!a||!a.then)return o(a,r,c);var l=a.then((function(n){return o(n,r)}),f);if(!c)return l;i.push(u.p=l)}catch(s){f(s)}},a=function(n,e,r){return n?c(t.I,u[0],0,n,l,r):f()},l=function(n,e,t){return c(e.get,u[1],o,0,s,t)},s=function(t){u.p=1,n[e]=function(n){n.exports=t()}};c(t,u[2],0,0,a,1)}}))}}(),function(){t.S={};var n={},e={};t.I=function(r,o){o||(o=[]);var i=e[r];if(i||(i=e[r]={}),!(o.indexOf(i)>=0)){if(o.push(i),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var u=t.S[r],f=function(n){return"undefined"!==typeof console&&console.warn&&console.warn(n)},c="@vue-cli/consumer",a=function(n,e,t,r){var o=u[n]=u[n]||{},i=o[e];(!i||!i.loaded&&(!r!=!i.eager?r:c>i.from))&&(o[e]={get:t,from:c,eager:!!r})},l=function(n){var e=function(n){f("Initialization of sharing external failed: "+n)};try{var i=t(n);if(!i)return;var u=function(n){return n&&n.init&&n.init(t.S[r],o)};if(i.then)return s.push(i.then(u,e));var c=u(i);if(c&&c.then)return s.push(c.catch(e))}catch(a){e(a)}},s=[];switch(r){case"default":a("vue","2.6.14",(function(){return t.e(144).then((function(){return function(){return t(144)}}))})),l(1829),l(9429);break}return s.length?n[r]=Promise.all(s).then((function(){return n[r]=1})):n[r]=1}}}(),function(){t.p="https://dialguiba.github.io/microvue-parent/"}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=e[r],i=(typeof o)[0];if(r>=t.length)return"u"==i;var u=t[r],f=(typeof u)[0];if(i!=f)return"o"==i&&"n"==f||"s"==f||"u"==i;if("o"!=i&&"u"!=i&&o!=u)return o<u;r++}},r=function(e,t){if(0 in e){t=n(t);var o=e[0],i=o<0;i&&(o=-o-1);for(var u=0,f=1,c=!0;;f++,u++){var a,l,s=f<e.length?(typeof e[f])[0]:"";if(u>=t.length||"o"==(l=(typeof(a=t[u]))[0]))return!c||("u"==s?f>o&&!i:""==s!=i);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=o){if(a!=e[f])return!1}else{if(i?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(i||f<=o)return!1;c=!1,f--}else{if(f<=o||l<s!=i)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],h=d.pop.bind(d);for(u=1;u<e.length;u++){var p=e[u];d.push(1==p?h()|h():2==p?h()&h():p?r(p,t):!h())}return!!h()},o=function(n,t,o){var i=n[t];t=Object.keys(i).reduce((function(n,t){return r(o,t)&&(!n||e(n,t))?t:n}),0);return t&&i[t]},i=function(n){return n.loaded=1,n.get()},u=function(n){return function(e,r,o,i){var u=t.I(e);return u&&u.then?u.then(n.bind(n,e,t.S[e],r,o,i)):n(e,t.S[e],r,o,i)}},f=u((function(n,e,r,u,f){var c=e&&t.o(e,r)&&o(e,r,u);return c?i(c):f()})),c={},a={2093:function(){return f("default","vue",[1,2,6,11],(function(){return t.e(144).then((function(){return function(){return t(144)}}))}))}},l={896:[2093]};t.f.consumes=function(n,e){t.o(l,n)&&l[n].forEach((function(n){if(t.o(c,n))return e.push(c[n]);var r=function(e){c[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},o=function(e){delete c[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var i=a[n]();i.then?e.push(c[n]=i.then(r).catch(o)):r(i)}catch(u){o(u)}}))}}(),function(){var n=function(n,e,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),f=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=f,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),f=t.p+u;if(e(u,f))return o();n(r,f,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={896:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(335|458|707)$/.test(e))n[e]=0;else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),f=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",f.name="ChunkLoadError",f.type=i,f.request=u,o[1](f)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],f=r[1],c=r[2],a=0;for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(c)var l=c(t);for(e&&e(r);a<u.length;a++)i=u[a],t.o(n,i)&&n[i]&&n[i][0](),n[u[a]]=0;return t.O(l)},r=self["webpackChunk_vue_cli_consumer"]=self["webpackChunk_vue_cli_consumer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7137)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.a6e05a6b.js.map