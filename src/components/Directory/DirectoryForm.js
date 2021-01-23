import React from "react";

class DirectoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.directory ? props.directory.name : "",
            address: props.directory ? props.directory.address : "",
            city: props.directory ? props.directory.city : "",
            primary: props.directory ? props.directory.primary : "",
            secondary: props.directory ? props.directory.secondary : "",
            acNo: props.directory ? props.directory.acNo : "",
            ifsc: props.directory ? props.directory.ifsc : "",
            bankName: props.directory ? props.directory.bankName : "",
            acName: props.directory ? props.directory.acName : "",
            branch: props.directory ? props.directory.branch : "",
            pinCode: props.directory ? props.directory.pinCode : "",
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
    onAccoNoChange = (e) => {
        const acNo = e.target.value;
        if (acNo.match(/^\d{0,20}$/)) {
            this.setState(() => ({ acNo }))
        }
    }
    onIfscChange = (e) => {
        const ifsc = e.target.value;
        this.setState(() => ({ ifsc }))
    }
    onBankNameChange = (e) => {
        const bankName = e.target.value;
        this.setState(() => ({ bankName }))
    }
    onAccoHoldNameCHange = (e) => {
        const acName = e.target.value;
        this.setState(() => ({ acName }))
    }
    onBranchChange = (e) => {
        const branch = e.target.value;
        this.setState(() => ({ branch }))
    }
    onPinCodeChange = (e) => {
        const pinCode = e.target.value;
        if (pinCode.match(/^\d{0,6}$/)) {
            this.setState(() => ({ pinCode }))
        }
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
                acNo: this.state.acNo,
                ifsc: this.state.ifsc,
                bankName: this.state.bankName,
                acName: this.state.acName,
                branch: this.state.branch,
                pinCode: this.state.pinCode
            })
            this.setState({
                name: "",
                address: "",
                city: "",
                primary: "",
                secondary: "",
                acNo: "",
                ifsc: "",
                bankName: "",
                acName: "",
                branch: "",
                pinCode: ""
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
                            <b>Name</b>
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
                            <b>Account No</b>
                            <input className="inpu" type="number" placeholder="Account No" value={this.state.acNo} onChange={this.onAccoNoChange} required />
                        </label><br />

                    </div>
                    <div className="col-md-6">
                        <label>
                            <b>IFSC No</b>
                            <input className="inpu" type="text" placeholder="IFSC No" value={this.state.ifsc} onChange={this.onIfscChange} />
                        </label><br />
                        <label>
                            <b>Bank Name</b>
                            <input className="inpu" type="text" placeholder="Bank Name" value={this.state.bankName} onChange={this.onBankNameChange} />
                        </label><br />
                        <label>
                            <b>Ac/Holder Name</b>
                            <input className="inpu" type="text" placeholder="Ac/Holder Name" value={this.state.acName} onChange={this.onAccoHoldNameCHange} />
                        </label><br />
                        <label>
                            <b>Branch</b>
                            <input className="inpu" type="text" placeholder="Branch" value={this.state.branch} onChange={this.onBranchChange} />
                        </label><br />
                        <label>
                            <b>PinCode</b>
                            <input className="inpu" type="number" placeholder="PinCode" value={this.state.pinCode} onChange={this.onPinCodeChange} />
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

export default DirectoryForm;