import { User, QueryResolvers, Role } from "./graphql"

const me:User = {
  id: '123',
  email: 'email@email.com',
  username: 'hello_world',
  role: Role.User
}

const Query:QueryResolvers = {
  me: () => {
    return me
  },
  user: (_, { id }) => {
    return {
      ...me,
      id
    }
  }
}

export default {
  Query
}