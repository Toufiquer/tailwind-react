import React from "react";
import AboutPerson from "../AboutPerson/AboutPerson";

const About = () => {
    let aboutPersons = [];
    for (let i = 1; i <= 5; i++) {
        let item = {
            id: i,
            name: "Person " + i,
            link: i,
        };
        aboutPersons.push(item);
    }
    return (
        <div>
            <section className="flex items-center justify-center h-[100vh] w-full">
                <h2 className="text-6xl text-yellow-50"> About</h2>
                {aboutPersons.map(aboutPerson => (
                    <AboutPerson
                        key={aboutPerson.id}
                        aboutPerson={aboutPerson}
                    ></AboutPerson>
                ))}
            </section>
        </div>
    );
};

export default About;
