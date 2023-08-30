import React from 'react';
import "../../assets/css/bmi.css"
import { useState } from 'react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmiResult, setBMIResult] = useState("Calculate your BMI");

    const calculateBMI = () => {
        if (weight && height) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            setBMIResult(bmi);
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
                            <h1 className="mb-4 text-white">{bmiResult}</h1>

                            <div className="form-row w-100">
                                <input type="number" className="input1 " placeholder="  Weight (KG)" />

                                <input type="number" className="input1 " placeholder="  Height (CM)" />
                            </div>
                            <div className="form-row w-100">
                                <input type="number" className="input1    " placeholder="  Age" />

                                <select className="select1   ">
                                    <option selected value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-row mt-3 w-100">
                                <div className="btn-cal">
                                    <input className="btn_lr  w-100 border-light text-white text-center"
                                        value="Calculate Now" />
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
