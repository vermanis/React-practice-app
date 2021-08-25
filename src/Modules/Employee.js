import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const Employee= () => {

    const [employee, setEmployee] = useState({});
    const{ empid } = useParams('empid')

    console.log(empid)
    useEffect(() => {
        
        fetch( 'https://amol-apis.herokuapp.com/employee/'+empid)
        .then( res => res.json() )
        .then( res => setEmployee(res) )
        .catch( err => console.log(err));


    }, [])


    

    return (
        <div>
           
            <h2>Employee Name : {employee.ename}</h2> 
            <h4>Salary p.a. : {employee.salarypa} </h4>
        </div>
    )
}

export default Employee
