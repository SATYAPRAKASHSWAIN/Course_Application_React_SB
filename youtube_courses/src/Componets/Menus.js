import React from "react";
import { Link } from "react-router-dom";
import { List, ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return( 
<ListGroup>
    <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>AddCourse</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>ViewCourse</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
    <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>

</ListGroup>
    )
}
export default Menus;