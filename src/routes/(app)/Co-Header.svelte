<script>
  import { Bars3, Icon, UserCircle } from "svelte-hero-icons";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";

  let show = false;
</script>

<header class="row">
  <article class="row">
    <span>
      <Icon src={UserCircle} solid size="24" />
    </span>
    <div>
      <h4>Hi, {$page.data?.user?.name}</h4>
      <small>{$page.data?.user?.role?.name}</small>
    </div>
  </article>

  <section class="dropdown">
    <button class="toggle" on:click={() => (show = !show)}>
      <Icon src={Bars3} size="32" solid />
    </button>

    {#if show}
      <nav class="dropdown-content" transition:fly={{ y: 100 }}>
        <a href="/pemakaian"><h3>Pemakaian</h3></a>
        <a href="/spj"><h3>SPJ</h3></a>
        <a href={`/logout?id=${$page.data?.user?.id}`} class="logout"
          ><h3>Logout</h3></a
        >
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
    padding: 1rem;
    border-bottom: 1px solid var(--bg-1);
  }

  nav.dropdown-content a.logout {
    color: red;
  }

  nav.dropdown-content a:hover {
    background: var(--bg-1);
  }
</style>
