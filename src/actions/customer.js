import database from "../firebase/firebase";

export const addCustomer = (customer) => ({
    type: "ADD_CUSTOMER",
    customer
});

export const startAddCustomer = (customerData = {}) => {
    return (dispatch) => {
        const {
            name = "",
            address = "",
            city = "",
            primary = "",
            secondary = "",
            aadhar = "",
            type = "",
            vehiNo = "",
            chasisNo = ""
        } = customerData;
        const customer = { name, address, city, primary, secondary, aadhar, type, vehiNo, chasisNo };

        return database.ref(`customers`).push(customer).then((ref) => {
            dispatch(addCustomer({
                id: ref.key,
                ...customer
            }))
        })
    };
}


export const editCustomer = (id, update) => ({
    type: "EDIT_CUSTOMER",
    id,
    update
});

export const startEditCustomer = (id, update) => {
    return (dispatch) => {
        return database.ref(`customers/${id}`).update(update).then(() => {
            dispatch(editCustomer(id, update))
        })
    }
};

export const removeCustomer = ({ id } = {}) => ({
    type: 'REMOVE_CUSTOMER',
    id
});

export const startRemoveCustomer = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`customers/${id}`).remove().then(() => {
            dispatch(removeCustomer({ id }));
        });
    };
};


export const setCustomers = (customers) => ({
    type: 'SET_CUSTOMERS',
    customers
});

export const startSetCustomers = () => {
    return (dispatch) => {
        return database.ref(`customers`).once('value').then((snapshot) => {
            const customers = [];

            snapshot.forEach((childSnapshot) => {
                customers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setCustomers(customers));
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