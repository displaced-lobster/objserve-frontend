<script lang="ts">
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

  export let src: string
  export let name: string

  $: completeSrc = `http://127.0.0.1:5000/${src}`

  const height = 500
  let width = 100

  let canvas: HTMLElement
  let wrapper: HTMLElement

  const scene = new THREE.Scene()
  const material = new THREE.MeshNormalMaterial()
  const axesHelper = new THREE.AxesHelper(5)
  let viewAxesHelper = false

  $: axesBtnClass = `btn-icon btn-${viewAxesHelper ? 'filled' : 'ghost'}-surface text-xl`

  const toggleAxesHelper = () => {
    viewAxesHelper = !viewAxesHelper

    if (viewAxesHelper) {
      scene.add(axesHelper)
    } else {
      scene.remove(axesHelper)
    }
  }

  $: wireframeBtnIcon = `mdi mdi-${material.wireframe ? 'cube-outline' : 'cube'}`

  const toggleWireFrame = () => {
    material.wireframe = !material.wireframe
  }

  onMount(() => {
    width = wrapper.clientWidth

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(width, height)
    renderer.setClearColor('#2d3858', 1)

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    const loader = new STLLoader()
    loader.load(completeSrc, (geometry) => {
      const mesh = new THREE.Mesh(geometry, material)

      mesh.geometry.center()

      if (mesh.geometry.boundingBox) {
        const max = Math.max(
          mesh.geometry.boundingBox.max.x,
          mesh.geometry.boundingBox.max.y,
          mesh.geometry.boundingBox.max.z,
        )
        const scale = 5 / max
        mesh.scale.set(scale, scale, scale)
      }

      scene.add(mesh)
    })

    const tick = () => {
      requestAnimationFrame(tick)
      controls.update()
      renderer.render(scene, camera)
    }

    tick()
  })
</script>

<div class="card">
  <header class="card-header">
    {name}
  </header>
  <hr />
  <div class="card-body">
    <div bind:this={wrapper}>
      <canvas bind:this={canvas} />
    </div>
  </div>
  <hr />
  <footer class="card-footer flex justify-between py-3">
    <div class="flex space-x-2">
      <button class={axesBtnClass} on:click={toggleAxesHelper}>
        <i class="mdi mdi-axis" />
      </button>
      <button class="btn-icon btn-ghost-surface text-xl" on:click={toggleWireFrame}>
        <i class={wireframeBtnIcon} />
      </button>
    </div>
    <a class="btn btn-base bg-accent-500" href={completeSrc}>
      <i class="mdi mdi-download text-xl" />
      <span> Download </span>
    </a>
  </footer>
</div>
