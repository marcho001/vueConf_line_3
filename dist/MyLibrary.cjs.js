"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue");const r=(t,o)=>{const n=t.__vccOpts||t;for(const[c,l]of o)n[c]=l;return n},u={__name:"HelloWorld",setup(t){const o=e.ref(0),n=()=>{o.value++};return(c,l)=>(e.openBlock(),e.createElementBlock("button",{type:"button",onClick:n},"count is "+e.toDisplayString(o.value),1))}},_=r(u,[["__scopeId","data-v-4a27bb39"]]);const d={class:"wrapper"},p={class:"tabs"},i=["onClick"],v={__name:"UploadInput",props:{tabItems:{type:Array,default:()=>[]}},emits:["update:focusTab","tab-changed"],setup(t,{emit:o}){const n=t,c=e.ref("");e.onMounted(()=>{c.value=n.tabItems[0]});const l=s=>{c.value=s,o("tab-changed",s)};return(s,m)=>(e.openBlock(),e.createElementBlock("div",d,[e.createElementVNode("div",p,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tabItems,a=>(e.openBlock(),e.createElementBlock("div",{key:a,class:e.normalizeClass([{active:c.value===a},"tabs-item"]),onClick:k=>l(a)},e.toDisplayString(a),11,i))),128))]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tabItems,a=>e.renderSlot(s.$slots,a,{},void 0,!0)),256))]))}},b=r(v,[["__scopeId","data-v-5035e46c"]]);exports.HelloWord=_;exports.UploadInput=b;
