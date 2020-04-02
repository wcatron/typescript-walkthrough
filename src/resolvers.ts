import { User, Role, QueryResolvers, UserResolvers } from './graphql'
import { Manager, RequestHandler } from './Manager'

const user = (id: string): User => {
  return {
    id,
    username: 'Mr. Test',
    email: 'test@test.com',
    role: Role.User
  }
}

class UserHandler implements RequestHandler<User> {
  request(id: string) {
    return user(id)
  }
}

const handler = new UserHandler()
const manager = new Manager(new URL('http://google.com'), 'abc123', handler)

const Query: QueryResolvers = {
  me: () => {
    return manager.handler.request('me')
  },
  user: (_, { id }) => {
    return manager.handler.request(id)
  }
}

const userResolvers: UserResolvers = {
  email: (parent) => {
    return `${parent.email} <${parent.username}>`
  }
}

export default {
  Query,
  User: userResolvers
}