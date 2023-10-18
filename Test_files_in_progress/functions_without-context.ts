import prisma from './client'

interface CreateUser {
  username: string
  first_name: string
  last_name: string
  email: string
  password: string
}

export async function createUser(user: CreateUser) {
    return await prisma.users.create({
      data: user,
    })
}

// interface UpdateUser {
//   id: number
//   name: string
//   email: string
// }

// export async function updateUsername(user: UpdateUser) {
//   return await prisma.user.update({
//     where: { id: user.id },
//     data: user,
//   })
// }