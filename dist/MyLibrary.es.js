import { ref as d, openBlock as a, createElementBlock as c, toDisplayString as p, onMounted as v, createElementVNode as b, Fragment as _, renderList as u, normalizeClass as m, renderSlot as f } from "vue";
const i = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, y = {
  __name: "HelloWorld",
  setup(e) {
    const t = d(0), o = () => {
      t.value++;
    };
    return (n, l) => (a(), c("button", {
      type: "button",
      onClick: o
    }, "count is " + p(t.value), 1));
  }
}, W = /* @__PURE__ */ i(y, [["__scopeId", "data-v-4a27bb39"]]);
const h = { class: "wrapper" }, I = { class: "tabs" }, g = ["onClick"], k = {
  __name: "UploadInput",
  props: {
    tabItems: { type: Array, default: () => [] }
  },
  emits: ["update:focusTab", "tab-changed"],
  setup(e, { emit: t }) {
    const o = e, n = d("");
    v(() => {
      n.value = o.tabItems[0];
    });
    const l = (r) => {
      n.value = r, t("tab-changed", r);
    };
    return (r, x) => (a(), c("div", h, [
      b("div", I, [
        (a(!0), c(_, null, u(e.tabItems, (s) => (a(), c("div", {
          key: s,
          class: m([{ active: n.value === s }, "tabs-item"]),
          onClick: (C) => l(s)
        }, p(s), 11, g))), 128))
      ]),
      (a(!0), c(_, null, u(e.tabItems, (s) => f(r.$slots, s, {}, void 0, !0)), 256))
    ]));
  }
}, T = /* @__PURE__ */ i(k, [["__scopeId", "data-v-5035e46c"]]);
export {
  W as HelloWord,
  T as UploadInput
};
