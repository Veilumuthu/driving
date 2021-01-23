import React from "react";
import { connect } from "react-redux";
import CustomerFilter from "./CustomerFilter";
import customerSelector from "../../selector/customerSelector";

const CustomerList = (props) => {
    return (
        <div>
            <h2 className="text-center container">Customer List</h2>
            <CustomerFilter />
        </div>
    )
}

const props = (state) => {
    return {
        customers: customerSelector(state.customers, state.cusFilters)
    }
}
export default connect(props)(CustomerList);


// <div style={{ marginTop: "20px" }}>
//                 <Row>
//                     {
//                         props.customers.length === 0 ? (
//                             <div className="text-center container">
//                                 <h3>No Customers</h3>
//                             </div>
//                         ) : (
//                                 <table className="head">
//                                     <thead>
//                                         <tr style={{ border: "1px solid black" }}>
//                                             <th className="name">Name</th>
//                                             <th className="name">Primary No</th>
//                                             <th className="name">Secondary No</th>
//                                             <th className="name">Address</th>
//                                             <th className="name">City</th>
//                                             <th className="name">Aadhar</th>
//                                             <th className="name">Vehicle Type</th>
//                                             <th className="name">Vehicle No</th>
//                                             <th className="name">Chasis No</th>
//                                             <th className="name">Edit</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {props.customers.map((customer) => {
//                                             return (
//                                                 <tr key={customer.id} style={{ border: "1px solid black" }}>
//                                                     <td className="name"><h6>{customer.name}</h6></td>
//                                                     <td className="mb-2 text-muted name"><h6>{customer.primary}</h6></td>
//                                                     <td className="mb-2 text-muted name"><h6>{customer.secondary}</h6></td>
//                                                     <td className="name">{customer.address}</td>
//                                                     <td className="name">{customer.city}</td>
//                                                     <td className="name">{customer.aadhar}</td>
//                                                     <td className="name">{customer.type}</td>
//                                                     <td className="name">{customer.vehiNo}</td>
//                                                     <td className="name">{customer.chasisNo}</td>
//                                                     <td className="name"><Link to={`/edit/${customer.id}`}><button><i className="fas fa-edit"></i></button></Link></td>
//                                                 </tr>
//                                             )
//                                         })}
//                                     </tbody>
//                                 </table>
//                             )
//                     }
//                 </Row>
//             </div>