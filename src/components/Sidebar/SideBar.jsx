import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import {  BsFillGridFill } from "react-icons/bs";
import { BiCollection } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    icon: <FaHome size={22}/>,
  },
  {
    path: "/users",
    icon: <BsFillGridFill size={22}/>,
  },
  {
    path: "/folders",
    icon: <BiCollection size={22}/>,
  },
  {
    path: "/faq",
    icon: <AiFillQuestionCircle size={22}/>,
  },
  {
    path: "/edit",
    icon: <FiEdit size={22} />,
  },
  {
    path: "/logout",
    icon: <IoLogOut size={22}/>,
  },
];

const SideBar = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div
          style={{
            width: "75px"
            }}
          className={`sidebar`}
        >
          <div className="top_section"></div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    route={route}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active">
                  <div className="icon">{route.icon}</div>
                </NavLink>
              );
            })}
          </section>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;