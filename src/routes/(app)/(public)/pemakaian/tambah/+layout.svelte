<script>
  import { fly, fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { obj, list, toast } from "$lib/stores";
  import TaFormField from "./Ta-FormField.svelte";
  import CoForm from "$lib/component/Co-Form.svelte";

  $: spj = $obj?.["spj"];

  function onSuccess(e) {
    toast.success("Berhasil tambah pemakaian");
    list.add("pemakaian", e.detail);
  }

  function onProcess() {
    toast.process("Proses tambah pemakaian");
    goto("./");
  }
</script>

<section class="modal" transition:fade>
  <header>
    <a href="./">&nbsp;</a>
  </header>
  <main transition:fly={{ y: 100 }}>
    <h2>Tambah Pemakaian</h2>

    <a href={`${$page.url.pathname}/pilih-spj`} role="button">Pilih SPJ</a>

    <CoForm
      action="/pemakaian?/add"
      title="tambah-pemakaian"
      on:process={onProcess}
      on:success={onSuccess}
      on:error
    >
      <TaFormField data={spj} />
    </CoForm>
  </main>
</section>

<slot />

<style>
  header {
    height: 3rem;
    position: relative;
  }

  header a {
    position: absolute;
    inset: 0;
  }

  h2 {
    padding: 1rem 0;
    text-align: center;
  }
</style>
