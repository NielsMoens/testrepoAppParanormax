import {gql} from "@apollo/client";

const MUTATE_QUEUED_USER_STATUS = gql`
   mutation SetQueuedUserStatus($authorId: ID!, $id: ID!, $status: [Int]!) {
      save_assignmentQueue_assignmentQueue_Entry(authorId: $authorId, id: $id, assigneeStatus: $status) {
        assignment {
          id
        }
        assignee {
          id
          name
        },
        assigneeStatus {
          id
          title
        }
      }
    }
`;

export default MUTATE_QUEUED_USER_STATUS;
