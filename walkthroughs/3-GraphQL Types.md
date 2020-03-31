# GraphQL Generated Types

There are times when types can be generated for you. For example when generating code from swagger documentation or when working with another technology that values typed interfaces like GraphQL.

- Use [./src/schema.ts] to generate types including resolver types. Run `yarn generate`.
- Write resolvers with types provided.

```ts
// index.ts
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// resolvers.ts
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
```

## Notes

- This entire approach to typing GQL goes against the "code-first" recommendation for writing GQL schema. This is more of a "schema-first, types-second, code-last".