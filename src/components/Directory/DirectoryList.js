import React from "react";
import { connect } from "react-redux";
import directorySelector from "../../selector/directorySelector";
import DirectoryFilter from "./DirectoryFilter";

const DirectoryList = (props) => {
    return (
        <div>
            <h2 className="text-center">Directory List</h2>
            <DirectoryFilter />
        </div>
    )
}
const props = (state) => {
    return {
        directories: directorySelector(state.directories, state.dirFilters)
    }
}
export default connect(props)(DirectoryList);

// props.directories.map((directory) => {
//     return <Directory key={directory.id} {...directory} />
// })

// <div style={{ marginTop: "20px" }}>
//                 <Row>
//                     {
//                         props.directories.length === 0 ? (
//                             <div className="text-center container">
//                                 <h3>No Details</h3>
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
//                                             <th className="name">Acco No</th>
//                                             <th className="name">IFSC</th>
//                                             <th className="name">Bank</th>
//                                             <th className="name">Acc Name</th>
//                                             <th className="name">Branch</th>
//                                             <th className="name">PinCode</th>
//                                             <th className="name">Edit</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {props.directories.map((directory) => {
//                                             return (
//                                                 <tr key={directory.id} style={{ border: "1px solid black" }}>
//                                                     <td className="name"><h6>{directory.name}</h6></td>
//                                                     <td className="mb-2 text-muted name"><h6>{directory.primary}</h6></td>
//                                                     <td className="mb-2 text-muted name"><h6>{directory.secondary}</h6></td>
//                                                     <td className="name">{directory.address}</td>
//                                                     <td className="name">{directory.city}</td>
//                                                     <td className="name">{directory.acNo}</td>
//                                                     <td className="name">{directory.ifsc}</td>
//                                                     <td className="name">{directory.bankName}</td>
//                                                     <td className="name">{directory.acName}</td>
//                                                     <td className="name">{directory.branch}</td>
//                                                     <td className="name">{directory.pinCode}</td>
//                                                     <td className="name"><Link to={`/editDirect/${directory.id}`}><button><i className="fas fa-edit"></i></button></Link></td>
//                                                 </tr>
//                                             )
//                                         })}
//                                     </tbody>
//                                 </table>
//                             )
//                     }
//                 </Row>
//             </div>