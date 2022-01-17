import {useMutation, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT from "../../../lib/Queries/getQueuedUsersOfAssignment";
import MUTATE_QUEUED_USER_STATUS from "../../../lib/mutations/setQueueUserStatus";
import MUTATE_ASSIGN_USER from "../../../lib/mutations/assignUserToAssignment";
import {getUser} from "../../../compenents/core/storage";

const AssignmentDetail = () => {
    const router = useRouter();
    const [setQueuedUserStatus] = useMutation(MUTATE_QUEUED_USER_STATUS);
    const [setAssignedUser] = useMutation(MUTATE_ASSIGN_USER);
    const queuedAssignments = useQuery(GET_QUEUED_ASSIGNMENTS_OF_ASSIGNMENT, {
        variables: {
            assignment: router.query.assignmentId
        }
    });
    const { data, loading, error } = queuedAssignments;

    if (loading) return (
        <></>
    );
    const userD = getUser();

    const { entries } = data;

    if (entries.length <= 0)  return (
        <>No entries</>
    );

    const assignment = entries[0].assignment;

    const acceptAssignment = async (entryId, assigneeId) => {
        await setQueuedUserStatus({
            variables: {
                id: entryId,
                status: [1261],
                authorId: parseInt(userD.user.id)
            }
        })
        await setAssignedUser({
            variables: {
                id: assignment[0].id,
                assignee: [parseInt(assigneeId)]
            }
        })
    }

    const denyAssignment = async (entryId) => {
        console.log(entryId)
        const response = await setQueuedUserStatus({
            variables: {
                authorId: parseInt(userD.user.id),
                id: entryId,
                status: [1260]
            }
        });
        console.log(response)
    }

    return (
        <>
            <div className="content-wrapper">
                <div className="row">
                    {entries.map((entry) => (
                        <div key={entry.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-12">
                                                    <h3 className="mb-0">{assignment.title}</h3>
                                                    <span
                                                        className={assignment.status === 'failed' ? "text-danger ml-2 mb-0 font-weight-medium" : "text-success ml-2 mb-0 font-weight-medium"}>
                                                        {assignment.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    { entry.assigneeStatus.length >= 0 ?

                                        <div className="row">
                                            {entry.assignee.map((assignee) => (
                                                <div key={assignee.id} className="col-12">
                                                    { assignee.name }
                                                    <div className="row">
                                                        {/* add if to check if there is a status*/}
                                                        <button onClick={ (e) => { e.preventDefault(); return denyAssignment(entry.id)}}>Deny</button>
                                                        <button onClick={ (e) => { e.preventDefault(); return acceptAssignment(entry.id, assignee.id)}}>Accept</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        : ''}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

AssignmentDetail.requireAuth = true;
// Assignment.requiresAdmin = true;
export default AssignmentDetail;
