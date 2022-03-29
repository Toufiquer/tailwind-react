import React from "react";
import { useParams } from "react-router-dom";

const AboutDetails = () => {
    const params = useParams();
    return <div>This is details {params.id}</div>;
};

export default AboutDetails;
