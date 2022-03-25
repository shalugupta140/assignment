import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = {
  show: {
    opacity: 1,
    height: "auto"
  },
};

const SidebarMenu = ({ route, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="menu">
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
        </div>
      </div>{" "}
        {isMenuOpen && (
          <div
            variants={menu}
            initial="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute) => (
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <div className="link_text">{subRoute.name}</div>
                </NavLink>
            ))}
          </div>
        )}{" "}
    </>
  );
};

export default SidebarMenu;