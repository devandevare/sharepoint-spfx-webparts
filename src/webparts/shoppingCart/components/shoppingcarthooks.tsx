import * as React from 'react';
import styles from './ShoppingCart.module.scss';
import { IShoppingCartProps } from './IShoppingCartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Shoppingcartstates } from './shoppingStates';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

let data = [];
export default function Shoppingcarthooks() {

    const [shoppingstate, updateshoppingstate] = useState([]);
    const [deletestate, updatedeletestate] = useState("");
    const [findstate, updatefindstate] = useState("");
    const [addtext, updatetext] = useState("");

    function onChangehandler(input: any) {
        if (input.target.id == "addinput") {

            updatetext(input.target.value);
        }  
        if (input.target.id == "deleteinput") {

            updatedeletestate(input.target.value);

        } 
        if (input.target.id == "findinput") {

            updatefindstate(input.target.value);
        } 
    } 
    function addinput() {
        data = [...data, addtext];
        console.log(data);
        ReactDOM.render(<div>{data + ','}</div>, document.getElementById("data"));
        updatetext("");
    } 
    function deleteinput() {
        data.map((row, index: number) => {
            if (row == deletestate) {
                data.splice(index, 1);
            } 
        });
        ReactDOM.render(<div>{data + ','}</div>, document.getElementById("data"));

    } 

    function findinput() {
        if (data.includes(findstate)) {
            updatefindstate("Yess");
            ReactDOM.render(<div>Yess</div>, document.getElementById("data"));
        }
        else {
            updatefindstate("Noo");
            ReactDOM.render(<div>No</div>, document.getElementById("data"));
        } 

    } 
    return (
        <div className={styles.shoppingCart}>
            <div>
                <h1>Shopping Cart</h1>
                <div><input type="text" value={addtext} id='addinput' onChange={onChangehandler} ></input>
                    <button onClick={addinput} >Add Value</button></div>
            </div>
            <div>
                <div><input type="text" id='deleteinput' onChange={onChangehandler} ></input>
                    <button onClick={deleteinput}  >Delete Value</button></div>
            </div>
            <div>
                <div><input type="text" id='findinput' onChange={onChangehandler} ></input>
                    <button onClick={findinput}  >Find Value</button></div>
            </div>
            <div id='data'>
            </div>


        </div>

    );
} 