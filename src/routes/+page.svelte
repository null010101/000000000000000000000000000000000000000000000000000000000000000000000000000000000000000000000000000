<title>A simple counter</title>

<script lang="ts">
  import type { PageData } from './$types';
  import '../app.css'

  export let data: PageData
</script>

<h1 class="text-[8vmax] text-center m-[3vmax]">A simple counter</h1>

<p class="text-[6vmax] text-center">Counter: {data.result}</p>