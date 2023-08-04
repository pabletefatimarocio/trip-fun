import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";




class Navbar extends Component {
    state = {clicked: false};

    handleClick = ()=> {
      this.setState({clicked: !this.state.clicked})
    }
    render() {
      return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo" >TripFun</h1>

          <div className="menu-icons">
           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          
          </div>

          <ul className="nav-menu"  onClick={this.handleClick}>
            {
              MenuItems.map((item,index) =>{
                return(
                <li key={index}>
                  <a className={item.cName} href="/">
                  <i className={item.icon}></i>{item.title}
                  </a>
                </li>
              
                )
              })
            }
            <button>Sign Up</button>
          </ul>
        </nav>
      );
    }
  }
  
  export default Navbar;