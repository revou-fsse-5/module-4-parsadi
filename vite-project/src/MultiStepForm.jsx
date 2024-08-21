import React from 'react';
import { useState } from 'react'
import * as Yup from 'Yup';



const MultiStepForm = () => {
    const Step1 = ({ formData, handleChange, errors }) => (
        <div className="space-y-4">
            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="fullName">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="doB">
                    Birthdate
                </label>
                <input
                    type="date"
                    id="doB"
                    name="doB"
                    value={formData.doB}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.doB && <div className="text-red-500 text-sm">{errors.doB}</div>}
            </div>
        </div>
    );

    const Step2 = ({ formData, handleChange, errors }) => (
        <div className="space-y-4">
            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="streetAdress">
                    Street Address
                </label>
                <input
                    type="text"
                    id="streetAdress"
                    name="streetAdress"
                    value={formData.streetAdress}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.streetAdress && <div className="text-red-500 text-sm">{errors.streetAdress}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="city">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.city && <div className="text-red-500 text-sm">{errors.city}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="state">
                    State
                </label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.state && <div className="text-red-500 text-sm">{errors.state}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="zipCode">
                    Zipcode
                </label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.zipCode && <div className="text-red-500 text-sm">{errors.zipCode}</div>}
            </div>
        </div>
    );

    const Step3 = ({ formData, handleChange, errors }) => (
        <div className="space-y-4">
            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="userName">
                    Username
                </label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.userName && <div className="text-red-500 text-sm">{errors.userName}</div>}
            </div>

            <div>
                <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
            </div>
        </div>
    );

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        doB: '',
        streetAdress: '',
        city: '',
        state: '',
        zipCode: '',
        userName: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Required"),
        email: Yup.string().required("Required").email("Invalid email"),
        doB: Yup.string().required("Required"),
        streetAdress: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zipCode: Yup.string().required("Required"),
        userName: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log('Form submitted', formData);
        } catch (error) {
            const newErrors = {};
            error.inner.forEach(err => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Step {step} of 3</h2>
                <div className="space-y-6">
                    {step === 1 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
                    {step === 2 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
                    {step === 3 && <Step3 formData={formData} handleChange={handleChange} errors={errors} />}
                </div>
                <div className="flex justify-between mt-6">
                    {step > 1 && (
                        <button
                            className="bg-gray-300 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-400"
                            type="button"
                            onClick={() => setStep(step - 1)}
                        >
                            Back
                        </button>
                    )}
                    {step < 3 && (
                        <button
                            className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
                            type="button"
                            onClick={() => setStep(step + 1)}
                        >
                            Next
                        </button>
                    )}
                    {step === 3 && (
                        <button
                            className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600"
                            type="submit"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;