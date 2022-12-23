<script lang="ts">
  import ObjCard from '$lib/ObjCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<section>
  <h2 class="ml-3">Objects</h2>

  <div class="grid grid-cols-4 gap-4 p-4">
    {#each data.objs as obj}
      <ObjCard name={obj.name} objId={obj.id} />
    {/each}
  </div>
</section>
