<script lang="ts">
  import ObjViewer from '$lib/ObjViewer.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<section class="max-w-prose mx-auto">
  <ObjViewer src={data.src} name={data.name} />
</section>
