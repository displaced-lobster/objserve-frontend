import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const objs = await fetch('http://127.0.0.1:5000/objs')

  return { objs: objs.json() }
}
