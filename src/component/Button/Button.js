import React from "react";

const Button = ({ linkFunction, user: { id, name } }) => {
    return (
        <h2 className="text-2xl my-4">
            <button onClick={() => linkFunction(id)}>{name}</button>
        </h2>
    );
};

export default Button;
