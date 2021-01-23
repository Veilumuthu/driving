import React from "react";
import { connect } from "react-redux";
import { startEditCustomer, startRemoveCustomer } from "../../actions/customer";
import CustomerForm from "./CustomerForm";

const EditCustomer = (props) => {
    const onSubmit = (customer) => {
        props.startEditCustomer(props.customer.id, customer)
        props.history.push("/customerList")
    }
    const onRemove = () => {
        props.startRemoveCustomer({ id: props.customer.id })
        props.history.push("/customerList")
    }

    return (
        <div>
            <CustomerForm customer={props.customer} onSubmit={onSubmit} onRemove={onRemove} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find((customer) => customer.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditCustomer: (id, customer) => dispatch(startEditCustomer(id, customer)),
        startRemoveCustomer: (data) => dispatch(startRemoveCustomer(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);