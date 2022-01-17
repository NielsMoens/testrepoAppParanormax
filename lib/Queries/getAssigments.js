import {gql} from "@apollo/client";

const GET_ASSIGNMENTS = gql`
    query MyQuery {
      entries(section: "assigments") {
        id
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

export default GET_ASSIGNMENTS;