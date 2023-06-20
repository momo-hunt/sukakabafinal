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
  <section class="dropdown">
    <button class="toggle" on:click={() => (show = !show)}>
      <Icon src={Bars3} size="32" solid />
    </button>

    {#if show}
      <nav class="dropdown-content">
        <a href="/pemakaian">Pemakaian</a>
        <a href="/spj">SPJ</a>
      </nav>
    {/if}
  </section>
</header>

<style>
  header {
    margin-top: 1rem;
  }

  section.dropdown {
    position: relative;
    margin-left: auto;
  }

  .toggle {
    color: var(--bg-4);
  }

  .toggle:hover {
    color: var(--dark);
  }

  nav.dropdown-content {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--white);
  }

  nav.dropdown-content a {
    display: block;
    padding: 0.5rem 1rem;
  }

  nav.dropdown-content a:hover {
    background: var(--bg-1);
  }
</style>
