<script>
  export let data;
</script>

{#if data}
  <ul>
    {#each data as d}
      <li>
        {d?.keperluan} ({d?.tujuan})
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    background: var(--white);
    margin: 0 -1rem;
  }

  ul li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--bg-1);
  }
</style>
