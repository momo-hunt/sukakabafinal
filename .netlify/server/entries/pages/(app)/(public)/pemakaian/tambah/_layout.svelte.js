import { c as create_ssr_component, d as add_attribute, g as createEventDispatcher, a as subscribe, v as validate_component } from "../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { w as writable } from "../../../../../../chunks/index2.js";
const stored = () => {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set: (name, data) => {
      return update((n) => ({ ...n, [name]: data }));
    }
  };
};
const obj = stored();
const defaultFormDate = (p) => {
  let d = p ? new Date(p) : /* @__PURE__ */ new Date();
  d = new Intl.DateTimeFormat("fr-CA").format(d);
  return d;
};
const defaultFormTime = (p) => {
  let d = p ? new Date(p) : /* @__PURE__ */ new Date();
  d = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit"
  }).format(d);
  return d + ":00";
};
const TaFormField_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-1w7vlky>.svelte-1w7vlky{padding:0.5rem 0}section.svelte-1w7vlky label.svelte-1w7vlky{color:var(--bg-5);font-size:0.95em;display:block}.row.action.svelte-1w7vlky>.svelte-1w7vlky{margin:0;width:100%;height:2.5rem}",
  map: null
};
const Ta_FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  let km = { awal: 232, akhir: 232 };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  km.pemakaian = km?.akhir - km?.awal;
  return `<section class="svelte-1w7vlky">${data ? `<div class="svelte-1w7vlky"><label for="no_spj" class="svelte-1w7vlky">No SPJ</label>
      <input type="text" name="no_spj" id="no_spj"${add_attribute("value", data?.["no_spj"] ?? "", 0)} class="svelte-1w7vlky"></div>` : ``}

  <div class="svelte-1w7vlky"><label for="sopir" class="svelte-1w7vlky">Sopir</label>
    <select name="sopir" id="sopir"${add_attribute("value", data?.["sopir"] ?? "1", 0)} class="svelte-1w7vlky"><option value="1" class="svelte-1w7vlky">Santoso</option></select></div>

  <div class="svelte-1w7vlky"><label for="tujuan" class="svelte-1w7vlky">Tujuan</label>
    <input type="text" name="tujuan" id="tujuan"${add_attribute("value", data?.["tujuan"] ?? "", 0)} class="svelte-1w7vlky"></div>

  <div class="svelte-1w7vlky"><label for="keperluan" class="svelte-1w7vlky">Keperluan</label>
    <input type="text" name="keperluan" id="keperluan"${add_attribute("value", data?.["keperluan"] ?? "", 0)} class="svelte-1w7vlky"></div>

  <div class="svelte-1w7vlky"><label for="" class="svelte-1w7vlky">Berangkat</label>
    <div class="row svelte-1w7vlky"><div class="svelte-1w7vlky"><label for="tanggal_berangkat" class="svelte-1w7vlky">Tanggal</label>
        <input type="date" name="tanggal_berangkat" id="tanggal_berangkat"${add_attribute("value", defaultFormDate(data?.["tanggal_berangkat"]) ?? "", 0)} class="svelte-1w7vlky"></div>
      <div class="svelte-1w7vlky"><label for="jam_berangkat" class="svelte-1w7vlky">Jam</label>
        <input type="time" name="jam_berangkat" id="jam_berangkat"${add_attribute("value", defaultFormTime(data?.["jam_berangkat"]) ?? "", 0)} class="svelte-1w7vlky"></div></div></div>

  <div class="svelte-1w7vlky"><label for="" class="svelte-1w7vlky">Kembali</label>
    <div class="row svelte-1w7vlky"><div class="svelte-1w7vlky"><label for="tanggal_kembali" class="svelte-1w7vlky">Tanggal</label>
        <input type="date" name="tanggal_kembali" id="tanggal_kembali"${add_attribute("value", defaultFormDate(data?.["tanggal_berangkat"]) ?? "", 0)}${add_attribute("min", defaultFormDate(data?.["tanggal_berangkat"]), 0)} class="svelte-1w7vlky"></div>
      <div class="svelte-1w7vlky"><label for="jam_kembali" class="svelte-1w7vlky">Jam</label>
        <input type="time" name="jam_kembali" id="jam_kembali"${add_attribute("value", defaultFormTime(data?.["jam_berangkat"]) ?? "", 0)} class="svelte-1w7vlky"></div></div></div>

  <div class="svelte-1w7vlky"><label for="" class="svelte-1w7vlky">Kilometer</label>
    <div class="row svelte-1w7vlky"><div class="svelte-1w7vlky"><label for="km_awal" class="svelte-1w7vlky">Awal</label>
        <input type="number" name="km_awal" id="km_awal" class="svelte-1w7vlky"${add_attribute("value", km["awal"], 0)}></div>
      <div class="svelte-1w7vlky"><label for="km_akhir" class="svelte-1w7vlky">Akhir</label>
        <input type="number" name="km_akhir" id="km_akhir" class="svelte-1w7vlky"${add_attribute("value", km["akhir"], 0)}></div></div></div>

  <div class="svelte-1w7vlky"><label for="km_pemakaian" class="svelte-1w7vlky">Pemakaian</label>
    <input type="number" name="km_pemakaian" id="km_pemakaian" readonly class="svelte-1w7vlky"${add_attribute("value", km["pemakaian"], 0)}></div>

  <div class="row action svelte-1w7vlky"><button type="submit" class="svelte-1w7vlky">Tambah</button>
    <a href="./" role="button" class="svelte-1w7vlky">Batal</a></div>
</section>`;
});
const Co_Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { action } = $$props;
  let { title } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<form${add_attribute("action", action, 0)}${add_attribute("title", title, 0)} method="post">${slots.default ? slots.default({}) : ``}</form>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-e9iqgq.svelte-e9iqgq{height:3rem;position:relative}header.svelte-e9iqgq a.svelte-e9iqgq{position:absolute;inset:0}h2.svelte-e9iqgq.svelte-e9iqgq{padding:1rem 0;text-align:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spj;
  let $obj, $$unsubscribe_obj;
  let $page, $$unsubscribe_page;
  $$unsubscribe_obj = subscribe(obj, (value) => $obj = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  spj = $obj?.["spj"];
  $$unsubscribe_obj();
  $$unsubscribe_page();
  return `<section class="modal"><header class="svelte-e9iqgq"><a href="./" class="svelte-e9iqgq"> </a></header>
  <main><h2 class="svelte-e9iqgq">Tambah Pemakaian</h2>

    <a${add_attribute("href", `${$page.url.pathname}/pilih-spj`, 0)} role="button">Pilih SPJ</a>

    ${validate_component(Co_Form, "CoForm").$$render(
    $$result,
    {
      action: "/?/add",
      title: "tambah-pemakaian"
    },
    {},
    {
      default: () => {
        return `${validate_component(Ta_FormField, "TaFormField").$$render($$result, { data: spj }, {}, {})}`;
      }
    }
  )}</main></section>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
