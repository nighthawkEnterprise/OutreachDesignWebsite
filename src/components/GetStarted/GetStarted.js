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
            password: "",
            // phone: "",
            // error: ""

            /*Original design had two more inputs and an image slider, left original code incase 
            on review decide to return to original concept*/
        }
    }
    handleChange = (name) => (event) =>{
        this.setState({[name]: event.target.value});
      
    }
    handleSubmit= (e) => {
        e.preventDefault()
        const data = this.state
        
    }
    submitForm = (e) =>{
        e.target.reset();
    }
    render() {
        const {name, email, password /*city, phone*/} = this.state
        
        return (
            <div className="qoute-contianer">
                <div className="form-qoute">
                    <form className="qoute-form" onSubmit={this.handleSubmit}>
                        <div id="outreachLogo-form">
                                <img src="/img/outreachDesignLogo.PNG" height="45px" />
                                <div className="logoText">Outreach Design</div>
                        </div>
                            <br />
                        <h1 className="form-intro">Sign up now for a free Consultation</h1>
                            <br />
                            <br /> 
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

                        <lable className ="" className="form-control"> Password </lable>
                            <input 
                                onChange = {this.handleChange("phone")}
                                type="password" 
                                className="form-control"
                                value={password/*phone*/}
                             />

                        <p className="password-req">(8-character minimum, case sensitive)</p>


                        {/* <lable className ="city" className="form-control"> City </lable> */}
                            {/* <input  */}
                                {/* onChange = {this.handleChange("city")} */}
                                {/* type="city"  */}
                                {/* className="form-control" */}
                                {/* value={city} */}
                            {/* /> */}
                         {/* <lable className ="city" name="comment" type="text"> Send us a brief message. </lable> */}
                         {/* <textarea className ="text"/> */}


                        <div className="btn-qoute">
                            <button onSubmit={this.submitForm} >Get Started</button>
                        </div>
                            <p>Already have an account? <a href="signin">Sign in</a></p>
                    </form>

                    {/* <div id="service-images">
                        <p >Service</p>
                    </div> */}
                    {/* <div className="service-images"> */}
                        {/* <Images slides={ImageSlider}/> */}
                    {/* </div> */}

                </div>
                    <div>
                        <Footer />
                    </div>
                
            </div>
        )
    }
}
