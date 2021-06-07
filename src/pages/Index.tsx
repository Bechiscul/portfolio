import React from 'react'

import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"

const Index = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-auto flex-grow flex flex-col">
                <Nav />
                <div className="flex-grow flex items-center justify-center">
                    <div>
                        <p className="font-roboto text-gray-500 uppercase tracking-wide">Developer & Student</p>
                        <h1 className="text-5xl font-roboto">Hello! I'm Sebastian.</h1>
                        <p className="mt-4 font-roboto">I enjoy spending my time writing game engines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index

