<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { list } from "$lib/stores";
  import PeListView from "./Pe-ListView.svelte";
  import CoButtonAdd from "$lib/component/Co-ButtonAdd.svelte";
  import CoLoader from "$lib/component/Co-Loader.svelte";

  let collection = "pemakaian";

  onMount(() => {
    list.get(collection);
  });
</script>

<h2>Pemakaian</h2>

<CoLoader loading={$list?.[collection]?.loading}>Memuat data</CoLoader>

<PeListView data={$list?.[collection]?.data} />

<a href={`${$page.url.pathname}/tambah`}><CoButtonAdd /></a>

<slot />

<style>
  h2 {
    padding: 1rem 0;
  }
</style>
