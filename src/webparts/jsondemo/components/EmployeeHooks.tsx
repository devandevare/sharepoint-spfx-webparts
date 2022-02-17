import { escape } from "@microsoft/sp-lodash-subset";
import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import EditEmployee from './Editemployee';
import EditEmployeeHooks from "./EditEmployeeHooks";
import { IJsondemoProps } from "./IJsondemoProps";
import styles from "./Jsondemo.module.scss";
import { Employeprofiles } from "./JsonDenoStates";


let Employeedetails = [];

export default function EmployeeHooks() {

    const [emp, updtateEmp] = useState({
        empname: "",
        empAdd: "",
        empDob: ""
    });
    const [editempname, updateEditEmpname] = useState("");
    const [editempAddress, updateEditEmpAddress] = useState("");
    const [editempDOB, updateEditEmpDOB] = useState("");
    const [inputbox, updateinputbox] = useState(1);

    function onchange(input: any) {
        if (input.target.id == "name") {
            updtateEmp({ ...emp, empname: input.target.value });
        } 
        if (input.target.id == "address") {
            updtateEmp({ ...emp, empAdd: input.target.value });
        } 
        if (input.target.id == "DOB") {
            updtateEmp({ ...emp, empDob: input.target.value });
        } 
        if (input.target.id == "edtname") {
            updateEditEmpname(input.target.value);
        }  
        if (input.target.id == "edtaddress") {
            updateEditEmpAddress(input.target.value);
        } 
        if (input.target.id == "edtDob") {
            updateEditEmpDOB(input.target.value);

            console.log(emp);
        } 
    } 

    function savedata() {
        if (emp.empname != "" && emp.empAdd != "") {
            const newEmp = { name: emp.empname, address: emp.empAdd, DOB: emp.empDob };
            Employeedetails.push(newEmp);
            alert("Employee Added");
            console.log(Employeedetails);

        } 


    } 
    function editdata(row: number) {



        alert(Employeedetails[row].name);
        updateEditEmpname(Employeedetails[row].name);
        updateEditEmpAddress(Employeedetails[row].address);
        updateEditEmpDOB(Employeedetails[row].DOB);
        debugger;

        ReactDOM.render(<>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.table}>Firstname</th>
                        <th>sdsdsd</th>
                        <th>DOB</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Employeedetails.map((data, index: number) => (row === index) ? <EditEmployeeHooks alldata={Employeedetails[index]} EmpId={row} update={update} /> : <tr><td> {data.name}</td>
                        <td> {data.address}</td>
                        <td>{data.DOB}</td>
                        <td><button onClick={() => this.editdata(index)}>Edit</button></td>
                        <td><button>Delete</button></td></tr>


                    )}
                </tbody>
            </table>
        </>, document.getElementById("empdata"));

    } 

    function deletedata(row) {
        Employeedetails.splice(row, 1);
        ReactDOM.render(
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.table}>Firstname</th>
                        <th>Employee Address</th>
                        <th>DOB</th>
                        <th colSpan={2}>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {Employeedetails.map((data, index: number) => (
                        <tr>
                            <td> {data.name}</td>
                            <td> {data.address}</td>
                            <td>{data.DOB}</td>
                            <td><button onClick={() => editdata(index)}>Edit</button></td>
                            <td><button onClick={() => deletedata(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>,
            document.getElementById("empdata")
        );

    } 

    function display() {
        ReactDOM.render(
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.table}>Firstname</th>
                        <th>Employee Address</th>
                        <th>DOB</th>
                        <th colSpan={2}>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {Employeedetails.map((data, index: number) => (
                        <tr>
                            <td> {data.name}</td>
                            <td> {data.address}</td>
                            <td>{data.DOB}</td>
                            <td><button onClick={() => editdata(index)}>Edit</button></td>
                            <td><button onClick={() => deletedata(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>,
            document.getElementById("empdata")
        );

    } 
    function update(values: any, index: any) {
        Employeedetails.splice(index, 1, values);
        display();
    } 
    return (
        <> <div className={styles.jsondemo}>
            <div>
                <input
                    className={styles.button}
                    id="name"
                    onChange={onchange}
                    type="text"
                    placeholder="Please Enter Name"
                />
                <label htmlFor="name"> Employee Name</label>
            </div>
            <div>
                <input
                    className={styles.button}
                    type="text"
                    id="address"
                    onChange={onchange}
                    placeholder="Please Enter Address"
                />
                <label htmlFor="address"> Employee Address</label>
            </div>
            <div>
                <input
                    className={styles.button}
                    type="date"
                    id="DOB"
                    onChange={onchange}
                    placeholder="Please Enter Date of Birth"
                />
                <label htmlFor="DOB"> Date of Birth</label>
            </div>
            <div>
                <button className={styles.button} onClick={savedata}>Submit</button>
                <button className={styles.button} onClick={display}>Print</button>
            </div>

            <div id="empdata" className={styles.jsondemo}></div>


        </div></>

    );


} 