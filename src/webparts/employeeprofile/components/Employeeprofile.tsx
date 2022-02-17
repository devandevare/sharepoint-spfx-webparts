import * as React from 'react';
import styles from './Employeeprofile.module.scss';
import { IEmployeeprofileProps } from './IEmployeeprofileProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Employeestates } from './Employeestates';
import { Profile } from './Profile';
import * as ReactDOM from 'react-dom';




export default class Employeeprofile extends React.Component<IEmployeeprofileProps, Employeestates> {
  constructor(props: any) {
    super(props);
    this.state = {
      empname: '',
      empEmail: '',
      empMobileno: '',
      empaddress: ''

    };
  }

  public onChange = (input) => {

    if (input.target.id == "name") {
      this.setState({ empname: input.target.value });
    }
    if (input.target.id == "email") {
      this.setState({ empEmail: input.target.value });
    }
    if (input.target.id == "mobileno") {
      this.setState({ empMobileno: input.target.value });
    }
    if (input.target.id == "address") {
      this.setState({ empaddress: input.target.value });
    }

  }

  public showdata = () => {


    ReactDOM.render(<Profile ename={this.state.empname} email={this.state.empEmail} mobno={this.state.empMobileno} add={this.state.empaddress} />
      , document.getElementById("profile"));
  }
  public render(): React.ReactElement<IEmployeeprofileProps> {
    return (
      <div className={styles.employeeprofile}>
        <div>
          <input className={styles.button} onChange={this.onChange} type="text" id="name" placeholder='Enter employee name' />
        </div>
        <div>
          <input className={styles.button} onChange={this.onChange} type="text" id="email" placeholder='Enter Email' />
        </div>
        <div>
          <input className={styles.button} onChange={this.onChange} type="text" id="mobileno" placeholder='Enter mobile no' />
        </div>
        <div>
          <input className={styles.button} onChange={this.onChange} type="text" id="address" placeholder='Enter Address' />
        </div>
        <button className={styles.button} onClick={this.showdata}>Submit</button>

        <div id='profile'>

        </div>
      </div>
    );
  }
}
