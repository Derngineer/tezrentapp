import React from 'react';
import Header from "../../components/Header";

const About = () => (
        <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
        <Header />
        <h1>About Machinery Rental App</h1>
        <p>
            Welcome to the Machinery Rental App! Our platform makes it easy to find, rent, and manage heavy machinery for your projects.
        </p>
        <ul>
            <li>Browse a wide selection of machinery</li>
            <li>Easy online booking and management</li>
            <li>Transparent pricing and rental terms</li>
            <li>Reliable customer support</li>
        </ul>
        <p>
            Whether you are a contractor, builder, or homeowner, our app helps you get the equipment you need, when you need it.
        </p>
    </div>
);

export default About;