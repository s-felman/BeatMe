import React from 'react';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./flexBox.css";
import { flexbox } from '@material-ui/system';
import cake from "./pictures/cake.png"
import cycle from "./pictures/cycling.png"
import lab from "./pictures/laboratory.png"
import macaroons from "./pictures/macaroons.png"
import notebook from "./pictures/notebook.png"

export default function FlexWrap() {
    const list=[
        {image: [cycle], header: "אימון כושר", details: "הספק יומי של רכיבה"},
        {image:[cake], header: "הגשה קולינרית", details: "?מי העוגה המנצחת"},
        {image:[lab], header: "אתגרים במדע", details: "חידון מדעי ברמה גבוהה"},
         {image: [macaroons], header: "צבע וטעם", details: "יצירת בר משותף בעבודת צוות מרחוק"},
         {image:[notebook], header: "כתיבת מאמר", details: "כתיבת מאמרים עד לתאריך 03.08"},]

         const mymap = list
    .map(p => {
        return (
     <div p={1}>       
     <Card style={{ width: '18rem' }} className="box">
  <Card.Img variant="top" src={p.image} />
  <Card.Body>
     <Card.Title className="title">{p.header}</Card.Title>
    <Card.Text className="details1">
      {p.details}
    </Card.Text>
    <button variant="primary" className="enter">כניסה</button>
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


