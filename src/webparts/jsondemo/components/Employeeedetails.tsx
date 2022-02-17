import { escape } from "@microsoft/sp-lodash-subset";
import * as React from "react";
import * as ReactDOM from "react-dom";
import EditEmployee from './Editemployee';
import { IJsondemoProps } from "./IJsondemoProps";
import styles from "./Jsondemo.module.scss";
import { Employeprofiles } from "./JsonDenoStates";


let Employeedetails = [];

export default class Employee extends React.Component<{}, Employeprofiles> {
    constructor(props: any) {
        super(props);
        this.state = {
            emp: { empname: "", empDOB: "", empaddress: "" },
            inputbox: 1,
            editname: "",
            editDob: "",
            editaddress: "",
            Employeedetails: []
        };
    } 

    public onchange = input => {
        if (input.target.id == "name") {
            this.setState({
                emp: { ...this.state.emp, empname: input.target.value }
            });
        } 
        if (input.target.id == "address") {
            this.setState({
                emp: { ...this.state.emp, empaddress: input.target.value }
            });
        } 
        if (input.target.id == "DOB") {
            this.setState({ emp: { ...this.state.emp, empDOB: input.target.value } });
        } 
        if (input.target.id == "edtname") {
            this.setState({ editname: input.target.value });
        } 
        if (input.target.id == "edtaddress") {
            this.setState({ editaddress: input.target.value });
        } 
        if (input.target.id == "edtDob") {
            this.setState({ editDob: input.target.value });
        } 
        console.log(this.state.emp);
    } 

    public savedata = () => {
        if (this.state.emp.empname == "" && this.state.emp.empaddress == "") {

        }
        else {
            const newEmp = { name: this.state.emp.empname, address: this.state.emp.empaddress, DOB: this.state.emp.empDOB };
            Employeedetails.push(newEmp);
            alert("Employee Added");
            console.log(Employeedetails);
        } 
    } 

    public editdata = (row) => {

        alert(Employeedetails[row].name);
        this.setState({ editname: Employeedetails[row].name });
        this.setState({ editaddress: Employeedetails[row].address });
        this.setState({ editDob: Employeedetails[row].DOB });
        this.setState({ inputbox: 0 });
        alert(this.state.inputbox);

        ReactDOM.render(<> <table className={styles.table}>
            <table className={styles.table}></table>
            <thead>
                <tr>
                    <th className={styles.table}>Firstname</th>
                    <th>Employee Address</th>
                    <th>DOB</th>
                    <th colSpan={2}>Actions</th>

                </tr>
            </thead>
            <tbody>
                {Employeedetails.map((data, index: number) => (row === index) ?
                    <EditEmployee alldata={Employeedetails[index]} EmpId={row} update={this.update} /> : <tr><td> {data.name}</td>
                        <td> {data.address}</td>
                        <td>{data.DOB}</td>
                        <td><button onClick={() => this.editdata(index)}>Edit</button></td>
                        <td><button>Delete</button></td></tr>
                  

                )}
            </tbody>
        </table>
        </>, document.getElementById("empdata"));
    } 
    public update = (values: any, index: any) => {
        Employeedetails.splice(index, 1, values);
        this.display();
    } 

    public delete = (row) => {
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
                            <td><button onClick={() => this.editdata(index)}>Edit</button></td>
                            <td><button onClick={() => this.delete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>,
            document.getElementById("empdata")
        );
    } 

    public display = () => {
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
                            <td><button onClick={() => this.editdata(index)}>Edit</button></td>
                            <td><button onClick={() => this.delete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>,
            document.getElementById("empdata")
        );
    } 

    public render(): React.ReactNode {
        return (
            <div className={styles.jsondemo}>
                <div>
                    <input
                        className={styles.button}
                        id="name"
                        onChange={this.onchange}
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
                        onChange={this.onchange}
                        placeholder="Please Enter Address"
                    />
                    <label htmlFor="address"> Employee Address</label>
                </div>
                <div>
                    <input
                        className={styles.button}
                        type="date"
                        id="DOB"
                        onChange={this.onchange}
                        placeholder="Please Enter Date of Birth"
                    />
                    <label htmlFor="DOB"> Date of Birth</label>
                </div>
                <div>
                    <button className={styles.button} onClick={this.savedata}>Submit</button>
                    <button className={styles.button} onClick={this.display}>Print</button>
                </div>
                <div id="empdata" className={styles.jsondemo}></div>
            </div>
        );
    } 
} 
