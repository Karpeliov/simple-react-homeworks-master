(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={header:"Header_header__EWmMF",navbar:"Header_navbar__VcN37",item:"Header_item__2T6j_",activeLink:"Header_activeLink__2rmKL"}},,,function(e,a,t){e.exports={message:"Message_message__2YzA7",ava:"Message_ava__1Qgna",message_text:"Message_message_text__8A-s8",name:"Message_name__1dVS7",time:"Message_time__3-nDm",block:"Message_block__1VhMd"}},function(e,a,t){e.exports={main:"Greeting_main__1y7Dm",buttClass:"Greeting_buttClass__1QhrL",buttError:"Greeting_buttError__3TNa_",someClass:"Greeting_someClass__5Tt7G",error:"Greeting_error__nAW5d",users:"Greeting_users__2kEVS"}},,,function(e,a,t){e.exports={main:"Error404_main__3iYYs",error_message:"Error404_error_message__USK9W"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2cMa1",errorInput:"SuperInputText_errorInput__30YJC",error:"SuperInputText_error__DqJFJ"}},,,,function(e,a,t){e.exports={default:"SuperButton_default__st_E6",red:"SuperButton_red__10JR8"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2HAcH",spanClassName:"SuperCheckbox_spanClassName__2TTsX"}},,,,function(e,a,t){e.exports={App:"App_App__3P7U5"}},,function(e,a,t){e.exports={blue:"HW4_blue__1nS5A",column:"HW4_column__oyEnr"}},,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=(t(33),t(24)),o=t.n(s),m=t(3),i=t(8),u=t(7),d=t.n(u);var E=function(e){return r.a.createElement("div",{className:d.a.header,onMouseLeave:function(){return e.onBlur(!1)},onMouseMove:function(){return e.onBlur(!0)}},"M E N U",e.showNB&&r.a.createElement("div",{className:d.a.navbar},r.a.createElement("span",{className:d.a.item},r.a.createElement(i.b,{to:"/PRE_JUNIOR",activeClassName:d.a.activeLink},"PreJunior")),r.a.createElement("span",{className:d.a.item},r.a.createElement(i.b,{to:"/JUNIOR",activeClassName:d.a.activeLink},"Junior")),r.a.createElement("span",{className:d.a.item},r.a.createElement(i.b,{to:"/JUNIORPLUS",activeClassName:d.a.activeLink},"Junior+ "))))},_=t(1),f=t(10),h=t.n(f);var p=function(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("div",{className:h.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:h.a.block},r.a.createElement("div",{className:h.a.name},e.name),r.a.createElement("div",{className:h.a.message_text},e.message),r.a.createElement("div",{className:h.a.time},e.time)))},v={avatar:"https://styles.redditmedia.com/t5_l676j/styles/profileIcon_snood67ea9d2-25c4-40cf-a521-ee38d4552a54-headshot.png?width=256&height=256&crop=256:256,smart&s=df3c7f9039fcfb795aa90d2ebd85dee338f15850",name:"Some Name",message:"some text",time:"22:00"};var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:v.avatar,name:v.name,message:v.message,time:v.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var g=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"),r.a.createElement("span",null,e.affair.priority," priority"))};var N=function(e){var a=e.data.map(function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})});return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],k=function(e,a){return"all"===a?e:"low"===a?e.filter(function(e){return"low"===e.priority}):"high"===a?e.filter(function(e){return"high"===e.priority}):"middle"===a?e.filter(function(e){return"middle"===e.priority}):e},O=function(e,a){return e.filter(function(e){return e._id!==a})};var w=function(){var e=Object(n.useState)(C),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(m.a)(c,2),o=s[0],i=s[1],u=k(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(O(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(27),y=t(11),j=t.n(y),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=""!==l?j.a.error:j.a.someClass,o=""!==l?j.a.buttError:j.a.buttClass;return r.a.createElement("div",{className:j.a.main},r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("span",null,l),r.a.createElement("button",{className:o,onClick:n},"add"),r.a.createElement("span",{className:j.a.users}," Total Users -",c,"-"))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(m.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),d=u[0],E=u[1],_=a.length;return r.a.createElement(S,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:function(){E(""),""===s?E(" Enter a name, please "):(alert("Hello ".concat(s," !")),t(s),o(""))},error:d,totalUsers:_})},I=t(41);var J=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:function(e){l([].concat(Object(x.a)(t),[{_id:Object(I.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(12),M=t(15),A=t.n(M),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,m=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(A.a.error," ").concat(o||""),u="".concat(c?A.a.errorInput:A.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},m)),c&&r.a.createElement("span",{className:i},c))},R=t(26),L=t.n(R),B=t(19),H=t.n(B),W=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?H.a.red:H.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},F=t(20),G=t.n(F),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=!!c,o=function(){c?(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."),s=!0):alert(t)},i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],E=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{red:s,onClick:o},"push me gentle "),r.a.createElement(K,{checked:d,onChangeChecked:E},"some text "),r.a.createElement(K,{checked:d,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(w,null),r.a.createElement(J,null),r.a.createElement(V,null))},D=t(14),Q=t.n(D);var X=function(){return r.a.createElement("div",{className:Q.a.main},r.a.createElement("div",{className:Q.a.error_message},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("h1",null,"OOPS!"),r.a.createElement("h2",{className:Q.a.error_message},"Error 404"),r.a.createElement("div",{className:Q.a.error_message},"OOPS! Something went wrong! Page not found!"))};var q=function(){return r.a.createElement("div",null,"Will be Junior soon=)")};var z=function(){return r.a.createElement("div",null,"Will be Junior+ for sure!")};var $=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:"/PRE_JUNIOR"})}}),r.a.createElement(_.b,{path:"/PRE_JUNIOR",render:function(){return r.a.createElement(Y,null)}}),"// add routes",r.a.createElement(_.b,{path:"/JUNIOR",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(_.b,{path:"/JUNIORPLUS",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(X,null)}})))};var Z=function(){var e=Object(n.useState)(!0),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(E,{onBlur:function(e){l(e),console.log("onBlur")},showNB:t}),r.a.createElement($,null)))};var ee=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("h1",null,"React homeworks:"),r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[28,1,2]]]);
//# sourceMappingURL=main.c09bf4db.chunk.js.map