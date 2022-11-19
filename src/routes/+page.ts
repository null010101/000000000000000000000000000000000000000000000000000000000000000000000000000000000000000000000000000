import type { PageLoad } from './$types';

/*
Fetch data from server and send it to "./+page.svelte" as "data"
*/
export const load: PageLoad = async ({fetch}) =>
{
  /* 
  This "fecth" function is a parameter, with aditional features
  like relative paths.
  For more information: https://kit.svelte.dev/docs/web-standards#fetch-apis
  */  
  let data = await fetch('/api')
  let result = await data.json()

  return {result}
}