import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
        }
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
//   mutation saveBook($input: SaveBookInput) {
//     saveBook(input: $input) {
//       user {
//         _id
//         username
//         bookCount
//         savedBooks {
//             bookId
//             title
//             authors
//             description
//             link
//             image
//         }
//       }
//     }
//   }
// `;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SaveBookInput) {
    saveBook(input: $input) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
        }
      }
    }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
        }
      }
    }
`;