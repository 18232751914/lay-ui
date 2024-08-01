import { defineComponent as s, computed as a, openBlock as r, createElementBlock as p, normalizeClass as u, renderSlot as c } from "vue";
import "./index.vue2.js";
import l from "../../../_virtual/_plugin-vue_export-helper.js";
const d = s({
  name: "LayButton"
}), f = /* @__PURE__ */ Object.assign(d, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = a(() => `button-${e.type}`);
    return (n, m) => (r(), p("button", {
      class: u(["button", o.value])
    }, [
      c(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), y = /* @__PURE__ */ l(f, [["__scopeId", "data-v-6ae6b7bd"]]);
export {
  y as default
};
