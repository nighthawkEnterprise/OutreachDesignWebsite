import React, { Component } from 'react'
import {Images} from './Images'
import {ImageSlider} from './ServiceImg'
import Footer from "../Footer/Footer";
import './Getstarted.css';

export default class GetStarted extends Component {
    constructor(){
        super()
        this.state ={
            name:"",
            email: "",
            city: "",
            phone: "",
            error: ""
        }
    }
    handleChange = (name) => (event) =>{
        this.setState({[name]: event.target.value});
      
     

    }
    handleSubmit= (e) => {
        e.preventDefault()
        const data = this.state
        console.log(data)

    }
    submitForm = (e) =>{
        e.target.reset();
    }
    render() {
        const {name, email, city, phone} = this.state
        
        return (
            <div className="qoute-contianer">
                <div className="form-qoute">
                    <form className="qoute-form" onSubmit={this.handleSubmit}>
                        <lable className ="text" className="form-control"> Name </lable>
                            <input 
                                onChange = {this.handleChange("name")}
                                type="text" 
                                value={name}
                                className="form-control"
                            />
                        <lable className ="email" className="form-control"> Email </lable>
                            <input onChange = {this.handleChange("email")} 
                                type="email" 
                                className="form-control"
                                value={email}
                            />

                        <lable className ="" className="form-control"> Phone </lable>
                            <input 
                                onChange = {this.handleChange("phone")}
                                type="tel" 
                                className="form-control"
                                value={phone}
                             />

                   
                        <lable className ="city" className="form-control"> City </lable>
                            <input 
                                onChange = {this.handleChange("city")}
                                type="city" 
                                className="form-control"
                                value={city}
                            />
                         <lable className ="city" name="comment" type="text"> Send us a brief message. </lable>
                         <textarea className ="text"/>


                    <div className="btn-qoute">

                    <button onSubmit={this.submitForm} >Submit</button>
                    </div>
                        <p>Do you have account with us? <a href="signin">sign in</a></p>
                </form>
                {/* <div id="service-images">
                    <p >Service</p>
                </div> */}
                <div className="service-images">
                    <Images slides={ImageSlider}/>
                </div>
        </div>
            <div>
                <Footer />
            </div>
                
     </div>
        )
    }
}