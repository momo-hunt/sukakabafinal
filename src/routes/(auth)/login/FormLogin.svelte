<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import CoForm from "$lib/component/Co-Form.svelte";
  import CoLoader from "$lib/component/Co-Loader.svelte";

  export let errorStatus;
  let redirectTo = $page?.url.searchParams.get("redirectTo") ?? "/";
  let loading;
</script>

<CoForm
  action="?/login"
  title="Login"
  on:process={() => {
    errorStatus = false;
    loading = true;
  }}
  on:error={() => {
    loading = false;
    errorStatus = true;
  }}
  on:success={(e) => {
    goto(redirectTo);
  }}
>
  <article>
    <input
      type="text"
      name="username"
      placeholder="Username"
      autocomplete="username"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      autocomplete="current-password"
    />
    {#if loading}
      <button disabled>
        <CoLoader loading="true" />
      </button>
    {:else}
      <button type="submit">Login</button>
    {/if}
  </article>
</CoForm>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    background: white;
    border: none;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: inherit;
  }

  input:focus {
    outline: 2px solid hsl(206, 70%, 50%);
  }

  button[type="submit"] {
    cursor: pointer;
    font-size: inherit;
    background: hsl(206, 50%, 85%);
    border: none;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    text-transform: uppercase;
  }

  button[type="submit"]:hover {
    transition: 0.3s ease;
    background: hsl(206, 50%, 75%);
  }

  button[type="submit"]:focus {
    background: hsl(206, 50%, 80%);
    outline: 2px solid hsl(206, 70%, 50%);
  }
</style>
