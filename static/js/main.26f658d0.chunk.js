(this["webpackJsonpchart-3d-react-app"]=this["webpackJsonpchart-3d-react-app"]||[]).push([[0],{4796:function(e,t,a){e.exports=a(4945)},4941:function(e,t,a){},4944:function(e,t,a){},4945:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(185),l=a(42),s=a(4989),u=a(3),p=a(172),h=a.n(p),m=a(173),d=a.n(m),f=a(4979),b=a(4988),g=a(4976),v=Object(g.a)((function(e){return{error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));var y=function(e){var t=v(),a=e.message,n=e.onClose;return e.options,r.a.createElement(b.a,{className:t.error,message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(h.a,{className:Object(u.a)(t.icon,t.iconVariant)}),a),action:[r.a.createElement(f.a,{key:"close",color:"inherit",onClick:n},r.a.createElement(d.a,{className:t.icon}))]})},w=function(e,t){return{type:"SHOW_SNACKBAR",payload:{show:e,snackbarOptions:t}}},O=a(25);var E=Object(O.b)((function(e){return{showSnackbar:e.showSnackbar,snackbarOptions:e.snackbarOptions}}),(function(e){return{hideSnackbar:function(){return e({type:"HIDE_SNACKBAR",payload:{show:!1}})}}}))((function(e){var t=function(){e.hideSnackbar(!0)},a=e.showSnackbar,n=e.snackbarOptions;return r.a.createElement(s.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:a,autoHideDuration:5e3,onClose:t},r.a.createElement(y,{onClose:t,message:n.message,options:n}))})),j=a(20),k=a(13),C=a(29),S=a(30),x=a(32),D=a(8),N=a(4980),I=a(4981),A=a(4990),_=a(12),M=a(6),P=a(4983),R=a(121),B=a(176),F=a(4985),z=Object(M.a)({root:{"& label.Mui-focused":{color:"ghostwhite"},"& .MuiInput-underline:after":{borderBottomColor:"ghostwhite"},"& .MuiFormLabel-root":{color:"ghostwhite"},"& .MuiInputBase-input":{color:"ghostwhite"},"& .MuiInput-underline":{"&:before":{borderBottomColor:"ghostwhite"},"&:hover:not(.Mui-disabled):before":{borderBottom:"1px solid ghostwhite"}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"ghostwhite"},"&:hover fieldset":{borderColor:"ghostwhite"},"&.Mui-focused fieldset":{borderColor:"ghostwhite"}}}})(F.a),T=a(175),U=(a(4807),Object(g.a)((function(e){return{formContainer:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})));var W=Object(O.b)((function(e){return{start:e.start,end:e.end,step:e.step}}),(function(e){return{updateData:function(t){return e(function(e){return{type:"UPDATE_PLOTTING_DATA",payload:{data:e}}}(t))}}}))((function(e){var t=e.open,a=e.start,n=e.end,o=e.step,i=e.updateData,c=U(),l=function(e){return function(t){var a=Number.parseFloat(t.target.value);i(Object(D.a)({},e,Number.isNaN(a)?"":a))}};return r.a.createElement(T.SlideDown,{closed:!t},r.a.createElement("div",null,r.a.createElement("form",{className:c.formContainer,noValidate:!0,autoComplete:"off"},r.a.createElement(z,{id:"standard-number",label:"Start point",type:"number",value:a,onChange:l("start"),margin:"normal"}),r.a.createElement(z,{id:"standard-number",label:"End point",type:"number",value:n,className:c.textField,onChange:l("end"),margin:"normal"}),r.a.createElement(z,{id:"standard-number",label:"Step",type:"number",value:o,className:c.textField,onChange:l("step"),margin:"normal"}))))})),G=a(4982),L=a(177),H=a.n(L),K=a(87),V=a.n(K),J=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={showMoreOptions:!1},a._handleDrawButton=function(){a.props.draw()},a._onInputChange=function(e){a.props.updateFunctionForm(e.target.value)},a._handleShowMoreOptions=function(){a.setState({showMoreOptions:!a.state.showMoreOptions})},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.formula;return r.a.createElement("div",{className:t.root},r.a.createElement(N.a,{position:"relative",className:t.appBar},r.a.createElement(I.a,null,r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(R.a,null,r.a.createElement(B.a,null))),r.a.createElement(A.a,{placeholder:"Write function formula",classes:{root:t.inputRoot,input:t.inputInput},value:a,onChange:this._onInputChange}),r.a.createElement(G.a,{variant:"contained",color:"inherit",className:t.buttonGroup},r.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this._handleDrawButton},"Draw"),r.a.createElement(P.a,{color:"primary",size:"small",onClick:this._handleShowMoreOptions},r.a.createElement(H.a,null))))),r.a.createElement(W,{open:this.state.showMoreOptions})),r.a.createElement(P.a,{variant:"outlined",color:"primary",href:"/graph-drawer"},r.a.createElement(V.a,null)," Change app"))}}]),t}(r.a.Component),$=Object(M.a)((function(e){return{root:{flexGrow:1},appBar:{alignItems:"center"},search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(5),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:180,"&:focus":{width:260}}),buttonGroup:{margin:4}}}))(J),q=Object(O.b)((function(e){return{formula:e.formula}}),(function(e){return{updateFunctionForm:function(t){return e(function(e){return{type:"UPDATE_FUNCTION_FORM",payload:{formula:e}}}(t))}}}))($),Q=a(178),X=a.n(Q),Y=a(179),Z=a.n(Y),ee=a(4986),te=a(4984),ae=a(113),ne=function(){function e(t,a,n,r){Object(j.a)(this,e),this.parser=te.a(),this.parser.evaluate(t),this.x=Object(ae.range)(a,n,r),this.y=Object(ae.range)(a,n,r),this.z=[]}return Object(k.a)(e,[{key:"evaluate",value:function(){var e=!0,t=!1,a=void 0;try{for(var n,r=this.x[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var o=n.value,i=[],c=!0,l=!1,s=void 0;try{for(var u,p=this.y[Symbol.iterator]();!(c=(u=p.next()).done);c=!0){var h=u.value,m=this.parser.evaluate("f(".concat(o,",").concat(h,")"));i.push(m)}}catch(d){l=!0,s=d}finally{try{c||null==p.return||p.return()}finally{if(l)throw s}}this.z.push(i)}}catch(d){t=!0,a=d}finally{try{e||null==r.return||r.return()}finally{if(t)throw a}}return{x:this.x,y:this.y,z:this.z}}}]),e}(),re=a(88),oe=a.n(re),ie=X()(Z.a),ce={title:"3D Chart",width:"800",height:"600",autosize:!0},le={showLink:!1,displayModeBar:!0},se=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={x:null,y:null,z:null,finished:!1},a.drawPlot=function(){var e=a.props,t=e.formula,n=e.start,r=e.end,o=e.step;try{var i=new ne(t,n,r,o).evaluate(),c=i.x,l=i.y,s=i.z;a.setState({x:c,y:l,z:s,finished:!0})}catch(u){a.props.showSnackbar(!0,{message:"Cannot parse function!"})}},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){var e=[{type:"surface",x:this.state.x,y:this.state.y,z:this.state.z,marker:{color:"rgb(16, 32, 77)"}}];return r.a.createElement(ee.a,{flexDirection:"column",flexWrap:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",pt:1},r.a.createElement(ie,{data:e,layout:ce,config:le}),this.state.finished&&r.a.createElement(ee.a,null,r.a.createElement(P.a,{color:"primary",size:"small",variant:"contained"},r.a.createElement(oe.a,null)," Share")))}}]),t}(r.a.Component),ue=Object(O.b)((function(e){return{formula:e.formula,start:e.start,end:e.end,step:e.step}}),(function(e){return{showSnackbar:function(t,a){return e(w(t,a))}}}))(se),pe=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r))))._drawPlot=function(){a.plot.drawPlot()},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{draw:this._drawPlot}),r.a.createElement(ue,{onRef:function(t){return e.plot=t}}))}}]),t}(r.a.Component),he=a(182),me=a.n(he);var de=Object(M.a)((function(e){return{root:{flexGrow:1},appBar:{alignItems:"center"}}}))((function(e){var t=e.classes,a=e.fileUploaded;return r.a.createElement("div",{className:t.root},r.a.createElement(N.a,{position:"relative",className:t.appBar},r.a.createElement(I.a,null,r.a.createElement("input",{accept:"text/csv",style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file",onChange:function(e){var t=new FileReader;t.readAsBinaryString(e.target.files[0]),t.onload=function(e){return a(e.target.result)}}}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(P.a,{variant:"contained",component:"span",color:"primary"},r.a.createElement(me.a,null)," Upload")))),r.a.createElement(P.a,{variant:"outlined",color:"primary",href:"/"},r.a.createElement(V.a,null)," Change app"))})),fe=a(89),be=a(183),ge=a.n(be),ve=a(184);var ye={layout:{hierarchical:!1},edges:{color:"lightgray",arrows:{to:{enabled:!1},from:{enabled:!1}}},nodes:{font:{color:"ghostwhite"}},height:"400px",width:"600px"},we=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={graphData:{nodes:[],edges:[]},finished:!1},a.drawGraph=function(e){var t,n;try{var r=function(e){for(var t=new ve.Parser({}).parse(e,0,!1).data,a=t[0],n=a.length,r=t.slice(1),o=[],i=[],c=0;c<n;c++){a[c].trim()&&o.push({id:c+1,label:a[c].trim(),color:"#"+(16777215*Math.random()<<0).toString(16)})}for(var l=0;l<r.length;l++){if(r[l].length>2)throw Error("Invalid file format");var s=r[l][0].trim(),u=r[l][1].trim();if(s>n||u>n)throw Error("Connection between nodes ".concat(s," and ").concat(u," cannot be established!"));s&&u&&i.push({from:s,to:u})}return[o,i]}(e),o=Object(fe.a)(r,2);t=o[0],n=o[1]}catch(i){console.error(i),a.props.showSnackbar(!0,{message:i.message})}a.setState({graphData:{nodes:t,edges:n},finished:!0})},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){return r.a.createElement(ee.a,{flexDirection:"column",flexWrap:"nowrap",display:"flex",justifyContent:"center",alignItems:"center",pt:1},r.a.createElement(ee.a,null,r.a.createElement(ge.a,{graph:this.state.graphData,options:ye})),this.state.finished&&r.a.createElement(ee.a,{mt:4},r.a.createElement(P.a,{color:"primary",size:"small",variant:"contained"},r.a.createElement(oe.a,null)," Share")))}}]),t}(r.a.Component),Oe=Object(O.b)(null,(function(e){return{showSnackbar:function(t,a){return e(w(t,a))}}}))(we),Ee=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r))))._drawGraph=function(e){a.graph.drawGraph(e)},a}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(de,{fileUploaded:this._drawGraph}),r.a.createElement(Oe,{onRef:function(t){return e.graph=t}}))}}]),t}(r.a.Component);a(4941);var je=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{basename:"/"},r.a.createElement(l.a,{exact:!0,path:"/",component:pe}),r.a.createElement(l.a,{path:"/graph-drawer",component:Ee})),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(61);function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var xe={formula:"f(x,y) = ",start:-10,end:10,step:.1,showSnackbar:!1,snackbarOptions:{message:""}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_FUNCTION_FORM":return Se({},e,{formula:n.formula});case"UPDATE_PLOTTING_DATA":var r=Object.keys(n.data)[0],o=n.data[r];return Se({},e,Object(D.a)({},r,o));case"SHOW_SNACKBAR":return Se({},e,{showSnackbar:!0,snackbarOptions:n.snackbarOptions});case"HIDE_SNACKBAR":return Se({},e,{showSnackbar:!1});default:return e}},Ne=a(187),Ie=Object(ke.createStore)(De,Object(Ne.composeWithDevTools)());a(4943),a(4944);i.a.render(r.a.createElement(O.a,{store:Ie},r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4796,1,2]]]);
//# sourceMappingURL=main.26f658d0.chunk.js.map