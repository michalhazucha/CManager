(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),u=a(5),m=a(7),p=a(65),d=a(66),h=a(67),b=a(64),f=function(e){var t=e.content;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{to:"/",className:"navbar-brand"},r.a.createElement("i",{className:"fas-fa-home"}),t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link text-light"},r.a.createElement("i",{className:"fas-fa-home"}),"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link text-light"}," ",r.a.createElement("i",{className:"fas-fa-plus"}),"Add Contact"))))))};f.defaultProps={content:"MyApp"};var v=f;var E=a(8),y=a.n(E),g=a(12),C=(a(40),a(29)),j=a(17),N=a(13),O=a.n(N),k=r.a.createContext(),w=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(j.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(j.a)({},e,{contacts:[t.payload].concat(Object(C.a)(e.contacts))});case"UPDATE_CONTACT":return Object(j.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return w(t,e)})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),A=k.Consumer,S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(g.a)(y.a.mark(function e(t,a){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(A,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}))),r.a.createElement("div",{className:"col-4 py-2"},r.a.createElement("i",{className:"fas fa-times ",style:{cursor:"pointer",float:"right",color:"#dc3545"},onClick:e.onDeleteClick.bind(e,a,s)})," ",r.a.createElement(b.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt text-warning mx-2",style:{cursor:"pointer",float:"right"}}))," ")),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",c),r.a.createElement("li",{className:"list-group-item"},"Phone:",o)):null)})}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("h1",{className:" card-header text-center display-5 text-light bg-danger p-3"},"Contact List"),r.a.createElement("div",{className:"card-body"},t.map(function(e){return r.a.createElement(S,{key:e.id,contact:e})}))))})}}]),t}(n.Component),D=(a(60),a(61),a(14)),q=a(1),P=a.n(q),R=a(27),_=a.n(R),I=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:_()("form-control form-control-lg)",{"is-invalid":s}),placeholder:c,name:a,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};I.proTypes={label:P.a.string.isRequired,name:P.a.string.isRequired,value:P.a.string.isRequired,placeholder:P.a.string.isRequired,type:P.a.string.isRequired,onChange:P.a.func.isRequired,error:P.a.string.isRequired},I.defaultProps={type:"text"};var M=I,L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(t,n){var r,c,o,l,s,i;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=7;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 7:if(""!==o){e.next=12;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 12:if(""!==l){e.next=18;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 18:return s={name:c,email:o,phone:l},e.next=21,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 21:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:""});case 24:a.props.history.push("/");case 26:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(M,{label:"E-mail",name:"email",type:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(M,{label:"Phone",name:"phone",placeholder:"Enter phone number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-primary"}))))})}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(g.a)(y.a.mark(function e(t,n){var r,c,o,l,s,i,u;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=7;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 7:if(""!==o){e.next=12;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 12:if(""!==l){e.next=16;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 16:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=20,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 20:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.setState({name:"",email:"",phone:""}),a.props.history.push("/");case 24:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark(function e(){var t,a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(M,{label:"E-mail",name:"email",type:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(M,{label:"Phone",name:"phone",placeholder:"Enter phone number",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-secondary "}))))})}}]),t}(n.Component);function U(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"d-block text-danger display-1 "},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry this page does not exist"))}var B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,{content:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:T}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(h.a,{exact:!0,path:"/test",component:B}),r.a.createElement(h.a,{component:U}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.4117ebe1.chunk.js.map