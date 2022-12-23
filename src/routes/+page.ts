import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const collections = await fetch('http://127.0.0.1:5000/collections?limit=7')
  const objs = await fetch('http://127.0.0.1:5000/objs?limit=3')

  return { collections: collections.json(), objs: objs.json() }
}
