(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{170:function(e,t,a){},171:function(e,t,a){},189:function(e,t,a){},31:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n,c=a(1),i=a(0),s=a(34),o=a.n(s),r=(a(170),a(22)),l=a(91),j=(a(171),a(31),a(29),a(163)),d=a(68),b=a(108),m=a(155),p=a(14),h=a(49);!function(e){e.INDEX="/",e.ABOUT="/about",e.PROJECTS="/projects",e.RESUME="/resume"}(n||(n={}));var u,O=a(430),g=a(80),x=a(81),f=a(107),k=a(66),N=a(145),v=a(147);!function(e){e.RU="ru",e.EN="en"}(u||(u={})),f.a.use(N.a).use(v.a).use(k.e).init({fallbackLng:u.EN,ns:"translation",load:"all",backend:{loadPath:"/portfolio/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1},react:{useSuspense:!1}});var y=f.a,E=function(){function e(){Object(g.a)(this,e),this._storageKey="lng"}return Object(x.a)(e,[{key:"setLanguage",value:function(e){y.changeLanguage(e),localStorage.setItem(this._storageKey,e)}},{key:"getLanguage",value:function(){var e=localStorage.getItem(this._storageKey)||"";return Object.values(u).includes(e)?e:u.EN}},{key:"setLanguageFromStorage",value:function(){y.changeLanguage(this.getLanguage())}}]),e}(),S=function(){function e(){Object(g.a)(this,e)}return Object(x.a)(e,null,[{key:"languageService",value:function(){return this._languageService||(this._languageService=new E)}}]),e}();function C(){return S}S._languageService=void 0;var A=a(152),B=a(427),R=a(161),I=a(47);function Q(e){var t=e.setIsExpanded,a=C();return Object(c.jsxs)(B.a,{className:"nav-item",id:"dropdown-item-button",title:Object(c.jsx)(I.a,{icon:A.a}),children:[Object(c.jsx)(R.a.Item,{as:"button",onClick:function(){t(!1),a.languageService().setLanguage(u.EN)},children:Object(c.jsx)("div",{className:"language-selector__logo",children:"\ud83c\uddfa\ud83c\uddf8"})}),Object(c.jsx)(R.a.Item,{as:"button",onClick:function(){t(!1),a.languageService().setLanguage(u.RU)},children:Object(c.jsx)("div",{className:"language-selector__logo",children:"\ud83c\uddf7\ud83c\uddfa"})})]})}var U=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(p.l)(),u=(C(),Object(O.a)()),g=u.t,x=(u.i18n,[n.INDEX,n.ABOUT,n.PROJECTS,n.RESUME]),f=function(e){return x.indexOf(e)<x.indexOf(o.pathname)},k=[{label:g("Home"),to:n.INDEX,transition:"glide-right"},{label:g("About"),to:n.ABOUT,transition:f(n.INDEX)?"glide-right":"glide-left"},{label:g("Projects"),to:n.PROJECTS,transition:f(n.ABOUT)?"glide-right":"glide-left"},{label:g("Resume"),to:n.RESUME,transition:f(n.PROJECTS)?"glide-right":"glide-left"}];return Object(c.jsx)(d.a,{expanded:a,expand:"md",className:"navbar__sticky",children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(d.a.Brand,{href:"/"}),Object(c.jsxs)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){s(!a)},children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]}),Object(c.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)(b.a,{className:"ml-auto",defaultActiveKey:"#home",children:[k.map((function(e,t){var a=e.label,n=Object(j.a)(e,["label"]);return Object(c.jsx)(b.a.Item,{onClick:function(){s(!1)},children:Object(c.jsx)(h.Link,Object(r.a)(Object(r.a)({},n),{},{className:"navbar-link ".concat(o.pathname===n.to?"navbar-link--active":""),children:a}))},t)})),Object(c.jsx)(Q,{setIsExpanded:function(e){return s(e)}})]})})]})})},T=a(428),q=a(429),K=a.p+"static/media/photo.18d8b6bb.png",F=a(63);var J=function(){var e=Object(O.a)().t;return Object(c.jsx)(m.a,{fluid:!0,className:"home-about-section",id:"about",children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(T.a,{children:[Object(c.jsxs)(q.a,{md:8,className:"home-about-description",children:[Object(c.jsxs)("h1",{style:{fontSize:"2.6em"},children:[e("LET ME")," ",Object(c.jsxs)("span",{className:"theme-color",children:[" ",e("INTRODUCE")," "]})," ",e("MYSELF")]}),Object(c.jsxs)("p",{className:"home-about-body",children:[e("I Am")," ",function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}(new Date("1997-09-19"))," ",e("years old"),", ",e("Estonian"),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),e("I speak English and Russian"),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),e("I am good in"),Object(c.jsx)("i",{children:Object(c.jsxs)("b",{className:"theme-color",children:[" ",e("Teamwork, communication, leadership")," "]})}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),e("My current focus is")," \xa0",Object(c.jsx)("i",{children:Object(c.jsx)("b",{className:"theme-color",children:"Front End Development"})}),Object(c.jsx)("br",{})]})]}),Object(c.jsx)(q.a,{md:4,className:"photo",children:Object(c.jsx)("img",{src:K,className:"img-fluid",alt:"avatar"})})]}),Object(c.jsx)(T.a,{children:Object(c.jsxs)(q.a,{md:12,className:"home-about-social",children:[Object(c.jsxs)("h1",{children:[e("FIND")," ",Object(c.jsx)("span",{className:"theme-color",children:e("ME")})," ",e("ON")]}),Object(c.jsxs)("ul",{className:"home-about-social-links",children:[Object(c.jsx)("li",{className:"social-icons",children:Object(c.jsx)("a",{href:"https://github.com/donfear",target:"_blank",rel:"noreferrer",className:"icon-colour  home-social-icons",children:Object(c.jsx)(I.a,{icon:F.a})})}),Object(c.jsx)("li",{className:"social-icons",children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/mihhail-solovjov-258247158/",target:"_blank",rel:"noreferrer",className:"icon-colour  home-social-icons",children:Object(c.jsx)(I.a,{icon:F.b})})})]})]})})]})})},D=a(156),V=a.n(D);var X=function(){return Object(c.jsx)(V.a,{onInit:function(){return null},options:{strings:["Developer","Front End Developer","Back End Developer"],autoStart:!0,loop:!0,deleteSpeed:50}})};var P=function(){var e=Object(O.a)().t;return Object(c.jsxs)("section",{children:[Object(c.jsx)(m.a,{fluid:!0,className:"home-section",id:"home",children:Object(c.jsx)(m.a,{className:"home-content",children:Object(c.jsxs)(T.a,{children:[Object(c.jsxs)(q.a,{md:7,className:"home-header",children:[Object(c.jsxs)("h1",{style:{paddingBottom:15},className:"heading",children:[e("Welcome"),"!"]}),Object(c.jsxs)("h1",{className:"heading-name",children:[e("I'M"),Object(c.jsx)("strong",{className:"main-name",children:" MIHHAIL SOLOVJOV"})]}),Object(c.jsx)("div",{style:{padding:50,textAlign:"left"}})]}),Object(c.jsx)(q.a,{md:5,style:{paddingBottom:20},children:Object(c.jsx)(X,{})})]})})}),Object(c.jsx)(J,{})]})},M=a(37),L=a(62);var w=function(e){var t=Object(O.a)().t;return Object(c.jsxs)(M.a,{className:"project-card-view",children:[Object(c.jsx)(M.a.Img,{variant:"top",src:e.imgPath,alt:"card-img"}),Object(c.jsxs)(M.a.Body,{children:[Object(c.jsx)(M.a.Title,{className:"theme-color",children:e.title}),Object(c.jsx)(M.a.Text,{style:{textAlign:"justify"},children:e.description}),Object(c.jsxs)("div",{className:e.githubLink?"row":"",style:Object(r.a)({},e.githubLink&&{justifyContent:"space-between",padding:"0 16px"}),children:[Object(c.jsx)(L.a,{variant:"primary",href:e.link,target:"_blank",children:t("Live")}),e.githubLink&&Object(c.jsx)(L.a,{variant:"primary",href:e.githubLink,target:"_blank",children:Object(c.jsx)(I.a,{icon:F.a})})]})]})]})},W=a.p+"static/media/cv-generator.87d139cf.png",G=a.p+"static/media/kotadom.115b1d49.png",Z=a.p+"static/media/quit-for.5e8822dd.png",H=a.p+"static/media/portfolio.8760d1cb.png";var Y=function(){var e=Object(O.a)().t,t=[{imgPath:H,title:"Portfolio",githubLink:"https://github.com/donfear/portfolio",description:e("My portfolio built with React"),link:"https://donfear.github.io/portfolio/"},{imgPath:W,title:"CV Generator",githubLink:"https://github.com/donfear/team_work_practice",description:e("Responsive React SPA, used to create and generate CV"),link:"https://donfear.github.io/team_work_practice/"},{imgPath:G,title:"KotAdom",githubLink:"https://github.com/donfear/kotadom",description:e("Responsive website, built on react with i18n"),link:"https://donfear.github.io/kotadom/"},{imgPath:Z,title:"Quit For",githubLink:"https://github.com/donfear/portfolio",description:e("React Native application final work"),link:"https://play.google.com/store/apps/details?id=com.quitfor&hl=en&gl=US"}];return Object(c.jsx)(m.a,{fluid:!0,className:"project-section",children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)("h1",{className:"project-heading",children:[e("My Recent")," ",Object(c.jsxs)("strong",{className:"theme-color",children:[e("Works")," "]})]}),Object(c.jsx)("p",{style:{color:"white"},children:e("Here are a few projects I've worked on recently.")}),Object(c.jsx)(T.a,{style:{justifyContent:"center",paddingBottom:"10px"},children:t.map((function(e,t){return Object(c.jsx)(q.a,{md:4,className:"project-card",children:Object(c.jsx)(w,Object(r.a)({},e))},t)}))})]})})};var z=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(q.a,{xs:4,md:2,className:"tech-icons",children:Object(c.jsx)("div",{className:"tech-icon-images","data-tip":e.name.charAt(0).toUpperCase()+e.name.slice(1),children:Object(c.jsx)("i",{className:e.iconName})})})})};var _=function(){var e=Object(O.a)().t;return Object(c.jsx)(M.a,{className:"quote-card-view",children:Object(c.jsx)(M.a.Body,{children:Object(c.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(c.jsxs)("p",{style:{textAlign:"justify"},children:[e("I am"),Object(c.jsx)("span",{className:"theme-color",children:" Mihhail Solovjov "}),e("from")," ",Object(c.jsxs)("span",{className:"theme-color",children:[" ",e("Tallinn, Estonia"),"."]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),e("Apart from coding, some other activities that I love to do!")]}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"about-activity",children:[Object(c.jsx)("i",{className:"far fa-hand-point-right"})," ",e("Playing Guitar and Synth")]}),Object(c.jsxs)("li",{className:"about-activity",children:[Object(c.jsx)("i",{className:"far fa-hand-point-right"})," ",e("Playing Board Games")]}),Object(c.jsxs)("li",{className:"about-activity",children:[Object(c.jsx)("i",{className:"far fa-hand-point-right"})," ",e("Running, Riding, Skating")]})]})]})})})},$=a(162);var ee=function(){var e=Object(O.a)().t;return Object(c.jsxs)(m.a,{fluid:!0,className:"about-section",children:[Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(T.a,{style:{justifyContent:"center",padding:"10px"},children:[Object(c.jsxs)(q.a,{md:7,style:{justifyContent:"center",paddingTop:"30px",paddingBottom:"50px"},children:[Object(c.jsxs)("h1",{style:{fontSize:"2.1em",paddingBottom:"20px"},children:[e("About_")," ",Object(c.jsx)("strong",{className:"theme-color",children:e("ME_")})]}),Object(c.jsx)(_,{})]}),Object(c.jsx)(q.a,{md:5,style:{paddingTop:"120px",paddingBottom:"50px"},className:"about-img",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"about",className:"img-fluid"})})]}),Object(c.jsxs)("h1",{className:"project-heading",children:[e("Professional")," ",Object(c.jsxs)("strong",{className:"theme-color",children:[e("Skillset")," "]})]}),Object(c.jsx)("div",{children:Object(c.jsx)(T.a,{style:{justifyContent:"center",paddingBottom:"50px"},children:[{name:"javascript",type:"plain"},{name:"typescript",type:"plain"},{name:"git",type:"plain"},{name:"react",type:"original"},{name:"angularjs",type:"plain"},{name:"ionic",type:"original"},{name:"jquery",type:"plain"},{name:"html5",type:"plain"},{name:"css3",type:"plain"},{name:"sass",type:"plain"},{name:"less",type:"plain-wordmark"},{name:"bootstrap",type:"plain"},{name:"mysql",type:"plain"},{name:"php",type:"plain"},{name:"nodejs",type:"plain"},{name:"express",type:"original"},{name:"nestjs",type:"plain"},{name:"babel",type:"plain"},{name:"webpack",type:"plain"},{name:"gulp",type:"plain"},{name:"wordpress",type:"plain"},{name:"bash",type:"plain"},{name:"docker",type:"plain"},{name:"googlecloud",type:"plain"},{name:"travis",type:"plain"},{name:"ubuntu",type:"plain"},{name:"apple",type:"original"}].map((function(e,t){return Object(c.jsx)(z,{name:e.name,iconName:"devicon-".concat(e.name,"-").concat(e.type)},t)}))})})]}),Object(c.jsx)($.a,{})]})};var te=function(e){return Object(c.jsxs)("div",{className:"resume-item",children:[Object(c.jsx)("h5",{className:e.title?"resume-title":"resume-no-title",children:e.title}),Object(c.jsx)("p",{children:Object(c.jsx)("em",{children:e.date})}),Object(c.jsx)("ul",{children:e.content.map((function(e,t){return Object(c.jsxs)("li",{children:[" \u2023 ",e]},t)}))})]})},ae=a.p+"static/media/cv.bc5b86b4.pdf";var ne=function(){var e=Object(O.a)().t,t=[{title:"Full Stack Developer",date:"".concat(e("Jule")," 2018 - ").concat(e("Present")),content:[e("Develop all kind of web apps using modern technologies")]}],a=[{title:"Estonian Entrepreneurship University of Applied Sciences",date:"2017 - ".concat(e("Present")),content:[e("Web Page, Digital/Multimedia and Information Resources Design")]}];return Object(c.jsxs)(m.a,{fluid:!0,className:"resume-section",children:[Object(c.jsx)(T.a,{className:"resume-download",children:Object(c.jsx)("div",{children:Object(c.jsx)("a",{download:"mihhail_solovjov_cv.pdf",href:ae,className:"btn btn-primary",children:e("Download CV")})})}),Object(c.jsxs)(T.a,{className:"resume",children:[Object(c.jsxs)(q.a,{md:6,className:"resume-left",children:[Object(c.jsx)("h3",{className:"resume-title",children:e("Experience")}),t.map((function(e,t){return Object(i.createElement)(te,Object(r.a)(Object(r.a)({},e),{},{key:t}))}))]}),Object(c.jsxs)(q.a,{md:6,className:"resume-right",children:[Object(c.jsx)("h3",{className:"resume-title",children:e("Education")}),a.map((function(e,t){return Object(i.createElement)(te,Object(r.a)(Object(r.a)({},e),{},{key:t}))}))]})]})]})};a(188),a(189);var ce=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("div",{className:"container-loader",children:[Object(c.jsx)("div",{className:"dot dot-1"}),Object(c.jsx)("div",{className:"dot dot-2"}),Object(c.jsx)("div",{className:"dot dot-3"})]})})})},ie=a(144),se=a(157),oe=a.n(se),re=a(158);var le=Object(re.a)((function(){return Object(c.jsx)(oe.a,{params:{particles:{number:{value:25,density:{enable:!0,value_area:100}},size:{value:3,random:!0,anim:{enable:!0,speed:5,size_min:.1,sync:!1}},line_linked:{enable:!1}},retina_detect:!0}})}));function je(){var e=C(),t=Object(i.useState)(!0),a=Object(l.a)(t,2),s=a[0],o=a[1],j=Object(p.l)();e.languageService().setLanguageFromStorage(),Object(i.useEffect)((function(){setTimeout((function(){o(!1)}),1400)}),[]);var d=[{path:n.INDEX,component:Object(c.jsx)(P,{})},{path:n.ABOUT,component:Object(c.jsx)(ee,{})},{path:n.PROJECTS,component:Object(c.jsx)(Y,{})},{path:n.RESUME,component:Object(c.jsx)(ne,{})}];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(ie.a,{in:s,appear:!0,unmountOnExit:!0,classNames:"fade",timeout:300,children:Object(c.jsx)(ce,{load:s})}),Object(c.jsxs)(h.Navigation,{children:[Object(c.jsx)(le,{}),!s&&Object(c.jsx)(U,{}),d.map((function(e,t){return Object(c.jsx)(h.Route,{path:e.path,screen:!0,screenProps:{style:Object(r.a)({},e.path!==j.pathname&&{overflow:"hidden",height:0})},children:e.component},t)}))]})]})}Object(h.glide)({name:"glide-left",direction:"left"}),Object(h.glide)({name:"glide-right",direction:"right"});var de=a(57);o.a.render(Object(c.jsx)(de.HashRouter,{children:Object(c.jsx)(je,{})}),document.getElementById("root"))}},[[422,1,2]]]);
//# sourceMappingURL=main.aaafb41c.chunk.js.map