import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center ">
            <h1 className="lg:text-6xl md:text-7xl sm-text-5xl text-3xl font-black mb-10">
                Treat Your Self </h1>
                <img className="mb-3" src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <Link className="py-3 px-6 bg-green-800 text-white rounded-full text-2xl haver:bg-green-700 transition duration-300 ease-in-out flex items-center animate-bounce mt-5">Order Now 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg></Link>
            <hr/>
        </div>
    );
};

export default Order;

