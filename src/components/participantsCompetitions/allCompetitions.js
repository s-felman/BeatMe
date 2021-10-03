import React from 'react';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./allCompetitions.css";
import { flexbox } from '@material-ui/system';
import switzerland from "./pictures/switzerland.png"
import cycle from "./pictures/cycling.png"
import laboratory from "./pictures/laboratory.png"
// import birdZoo from "./pictures/birdZoo.png"
import books from "./pictures/books.png"
import notebook from "./pictures/notebook.png"
import { Link } from '@material-ui/core';
import trivia from '../competitionsParticipant/trivia';

export default function allCompetitions() {
    const list=[
        {image: [laboratory], header: "אתגרים במדעים", details: "תחרות חידות", nextPage:"/trivia"},
        {image:[cycle], header: "אימון כושר", details: "תחרות משימה יומית", nextPage:""},
        {image:[books], header: "הכנה לבגרות", details: "תחרות משימה יומית"},
        {image: [notebook], header: "כתיבת מאמר", details: "תחרות חד פעמית"},
        {image:[switzerland], header: "מסביב לעולם", details: "תחרות הצבעות"},
        // {image:[birdZoo], header: "חי צומח דומם", details: "תחרות הצבעות"},
    ]

         const mymap = list
    .map(p => {
        return (
        <div p={1}>       
        <Card style={{ width: '18rem' }} className="allCompetitions-box">
    <Card.Img variant="allCompetitions-top" src={p.image} />
    <Card.Body>
        <Link to={p.nextPage}>
        <Card.Title className="allCompetitions-title">{p.header}</Card.Title></Link>
        <Card.Text className="allCompetitions-details">
        {p.details}
        </Card.Text>
        
    </Card.Body>
    </Card>
        </div>
        );

            })
        
    return (
        <div>
        <Box 
        //   justifyContent="center"
            display="flex"
            flexWrap="wrap"
            p={1}
            m={1}>
            {mymap}
        </Box>
        </div>
    );
}
//https://material-ui.com/system/flexbox/#flex-shrink
//https://react-bootstrap.github.io/components/cards/


