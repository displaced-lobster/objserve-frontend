<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
  import '@skeletonlabs/skeleton/styles/all.css'
  import '@mdi/font/css/materialdesignicons.css'
  import '../app.postcss'
  import { AppRail, AppRailTile, AppShell, LightSwitch } from '@skeletonlabs/skeleton'
  import { writable, type Writable } from 'svelte/store'
  import { page } from '$app/stores'
  import { afterNavigate, goto } from '$app/navigation'

  const routes = [
    { id: '/', label: 'Home', title: 'Home', icon: 'mdi mdi-home' },
    { id: '/collections', label: 'Collections', title: 'Collections', icon: 'mdi mdi-bookshelf' },
    { id: '/objs', label: 'Objs', title: 'Objs', icon: 'mdi mdi-cube' },
  ]
  const routeStore: Writable<string> = writable($page.route.id || '')

  const onNavClick = (path: string) => {
    goto(path)
  }

  afterNavigate(() => {
    if ($page.route.id) {
      routeStore.set($page.route.id)
    }
  })
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail selected={routeStore}>
      {#each routes as route}
        <AppRailTile
          label={route.label}
          title={route.title}
          value={route.id}
          on:click={() => onNavClick(route.id)}
        >
          <span class="text-3xl">
            <i class={route.icon} />
          </span>
        </AppRailTile>
      {/each}
      <svelte:fragment slot="trail">
        <div class="flex justify-center py-5">
          <LightSwitch />
        </div>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>

  <div class="container h-full mx-auto pt-5">
    <slot />
  </div>
</AppShell>
