import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'https://paranormax.ga/api',
            headers: {
                Authorization: 'Bearer lwvEd9e_X2PH6R7WLDD8rDCclmrlOnIT',
            },
        }),
        cache: new InMemoryCache(),
    });
}

export default createApolloClient;