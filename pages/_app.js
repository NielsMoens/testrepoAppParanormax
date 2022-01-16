import '../styles/Styles.scss'
import Layout from "../compenents/Layout";
import {AuthProvider} from "../compenents/Auth/AuthProvider";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apollo";
import {AuthGuard} from "../compenents/Auth/AuthGuard";

function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <AuthProvider>
                <Layout>
                    {
                        !!Component.requiresAuth ? (
                            <AuthGuard>
                                <Component {...pageProps} />
                            </AuthGuard>
                        ) : <Component {...pageProps} />
                    }
                </Layout>
            </AuthProvider>
        </ApolloProvider>
    );
}

export default MyApp;