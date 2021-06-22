// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MultiTasks from "../competitions/multiTasks";
import "./multiCarusel.css"
 
//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                <ReactCSSTransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
            </div>
        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}
// const MultiCarusel=()=>{
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       }
    
// return(
// <Carousel  swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}>
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>)
// }
 export default Carousel;
// https://www.npmjs.com/package/react-multi-carousel