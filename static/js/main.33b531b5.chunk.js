(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){e.exports=t(21)},21:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(8),s=t.n(l),r=t(3),i=t(10),c=t(5);var m=function(e){var a=function(a){var t=a.target.innerHTML.trim();!e.tags.includes(t)&&e.setTags([].concat(Object(r.a)(e.tags),[t]))},t=e.role,l=e.level,s=e.languages,i=e.tools,c=e.id;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"requirements-div"},s?s.map((function(e,t){return o.a.createElement("span",{key:c+t,className:"requirements",onClick:a},e)})):null,i?i.map((function(e,t){return o.a.createElement("span",{key:c+t,className:"requirements",onClick:a},e)})):null,o.a.createElement("span",{className:"requirements",onClick:a},l),o.a.createElement("span",{className:"requirements",onClick:a},t)))},g=t(34);var u=function(e){var a=e.id,t=e.company,n=e.logo,l=e.featured,s=e.position,r=e.postedAt,i=e.contract,c=e.location;return o.a.createElement("div",{className:l?"container featured-container":"container"},o.a.createElement(g.a,{container:!0,direction:"row",style:{minHeight:"120px"}},o.a.createElement(g.a,{item:!0,md:2},o.a.createElement("img",{src:"/job-list"+n,className:"logo",alt:t})),o.a.createElement(g.a,{item:!0,md:4,xs:12},o.a.createElement("div",{className:"info-section"},o.a.createElement("div",{className:"main-info",id:"badges"},o.a.createElement("h2",{className:"company"},t),e.new?o.a.createElement("span",{className:"new"},"NEW!"):null,l?o.a.createElement("span",{className:"featured"},"FEATURED"):null),o.a.createElement("div",{className:"main-info"},o.a.createElement("h1",{className:"position"},s)),o.a.createElement("div",{className:"main-info"},o.a.createElement("span",{className:"info"},r),o.a.createElement("span",{className:"info"},i),o.a.createElement("span",{className:"info"},c)))),o.a.createElement(g.a,{item:!0,md:5,xs:12,style:{margin:"auto",minWidth:"50%"}},o.a.createElement(m,{id:a,key:a,role:e.role,level:e.level,languages:e.languages,tools:e.tools,tags:e.tags,setTags:e.setTags}))))};var d=function(){return o.a.createElement("div",{className:"navbar"})};var p=function(e){var a=function(a){console.log(a.target.name),console.log(e.tags.filter((function(e){return e!==a.target.name}))),e.setTags(e.tags.filter((function(e){return e!==a.target.name})))};return e.tags.length>0?o.a.createElement("div",{className:"container filter"},o.a.createElement("div",{className:"filterTags"},e.tags.map((function(e,t){return o.a.createElement("span",{key:t,className:"requirements",id:"tags",style:{float:"none"}},e,o.a.createElement("button",{className:"close",onClick:a,name:e},"X"))}))),o.a.createElement("span",{onClick:function(){e.setTags([])},className:"clear"},"Clear")):null};var v=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return o.a.createElement(n.Fragment,null,o.a.createElement(d,null),o.a.createElement(p,{tags:t,setTags:l}),o.a.createElement("div",{className:"app"},c.map((function(e,a){var n,s=e.role,i=e.level,c=e.languages||[],m=e.tools||[],g=[s,i].concat(Object(r.a)(c),Object(r.a)(m));return 0===t.length?o.a.createElement(u,{id:e.id,key:a,logo:e.logo,company:e.company,new:e.new,featured:e.featured,position:e.position,role:e.role,level:e.level,languages:e.languages,tools:e.tools,postedAt:e.postedAt,contract:e.contract,location:e.location,tags:t,setTags:l}):(n=g,t.every((function(e){return n.includes(e)}))&&o.a.createElement(u,{id:e.id,key:a,logo:e.logo,company:e.company,new:e.new,featured:e.featured,position:e.position,role:e.role,level:e.level,languages:e.languages,tools:e.tools,postedAt:e.postedAt,contract:e.contract,location:e.location,tags:t,setTags:l}))}))))};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.33b531b5.chunk.js.map