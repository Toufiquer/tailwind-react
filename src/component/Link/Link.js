import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
const Link = ({ route, route: { link } }) => {
    const navigate = useNavigate();
    let routes = () => {
        const path = `${link}`;
        navigate(path);
    };

    return (
        <li>
            {/* Basic 01 */}
            {/* <button className="p-2 hover:text-cyan-500" onClick={routes}>
                {name}
            </button> */}

            {/* Basic 02 */}
            {/* <NavLink
                // style={{ textDecoration: match ? "underline" : "none" }}
                className="p-2 hover:text-cyan-500"
                to={link}
            >
                {name}
            </NavLink> */}

            {/* Basic 03 */}
            <CustomLink
                className="px-2 hover:text-cyan-500 my-2"
                to={link}
                route={route}
            ></CustomLink>
        </li>
    );
};

export default Link;
