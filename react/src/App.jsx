import { useState } from 'react'
import './index.css'
import './App.css'
import { Arrow,Bell,Bolt,Caret,Chevron,Cog,Messenger,Plus } from "./images";

function App() {
  return (
    <Navbar>
      <NavItem icon={ <Plus/>} />
      <NavItem icon={ <Bell/>} />
      <NavItem icon={<Messenger/>} />

      <NavItem icon={<Caret/>}>
      <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu(){
  function DropdownItem(props) {
    return(
    <a href="#"className='menu-item'>
      <span className='icon-button'>{props.leftIcon}</span>
      {props.children}
      <span className='icon-button'>{props.rightIcon}</span>
    </a>
    )
  }
  return(
    <div className='dropdown'>
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={ <Cog></Cog> }rightIcon={ <Chevron></Chevron> }></DropdownItem>
    </div>
  )
}

function Navbar(props) {
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children }</ul>
    </nav>
  )
}

function NavItem(props) {
  const [open,setOpen] =useState(false);
  return (
    <li className='nav-item'>
      <a href="#" className='icon-button' onClick={(e) => {e.preventDefault();setOpen(!open);}}>
        { props.icon }
      </a>

      {open && props.children}
    </li>
  );
}
export default App
