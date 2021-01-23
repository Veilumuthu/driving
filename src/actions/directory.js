import database from "../firebase/firebase";

export const addDirectory = (directory) => ({
    type: "ADD_DIRECTORY",
    directory
});

export const startAddDirectory = (directoryData = {}) => {
    return (dispatch) => {
        const {
            name = "",
            address = "",
            city = "",
            primary = "",
            secondary = "",
            acNo = "",
            ifsc = "",
            bankName = "",
            acName = "",
            branch = "",
            pinCode = ""
        } = directoryData;
        const directory = { name, address, city, primary, secondary, acNo, ifsc, bankName, acName, branch, pinCode };

        return database.ref(`directories`).push(directory).then((ref) => {
            dispatch(addDirectory({
                id: ref.key,
                ...directory
            }))
        })
    };
}


export const editDirectory = (id, update) => ({
    type: "EDIT_DIRECTORY",
    id,
    update
});

export const startEditDirectory = (id, update) => {
    return (dispatch) => {
        return database.ref(`directories/${id}`).update(update).then(() => {
            dispatch(editDirectory(id, update))
        })
    }
};

export const removeDirectory = ({ id } = {}) => ({
    type: 'REMOVE_DIRECTORY',
    id
});

export const startRemoveDirectory = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`directories/${id}`).remove().then(() => {
            dispatch(removeDirectory({ id }));
        });
    };
};


export const setDirectory = (directories) => ({
    type: 'SET_DIRECTORY',
    directories
});

export const startSetDirectory = () => {
    return (dispatch) => {
        return database.ref(`directories`).once('value').then((snapshot) => {
            const directories = [];

            snapshot.forEach((childSnapshot) => {
                directories.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setDirectory(directories));
        })
    }
};

// Filters
export const textFilter = (text = "") => ({
    type: "TEXT_FILTER",
    text
})

export const numberFilter = (number = "") => ({
    type: "NUMBER_FILTER",
    number
})