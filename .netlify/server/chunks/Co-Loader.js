import { c as create_ssr_component, f as compute_slots } from "./index3.js";
const CoLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-z8mej6.svelte-z8mej6{display:flex;justify-content:center;align-items:end;gap:0.5rem}svg.svelte-z8mej6.svelte-z8mej6{fill:none;width:1.5rem;animation:svelte-z8mej6-rotate 3s linear infinite}@keyframes svelte-z8mej6-rotate{to{transform:rotate(360deg)}}svg.svelte-z8mej6 circle.svelte-z8mej6{stroke:currentColor;stroke-width:10;stroke-linecap:round;stroke-dasharray:230;stroke-dashoffset:230;animation:svelte-z8mej6-ani 2s linear infinite}@keyframes svelte-z8mej6-ani{0%,100%{stroke-dashoffset:230}50%{stroke-dashoffset:0}50.1%{stroke-dashoffset:460}}",
  map: null
};
const Co_Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { loading = false } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  $$result.css.add(css);
  return `${loading ? `<section class="svelte-z8mej6"><svg viewBox="0 0 100 100" class="svelte-z8mej6"><circle r="40" cx="50" cy="50" class="svelte-z8mej6"></circle></svg>
    ${$$slots.default ? `<span>${slots.default ? slots.default({}) : ``}</span>` : ``}</section>` : ``}`;
});
export {
  Co_Loader as C
};
