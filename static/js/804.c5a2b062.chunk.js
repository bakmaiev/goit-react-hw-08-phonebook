"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[804],{8804:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,i,s,d,p,x,l,c,u=t(2791),h=t(168),b=t(3164),f=b.styled.input(r||(r=(0,h.Z)(["\n  color: #333;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px;\n  border-radius: 2px;\n  background-color: rgb(255, 255, 255);\n  border: none;\n  outline: none;\n  max-width: 100%;\n  border-bottom: 1px solid transparent;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0;\n  transition: all 0.3s;\n"]))),m=b.styled.label(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 20px;\n"]))),g=t(9434),y=t(4808),j=function(n){return n.contacts.items},v=function(n){return n.contacts.IsLoading},w=function(n){return n.contacts.error},Z=function(n){return n.filter.filter},C=t(3329),k=function(){var n=(0,g.v9)(Z),e=(0,g.I0)();return(0,C.jsxs)(m,{children:[(0,C.jsx)("span",{children:"Search contacts: "}),(0,C.jsx)(f,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,y.W)(n.target.value))}})]})},A=b.styled.div(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n"]))),z=b.styled.li(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"]))),_=b.styled.form(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),N=b.styled.h1(d||(d=(0,h.Z)(["\n  margin: 0 auto;\n  font-size: 30px;\n"]))),I=b.styled.button(p||(p=(0,h.Z)(["\n  align-items: center;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  cursor: pointer;\n  max-width: 100%;\n  height: 48px;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  font-size: 15px;\n  text-transform: uppercase;\n\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n"]))),L=b.styled.input(x||(x=(0,h.Z)(["\n  color: #333;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px;\n  border-radius: 2px;\n  background-color: rgb(255, 255, 255);\n  border: none;\n  outline: none;\n  max-width: 100%;\n  border-bottom: 1px solid transparent;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0;\n  transition: all 0.3s;\n"]))),S=b.styled.label(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),q=t(3634),D=function(){var n=(0,g.v9)(j),e=(0,g.v9)(Z),t=(0,g.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,C.jsx)(A,{children:(0,C.jsx)("ul",{children:Array.isArray(r)&&r.map((function(n){return(0,C.jsxs)(z,{children:[(0,C.jsxs)("span",{children:[n.name,": ",n.number]}),(0,C.jsx)(I,{type:"button",onClick:function(){return t((0,q.GK)(n.id))},children:"Delete"})]},n.id)}))})})},F=t(9439),K=t(1686),P=function(n){var e=n.title,t=(0,g.v9)(j),r=(0,g.I0)(),a=(0,u.useState)(""),o=(0,F.Z)(a,2),i=o[0],s=o[1],d=(0,u.useState)(""),p=(0,F.Z)(d,2),x=p[0],l=p[1],c=function(n){var e=n.target,t=e.value,r=e.name;"name"===r&&s(t),"number"===r&&l(t)},h=function(){s(""),l("")};return(0,C.jsxs)(_,{onSubmit:function(n){n.preventDefault();var e={name:i,number:x},a=e.name.toLowerCase().trim(),o=e.number.replaceAll(" ","");t.some((function(n){return n.name.toLowerCase().trim()===a}))?K.Notify.warning("The contact name ".concat(a," is already exists!")):t.some((function(n){return n.number.replaceAll(" ","")===o}))?K.Notify.warning("The contact number ".concat(o," is already exists!")):(r((0,q.uK)(e)),h())},children:[(0,C.jsx)(N,{children:e}),(0,C.jsxs)(S,{children:[(0,C.jsx)("span",{children:"Name: "}),(0,C.jsx)(L,{onChange:c,type:"text",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)("span",{children:"Number: "}),(0,C.jsx)(L,{onChange:c,type:"tel",name:"number",value:x,pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)(I,{type:"submit",children:"Add contacts"})]})},T=b.styled.h2(c||(c=(0,h.Z)(["\n  display: table;\n  margin: 0 auto 20px;\n  font-size: 30px;\n"]))),Y=function(n){var e=n.title;return(0,C.jsx)(T,{children:e})},B=t(4217),E=function(){var n=(0,g.I0)(),e=(0,g.v9)(B.fN),t=(0,g.v9)(v),r=(0,g.v9)(w);return(0,u.useEffect)((function(){n((0,q.yF)())}),[n]),e?(0,C.jsxs)("div",{children:[(0,C.jsx)(P,{title:"Phonebook"}),(0,C.jsx)(Y,{title:"Contacts"}),t&&!r&&(0,C.jsx)("b",{children:"Request in progress..."}),(0,C.jsx)(k,{}),(0,C.jsx)(D,{title:"Contacts"}),r&&(0,C.jsx)("b",{children:r})]}):(0,C.jsx)("h2",{children:"Sign in to access the phonebook!"})}}}]);
//# sourceMappingURL=804.c5a2b062.chunk.js.map