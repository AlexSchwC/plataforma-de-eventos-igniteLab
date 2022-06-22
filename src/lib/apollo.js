import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omrc9k0e1401xn271ehfn1/master',
    cache: new InMemoryCache()
})