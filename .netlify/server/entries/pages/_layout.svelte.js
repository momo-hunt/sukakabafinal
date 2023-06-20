import { c as create_ssr_component, a as subscribe, e as each, b as escape, n as null_to_empty, v as validate_component } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
import { I as Icon, a as InformationCircle, E as ExclamationCircle, C as CheckCircle } from "../../chunks/Icon.js";
import { C as Co_Loader } from "../../chunks/Co-Loader.js";
const app = "";
const button = "";
const form = "";
const classes = "";
const stored = () => {
  const { subscribe: subscribe2, set, update } = writable([]);
  let processId;
  let data = [];
  return {
    subscribe: subscribe2,
    process: (text) => {
      const id = crypto.randomUUID();
      processId = id;
      data = [{ id, title: "Proses", type: "process", text }, ...data];
      set(data);
    },
    success: (text) => {
      const id = crypto.randomUUID();
      if (processId) {
        data = data.filter((d) => d.id != processId);
        set(data);
      }
      data = [{ id, title: "Berhasil", type: "success", text }, ...data];
      set(data);
      setTimeout(() => {
        set(data.filter((d) => d.id != id));
      }, 4e3);
    },
    error: (text) => {
      const id = crypto.randomUUID();
      if (processId)
        set(data.filter((d) => d.id != processId));
      data = [{ id, title: "Kesalahan", type: "danger", text }, ...data];
      set(data);
      setTimeout(() => {
        set(data.filter((d) => d.id != id));
      }, 5e3);
    }
  };
};
const toast = stored();
const CoToast_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-8zwudp.svelte-8zwudp{position:fixed;top:0;right:0;padding:1rem;width:60%;display:flex;flex-direction:column;align-items:end;gap:1rem}article.svelte-8zwudp.svelte-8zwudp{display:flex;gap:0.5rem;align-items:start;background:var(--white);padding:0.5rem}article.svelte-8zwudp small.svelte-8zwudp{opacity:0.6}article.success.svelte-8zwudp.svelte-8zwudp{color:hsl(120, 100%, 25%);background:hsl(140, 100%, 95%)}article.danger.svelte-8zwudp.svelte-8zwudp{color:hsl(0, 100%, 40%);background:hsl(0, 100%, 95%)}article.warning.svelte-8zwudp.svelte-8zwudp{color:hsl(56, 100%, 40%);background:hsl(56, 100%, 90%)}article.info.svelte-8zwudp.svelte-8zwudp{color:hsl(197, 100%, 40%);background:hsl(197, 100%, 90%)}",
  map: null
};
const Co_Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  function setIcon(type) {
    switch (type) {
      case "success":
        return CheckCircle;
      case "error":
        return ExclamationCircle;
      default:
        return InformationCircle;
    }
  }
  $$result.css.add(css);
  $$unsubscribe_toast();
  return `${$toast.length > 0 ? `<section class="svelte-8zwudp">${each($toast, ({ type, text, title }) => {
    return `<article class="${escape(null_to_empty(type), true) + " svelte-8zwudp"}">${type == "process" ? `${validate_component(Co_Loader, "CoLoader").$$render($$result, { loading: "true" }, {}, {})}` : `<span>${validate_component(Icon, "Icon").$$render($$result, { src: setIcon(type), size: "24" }, {}, {})}</span>`}
        <div><h4>${escape(title)}</h4>
          <small class="svelte-8zwudp">${escape(text)}</small></div>
      </article>`;
  })}</section>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1wsf2d0_START -->${$$result.title = `<title>Jeep Kaba</title>`, ""}<!-- HEAD_svelte-1wsf2d0_END -->`, ""}

${slots.default ? slots.default({}) : ``}

${validate_component(Co_Toast, "CoToast").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
