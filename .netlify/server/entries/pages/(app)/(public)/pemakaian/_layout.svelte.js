import { c as create_ssr_component, e as each, b as escape, v as validate_component, a as subscribe, d as add_attribute } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
import { w as writable } from "../../../../../chunks/index2.js";
import { I as Icon, P as PlusCircle } from "../../../../../chunks/Icon.js";
import { C as Co_Loader } from "../../../../../chunks/Co-Loader.js";
const stored = () => {
  const { subscribe: subscribe2, set, update } = writable({});
  let old = {};
  return {
    subscribe: subscribe2,
    get: async (collection2, option, callback) => {
      set({ ...old, [collection2]: { loading: true } });
      const params = new URLSearchParams(option);
      const res = await fetch(`/api/${collection2}?` + params);
      const respon = await res.json();
      let data = respon;
      old = { ...old, [collection2]: { loading: false, data } };
      set(old);
      if (callback)
        callback();
    },
    add: (collection2, data) => {
      return update((n) => {
        n[collection2].data = [data, ...n[collection2].data];
        return n;
      });
    }
  };
};
const list = stored();
const PeListView_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-n9g9vd.svelte-n9g9vd{background:var(--white);margin:0 -1rem}ul.svelte-n9g9vd li.svelte-n9g9vd{padding:0.5rem 1rem;border-bottom:1px solid var(--bg-1)}",
  map: null
};
const Pe_ListView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `${data ? `<ul class="svelte-n9g9vd">${each(data, (d) => {
    return `<li class="svelte-n9g9vd">${escape(d?.keperluan)} (${escape(d?.tujuan)})
      </li>`;
  })}</ul>` : ``}`;
});
const CoButtonAdd_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-1qjfcdk{position:fixed;bottom:2rem;right:0}",
  map: null
};
const Co_ButtonAdd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="svelte-1qjfcdk">${validate_component(Icon, "Icon").$$render($$result, { src: PlusCircle, size: "48", solid: true }, {}, {})}
</button>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1wu8xvq{padding:1rem 0}",
  map: null
};
let collection = "pemakaian";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $list, $$unsubscribe_list;
  let $page, $$unsubscribe_page;
  $$unsubscribe_list = subscribe(list, (value) => $list = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_list();
  $$unsubscribe_page();
  return `<h2 class="svelte-1wu8xvq">Pemakaian</h2>

${validate_component(Co_Loader, "CoLoader").$$render($$result, { loading: $list?.[collection]?.loading }, {}, {
    default: () => {
      return `Memuat data`;
    }
  })}

${validate_component(Pe_ListView, "PeListView").$$render($$result, { data: $list?.[collection]?.data }, {}, {})}

<a${add_attribute("href", `${$page.url.pathname}/tambah`, 0)}>${validate_component(Co_ButtonAdd, "CoButtonAdd").$$render($$result, {}, {}, {})}</a>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
