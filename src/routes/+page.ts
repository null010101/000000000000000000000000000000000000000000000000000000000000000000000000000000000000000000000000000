import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) =>
{
  let data = await fetch('/api')
  let result = await data.json()

  return {result}
}