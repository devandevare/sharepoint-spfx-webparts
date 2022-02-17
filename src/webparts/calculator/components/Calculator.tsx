import * as React from 'react';
import styles from './Calculator.module.scss';
import { ICalculatorProps } from './ICalculatorProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CalcStates } from './CalcStates';


export default class Calculator extends React.Component<ICalculatorProps, CalcStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputBox: ""

    };
  }


  public addvalue(inputValue: any) {
    const currentInput = this.state.inputBox;
    const operations = ['*', '/', '+', '-'];
    const newValue = currentInput + inputValue;

    this.setState({ inputBox: newValue });

    console.log(this.state.inputBox);
  }

  public Results() {

    try {
      this.setState({ inputBox: eval(this.state.inputBox) });

    }
    catch (error) {
      alert("Please enter valid operations");
      this.setState({ inputBox: "" });
    }

  }
  public Allclear() {
    this.setState({ inputBox: "" });
  }

  public render(): React.ReactElement<ICalculatorProps> {
    if (this.state.inputBox == "Infinity") {
      alert("Cannot devided by Zero");
    }
    return (
      <div className={styles.calculator}>
        <table className={styles.table}>
          <tr>
            <td>
              <h1 className={styles.title} >Calculator</h1>
              <input type="text" className={styles['inputBox']} id="calc-input" value={this.state.inputBox}></input>
              <div className="buttonBox">
                <button className={styles['button1']} onClick={() => this.addvalue('7')}>7</button>
                <button className={styles['button1']} onClick={() => this.addvalue('8')}>8</button>
                <button className={styles['button1']} onClick={() => this.addvalue('9')}>9</button>
                <button className={styles['button1']} onClick={() => this.addvalue('+')}>+</button>
              </div>
              <div className={styles['buttonBox']}>
                <button className={styles['button1']} onClick={() => this.addvalue('4')} >4</button>
                <button className={styles['button1']} onClick={() => this.addvalue('5')}>5</button>
                <button className={styles['button1']} onClick={() => this.addvalue('6')} >6</button>
                <button className={styles['button1']} onClick={() => this.addvalue('-')}>-</button>
              </div>
              <div className={styles['buttonBox']}>
                <button className={styles['button1']} onClick={() => this.addvalue('1')}>1</button>
                <button className={styles['button1']} onClick={() => this.addvalue('2')} >2</button>
                <button className={styles['button1']} onClick={() => this.addvalue('3')} >3</button>
                <button className={styles['button1']} onClick={() => this.addvalue('/')} >/</button>
              </div>
              <div className={styles['buttonBox']}>
                <button className={styles['button1']} onClick={() => this.addvalue('*')} >*</button>
                <button className={styles['button1']} onClick={() => this.addvalue('0')} >0</button>
                <button className={styles['button1']} onClick={() => this.Results()} >=</button>
                <button className={styles['button1']} onClick={() => this.Allclear()} >AC</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
