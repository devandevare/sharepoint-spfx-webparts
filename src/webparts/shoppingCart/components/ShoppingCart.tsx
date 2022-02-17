import * as React from 'react';
import styles from './ShoppingCart.module.scss';
import { IShoppingCartProps } from './IShoppingCartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Shoppingcartstates } from './shoppingStates';
import * as ReactDOM from 'react-dom';
import Shoppingcarthooks from './shoppingcarthooks';

let data = [];


export default class ShoppingCart extends React.Component<IShoppingCartProps, Shoppingcartstates> {
  constructor(props: any) {
    super(props);
    this.state = {
      addinput: "",
      deleteinput: "",
      findinput: ""

    };
  } 

  public onChangehandler = (input: any) => {

    if (input.target.id == "addinput") {

      this.setState({ addinput: input.target.value });
    } 
    if (input.target.id == "deleteinput") {

      this.setState({ deleteinput: input.target.value });

    } 
    if (input.target.id == "findinput") {

      this.setState({ findinput: input.target.value });

    }  

  } 

  public addinput = () => {

    data = [...data, this.state.addinput];

    this.setState({ addinput: "" });
    ReactDOM.render(<div>{data + ','}</div>, document.getElementById("data"));

  } 
  public deleteinput = () => {

    data.map((alldata: any[], index: number) => {
      if (alldata == this.state.deleteinput) {
        data.splice(index, 1);
        this.setState({ deleteinput: "" });

      } 
    });
    ReactDOM.render(<div>{data + ','}</div>, document.getElementById("data"));

  } 

  public findinput = () => {

    if (data.includes(this.state.findinput)) {
      this.setState({ findinput: "Yess" });
      ReactDOM.render(<div>Yess</div>, document.getElementById("data"));
    }
    else {
      this.setState({ findinput: "No" });
      ReactDOM.render(<div>No</div>, document.getElementById("data"));
    } 

 } 

  public render(): React.ReactElement<IShoppingCartProps> {
    return (
      <div>
        {/* <div className={styles.shoppingCart}> */}
        {/* <div>
          <h1>Shopping Cart</h1>
          <div><input type="text" value={this.state.addinput} id='addinput' onChange={this.onChangehandler} ></input>
            <button onClick={this.addinput} >Add Value</button></div>
        </div>
        <div>
          <div><input type="text" value={this.state.deleteinput} id='deleteinput' onChange={this.onChangehandler} ></input>
            <button onClick={this.deleteinput}  >Delete Value</button></div>
        </div>
        <div>
          <div><input type="text" id='findinput' onChange={this.onChangehandler} ></input>
            <button onClick={this.findinput}  >Find Value</button></div>
        </div>
        <div id='data'>
        </div> */}
        <Shoppingcarthooks />


        {/* </div> */}

      </div>

    );
  } 
} 
