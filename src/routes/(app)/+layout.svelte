<script>
  import { Home, Icon } from "svelte-hero-icons";
</script>

<a href="./">
  <span><Icon src={Home} size="16" solid /></span>
  <span>Home</span>
</a>

<slot />

<style>
  a {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid var(--bg-2);
    color: var(--bg-5);
  }

  a:hover {
    color: var(--dark);
  }
</style>
