import React from "react";
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const AboutPerson = ({ aboutPerson, aboutPerson: { link, name, id } }) => {
    const navigate = useNavigate();
    let viewAction = id => {
        navigate(`./${id}`);
    };
    return (
        <div>
            <h2>{name}</h2>
            <CustomLink
                className="px-2 hover:text-cyan-500 my-2"
                to={link + id}
                route={aboutPerson}
            ></CustomLink>
            <button onClick={() => viewAction(id)}>{name}</button>
        </div>
    );
};

export default AboutPerson;
