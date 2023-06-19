<script>
  import { Bars3, Icon, UserCircle } from "svelte-hero-icons";
  import { fly } from "svelte/transition";

  let show = false;
</script>

<header class="row">
  <article class="row">
    <span>
      <Icon src={UserCircle} solid size="24" />
    </span>
    <div>
      <h4>Hi, Hari</h4>
      <small>Admin</small>
    </div>
  </article>
  <a
    href="/#"
    class="toggle"
    on:focus={() => (show = true)}
    on:blur={() => (show = false)}
  >
    <Icon src={Bars3} size="32" solid />
    {#if show}
      <nav class="dropdown" transition:fly={{ y: -100 }}>
        <a href="/">Beranda</a>
        <a href="/pemakaian">Pemakaian</a>
      </nav>
    {/if}
  </a>
</header>

<style>
  header {
    margin-top: 1rem;
  }

  a.toggle {
    position: relative;
    margin-left: auto;
    color: var(--bg-4);
  }

  a.toggle:hover {
    color: var(--dark);
  }

  nav.dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--white);
  }

  nav.dropdown a {
    display: block;
    padding: 0.5rem 1rem;
  }

  nav.dropdown a:hover {
    background: var(--bg-1);
  }
</style>
