(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(9),s=n.n(i),r=(n(15),n(10)),o=n(6),l=n(2),u=n(3),b=n(5),h=n(4),j=(n(16),n(0)),d=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:e}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-plus",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-minus",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-trash",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.Component),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{children:this.props.habits.map((function(e){return Object(j.jsx)(d,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))})}}]),n}(a.Component),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.totalCount;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(j.jsx)("span",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:t})]})}}]),n}(a.PureComponent),O=Object(a.memo)((function(t){var e=c.a.createRef();return Object(j.jsxs)("form",{className:"habit-input",onSubmit:function(n){n.preventDefault();var a=e.current.value;a&&t.onAdd(a),e.current.value=""},children:[Object(j.jsx)("input",{ref:e,type:"text",placeholder:"Please enter your Habit!"}),Object(j.jsx)("button",{className:"habit-add",children:"ADD"})]})})),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={habit_list:[{id:0,name:"Reading",count:0},{id:1,name:"Running",count:0},{id:2,name:"Coding",count:0}]},t.handleIncrement=function(e){var n=t.state.habit_list.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habit_list:n})},t.handleDecrement=function(e){var n=t.state.habit_list.map((function(t){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{count:t.count>0?t.count-1:0}):t}));t.setState({habit_list:n})},t.handleDelete=function(e){var n=t.state.habit_list.filter((function(t){return t.id!==e.id}));t.setState({habit_list:n}),console.log(t.state.habit_list)},t.handleAdd=function(e){var n=[].concat(Object(r.a)(t.state.habit_list),[{id:Date.now(),name:e,count:0}]);t.setState({habit_list:n})},t.handleReset=function(){var e=t.state.habit_list.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habit_list:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.habit_list,e=this.state.habit_list.filter((function(t){return t.count>0})).length;return Object(j.jsxs)("div",{children:[" 3",Object(j.jsx)(m,{totalCount:e}),Object(j.jsx)(O,{onAdd:this.handleAdd}),Object(j.jsx)(p,{habits:t,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd}),Object(j.jsx)("button",{className:"habit-reset habit-button",onClick:this.handleReset,children:"Reset All"})]})}}]),n}(a.Component);n(18);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9b05c5b7.chunk.js.map