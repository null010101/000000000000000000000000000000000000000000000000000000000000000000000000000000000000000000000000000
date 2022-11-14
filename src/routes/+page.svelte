<title>A simple counter</title>

<script lang="ts">
  import type { PageData } from './$types';
  import '../app.css'

  export let data: PageData
</script>

<h1 class="text-[4vmax] text-center m-[2vmax]">A simple counter</h1>

<p class="text-[4vmax] text-center">Counter: {data.result}</p>