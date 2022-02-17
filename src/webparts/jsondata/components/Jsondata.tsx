import * as React from 'react';
import styles from './Jsondata.module.scss';
import { IJsondataProps } from './IJsondataProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as ReactDOM from 'react-dom';
import { method } from 'lodash';



export default class Jsondata extends React.Component<IJsondataProps, {}> {

  public jsondata = async () => {
    const Alldata = [];
    let res = await fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => json.map(obj => Alldata.push(obj)));
    console.log(Alldata);
    ReactDOM.render(<>{Alldata.map(data => <tr><td>{data.id}</td><td>{data.name}</td></tr>)}
    </>, document.getElementById("table"));

    console.log(Alldata.forEach.name);

  } 
  public DummyData = async () => {
    const DummyData1 = [];
    let varr = await fetch('http://dummy.restapiexample.com/api/v1/employees')

      .then((response) => response.json())
      .then((json) => json.map(obj => DummyData1.push(obj)));
    console.log(DummyData1);
    ReactDOM.render(<>{DummyData1.map(data => <tr><td>{data.employee_name}</td><td>{data.id}</td></tr>)}
    </>, document.getElementById("table"));

    console.log(DummyData1.forEach.name);

  } 
  public adddata = async () => {
    const newdata = [];
    let awt = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        id: '11',
        name: 'Devan',

      }
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  } 
  public render(): React.ReactElement<IJsondataProps> {
    return (
      <div className={styles.jsondata}>
        <div>
          <button onClick={this.jsondata}>typicode API Data</button>

          <button onClick={this.adddata}>Add data typicode </button></div>
        <div>
          <button onClick={this.DummyData}>Dummy API Data</button>

          <button onClick={this.adddata}>Add data Dummy </button></div>
        <table>
          <thead></thead>
          <tbody id='table'>

          </tbody>

        </table>

      </div>
    );
  } 
} 
