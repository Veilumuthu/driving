import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import { textFilter, numberFilter } from "../../actions/customer";

class CustomerFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cusfilter: ""
        }
    }
    handleCusChange = (e) => {
        this.setState({ cusfilter: e.target.value })
    }
    render() {
        const LowercasedCusFilter = this.state.cusfilter.toLowerCase();
        return (
            <div>
                <div className="container text-center">
                    <label> Search :
                    <input value={this.state.cusfilter} onChange={this.handleCusChange} style={{ marginLeft: "10px", marginTop: "20px" }} autoFocus />
                    </label>
                </div>
                <Row>
                    {
                        this.props.customers.length === 0 ? (
                            <div className="text-center container">
                                <h3>No Details</h3>
                            </div>
                        ) : (
                                <table className="head">
                                    <thead>
                                        <tr style={{ border: "1px solid black" }}>
                                            <th className="name">Name</th>
                                            <th className="name">Primary No</th>
                                            <th className="name">Secondary No</th>
                                            <th className="name">Address</th>
                                            <th className="name">City</th>
                                            <th className="name">Aadhar</th>
                                            <th className="name">Vehicle Type</th>
                                            <th className="name">Vehicle No</th>
                                            <th className="name">Chasis No</th>
                                            <th className="name">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.customers.filter((customer) => {
                                                return Object.keys(customer).some((key) => (customer[key].toLowerCase().includes(LowercasedCusFilter)))
                                            }).map((customer) => {
                                                return (
                                                    <tr key={customer.id} style={{ border: "1px solid black" }}>
                                                        <td className="name"><h6>{customer.name}</h6></td>
                                                        <td className="mb-2 text-muted name"><h6>{customer.primary}</h6></td>
                                                        <td className="mb-2 text-muted name"><h6>{customer.secondary}</h6></td>
                                                        <td className="name">{customer.address}</td>
                                                        <td className="name">{customer.city}</td>
                                                        <td className="name">{customer.aadhar}</td>
                                                        <td className="name">{customer.type}</td>
                                                        <td className="name">{customer.vehiNo}</td>
                                                        <td className="name">{customer.chasisNo}</td>
                                                        <td className="name"><Link to={`/edit/${customer.id}`}><button><i className="fas fa-edit"></i></button></Link></td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            )
                    }
                </Row>
            </div>
        )
    }
}


// class CustomerFilter extends React.Component {

//     onTextChange = (e) => {
//         this.props.textFilter(e.target.value)
//     }
//     onNumberChange = (e) => {
//         this.props.numberFilter(e.target.value)
//     }
//     onNameChange = (e) => {
//         this.props.nameSort(e.target.value)
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="text-center" style={{ marginTop: "20px" }}>
//                     <Select
//                         label="Search"
//                         options={["All", 'Name', 'Phone Num', 'Address', 'City', 'Aadhar']}
//                         value={this.props.cusFilters.name}
//                         onChange={this.onNameChange}
//                     />
//                     <label> Name :
//                         <input type="text" value={this.props.cusFilters.text} onChange={this.onTextChange} style={{ marginLeft: "10px" }} autoFocus />
//                     </label>
//                 </div>
//             </div>
//         )
//     }
// }
const props = (state) => {
    return {
        cusFilters: state.cusFilters,
        customers: state.customers
    }
}
const mapProps = (dispatch) => {
    return {
        textFilter: (text) => dispatch(textFilter(text)),
        numberFilter: (number) => dispatch(numberFilter(number))
    }
}
export default connect(props, mapProps)(CustomerFilter)




                    // <label style={{ marginLeft: "10px" }}> Ph Number :
                    // <input type="text" value={this.props.cusFilters.number} onChange={this.onNumberChange} style={{ marginLeft: "10px" }} />
                    // </label>