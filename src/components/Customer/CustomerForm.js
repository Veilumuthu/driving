import React from "react";
import { Select } from '@rmwc/select';

class CustomerForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.customer ? props.customer.name : "",
            address: props.customer ? props.customer.address : "",
            city: props.customer ? props.customer.city : "",
            primary: props.customer ? props.customer.primary : "",
            secondary: props.customer ? props.customer.secondary : "",
            aadhar: props.customer ? props.customer.aadhar : "",
            type: props.customer ? props.customer.type : "",
            vehiNo: props.customer ? props.customer.vehiNo : "",
            chasisNo: props.customer ? props.customer.chasisNo : "",
            show: false,
            error: ""
        }
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
    }
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }))
    }
    onCityChange = (e) => {
        const city = e.target.value;
        this.setState(() => ({ city }))
    }
    onPrimaryNumChange = (e) => {
        const primary = e.target.value;
        if (primary.match(/^\d{0,10}$/)) {
            this.setState(() => ({ primary }))
        }
    }
    onSecondaryNumChange = (e) => {
        const secondary = e.target.value;
        if (secondary.match(/^\d{0,10}$/)) {
            this.setState(() => ({ secondary }))
        }
    }
    onAadharNumChange = (e) => {
        const aadhar = e.target.value;
        if (aadhar.match(/^\d{0,12}$/)) {
            this.setState(() => ({ aadhar }))
        }
    }
    onVehicleTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({ type }))
    }
    onVehicleNumChange = (e) => {
        const vehiNo = e.target.value;
        this.setState(() => ({ vehiNo }))
    }
    onChasisNumChange = (e) => {
        const chasisNo = e.target.value;
        this.setState(() => ({ chasisNo }))
    }
    showModal = () => {
        this.setState(() => ({ show: true }))
    }
    hideModal = () => {
        this.setState(() => ({ show: false }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.address) {
            this.setState(() => ({ error: 'Please provide Name and Address' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                primary: this.state.primary,
                secondary: this.state.secondary,
                aadhar: this.state.aadhar,
                type: this.state.type,
                vehiNo: this.state.vehiNo,
                chasisNo: this.state.chasisNo,
                show: this.state.show
            })
            this.setState({
                name: "",
                address: "",
                city: "",
                primary: "",
                secondary: "",
                aadhar: "",
                type: "",
                vehiNo: "",
                chasisNo: ""
            })
        }
    }
    render() {
        return (
            <form className="container" onSubmit={this.onSubmit} style={{ marginTop: "20px" }}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div className="row">
                    <div className="col-md-6">
                        <label >
                            <b>Customer Name</b>
                            <input className="inpu" type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} autoFocus />
                        </label><br />
                        <label>
                            <b>Address</b>
                            <textarea className="inpu" type="text" placeholder="Address" value={this.state.address} onChange={this.onAddressChange} />
                        </label><br />
                        <label>
                            <b>City</b>
                            <input className="inpu" type="text" placeholder="City" value={this.state.city} onChange={this.onCityChange} />
                        </label><br />
                        <label>
                            <b>Primary No</b>
                            <input className="inpu" type="number" placeholder="Ph No" value={this.state.primary} onChange={this.onPrimaryNumChange} required />
                        </label><br />
                        <label>
                            <b>Secondary No</b>
                            <input className="inpu" type="number" placeholder="Ph No(Optional)" value={this.state.secondary} onChange={this.onSecondaryNumChange} />
                        </label><br />
                        <label>
                            <b>Aadhar No</b>
                            <input className="inpu" type="number" placeholder="Aadhar No" value={this.state.aadhar} onChange={this.onAadharNumChange} required />
                        </label><br />

                    </div>
                    <div className="col-md-6">
                        <label>
                            <b>Vehicle Type</b>
                            <Select
                                style={{ marginLeft: "2rem", width: "500px" }}
                                options={["Two Wheeler", "Four Wheeler"]}
                                value={this.state.type}
                                onChange={this.onVehicleTypeChange}
                            />
                        </label><br />
                        <label>
                            <b>Vehicle No</b>
                            <input className="inpu" type="text" placeholder="Vehicle No" value={this.state.vehiNo} onChange={this.onVehicleNumChange} />
                        </label><br />
                        <label>
                            <b>Chasis No</b>
                            <input className="inpu" type="number" placeholder="Chasis No" value={this.state.chasisNo} onChange={this.onChasisNumChange} />
                        </label><br />
                        <div className="text-center" >
                            <button className="btn btn-primary but">Save</button>
                            <button className="btn btn-danger but" onClick={this.props.onRemove}>Remove</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default CustomerForm;