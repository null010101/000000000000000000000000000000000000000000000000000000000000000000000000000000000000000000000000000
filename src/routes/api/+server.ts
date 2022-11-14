import type { RequestHandler } from './$types';
import prisma from '$lib/seed';

/*

*/
export const GET: RequestHandler = async ({cookies}) =>
{
  let contributorsLength = await prisma.contributor.count()

  let cookieUserId = cookies.get('userId')

  let user = null

  if (cookieUserId == null)
  {
    user = await prisma.contributor.create({
      data: {
        id: contributorsLength
      }
    })

    cookies.set('userId', `${user.id}`)
  }
  else
  {
    user = await prisma.contributor.findUnique({
      where: {
        id: Number(cookieUserId)
      }
    })
  }

  return new Response(JSON.stringify(contributorsLength),
  {
    status: 200
  })
}