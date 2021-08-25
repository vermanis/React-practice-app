import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const Employee= () => {

    const [employee, setEmployee] = useState(null);
    const{ empid } = useParams('empid')

    console.log(empid)
    useEffect(() => {
        
        fetch( 'https://amol-apis.herokuapp.com/employee/'+empid)
        .then( res => res.json() )
        .then( res => setEmployee(res) )
        .catch( err => console.log(err));


    }, [employee])

    return (
        <div>
           
            <h1>Employee Name : {employee.ename}</h1> 
            
        </div>
    )
}

export default Employee
