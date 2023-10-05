import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding,faUser, faAngleDown,faAngleUp, faCircleDot, faCircle,
   faPersonChalkboard,faBookOpen, faCircleExclamation, faRemove, faTrash, faChalkboardTeacher, faImages, faDollar, faRupee } from '@fortawesome/free-solid-svg-icons';
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
const AdminSideNavBar=(prop)=>{
    const listof_profile=[{ href: '/admin-profile', text: 'Profile' },
      { href: '/admin-change-password', text: 'Change Password' },]
    const listof_player=[{ href: '/admin-attendance', text: 'Attendance' },
      { href: '/admin-fight-result', text: 'Fight Result' },]
    const listof_reading=[{ href: '/admin-kumite', text: 'Kumite' },
      { href: '/admin-kata', text: 'Kata' },]
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
                        <span style={{color:"gray"}}>ADMIN</span>
                    </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <Link to={"/admin"} className="nav-item nav-link active"><FontAwesomeIcon icon={faHome} style={{paddingRight:"10px"}}/>Dashboard</Link>
                        <SideBarDropDown icon={faUser} name="Profile" list_of_subcategories={listof_profile} />
                        <Link to={"/admin-coaches"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faChalkboardTeacher} style={{paddingRight:"10px"}}/>Coach</Link>
                        <Link to={"/admin-branches"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faBuilding} style={{paddingRight:"10px"}}/>Branches</Link>
                        <Link to={"/admin-gallery"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faImages} style={{paddingRight:"10px"}}/>Gallery</Link>
                        <Link to={"/admin-fees"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faDollar} style={{paddingRight:"10px"}}/>Fees</Link>
                        <SideBarDropDown icon={faPersonChalkboard} name="Players" list_of_subcategories={listof_player} />
                        <Link to={"/admin-approval"} className="nav-item nav-link mt-4 "><FontAwesomeIcon icon={faCircleExclamation} style={{paddingRight:"10px"}}/>Approvals</Link>
                        <Link to={"/admin-delete-account"} className="nav-item nav-link  mt-4"><FontAwesomeIcon icon={faTrash} style={{paddingRight:"10px"}}/>Delete Account</Link>
                        <SideBarDropDown icon={faBookOpen} name="Learning" list_of_subcategories={listof_reading} />
                    </div>
                </nav>
          </div>
      )
}

export default AdminSideNavBar;