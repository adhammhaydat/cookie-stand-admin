import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import useResource from "../hooks/useResource"
import { useAuth } from "../contexts/auth";
export default function Overview() {
    const {logout} = useAuth()
    const {resources,deleteResource} = useResource()
    let i =1
    return (
        <div className = "flex flex-col h-screen bg-green-100">
            <Header logout={logout}/>
        <div className = "flex flex-col h-screen bg-green-100 my-28">
            <div>
                <h1 className = "p-6 text-2xl font-bold txt-black ">
                    Locations:
                </h1>
            </div>
            <div className="flex flex-col flex-start ">
            {resources && resources.map((ele,idx)=>{
                return (<ul>
                    <div key={idx}>
                    <li className="flex justify-start p-2 ml-8 order" key={idx+1}>
                    <span className="mr-2 font-bold">{i++}. </span> {ele.location}<span onClick={(e)=>{deleteResource(ele.id)}}><svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 ml-2 cursor-pointer'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        />
                      </svg></span>
                    </li></div></ul>)
            })}
            </div>
        </div>
        <Footer />
        </div>
    )
}
