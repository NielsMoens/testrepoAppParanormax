import {useMutation, useQuery} from "@apollo/client";
import GET_ASSIGNMENTS from "../../../../lib/Queries/getAssigments";
import {getUser} from "../../../core/storage";
import MUTATE_QUEUE_ASSIGN_USER from "../../../../lib/mutations/queueUserAssignment";
import {useRouter} from "next/router";

// voor dat je user approved => popup met alle queued users per assignment

const Assignments = () => {
    const router = useRouter();
    const AssQuery = useQuery(GET_ASSIGNMENTS);
    const [queueUserAssignment] = useMutation(MUTATE_QUEUE_ASSIGN_USER);
    const { data, loading, error } = AssQuery;

    const userD = getUser();

    const assignUser = async (assignmentId) => {
        await queueUserAssignment({
            variables: {
                assignment: [parseInt(assignmentId)],
                assignee: [parseInt(userD.user.id)],
                authorId: parseInt(userD.user.id)
            },
        })
    }

    const showDetails = (assignmentId) => {
        return router.push(`/app/assignment/${assignmentId}`);
    }

    if (loading) return 'Loading...';
    console.log(data)
    const { entries } = data;
    return (
        <>
            <div className="content-wrapper">
                {/*greetings users*/}
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card corona-gradient-card">
                            <div className="card-body py-0 px-0 px-sm-3">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-7 col-xl-8 ml-4 p-2">
                                        <p className="mb-1 mb-sm-0">Welcome {userD.user.firstName}</p>
                                        <p className="mb-1 mb-sm-0">These are the available assigments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Assigment page*/}
                <div className="row">
                    {entries.map((entry) => (
                        <div key={entry.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-9">
                                                    <h3 className="mb-0">{entry.title}</h3>
                                                    <span
                                                        className={entry.assigmentStatus[0].title === 'failed' ? "text-danger ml-2 mb-0 font-weight-medium" : "text-success ml-2 mb-0 font-weight-medium"}>
                                                        {entry.assigmentStatus[0].title}
                                                    </span>
                                                </div>
                                                <div className="col-3">
                                                    <button onClick={(e) => { e.preventDefault(); return showDetails(entry.id) }}>
                                                        show details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={entry.mainImage[0].url} alt="..."
                                             className="img-fluid img-thumbnail"/>
                                    </div>

                                    <div className="row">
                                        <div className="col-9 mt-3">
                                            <p className="text-muted font-weight-normal">{entry.shortDescription}</p>
                                        </div>
                                        <div className="col-3 mt-3">
                                            <p className="text-muted font-weight-normal">{new Date(entry.postDate).toLocaleDateString()}</p>
                                        </div>
                                        { entry.assigmentStatus[0].title === 'searching' ? <button onClick={(e) => { e.preventDefault(); return assignUser(entry.id) }}>
                                            Assign
                                        </button> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Assignments;
