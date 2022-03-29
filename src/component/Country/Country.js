import React, { useEffect } from "react";
import { useState } from "react";

const Country = () => {
    const [user, SetUser] = useState();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => SetUser(data));
    }, []);
    return <div>{user.map(user => user)}</div>;
};

export default Country;
