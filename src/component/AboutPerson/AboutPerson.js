import React from "react";
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const AboutPerson = ({ aboutPerson, aboutPerson: { name, id } }) => {
    const navigate = useNavigate();
    let viewAction = id => {
        navigate(`./${id}`);
    };
    return (
        <div>
            <h2>{name}</h2>
            <CustomLink
                className="px-2 hover:text-cyan-500 my-2"
                to={`./${id}`}
                route={aboutPerson}
                id={id}
            ></CustomLink>
            <button className="my-6" onClick={() => viewAction(id)}>
                {name}
            </button>
        </div>
    );
};

export default AboutPerson;
