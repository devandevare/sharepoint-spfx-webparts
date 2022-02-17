import * as React from "react";
import * as ReactDOM from "react-dom";
import Employee from "./Employeeedetails";
import { Editemployeeprofiles } from "./JsonDenoStates";

export interface EditempProps {

    alldata: any;
    EmpId: any;
    update: (val: any, i: any) => void;
} 


export default class EditEmployee extends React.Component<EditempProps, Editemployeeprofiles>{
    constructor(props) {
        super(props);
        this.state = {
            editname: this.props.alldata.name,
            editaddress: this.props.alldata.address,
            editDob: this.props.alldata.DOB


        };
    } 

    public onchange = (input) => {
        if (input.target.id == "ename") {
            this.setState({ editname: input.target.value });
        } 
        if (input.target.id == "eadd") {
            this.setState({ editaddress: input.target.value });
        } 
        if (input.target.id == "edob") {
            this.setState({ editDob: input.target.value });
        } 
    } 

    public thismethod = () => {
        let newdata = {
            name: this.state.editname,
            address: this.state.editaddress,
            DOB: this.state.editDob
        };
        this.props.update(newdata, this.props.EmpId);
    } 

    public render() {
        return (
            <tr>
                <td><input type="text" id="ename" onChange={this.onchange} value={this.state.editname} /> </td>
                <td> <input type="text" id="eadd" onChange={this.onchange} value={this.state.editaddress} />  </td>
                <td><input type="date" id="edob" onChange={this.onchange} value={this.state.editDob} />  </td>
                <td><button onClick={this.thismethod}>Update</button></td>

            </tr>

        );
    } 


} 


