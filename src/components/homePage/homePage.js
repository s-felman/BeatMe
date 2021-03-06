import React,{useEffect, useState} from "react";
import NavBar from "../navBar/navBar";
import SlideShow from "../slideShow/slideShow";
import ShowList from "../displayList/showList";
import { Link } from 'react-router-dom';
import "./homePage.css";
import FlexWrap from "../slideShow/flexBox"
import {connect} from "react-redux";



const HomePage = (props) => {
    const [create, setCreate] = useState('/userlogin');
    const [path, setPath]= useState('/userLogin')
    //const [userName, setUserName]= useState("")

    useEffect(()=>{
      if((props.user).length!=0){
    setCreate(`/create/${props.user.userName}`)
    setPath(`/participant/${props.user.userName}`)
 }  
    })

    return (
        <div>
            <div >
                <NavBar ></NavBar>
            </div>
            <div className="home-page">
                {/* <div className="slide-show"></div> */}
                <SlideShow ></SlideShow>
                <div className="select">
                <Link to="/manager">
                <button className="select-type">מנהל תחרות
                </button>
                </Link>
                <Link to={{pathname:`${path}`, state: { to: 'participant'}}} >
                <button  className="animate__pulse" className="select-type">מתחרה פעיל
                </button>
                </Link>
                <Link  to={{pathname: `${create}`,state: { to: 'create'}}}>
                <button className="animate__bounceIn select-type">יצירת תחרות
                </button>
                </Link>
                </div>
                <div className="titles">התחרויות</div>
              
            
            <div className="comptitions-to-show">
            {/* <Carousel  items={items} active={0}/>,  */}
                {/* <ShowList></ShowList> */}
                <FlexWrap ></FlexWrap>
            </div>
            <div className="titles">קצת עלינו</div>
            <div className="details">
            ,היא מערכת ייעודית למתחרים ומפעילי תחרויות בכל תחום BeatMe  
            <br/>
            מרכז מגוון של תחרויות ומשימות מסוגים שונים קצרים או מתמשכים BeatMe האתר 
            האתר מרכז מגוון של תחרויות ומשימות מסוגים שונים, קצרים או מתמשכים. 
            האתר מאפשר מעקב אחר התקדמות המשימה/ התחרות והעמידה ביעדים, עד להגעה אל המטרה. 
            מערכת beatme כוללת: מערכת ניהול למנהלי תחרויות ופרויקטים, ומערכת למשתמשים- משתתפי התחרויות. )ניתן להשתתף בכמה תחרויות בו זמנית!(
            </div>
            <div className="go">!!!היכון, הכן, צא</div>
            <div className="footer">כל הזכויות שמורות
            </div>
        </div>
</div>
    )
}
const mapStateToProps=(state)=>{
    return{
        user: state.user.user
    }
}
export default connect(mapStateToProps)(HomePage); 
