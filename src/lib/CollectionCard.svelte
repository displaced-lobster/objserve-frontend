<script lang="ts">
  export let name: string
  export let collectionId: string

  let href = `/collections/${collectionId}`
</script>

<a class="card" {href}>
  <div class="card-body flex justify-center">
    <i class="text-8xl mdi mdi-folder" />
  </div>
  <footer class="card-footer py-3">
    {name}
  </footer>
</a>
