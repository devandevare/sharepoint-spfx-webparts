import * as React from 'react';
import styles from './Calc2.module.scss';
import { ICalc2Props } from './ICalc2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import{CalcStates} from './calcInterface';



export default class Calc2 extends React.Component<ICalc2Props, CalcStates> {

  constructor(props:any){
    super(props);
    this.state={
      result: "any",
      input1: 0,
      input2: 0
    };
  }

  public add=()=>{
    let sum = this.state.input1 + this.state.input2;
  }
  public render(): React.ReactElement<ICalc2Props> {
    return (
      <div className={ styles.calc2 }>
        <h1>Calculator</h1>
        <div>  <input type="text" />
          <input type="text" />
        </div>
        
        <div>
          <button className={styles['button1']}onClick={this.add} >+</button>
          <button className={styles['button1']} >-</button>
          <button className={styles['button1']}  >*</button>
          <button className={styles['button1']} >/</button>
          <button className={styles['button1']} >=</button>
        </div>
        <input type="text" />
      </div>
    );
  }
}
