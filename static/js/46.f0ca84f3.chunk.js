"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[46],{9155:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(501),r=n(6871),a={},c=n(184),i=function(e){var t=e.response,n=(0,r.TH)();return(0,c.jsx)("ul",{className:a.movieList,children:t.results.map((function(e){return(0,c.jsx)("li",{className:a.movieCard,children:(0,c.jsxs)(s.rU,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,c.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png",alt:e.title,width:"100px"}),(0,c.jsx)("h3",{className:a.movieTitle,children:e.title})]})},e.id)}))})}},2046:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(885),r=n(9155),a={},c=n(5763),i=n(2791),o=n(8956),u=n(577),l=n(9983),h=n(501),m=n(184),d=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],d=t[1],p=(0,h.lr)({}),f=(0,s.Z)(p,2),v=f[0],x=f[1],j=(0,i.useState)(""),g=(0,s.Z)(j,2),_=g[0],b=g[1],N=v.get("query");(0,i.useEffect)((function(){N&&(0,o.bI)(N).then().then(d)}),[N]),(0,i.useEffect)((function(){_&&(0,o.bI)(_).then().then(d)}),[_]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("section",{className:a.moviePage,children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_?x({query:_}):u.Am.warn("Please, enter movie name")},className:a.searchForm,children:[(0,m.jsx)("input",{className:a.inputQuery,type:"text",placeholder:"Search...",value:_,onChange:function(e){b(e.currentTarget.value)}}),(0,m.jsx)("button",{type:"submit",className:a.searchButton,children:(0,m.jsx)(l.Pd.Provider,{value:{className:"".concat(a.searchIcon)},children:(0,m.jsx)(c.a4h,{})})})]})}),(0,m.jsxs)("section",{children:[n&&0===n.total_results&&(0,m.jsx)("h2",{children:"There are no movies matching your search"}),n&&(0,m.jsx)(r.Z,{response:n})]})]})}}}]);
//# sourceMappingURL=46.f0ca84f3.chunk.js.map