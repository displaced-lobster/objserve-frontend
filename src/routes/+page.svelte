<script lang="ts">
  import CollectionCard from '$lib/CollectionCard.svelte'
  import MoreCard from '$lib/MoreCard.svelte'
  import ObjCard from '$lib/ObjCard.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<section>
  <h1 class="mb-8 ml-3">Objserve</h1>

  <h2 class="ml-3">Collections</h2>
  <hr />
  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 p-4 mb-8">
    {#each data.collections as collection}
      <CollectionCard name={collection.name} collectionId={collection.id} />
    {/each}
    <MoreCard to="/collections" />
  </div>

  <h2 class="ml-3">Objs</h2>
  <hr />
  <div class="grid grid-cols-4 gap-4 p-4">
    {#each data.objs as obj}
      <ObjCard name={obj.name} objId={obj.id} />
    {/each}
    <MoreCard to="/objs" />
  </div>
</section>
