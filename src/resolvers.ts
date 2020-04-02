import { QueryResolvers, User, Role, UserResolvers } from "./graphql";
import { RequestHandler, Manager } from "./Manager";

const user = (id: string): User => {
  return {
    id,
    username: 'Mr. Test',
    email: 'test@test.com',
    role: Role.User
  }
}

const userHandler: RequestHandler<User> = {
  request: (id) => user(id),
  responseToString: (user) => user.email
}
const manager = new Manager(new URL('http://google.com'), 'abc123', userHandler)

const Query: QueryResolvers = {
  me: () => manager.handler.request('me'),
  user: (_, { id }) => manager.handler.request(id)
}

const userResolvers: UserResolvers = {
  email: (user) => `${user.email} <${user.username}>`
}

export default {
  Query,
  User: userResolvers
}