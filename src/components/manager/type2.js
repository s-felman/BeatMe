import React, { Component, useState } from "react"
import { connect } from "react-redux"
import { votes, trivia, team, multiTasks, oneTask } from "../../action";
import { Link } from 'react-router-dom';
import Faker from "faker";



const images = [
    {
        url: Faker.image.sports(),
        title: 'חידון',
        width: '40%',
        path: "/trivia"

    },
    {
        url: Faker.image.city(),
        title: 'פרויקט משותף',
        width: '30%',
        path: "/team"
    },
    {
        url: Faker.image.cats(),
        title: 'תחרות הצבעות',
        width: '40%',
        path: "/votes"
    },
    {
        url: Faker.image.animals(),
        title: 'משימות מחולקות',
        width: '30%',
        path: "/multitasks"

    },
    {
        url: Faker.image.sports(),
        title: 'משימה בודדת',
        width: '30%',
        path: "/onetask"

    },
];
const Type2 = (props) => {
    const [type,setType]=useState("")

    const handleChange = event => {
        props.onchange(type);
        console.log("aaa",event.target.props);
        console.log("bbb",type);
    }

    return (
        <div>
            {images.map((image) => (<div  onClick={handleChange} >
                <button  onClick={()=>setType(image.path)} >
                    <h2>{image.title}</h2>
                    <image>{image.url}</image>
                </button> </div>))}
                </div>
    )
    }

export default Type2;

// class Type2 extends Component {
//     renderList = () => {
//         return (
//             <div>
//                 {images.map((image) => (<div>
//                     <button onClick={ this.props.compeToGo}>
//                         <h2>{image.title}</h2>
//                         <div>{image.url}</div>
//                     </button>
//                     <Link to={image.path}>
//          <button type="submit" onClick={this.onClick}>המשך</button>
//          </Link>
//                 </div>
//                 ))
//                 }
//             </div>
//             /* <button >-</button>
//                 <div>{this.props.copeToGo}</div>
//                 <button onClick={()=>this.props.decreaseNumber(this.props.compeToGo)}>+</button> */
//         )
//     }
//     render() {
//         console.log(this.props)
//         return <div> {this.renderList()}</div>
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         compeToGo: state.path
//     }
// }
//export default connect(mapStateToProps, { votes, trivia, team, multiTasks, oneTask })(Type2)


