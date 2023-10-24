import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown,faAngleUp, faCircleDot, faCircle,
   faPersonChalkboard,faBookOpen, faCircleExclamation, faRemove, faTrash, faDollar, faPerson, faAdjust, faIdBadge, faUserCheck, faLock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import TruncateText from '../../helpers/TruncatedText';
import test_img from "../../assets/test_img.jpg"
import dashboardlogo from "../../assets/img/dashboard_logo.png"

const SideBarDropDown=(prop)=>{
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [iconname, seticonname] = useState(faAngleDown);
    const [items, setitems]=useState(prop.list_of_subcategories)
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
      if (isDropdownOpen==true){
          seticonname(faAngleDown)
      }
      else{
        seticonname(faAngleUp)
      }
    };
    return (
      <div className="nav-item dropdown mt-4">
      <p className="nav-link " style={{cursor:"pointer"}}><FontAwesomeIcon icon={prop.icon} style={{paddingRight:"10px", fontSize:"15px"}} /> {prop.name}<FontAwesomeIcon icon={iconname} style={{ paddingLeft:"20px"}} onClick={toggleDropdown} /></p>
      {isDropdownOpen &&
            <div className=" bg-transparent border-0">
              {prop.list_of_subcategories.map((obj, index) => (
                <Link key={index} to={obj.href} className="dropdown-item mt-1 pl-5 d-flex"><FontAwesomeIcon icon={faCircle} style={{paddingRight:"10px", marginTop:"9px",fontSize:"5px"}} />{obj.text}</Link>
              ))}
            </div>
      }
    </div>
    );
}
const StudentSideNavBar=(prop)=>{
    const listof_profile=[{ href: '/student-profile', text: 'Profile' },
      { href: '/student-change-password', text: 'Change Password' },]
    const listof_player=[{ href: '/student-attendance', text: 'Attendance' },
      { href: '/student-fight-result', text: 'Fight Result' }
      ]
    const listof_reading=[{ href: '/student-kumite', text: 'Kumite' },
      { href: '/student-kata', text: 'Kata' },]
      return(
        <div className="sidebar pe-4 pb-3">
                <nav className="s-nav navbar ">
                    <div className='d-flex' > 
                      <img src={dashboardlogo}  style={{width:"50px", height:"50px"}}/>
                      <h1 className="text-primary mt-2" style={{fontStyle:"italic", fontWeight:"Bold"}}>
                      KARATE</h1>
                    </div>
                    <div className="d-flex align-items-center ms-4 mb-4 mt-5">
                    <div className="position-relative" style={{marginLeft:"-20px"}}>
                   
                        <img className="rounded-circle" src={ `//${window.location.host}/media/` +prop.image_path} alt="" style={{ width: '40px', height: '40px' }} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h5 className="mb-0">{TruncateText(prop.name,8)}</h5>
                        <span style={{color:"gray"}}>{prop.level}</span>
                    </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <Link to={"/student"} className="nav-item nav-link active"><FontAwesomeIcon icon={faHome} style={{paddingRight:"10px"}}/>Dashboard</Link>
                        {/* <SideBarDropDown icon={faUser} name="Profile" list_of_subcategories={listof_profile} /> */}
                        <Link to={"/student-profile"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faUser} style={{paddingRight:"10px"}}/>Profile</Link>
                        <Link to={"/student-change-password"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faLock} style={{paddingRight:"10px"}}/>Change Password</Link>
                        <Link to={"/student-attendance"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faUserCheck} style={{paddingRight:"10px"}}/>Attendance</Link>
                        <Link to={"/student-fight-result"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faPersonChalkboard} style={{paddingRight:"10px"}}/>Fight Results</Link>

                        <Link to={"/student-fees"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faMoneyBill} style={{paddingRight:"10px"}}/>Fees</Link>
                        <SideBarDropDown icon={faBookOpen} name="Learning" list_of_subcategories={listof_reading} />
                    </div>
                </nav>
          </div>
      )
}

export default StudentSideNavBar;