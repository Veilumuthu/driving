import React from "react";
import { connect } from "react-redux";
import { textFilter, numberFilter } from "../../actions/directory";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";

class DirectoryFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dirfilter: ""
        }
    }
    handleDirChange = (e) => {
        this.setState({ dirfilter: e.target.value })
    }
    render() {
        const LowercasedDirFilter = this.state.dirfilter.toLowerCase();
        return (
            <div>
                <div className="container text-center">
                    <label> Search :
                    <input value={this.state.dirfilter} onChange={this.handleDirChange} style={{ marginLeft: "10px", marginTop: "20px" }} autoFocus />
                    </label>
                </div>
                <Row>
                    {
                        this.props.directories.length === 0 ? (
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
                                            <th className="name">Acco No</th>
                                            <th className="name">IFSC</th>
                                            <th className="name">Bank</th>
                                            <th className="name">Acc Name</th>
                                            <th className="name">Branch</th>
                                            <th className="name">PinCode</th>
                                            <th className="name">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.directories.filter((directory) => {
                                                return Object.keys(directory).some((name) => (directory[name].toLowerCase().includes(LowercasedDirFilter)))
                                            }).map((directory) => {
                                                return (
                                                    <tr key={directory.id} style={{ border: "1px solid black" }}>
                                                        <td className="name"><h6>{directory.name}</h6></td>
                                                        <td className="mb-2 text-muted name"><h6>{directory.primary}</h6></td>
                                                        <td className="mb-2 text-muted name"><h6>{directory.secondary}</h6></td>
                                                        <td className="name">{directory.address}</td>
                                                        <td className="name">{directory.city}</td>
                                                        <td className="name">{directory.acNo}</td>
                                                        <td className="name">{directory.ifsc}</td>
                                                        <td className="name">{directory.bankName}</td>
                                                        <td className="name">{directory.acName}</td>
                                                        <td className="name">{directory.branch}</td>
                                                        <td className="name">{directory.pinCode}</td>
                                                        <td className="name"><Link to={`/editDirect/${directory.id}`}><button><i className="fas fa-edit"></i></button></Link></td>
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

// class DirectoryFilter extends React.Component {
//     onTextChange = (e) => {
//         this.props.textFilter(e.target.value)
//     }
//     onNumberChange = (e) => {
//         this.props.numberFilter(e.target.value)
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="text-center" style={{ marginTop: "20px" }}>
//                     <label> Name :
//                     <input type="text" value={this.props.dirFilters.text} onChange={this.onTextChange} style={{ marginLeft: "10px" }} autoFocus />
//                     </label>
//                     <label style={{ marginLeft: "10px" }}> Ph Number :
//                     <input type="text" value={this.props.dirFilters.number} onChange={this.onNumberChange} style={{ marginLeft: "10px" }} />
//                     </label>
//                 </div>
//             </div>
//         )
//     }
// }
const props = (state) => {
    return {
        dirFilters: state.dirFilters,
        directories: state.directories
    }
}
const mapProps = (dispatch) => {
    return {
        textFilter: (text) => dispatch(textFilter(text)),
        numberFilter: (number) => dispatch(numberFilter(number))
    }
}
export default connect(props, mapProps)(DirectoryFilter);