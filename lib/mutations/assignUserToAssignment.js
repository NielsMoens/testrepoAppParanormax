import {gql} from "@apollo/client";

const MUTATE_ASSIGN_USER = gql`
   mutation AssignUser($id: ID!, $assignee: [Int]) {
      save_assigments_default_Entry(id: $id, assignee: $assignee, assigmentStatus: [542]) {
        id,
        ... on assigments_default_Entry {
          title
          shortDescription
          longDescription
          postDate
          mainImage {
            id
            url
          }
          assigmentStatus {
            id,
            title
          },
          assignee {
            id,
            name
          }
        }
      }
    }
`;

export default MUTATE_ASSIGN_USER;
