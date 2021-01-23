const directoryReducerDefault = [];

const directoryReducer = (state = directoryReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_DIRECTORY':
            return [
                ...state, action.directory
            ];
        case 'REMOVE_DIRECTORY':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_DIRECTORY':
            return state.map((directory) => {
                if (directory.id === action.id) {
                    return {
                        ...directory,
                        ...action.update
                    };
                } else {
                    return directory
                };
            });
        case 'SET_DIRECTORY':
            return action.directories;
        default:
            return state;
    }
}

export default directoryReducer;