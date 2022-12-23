<script lang="ts">
  export let to: string
</script>

<a class="card flex flex-col items-center justify-between" href={to}>
  <div />
  <div class="card-body justify-self-center">
    <i class="text-8xl mdi mdi-chevron-right" />
  </div>
  <footer class="card-footer py-3">More</footer>
</a>
