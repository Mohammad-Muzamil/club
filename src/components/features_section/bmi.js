import React from 'react';
import "../../assets/css/bmi.css"
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Throw_Error } from '../../helpers/NotifiyToasters';

const BMICalculator = () => {
    const isMobileactive = useMediaQuery({ maxWidth:767 });
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmiResult, setBMIResult] = useState("Calculate BMI");
    
    const calculateBMI = () => {
        const validAge = age > 3;
        const validWeight = weight > 0 && /^[0-9]+(\.[0-9]*)?$/.test(weight);
        const validHeight = heightFeet > 0 && /^[0-9]+(\.[0-9]*)?$/.test(heightFeet);
        if (validAge && validWeight && validHeight) {
          
            const totalHeightMeters = heightFeet * 0.3048; // Convert inches to meters
            const bmi = (weight / (totalHeightMeters ** 2)).toFixed(2);
            
            
            let bmiCategory = "";
            if (age >= 3) {
                if (bmi < 18.5) {
                    bmiCategory = "Underweight";
                } else if ( bmi < 25) {
                    bmiCategory = "Normal weight";
                } else if (bmi < 30) {
                    bmiCategory = "Overweight";
                } else {
                    bmiCategory = "Obese";
                }
                setBMIResult(`${bmiCategory} ${bmi} `);
                
            } else {
                setBMIResult("Calculate BMI");
            }
    
        } else {
            setBMIResult("Calculate BMI");
            Throw_Error("Please Enter Correct Data.")
              // ADDtoast for error 
        }
    };
    
    return (
        <div className="container-fluid position-relative bmi my-5">
            <div className="container">
                <div className="row px-3 align-items-center">
                    <div className="col-md-6">
                        <div className="pr-md-3 d-none d-md-block">
                            <h6 className="display-4 text-white font-weight-bold mb-4 mt-5" style={{fontFamily:"Ethnocentric"}}>What's BMI?</h6>
                            <p className="m-0 text-white">
                                BMI stands for Body Mass Index. It is a numerical value calculated from a person's weight and height, used to categorize their body composition and estimate whether their weight is considered underweight, normal, overweight, or obese.</p>
                        </div>
                    </div>
                    <div className="col-md-6  py-5" style={{ backgroundColor: '#111111' }}>
                        <div className="py-5 px-3 w-100">
                            {!isMobileactive && <h3 className="mb-4 text-white" style={{fontFamily:"Ethnocentric"}}>{bmiResult}</h3>}
                            {isMobileactive && bmiResult!="Calculate BMI"&&<h5 className="mb-4 text-white" style={{fontFamily:"Ethnocentric"}}>{bmiResult}</h5>}
                            {isMobileactive && bmiResult=="Calculate BMI" && <h4 className="mb-4 text-white" style={{fontFamily:"Ethnocentric"}}>{bmiResult}</h4>}

                            <div className="form-row w-100">
                                <input type="number" className="input1 " placeholder="  Weight (KG)"onChange={(e) => setWeight(e.target.value)} />

                                <input type="number" className="input1 " placeholder="  Height (Feet)"  onChange={(e) => setHeightFeet(e.target.value)}/>
                            </div>
                            <div className="form-row w-100">
                                <input type="number" className="input1" placeholder="  Age"  onChange={(e) => setAge(e.target.value)}/>
                                <select className="select1   ">
                                    <option selected value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-row mt-3 w-100">
                                <div className="btn-cal">
                                    <button  className="btn_lr  w-100 border-light text-white text-center" onClick={calculateBMI}>Calculate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;
