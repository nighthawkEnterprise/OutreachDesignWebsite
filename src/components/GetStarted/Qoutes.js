import { useState, useEffect} from "react";



function Qoutes (validation){
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validation(values));
    };
 
    return { handleChange, values , handleSubmit, errors};


}
export default Qoutes ;

