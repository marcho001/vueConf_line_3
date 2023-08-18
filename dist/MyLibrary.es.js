import { ref as i, openBlock as s, createElementBlock as c, toDisplayString as r, normalizeClass as b, onMounted as v, createElementVNode as y, Fragment as p, renderList as d, renderSlot as m } from "vue";
const u = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, f = {
  __name: "HelloWorld",
  setup(t) {
    const e = i(0), o = () => {
      e.value++;
    };
    return (n, l) => (s(), c("button", {
      type: "button",
      onClick: o
    }, "count is " + r(e.value), 1));
  }
}, B = /* @__PURE__ */ u(f, [["__scopeId", "data-v-4a27bb39"]]);
const g = {
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
  setup(t) {
    const e = t, o = async () => {
      await navigator.clipboard.writeText(e.copyText), alert(`已複製{${e.copyText}}`);
    };
    return (n, l) => (s(), c("button", {
      class: b(n.$attrs.class),
      type: "button",
      onClick: o
    }, r(t.label), 3));
  }
}, H = /* @__PURE__ */ u(g, [["__scopeId", "data-v-2ac402a7"]]);
const h = { class: "wrapper" }, x = { class: "tabs" }, C = ["onClick"], k = {
  __name: "UploadInput",
  props: {
    tabItems: { type: Array, default: () => [] }
  },
  emits: ["update:focusTab", "tab-changed"],
  setup(t, { emit: e }) {
    const o = t, n = i("");
    v(() => {
      n.value = o.tabItems[0];
    });
    const l = (_) => {
      n.value = _, e("tab-changed", _);
    };
    return (_, I) => (s(), c("div", h, [
      y("div", x, [
        (s(!0), c(p, null, d(t.tabItems, (a) => (s(), c("div", {
          key: a,
          class: b([{ active: n.value === a }, "tabs-item"]),
          onClick: (T) => l(a)
        }, r(a), 11, C))), 128))
      ]),
      (s(!0), c(p, null, d(t.tabItems, (a) => m(_.$slots, a, {}, void 0, !0)), 256))
    ]));
  }
}, S = /* @__PURE__ */ u(k, [["__scopeId", "data-v-5035e46c"]]);
export {
  H as CopyButton,
  B as HelloWord,
  S as UploadInput
};
