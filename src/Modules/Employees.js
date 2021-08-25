import React, { Component } from 'react'

export class Employees extends Component {
    
  

    constructor(){
        super();
     this.state = { 
            employees : [] ,
        };

        

        this.updateEmployees = this.updateEmployees.bind(this);
    }
    
    componentDidMount=()=>{
        fetch( 'https://amol-apis.herokuapp.com/employee')
        .then( res => res.json() )
        .then( res => this.setState({employees:res}) )
        .catch( err => console.log(err));
    }

    updateEmployees(emps){
        console.log("EMPLOYEES INITIALIZING")
        this.setState({employees:emps});
        
        console.log("EMPLOYEES INITIALIZED")
    }

    submitForm=()=> {
        console.log(this.refs.ename.value);
        console.log(this.refs.salarypa.value);

        let dept = {deptid:4,department:"IT"}
        let empl = {ename:this.refs.ename.value, salarypa:this.refs.salarypa.value, department:dept }
 
        let empJson = JSON.stringify(empl);
        console.log(empJson);

        fetch('https://amol-apis.herokuapp.com/employee', 
                { 
                    method:"POST", 
                    headers:{ "Content-Type":"application/json;charset=utf-8" },
                    body:empJson
                 } )
        .then( res => console.log(res) )
        .catch( err => console.log(err))
    }

    render() {
        return (
            <div>

                
               <div style={{ marginBottom:40 }}>
               <h3>ADD EMPLOYEE</h3>
                    <input type="text"  ref="ename"  placeholder="Employee Name"/>
                    <input type="number"  ref="salarypa"  placeholder="Salary per Annum"/>
                    <button onClick={ this.submitForm }> ADD TO LIST </button>
                
               </div>

               <h3>Employee List</h3>
                
                { this.state.employees.length===0 ? <h4> <i> 'LOADING DATA....' </i> </h4> :
                this.state.employees.map( (emp,i) => 
                 <div key={i}> 
                    <h3>EMP-ID : {emp.empid},  EMP-NAME : {emp.ename}, SALARY : {emp.salarypa}  , <a href={'/Employee/'+emp.empid}>EDIT</a></h3>
                </div>

                 ) }
            </div>
        )
    }
}

export default Employees
