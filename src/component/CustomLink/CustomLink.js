import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, route }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textDecoration: match ? "underline" : "none",
                    padding: "0 20px",
                }}
                to={to}
            >
                {route.name}
            </Link>
        </div>
    );
}

export default CustomLink;
