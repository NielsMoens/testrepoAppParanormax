import {gql} from "@apollo/client";

const GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT = gql`
    query MyQuery($assignment: [QueryArgument]) {
      entries(assignment: $assignment) {
        ... on assignmentQueue_assignmentQueue_Entry {
          id
          assignee {
            id
            name
          }
          assignment {
            id
            title
            postDate
            status
          },
          assigneeStatus {
            title
          }
        }
      }
    }
`;

export default GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT;