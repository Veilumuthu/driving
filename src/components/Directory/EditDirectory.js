import React from "react";
import { connect } from "react-redux";
import { startEditDirectory, startRemoveDirectory } from "../../actions/directory";
import DirectoryForm from "./DirectoryForm";

const EditDirectory = (props) => {
    const onSubmit = (directory) => {
        props.startEditDirectory(props.directory.id, directory)
        props.history.push("/directoryList")
    }
    const onRemove = () => {
        props.startRemoveDirectory({ id: props.directory.id })
        props.history.push("/directoryList")
    }

    return (
        <div>
            <DirectoryForm directory={props.directory} onSubmit={onSubmit} onRemove={onRemove} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        directory: state.directories.find((directory) => directory.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditDirectory: (id, directory) => dispatch(startEditDirectory(id, directory)),
        startRemoveDirectory: (data) => dispatch(startRemoveDirectory(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDirectory);