(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(174),r=a(274),l=a(181),o=a(457),s=a(451),d=a(456),u=(a(172),a(156)),m=a.n(u),b=a(158),p=a.n(b),v=a(159),O=a.n(v),j=a(161),h=a.n(j),g=a(162),f=a.n(g),E=a(163),y=a.n(E),N=a(54),w=a.n(N),x=a(53),q=a.n(x),k=a(165),A=a.n(k),C=a(179),P=a.n(C),T=a(157),L=a.n(T),I=(a(4),a(155)),z=a(171),D=a(246),G=a(247),R=a(266),S=a(197),J=a(279);function K(e){var t=e.children,a=e.className,c=e.content,n=e.hidden,r=e.visible,l=L()(Object(z.a)(r,"visible"),Object(z.a)(n,"hidden"),"content",a),o=Object(D.a)(K,e),s=Object(G.a)(K,e);return i.a.createElement(s,m()({},o,{className:l}),I.a.isNil(t)?c:t)}K.handledProps=["as","children","className","content","hidden","visible"],K.propTypes={};var V=K,U=a(180),B=a.n(U);function F(e){var t=e.attached,a=e.basic,c=e.buttons,n=e.children,r=e.className,l=e.color,o=e.compact,s=e.content,d=e.floated,u=e.fluid,b=e.icon,p=e.inverted,v=e.labeled,O=e.negative,j=e.positive,h=e.primary,g=e.secondary,f=e.size,E=e.toggle,y=e.vertical,N=e.widths,w=L()("ui",l,f,Object(z.a)(a,"basic"),Object(z.a)(o,"compact"),Object(z.a)(u,"fluid"),Object(z.a)(b,"icon"),Object(z.a)(p,"inverted"),Object(z.a)(v,"labeled"),Object(z.a)(O,"negative"),Object(z.a)(j,"positive"),Object(z.a)(h,"primary"),Object(z.a)(g,"secondary"),Object(z.a)(E,"toggle"),Object(z.a)(y,"vertical"),Object(z.b)(t,"attached"),Object(z.e)(d,"floated"),Object(z.g)(N),"buttons",r),x=Object(D.a)(F,e),q=Object(G.a)(F,e);return P()(c)?i.a.createElement(q,m()({},x,{className:w}),I.a.isNil(n)?s:n):i.a.createElement(q,m()({},x,{className:w}),B()(c,function(e){return X.create(e)}))}F.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],F.propTypes={};var H=F;function M(e){var t=e.className,a=e.text,c=L()("or",t),n=Object(D.a)(M,e),r=Object(G.a)(M,e);return i.a.createElement(r,m()({},n,{className:c,"data-text":a}))}M.handledProps=["as","className","text"],M.propTypes={};var Q=M,W=function(e){function t(){var e,a;p()(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return a=h()(this,(e=f()(t)).call.apply(e,[this].concat(i))),q()(w()(w()(a)),"computeElementType",function(){var e=a.props,t=e.attached,c=e.label;if(!P()(t)||!P()(c))return"div"}),q()(w()(w()(a)),"computeTabIndex",function(e){var t=a.props,c=t.disabled,i=t.tabIndex;return P()(i)?c?-1:"div"===e?0:void 0:i}),q()(w()(w()(a)),"focus",function(){return A()(a.ref,"focus")}),q()(w()(w()(a)),"handleClick",function(e){a.props.disabled?e.preventDefault():A()(a.props,"onClick",e,a.props)}),q()(w()(w()(a)),"handleRef",function(e){return a.ref=e}),q()(w()(w()(a)),"hasIconClass",function(){var e=a.props,t=e.labelPosition,c=e.children,i=e.content,n=e.icon;return!0===n||n&&(t||I.a.isNil(c)&&P()(i))}),a}return y()(t,e),O()(t,[{key:"render",value:function(){var e=this.props,a=e.active,c=e.animated,n=e.attached,r=e.basic,l=e.children,o=e.circular,s=e.className,d=e.color,u=e.compact,b=e.content,p=e.disabled,v=e.floated,O=e.fluid,j=e.icon,h=e.inverted,g=e.label,f=e.labelPosition,E=e.loading,y=e.negative,N=e.positive,w=e.primary,x=e.secondary,q=e.role,k=e.size,A=e.toggle,C=L()(d,k,Object(z.a)(a,"active"),Object(z.a)(r,"basic"),Object(z.a)(o,"circular"),Object(z.a)(u,"compact"),Object(z.a)(O,"fluid"),Object(z.a)(this.hasIconClass(),"icon"),Object(z.a)(h,"inverted"),Object(z.a)(E,"loading"),Object(z.a)(y,"negative"),Object(z.a)(N,"positive"),Object(z.a)(w,"primary"),Object(z.a)(x,"secondary"),Object(z.a)(A,"toggle"),Object(z.b)(c,"animated"),Object(z.b)(n,"attached")),T=L()(Object(z.b)(f||!!g,"labeled")),R=L()(Object(z.a)(p,"disabled"),Object(z.e)(v,"floated")),K=Object(D.a)(t,this.props),V=Object(G.a)(t,this.props,this.computeElementType),U=this.computeTabIndex(V);if(!P()(g)){var B=L()("ui",C,"button",s),F=L()("ui",T,"button",s,R),H=J.a.create(g,{defaultProps:{basic:!0,pointing:"left"===f?"right":"left"},autoGenerateKey:!1});return i.a.createElement(V,m()({},K,{className:F,onClick:this.handleClick}),"left"===f&&H,i.a.createElement("button",{className:B,disabled:p,ref:this.handleRef,tabIndex:U},S.a.create(j,{autoGenerateKey:!1})," ",b),("right"===f||!f)&&H)}var M=L()("ui",C,R,T,"button",s),Q=!I.a.isNil(l);return i.a.createElement(V,m()({},K,{className:M,disabled:p&&"button"===V||void 0,onClick:this.handleClick,ref:this.handleRef,role:q,tabIndex:U}),Q&&l,!Q&&S.a.create(j,{autoGenerateKey:!1}),!Q&&b)}}]),t}(c.Component);q()(W,"defaultProps",{as:"button",role:"button"}),q()(W,"Content",V),q()(W,"Group",H),q()(W,"Or",Q),q()(W,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),W.propTypes={},W.create=Object(R.c)(W,function(e){return{content:e}});var X=W,Y=a(280);t.default=Object(l.b)(function(e){return c.createElement("div",null,c.createElement(o.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},c.createElement(r.a,{Link:n.Link,pathname:e.location.pathname,items:l.a,inverted:!0}),c.createElement(s.a,{text:!0},c.createElement(d.a,{inverted:!0,as:"h1"},"Gatsby 2.0 - Starter kit"),c.createElement(d.a,{inverted:!0,as:"h2"},"Typescript - Jest - Semantic UI"),c.createElement(X,{primary:!0,size:"huge"},"Get started!"))),c.createElement(o.a,{vertical:!0,className:"stripe"},c.createElement(Y.a,{stackable:!0,verticalAlign:"middle",className:"container"},c.createElement(Y.a.Row,null,c.createElement(Y.a.Column,{width:"8"},c.createElement(d.a,null,"Lorem ipsum"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),c.createElement(d.a,null,"Dolor sit amet"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),c.createElement(Y.a.Column,{width:"6",floated:"right"},c.createElement(d.a,null,"Lorem ipsum"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),c.createElement(d.a,null,"Dolor sit amet"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),c.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},c.createElement(Y.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},c.createElement(Y.a.Row,null,c.createElement(Y.a.Column,null,c.createElement(d.a,{icon:!0},c.createElement(S.a,{name:"wizard"}),"A kind of magic!"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),c.createElement(Y.a.Column,null,c.createElement(d.a,{icon:!0},c.createElement(S.a,{name:"wizard"}),"A kind of magic!"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),c.createElement(Y.a.Column,null,c.createElement(d.a,{icon:!0},c.createElement(S.a,{name:"wizard"}),"A kind of magic!"),c.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))})},280:function(e,t,a){"use strict";a(172);var c=a(156),i=a.n(c),n=a(157),r=a.n(n),l=(a(4),a(0)),o=a.n(l),s=a(171),d=a(246),u=a(247),m=a(266);function b(e){var t=e.children,a=e.className,c=e.computer,n=e.color,l=e.floated,m=e.largeScreen,p=e.mobile,v=e.only,O=e.stretched,j=e.tablet,h=e.textAlign,g=e.verticalAlign,f=e.widescreen,E=e.width,y=r()(n,Object(s.a)(O,"stretched"),Object(s.c)(v,"only"),Object(s.d)(h),Object(s.e)(l,"floated"),Object(s.f)(g),Object(s.g)(c,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(p,"wide mobile"),Object(s.g)(j,"wide tablet"),Object(s.g)(f,"wide widescreen"),Object(s.g)(E,"wide"),"column",a),N=Object(d.a)(b,e),w=Object(u.a)(b,e);return o.a.createElement(w,i()({},N,{className:y}),t)}b.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],b.propTypes={},b.create=Object(m.c)(b,function(e){return{children:e}});var p=b;function v(e){var t=e.centered,a=e.children,c=e.className,n=e.color,l=e.columns,m=e.divided,b=e.only,p=e.reversed,O=e.stretched,j=e.textAlign,h=e.verticalAlign,g=r()(n,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(O,"stretched"),Object(s.c)(b,"only"),Object(s.c)(p,"reversed"),Object(s.d)(j),Object(s.f)(h),Object(s.g)(l,"column",!0),"row",c),f=Object(d.a)(v,e),E=Object(u.a)(v,e);return o.a.createElement(E,i()({},f,{className:g}),a)}v.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],v.propTypes={};var O=v;function j(e){var t=e.celled,a=e.centered,c=e.children,n=e.className,l=e.columns,m=e.container,b=e.divided,p=e.doubling,v=e.inverted,O=e.padded,h=e.relaxed,g=e.reversed,f=e.stackable,E=e.stretched,y=e.textAlign,N=e.verticalAlign,w=r()("ui",Object(s.a)(a,"centered"),Object(s.a)(m,"container"),Object(s.a)(p,"doubling"),Object(s.a)(v,"inverted"),Object(s.a)(f,"stackable"),Object(s.a)(E,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(b,"divided"),Object(s.b)(O,"padded"),Object(s.b)(h,"relaxed"),Object(s.c)(g,"reversed"),Object(s.d)(y),Object(s.f)(N),Object(s.g)(l,"column",!0),"grid",n),x=Object(d.a)(j,e),q=Object(u.a)(j,e);return o.a.createElement(q,i()({},x,{className:w}),c)}j.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],j.Column=p,j.Row=O,j.propTypes={};t.a=j}}]);
//# sourceMappingURL=component---src-pages-index-tsx-979df1b7a215311a986b.js.map