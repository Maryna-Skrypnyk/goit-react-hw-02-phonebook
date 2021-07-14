(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={Label:"Filter_Label__3kh65",LabelText:"Filter_LabelText__3Wqpr",Input:"Filter_Input__UVEna"}},15:function(t,e,n){t.exports={container:"Container_container__1fIfw"}},2:function(t,e,n){t.exports={Form:"ContactForm_Form__2PCLc",Label:"ContactForm_Label__2g8c2",LabelText:"ContactForm_LabelText__1tE6q",Input:"ContactForm_Input__2SIJi",Button:"ContactForm_Button__3KyYu"}},3:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__WorHU",ContactItem:"ContactList_ContactItem__1XN5U",Contact:"ContactList_Contact__2fAnT",ContactName:"ContactList_ContactName__18Td-",Button:"ContactList_Button__3DCrr"}},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(14),o=n.n(c),s=n(16),i=n(6),l=n(7),u=n(10),m=n(9),b=n(15),d=n.n(b),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})},p=function(t){var e=t.children;return Object(h.jsx)(j,{children:e})},C=n(8),f=n(11),x=n(4),_=n.n(x),O=n(2),v=n.n(O),g={name:"",number:""},N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(f.a)({},g),t.nameInputId=_.a.generate(),t.numberInputId=_.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(C.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.props.onSubmit(Object(f.a)({},t.state)),!a&&r||a&&!r||t.reset()},t.reset=function(){t.setState(Object(f.a)({},g))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.Form,children:[Object(h.jsxs)("label",{htmlFor:this.nameInputId,className:v.a.Label,children:[Object(h.jsx)("span",{className:v.a.LabelText,children:"Name"}),Object(h.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",maxlength:"40",className:v.a.Input})]}),Object(h.jsxs)("label",{htmlFor:this.numberInputId,className:v.a.Label,children:[Object(h.jsx)("span",{className:v.a.LabelText,children:"Number"}),Object(h.jsx)("input",{id:this.numberInputId,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",maxlength:"18",className:v.a.Input})]}),Object(h.jsx)("button",{type:"submit",className:v.a.Button,children:"Add contact"})]})}}]),n}(a.Component),I=n(12),L=n.n(I),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:L.a.Label,children:[Object(h.jsx)("span",{className:L.a.LabelText,children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"name",value:e,onChange:n,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:L.a.Input})]})},F=n(3),A=n.n(F),S=function(t){var e=t.onDeleteContact;return Object(h.jsx)("button",{onClick:e,className:A.a.Button,children:"Delete"})},B=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return Object(h.jsxs)("li",{className:A.a.ContactItem,children:[Object(h.jsxs)("p",{className:A.a.Contact,children:[Object(h.jsxs)("span",{className:A.a.ContactName,children:[e,":"]})," ",n]}),Object(h.jsx)(S,{onDeleteContact:a})]})},k=function(t){var e=t.contacts,n=t.onDeleteContact;return 0===e.length?null:Object(h.jsx)("ul",{className:A.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(h.jsx)(B,{name:a,number:r,onDeleteContact:function(){return n(e)}},e)}))})},w=(n(30),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:_.a.generate(),name:n,number:a};r.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):r.find((function(t){return t.number===a}))?alert("Number ".concat(a," is already in contacts")):n&&""!==n.trim()||a&&""!==a.trim()?n&&""!==n.trim()?a&&""!==a.trim()?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}})):alert('Field "Number" is empty'):alert('Field "Name" is empty'):alert('Fill in the fields "Name" and "Number"')},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.getVisibleContactsSortByName=function(){return t.getVisibleContacts().sort((function(t,e){var n=t.name.toUpperCase(),a=e.name.toUpperCase();return n<a?-1:n>a?1:0}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContactsSortByName();return Object(h.jsxs)(p,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(N,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(y,{value:t,onChange:this.changeFilter}),Object(h.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));n(31),n(32);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d24fc239.chunk.js.map