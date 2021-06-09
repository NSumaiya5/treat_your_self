import React from 'react';

const Content = () => {
    return (
        <div className=" grid grid-rows-2 gap-4 md:grid-flow-col">
        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80s"  className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Margherita</h2>
                <p className="mb-2">Lorem ipsum dolor sit.</p>
                <span>$30</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=433&q=80" alt="mutton" className="h-full w-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Carbonara</h2>
                <p className="mb-2">Lorem, ipsum dolor.</p>
                <span>$8</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="h-full  w-full  rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Breakfast Platter</h2>
                <p className="mb-2">Lorem ipsum dolor sit!</p>
                <span>$10</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Shrimp Platter</h2>
                <p className="mb-2">Lorem ipsum dolor sit amet</p>
                <span>$13</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Mutton Curry</h2>
                <p className="mb-2">Lorem ipsum, dolor sit </p>
                <span>$5</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Healthy Breakfast </h2>
                <p className="mb-2">Lorem, ipsum.</p>
                <span>$25</span>
            </div>
        </div>

        </div>
    );
};


export default Content;