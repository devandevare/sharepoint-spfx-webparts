import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import Employee from "./Employeeedetails";
import { Editemployeeprofiles } from "./JsonDenoStates";


export default function EditEmployeeHooks(props:any) {

    const [editname, updateeditname] = useState(props.alldata.name);
    const [editadd, updateadd] = useState(props.alldata.address);
    const [editDob, updateDob] = useState(props.alldata.DOB);


    function onchange(input) {
        if (input.target.id == "ename") {
            updateeditname(input.target.value);
        } 
        if (input.target.id == "eadd") {
            updateadd(input.target.value);
        } 
        if (input.target.id == "edob") {
            updateDob(input.target.value);
        } 
    } 
    function updatedata() {
        let newdata = {
            name:editname,
            address: editadd,
            DOB: editDob
        };
       props.update(newdata,props.EmpId);
    } 

    return (
        <tr><td><input type="text" id="ename" onChange={onchange} value={editname} /></td>
            <td> <input type="text" id="eadd" onChange={onchange} value={editadd} /></td>
            <td><input type="date" id="edob" onChange={onchange} value={editDob} /></td>
            <td><button onClick={updatedata}>Update</button></td>
        </tr>
    );
} 