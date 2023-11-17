// import React from 'react'
import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const[active,setActive]=useState(false)
    const[open,setOpen]=useState(false)

const {pathname}=useLocation()

    const isActive=()=>{
        window.scrollY>0 ?setActive(true):setActive(false)           //if the page is scrolled,iit will set state to true thus showing active navbar 
    }
useEffect(()=>{                //when page loads the event is active
    window.addEventListener("scroll",isActive)
    return ()=>{ window.removeEventListener("scroll",isActive)}
},[])


//user
const currentUser={
    _id:1,
    username:"neha",
    isSeller:true    //if the user is seller they have access to gigs


}

  return (
    <>
    <div className={(active || pathname !='/' )? "navbar active":"navbar"}>
    <div className="container">
    <div className="logo">
        <Link to='/' className="link">
        <span className="text">fiverr</span>
        <span className="dot">.</span>
        </Link>
    </div>
    <div className="links">
        <span>Fiverr Business</span>
        <span>Explore</span>
        <span>English</span>
        <span>Sign In</span>
{/* dont show if current user seller */}
{!currentUser?.isSeller && <span>Become a Seller</span>} 
{/* dont show if current user exists instead show its name  */}
{!currentUser && <button >Join</button>}

{currentUser && (
    <div className="user" onClick={()=>setOpen(!open)}>
        <span>{currentUser?.username}</span>
        {open &&(
    <div className="options">
        {currentUser?.isSeller &&(
            <>
            <Link to='/mygigs' className="link">Gigs</Link>
            <Link to='/add' className="link">Add new Gig</Link>
            </>
        )}
        <Link to='/orders' className="link">Orders</Link>
        <Link to='/messages' className="link">Messages</Link>
        <Link to='' className="link">LogOut</Link>
    </div>
 ) }
    </div>
)}
    </div>
    </div>
    
    {(active || pathname !='/') &&
    <>
        <hr/>
    <div className="menu">
        <span>test1</span>
        <span>test2</span>
    </div>
    </>
    }
    </div>
    
    </>
  )
}

export default Navbar