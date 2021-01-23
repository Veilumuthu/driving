import React from "react";
import DirectoryForm from "./DirectoryForm";
import { startAddDirectory } from "../../actions/directory";
import { connect } from "react-redux";

const AddDirectory = ({ startAddDirectory, history }) => {
    const onSubmit = (directory) => {
        startAddDirectory(directory)
        history.push('/directory');
        alert("Directory Added")
    }
    return (
        <div>
            <div className="content-container">
                <DirectoryForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddDirectory: (directory) => dispatch(startAddDirectory(directory))
})
export default connect(undefined, mapDispatchToProps)(AddDirectory);