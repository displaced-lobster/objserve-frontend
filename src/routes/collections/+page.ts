import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const collections = await fetch('http://127.0.0.1:5000/collections')

  return { collections: collections.json() }
}
