export default function Validation (values){
    let errors ={}

        if (!values.username.trim()){
            errors.username ="Username required"
        }
        if(!values.email){
            errors.email = 'Email required'
        } else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Invalid email"

        }
        if(!values.address){
            errors.address = 'address is required'
        } 
        if(!values.zipcode){
            errors.zipcode = 'address is required'
        } 
    }
