<script>
  import "$asset/css";
  import CoToast from "$lib/component/Co-Toast.svelte";
  import CoLoaderTop from "$lib/component/Co-LoaderTop.svelte";
  import { beforeNavigate, afterNavigate } from "$app/navigation";

  let loading = false;

  beforeNavigate(() => {
    loading = true;
  });

  afterNavigate(() => {
    loading = false;
  });
</script>

<svelte:head>
  <title>Jeep Kaba</title>
</svelte:head>

<CoLoaderTop {loading} />
<slot />

<CoToast />
