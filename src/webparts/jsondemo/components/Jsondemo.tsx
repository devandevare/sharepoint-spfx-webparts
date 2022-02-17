import { escape } from "@microsoft/sp-lodash-subset";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Employee from "./Employeeedetails";
import { IJsondemoProps } from "./IJsondemoProps";
import styles from "./Jsondemo.module.scss";
import { Jsondemostates } from "./JsonDenoStates";
import EmployeeHooks from './EmployeeHooks';

let studentdata = [
  { fname: "Anil", lname: "koli", Math: 86 },
  { fname: "Devan", lname: "Devare", Math: 85 },
  { fname: "Nandini", lname: "Badgu", Math: 68 },
  { fname: "Shubham", lname: "Pathak", Math: 55 }
];

export default class Jsondemo extends React.Component<IJsondemoProps, Jsondemostates>{
  constructor(props: any) {
    super(props);
    this.state = {
      studentdata1: []
     
    };
  } 

  public showdata = () => {
    studentdata.map(std => {
      if (std.Math > 80) {
        this.setState({
          studentdata1: this.state.studentdata1.push({
            firstname: std.fname,
            lastname: std.lname,
            math: std.Math
          })
        });
      } 
    });
    console.log(this.state.studentdata1);
    ReactDOM.render(
      this.state.studentdata1.map(d1 => (
        <tr>
          <td>{d1.firstname}</td>
          <td>{d1.lastname}</td>
          <td>{d1.math}</td>
        </tr>
      )),
      document.getElementById("tbldata")
    );
  } 
  public render(): React.ReactElement<IJsondemoProps> {
    return (
      <div className={styles.jsondemo}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Last Name</th>
              <th>Math</th>
            </tr>
          </thead>
          <tbody>
            {studentdata.map(data => (
              <tr>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.Math}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.button} onClick={this.showdata}>Show Data</button>
        <div className={styles.jsondemo}>
          <h4>
            student names those have scored more than 80 marks in Math subject
          </h4>
          <table >
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Last Name</th>
                <th>Math</th>
              </tr>
            </thead>
            <tbody id="tbldata"></tbody>
          </table>
          <div>
            <h4> Employee Details</h4>
           {/* <Employee /> */}
           <EmployeeHooks  />
          </div>
        </div>
      </div>
    );
  } 
} 
