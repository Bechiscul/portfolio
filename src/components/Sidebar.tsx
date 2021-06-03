import React from 'react'
import Portrait from "../images/portrait.jpg"
import {IconType} from "react-icons";
import {VscCallIncoming, VscGithubInverted, VscLocation, VscMail, VscTwitter} from "react-icons/vsc";

const IconLink = (props: {icon: IconType, link: string, target?: string}) => (
    <div className="h-14 w-14 rounded-full border-white border-2 flex justify-center items-center">
        <a href={props.link} target={props.target}>
            {<props.icon className="h-10 w-10" style={{"fill": "#ffffff"}} />}
        </a>
    </div>
)

const ContactItem = (props: {icon: IconType, name: string, className?: string}) => {
    let className = "h-8 w-8" + ((props.className) ? " " + props.className : "");

    return (<div className="flex space-x-2">
        {<props.icon className={className} style={{fill: '#ffffff'}} />}
        <p className="font-roboto font-base text-white">{props.name}</p>
    </div>);
}

const Sidebar = () => {
    return (
        <div className="sticky h-screen sm:w-64 lg:w-96 bg-sidebar-gray flex flex-col">
            <img src={Portrait} className="w-64 mt-20 mx-auto h-64 rounded-full object-cover" />
            <div className="w-56 mx-auto">
                <h1 className="text-center font-roboto text-2xl uppercase mt-4 text-white tracking-wider font-bold">Sebastian Bech Rasmussen</h1>
                <div className="flex space-x-8 justify-center items-center mt-4">
                    <IconLink icon={VscGithubInverted} target="blank_" link="https://github.com/bechiscul" />
                    <IconLink icon={VscTwitter} link="" />
                </div>
            </div>
            <div className="h-auto flex-grow flex flex-col justify-end mx-auto space-y-0.5">
                <ContactItem icon={VscCallIncoming} name="+45 71759910" />
                <ContactItem icon={VscMail} name="Sebberas@gmail.com"/>
                <ContactItem icon={VscLocation} name="Copenhagen, Denmark" className="mb-8"/>
            </div>
        </div>
    )
}

export default Sidebar
