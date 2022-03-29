import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import axios from "axios";
import Card from "../Card/Card";
const Shop = () => {
    const [users, SetUser] = useState([]);
    const [item, SetItem] = useState([]);
    let navigate = useNavigate();
    let linkNavigate = id => {
        navigate(`/shop/${id}`);
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(data => {
                console.log(data.data);
                SetItem([data.data]);
            });
    };
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => SetUser(data));
    }, []);

    return (
        <div className="grid grid-cols-[400px_minmax(900px,_1fr)]  min-h-screen items-stretch">
            <section className=" bg-slate-200 relative">
                <div className="sticky top-0">
                    {users.map(user => (
                        <Button
                            key={user.id}
                            linkFunction={linkNavigate}
                            user={user}
                        ></Button>
                    ))}
                </div>
            </section>
            <section className="p-6">
                {item.map(item => (
                    <Card key={item.id} item={item}></Card>
                ))}
            </section>
        </div>
    );
};

export default Shop;
