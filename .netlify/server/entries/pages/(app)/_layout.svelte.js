import { c as create_ssr_component } from "../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="./">Home</a>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
