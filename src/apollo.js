import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";


const cache = new InMemoryCache();
const link = new createHttpLink({
    uri:"http://localhost:4000/",
})

const client = new ApolloClient({
    cache,
    link,
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            likeMoive: (_, {id, isLiked},{cache}) => {
                console.log(`Movie:${id}`)
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked: (isLiked) => !isLiked
                    }
                })
            }
        }
    },
    // headers: {
    //     authorization: localStorage.getItem('token') || '',
    //   },
})

export default client;



