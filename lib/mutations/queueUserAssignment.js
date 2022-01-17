import {gql} from "@apollo/client";

const MUTATE_QUEUE_ASSIGN_USER = gql`
   mutation QueueUserAssignment($authorId: ID, $assignment: [Int], $assignee: [Int]) {
      save_assignmentQueue_assignmentQueue_Entry(authorId: $authorId, assignment: $assignment, assignee: $assignee) {
        assignment {
          id 
        },
        assignee {
          id,
          name
        },
        assigneeStatus {
          title
        }
      }
    }
`;

export default MUTATE_QUEUE_ASSIGN_USER;
