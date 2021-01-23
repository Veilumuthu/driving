import React from "react";
import CustomerForm from "./CustomerForm";
import { startAddCustomer } from "../../actions/customer";
import { connect } from "react-redux";

const AddCustomer = ({ startAddCustomer, history }) => {
    const onSubmit = (customer) => {
        startAddCustomer(customer)
        history.push('/customer');
        alert("Customer Added")
    }
    return (
        <div>
            <div className="content-container">
                <CustomerForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddCustomer: (customer) => dispatch(startAddCustomer(customer))
})
export default connect(undefined, mapDispatchToProps)(AddCustomer);