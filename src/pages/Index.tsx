import React from 'react'

import Sidebar from "../components/Sidebar"

const Index = () => {
    return (
        <div className="grid grid-cols-12">
            <Sidebar />
            <div className="col-auto">
                <p>Container</p>
            </div>
        </div>
    )
}

export default Index

