import { gql } from '@apollo/client';
// the me query
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks
    }
  }
`;

//query to get all users
// export const QUERY_ALL_USERS = gql`
//     query AllUsers {
//         users {
//             _id
//             username
//             email
//             savedBooks
//         }
//     }
// `;

// TO DO: make query to get single user