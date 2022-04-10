import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Works = () => {
    return (
        <div>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">
                    <Link to={"/hooks"}>Hooks</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={"/music"}>Как музыка может улучшить качество нашей жизни?</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    {/*<Link to={"/hooks"}>Hooks</Link>*/}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Works;