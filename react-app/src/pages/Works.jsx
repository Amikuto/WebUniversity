import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Works = () => {
    return (
        <div>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">
                    <Link to={"/hooks"}>JS4.10 - Hooks</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={"/music"}>JS4.11 - Структура приложения</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    {/*<Link to={"/music"}>JS4.12 - Фильтр для магазина</Link>*/}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={"/todo"}>JS4.13 - TodoApplication</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={"/conditional-render"}>JS4.14 - Условный рендер</Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={"/function-class-components"}>JS4.15 - Компоненты, основанные на классах</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Works;