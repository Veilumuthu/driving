const customerReducerDefault = [];

const customerReducer = (state = customerReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [
                ...state, action.customer
            ];
        case 'REMOVE_CUSTOMER':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_CUSTOMER':
            return state.map((customer) => {
                if (customer.id === action.id) {
                    return {
                        ...customer,
                        ...action.update
                    };
                } else {
                    return customer
                };
            });
        case 'SET_CUSTOMERS':
            return action.customers;
        default:
            return state;
    }
}

export default customerReducer;