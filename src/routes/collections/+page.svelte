<script lang="ts">
  import CollectionCard from '$lib/CollectionCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<section>
  <h2 class="ml-3">Collections</h2>

  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 p-4">
    {#each data.collections as collection}
      <CollectionCard name={collection.name} collectionId={collection.id} />
    {/each}
  </div>
</section>
