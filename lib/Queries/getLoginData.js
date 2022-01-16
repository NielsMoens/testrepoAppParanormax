import {gql} from "@apollo/client";

const GET_LOGINDATA = gql`
   mutation Authenticate($email:String! ,$password:String! ) {
    authenticate(
        email: $email,
        password: $password
    ) {
        jwt
        jwtExpiresAt
        refreshToken
        refreshTokenExpiresAt
        schema
        user {
            ... on User {
            id
            email
            firstName
            lastName
            username
                }
            }
        }
    }
`;

export default GET_LOGINDATA;