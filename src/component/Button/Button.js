import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Button = ({ linkFunction, user: { id, name } }) => {
    let resolved = useResolvedPath(`/shop/${id}`);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <h2 className="text-2xl my-4">
            <Link
                onClick={() => linkFunction(id)}
                style={{
                    textDecoration: match ? "underline" : "none",
                    padding: "0 20px",
                }}
                to={id}
            >
                {name}
            </Link>
        </h2>
    );
};

export default Button;
