import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const obj = await fetch(`http://127.0.0.1:5000/objs/${params.id}`)

  return obj.json()
}
