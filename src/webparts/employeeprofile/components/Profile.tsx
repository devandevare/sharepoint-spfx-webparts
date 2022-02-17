import * as React from 'react';
import styles from './Employeeprofile.module.scss';
import Employeeprofile from './Employeeprofile';
import * as ReactDOM from 'react-dom';

export interface profileProps {
    ename: string;
    email: string;
    mobno: string;
    add: string;
}

let arr = [];
export class Profile extends React.Component<profileProps, {}>{
    constructor(props: profileProps) {
        super(props);
    }

    public show = () => {
        
        arr.push({ "name": this.props.ename, "email": this.props.email, "mobno": this.props.mobno, "add": this.props.add });
        console.log(arr);
        ReactDOM.render(<>
            {arr.map(dt =>
                <div className={styles.gridItem}>
                    <div className={styles['coverPhoto']}></div>
                    <div className={styles.photo}>
                        <img src={require('./picicon.jpg')} alt="test" />
                    </div>
                    <div className={styles.content}>
                        <h2 id='name' className={styles.name}>{dt.name}</h2>
                        
                        <h3><a>Mobile NO:-</a>{dt.mobno}</h3>
                        <h3>
                            {dt.email}
                        </h3>
                        <h3 className={styles.fullstack}>
                            {dt.add}</h3>
                        
                    </div>
                </div>)}
        </>, document.getElementById("data1"));
    }
    public render(): React.ReactElement<{}> {
        return (
            <div>
                <button onClick={this.show}>Show Data</button>
                <div  className={styles.div1}>
                    <div id="data1" className={styles.gridContainer}></div>

                </div>

            </div>


        );
    }
}