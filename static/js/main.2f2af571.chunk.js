(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={blue:"HW4_blue__3lCFj",column:"HW4_column__2mJDt",testSpanError:"HW4_testSpanError__3afaE"}},13:function(e,t,n){e.exports={button:"SuperButton_button__2qc6r",default:"SuperButton_default__3WdOj",red:"SuperButton_red__3-RH-"}},15:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__371dC",spanClassName:"SuperCheckbox_spanClassName__100XY"}},20:function(e,t,n){e.exports={App:"App_App__1b_jY"}},21:function(e,t,n){e.exports={someClass:"Greeting_someClass__1JpLu",error:"Greeting_error__1sFE5"}},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),c=n.n(s),o=(n(29),n(20)),i=n.n(o),j=n(0);var l=function(){return Object(j.jsx)("div",{children:"// add NavLinks"})},u=n(4),d=n.n(u),b=function(e){var t=e.avatar,n=e.name,a=e.message,r=e.time;return Object(j.jsx)("div",{className:d.a.message,children:Object(j.jsxs)("div",{className:d.a.messageBlock,children:[Object(j.jsx)("img",{src:t,className:d.a.messageImg,alt:"hello"}),Object(j.jsxs)("div",{className:d.a.messageWrapper,children:[Object(j.jsx)("div",{className:d.a.messageWrapper_name,children:n}),Object(j.jsxs)("div",{className:d.a.messageWrapper_block,children:[Object(j.jsx)("div",{className:d.a.ms,children:a}),Object(j.jsx)("div",{className:d.a.time,children:r})]})]})]})})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",p="some text",x="22:00";var O=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(b,{avatar:m,name:h,message:p,time:x}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},_=n(2);var f=function(e){var t=e.deleteAffairCallback,n=e.id,a=e.name;return Object(j.jsxs)("div",{children:[a,Object(j.jsx)("button",{onClick:function(){t(n)},children:"X"})]})},v=n(8),g=n.n(v);var C=function(e){var t=e.data,n=e.setFilter,a=e.deleteAffairCallback,r=e.filter,s=t.map((function(e){return Object(j.jsx)(f,{id:e._id,name:e.name,deleteAffairCallback:a},e._id)})),c="all"===r?g.a.someClass:"",o="high"===r?g.a.someClass:"",i="middle"===r?g.a.someClass:"",l="low"===r?g.a.someClass:"";return Object(j.jsxs)("div",{children:[s,Object(j.jsx)("button",{onClick:function(){n("all")},className:c,children:"All"}),Object(j.jsx)("button",{onClick:function(){n("high")},className:o,children:"High"}),Object(j.jsx)("button",{onClick:function(){n("middle")},className:i,children:"Middle"}),Object(j.jsx)("button",{onClick:function(){n("low")},className:l,children:"Low"})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(a.useState)(k),t=Object(_.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("all"),c=Object(_.a)(s,2),o=c[0],i=c[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(C,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:o}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},S=n(24),y=n(21),w=n.n(y),W=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,s=e.totalUsers,c=e.onKeyPressHandler,o=w.a.error;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,onChange:n,className:r?o:"",onKeyPress:c}),Object(j.jsx)("span",{children:r}),Object(j.jsx)("button",{onClick:a,children:"add"}),Object(j.jsx)("span",{children:s})]})},E=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),s=Object(_.a)(r,2),c=s[0],o=s[1],i=Object(a.useState)(""),l=Object(_.a)(i,2),u=l[0],d=l[1],b=function(){""===c?d("Name is required"):(alert("Hello ".concat(c," !")),n(c),o(""))},m=t.length;return Object(j.jsx)(W,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(o(t),d("")):(o(""),d("Name is required"))},addUser:b,error:u,totalUsers:m,onKeyPressHandler:function(e){"Enter"===e.key&&(b(),o(""))}})},T=n(40);var A=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};r([].concat(Object(S.a)(n),[t]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},I=n(5),H=n(6),B=n(9),M=n.n(B),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,o=e.spanClassName,i=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(M.a.error," ").concat(o||""),u="".concat(M.a.input).concat(s?M.a.errorInput:M.a.superInput," ").concat(c);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},i)),s&&Object(j.jsx)("span",{className:l,children:s})]})},U=n(12),F=n.n(U),J=n(13),K=n.n(J),q=function(e){var t=e.red,n=e.className,a=Object(H.a)(e,["red","className"]),r="".concat(K.a.button).concat(t?K.a.red:K.a.default," ").concat(n);return Object(j.jsx)("button",Object(I.a)({className:r},a))},Y=n(15),L=n.n(Y),X=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),a=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),r="".concat(L.a.checkbox," ").concat(t||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){},className:r},a)),n&&Object(j.jsx)("span",{className:L.a.spanClassName,children:n})]})};var G=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],s=n?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(_.a)(o,2),l=i[0],u=i[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:F.a.column,children:[Object(j.jsx)(P,{value:n,onChangeText:r,onEnter:c,error:s,spanClassName:F.a.testSpanError}),Object(j.jsx)(P,{className:F.a.blue}),Object(j.jsx)(q,{children:"default"}),Object(j.jsx)(q,{red:!0,onClick:c,children:"delete "}),Object(j.jsx)(q,{disabled:!0,children:"disabled"}),Object(j.jsx)(X,{checked:l,onChangeChecked:u,children:"some text "}),Object(j.jsx)(X,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var R=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(N,{}),Object(j.jsx)(A,{}),Object(j.jsx)(G,{})]})},z=n(39);var D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"404"}),Object(j.jsx)("div",{children:"Page not found!"}),Object(j.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Q="/pre-junior";var Z=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(z.c,{children:[Object(j.jsx)(z.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(z.a,{to:Q})}}),Object(j.jsx)(z.b,{path:Q,render:function(){return Object(j.jsx)(R,{})}}),"// add routes",Object(j.jsx)(z.b,{render:function(){return Object(j.jsx)(D,{})}})]})})};var $=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(Z,{})]})};var V=function(){return Object(j.jsxs)("div",{className:i.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)($,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={messageBlock:"Message_messageBlock__2EY3j",messageWrapper:"Message_messageWrapper__hXwUf",messageWrapper_block:"Message_messageWrapper_block__3eMhL",messageWrapper_name:"Message_messageWrapper_name__2fado"}},8:function(e,t,n){e.exports={someClass:"Affairs_someClass__3gJTM"}},9:function(e,t,n){e.exports={input:"SuperInputText_input__18Tzq",superInput:"SuperInputText_superInput__3FdY3",errorInput:"SuperInputText_errorInput__oQurH",error:"SuperInputText_error__3pUte"}}},[[36,1,2]]]);
//# sourceMappingURL=main.2f2af571.chunk.js.map