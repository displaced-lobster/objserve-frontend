<script lang="ts">
  export let name: string
  export let objId: string

  let href = `/objs/${objId}`
</script>

<div class="card">
  <header class="card-header truncate" title={name}>
    {name}
  </header>
  <hr />
  <div class="card-body flex justify-center">
    <i class="fallback mdi mdi-image" />
  </div>
  <hr />
  <footer class="card-footer flex justify-end py-3">
    <a class="btn btn-base bg-accent-500" {href}>
      <i class="mdi mdi-eye text-xl" />
      <span>View</span>
    </a>
  </footer>
</div>

<style>
  .fallback {
    font-size: 200px;
  }
</style>
