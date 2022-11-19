import type { RequestHandler } from './$types';
import prisma from '$lib/seed';
import type { contributor } from '@prisma/client';

/*
This "GET" function checks if there's a cookie called "userId",
if there isn't, the user is created, whose ID is the users amount,
if there's, the user get logged using the cookie "userId".
Then, returns a response which data is the amount of users.

Prisma was used to make the API, if you're interested to use this ORM,
go to it's page: https://www.prisma.io/
*/
export const GET: RequestHandler = async ({cookies}) =>
{
  let contributorsLength = await prisma.contributor.count()

  let cookieUserId = cookies.get('userId')

  let user: contributor | null

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