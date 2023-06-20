<script>
  import { toast } from "$lib/stores";
  import {
    Icon,
    CheckCircle,
    ExclamationCircle,
    InformationCircle,
  } from "svelte-hero-icons";
  import CoLoader from "./Co-Loader.svelte";

  function setIcon(type) {
    switch (type) {
      case "success":
        return CheckCircle;
        break;
      case "error":
        return ExclamationCircle;
        break;
      default:
        return InformationCircle;
    }
  }
  //   $: console.log($toast);
</script>

{#if $toast.length > 0}
  <section>
    {#each $toast as { type, text, title }}
      <article class={type}>
        {#if type == "process"}
          <CoLoader loading="true" />
        {:else}
          <span><Icon src={setIcon(type)} size="24" /></span>
        {/if}
        <div>
          <h4>{title}</h4>
          <small>{text}</small>
        </div>
      </article>
    {/each}
  </section>
{/if}

<style>
  /* * {
    border: 1px solid peru;
  } */

  section {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
  }

  article {
    display: flex;
    gap: 0.5rem;
    align-items: start;
    background: var(--white);
    padding: 0.5rem;
  }

  article small {
    opacity: 0.6;
  }

  article.success {
    color: hsl(120, 100%, 25%);
    background: hsl(140, 100%, 95%);
  }

  article.danger {
    color: hsl(0, 100%, 40%);
    background: hsl(0, 100%, 95%);
  }

  article.warning {
    color: hsl(56, 100%, 40%);
    background: hsl(56, 100%, 90%);
  }

  article.info {
    color: hsl(197, 100%, 40%);
    background: hsl(197, 100%, 90%);
  }
</style>
