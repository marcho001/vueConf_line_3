import { ref as r, openBlock as c, createElementBlock as l, toDisplayString as s, normalizeClass as p } from "vue";
const _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, u = {
  __name: "HelloWorld",
  setup(e) {
    const t = r(0), o = () => {
      t.value++;
    };
    return (n, a) => (c(), l("button", {
      type: "button",
      onClick: o
    }, "count is " + s(t.value), 1));
  }
}, y = /* @__PURE__ */ _(u, [["__scopeId", "data-v-4a27bb39"]]);
const d = {
  __name: "CopyButton",
  props: {
    label: {
      type: String,
      default: "複製按鈕"
    },
    copyText: {
      type: String,
      default: "複製的文字"
    }
  },
  setup(e) {
    const t = e, o = async () => {
      await navigator.clipboard.writeText(t.copyText), alert(`已複製{${t.copyText}}`);
    };
    return (n, a) => (c(), l("button", {
      class: p(n.$attrs.class),
      type: "button",
      onClick: o
    }, s(e.label), 3));
  }
}, b = /* @__PURE__ */ _(d, [["__scopeId", "data-v-2ac402a7"]]);
export {
  b as CopyButton,
  y as HelloWord
};
