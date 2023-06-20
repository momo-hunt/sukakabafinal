import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { I as Icon, U as UserCircle, B as Bars3 } from "../../../chunks/Icon.js";
const CoHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1ehp2uu.svelte-1ehp2uu{margin-top:1rem}section.dropdown.svelte-1ehp2uu.svelte-1ehp2uu{position:relative;margin-left:auto}.toggle.svelte-1ehp2uu.svelte-1ehp2uu{color:var(--bg-4)}.toggle.svelte-1ehp2uu.svelte-1ehp2uu:hover{color:var(--dark)}nav.dropdown-content.svelte-1ehp2uu.svelte-1ehp2uu{position:absolute;top:100%;right:0;background:var(--white)}nav.dropdown-content.svelte-1ehp2uu a.svelte-1ehp2uu{display:block;padding:0.5rem 1rem}nav.dropdown-content.svelte-1ehp2uu a.svelte-1ehp2uu:hover{background:var(--bg-1)}",
  map: null
};
const Co_Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="row svelte-1ehp2uu"><article class="row"><span>${validate_component(Icon, "Icon").$$render($$result, { src: UserCircle, solid: true, size: "24" }, {}, {})}</span>
    <div><h4>Hi, Hari</h4>
      <small>Admin</small></div></article>
  <section class="dropdown svelte-1ehp2uu"><button class="toggle svelte-1ehp2uu">${validate_component(Icon, "Icon").$$render($$result, { src: Bars3, size: "32", solid: true }, {}, {})}</button>

    ${``}</section>
</header>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-7r7py{font-size:3rem;margin:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Co_Header, "CoHeader").$$render($$result, {}, {}, {})}

<h1 class="svelte-7r7py">Welcome to Jeep Kaba</h1>`;
});
export {
  Page as default
};
