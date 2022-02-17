interface Jsondemostates {

    studentdata1: any;

} 

interface Employeprofiles {
    emp: Employeestate;
    inputbox: number;
    editname: string;
    editDob: string;
    editaddress: string;
    Employeedetails:any;
} 
interface Employeestate {

    empname: string;
    empaddress: string;
    empDOB: string;
} 
interface Editemployeeprofiles {
    editname: string;
    editDob: string;
    editaddress: string;

} 

export { Jsondemostates, Employeestate, Employeprofiles, Editemployeeprofiles };