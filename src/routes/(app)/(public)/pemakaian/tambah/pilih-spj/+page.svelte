<script>
  import { goto } from "$app/navigation";
  import { fly, fade } from "svelte/transition";
  import { obj } from "$lib/stores";

  function pilih(data) {
    obj.set("spj", data);
    goto("./");
  }
</script>

<section class="modal" transition:fade>
  <header>
    <a href="./">&nbsp;</a>
  </header>

  <main transition:fly={{ y: 100 }}>
    <h3>Pilih SPJ</h3>
    <ul>
      <li>
        <button class="pilih" on:click={() => pilih({ no_spj: "1/X" })} />
        1/X
      </li>
      <li>asdsd</li>
      <li>asdsd</li>
      <li>asdsd</li>
      <li>asdsd</li>
    </ul>
  </main>
</section>

<style>
  header {
    height: 6rem;
    position: relative;
  }

  header a {
    position: absolute;
    inset: 0;
  }

  h3 {
    padding: 1rem 0;
    text-align: center;
  }

  main {
    padding: 0;
  }

  ul li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--bg-2);
    position: relative;
  }

  ul li:hover {
    background: var(--bg-1);
  }

  button.pilih {
    position: absolute;
    inset: 0;
    background: transparent;
  }
</style>
