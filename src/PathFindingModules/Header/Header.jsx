import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className="main_header_container">
            <Link className="main_link_logo" to="/">
                <div className="main_logo">Hello</div>
            </Link>
            {/* <div className="search_bar_div">
                <input className="search_bar"/>
            </div> */}
            <div className="main_title_container">
                <div className="main_title_div">
                    <label className="main_title">Welcome to Personalized Quizzes</label>
                </div>
            </div>
            <div className="Main_login_btn_div">
                <Link className="main_signout_btn" to="/">                  
                        <button className ="main_signout_btn_btn" onClick="./Login">Sign Out</button>               
                </Link> 
            </div> 
        </div>
    )
}

export default Header
