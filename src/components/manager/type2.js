import React, { Component, useState } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';




const images = [
    {
        title: 'חידון',
        path: "/trivia"

    },
    {
        title: 'פרויקט משותף',
        path: "/team"
    },
    {

        title: 'תחרות הצבעות',
        path: "/votes"
    },
    {
        title: 'משימות מחולקות',
        path: "/multitasks"

    },
    {
        title: 'משימה בודדת',
        path: "/onetask"

    },
];
const Type2 = (props) => {
    const [type,setType]=useState("")

    const handleChange = event => {
        props.onchange(type);
        console.log("bbb",type);
    }


    return (
        <div className="card-type-competition">
            {images.map((image) => (<div className="select-competiton-type">
                <button className="button-type" onClick={(event)=> {handleChange(event);setType(image.path);}}>
                    <h2>{image.title}</h2>
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


