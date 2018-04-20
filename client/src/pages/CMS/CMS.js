import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import CONTENT from "../../utils/CONTENT";
// import  '../../stylesheets/components/backimg.css'; import $ from 'jquery';

class CMS extends Component {

    componentWillMount() {
        this.loadData();
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    constructor(props) {
        super(props);
        this.state = {
            cms: [],
        };
    }
    loadData() {
        console.log("res");
        CONTENT
            .GetContent({})
            .then(res => {
                this.SetMyStates(res);
                console.log(res.status);
            })
            .catch(err => console.log(err));
    }

    SetMyStates(res) {
            
        this.setState({ cms: res.data[0] });

    }
    updateDimensions() {
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;
        this.setState({width: innerWidth, height: innerHeight});
        if (innerWidth < 500) {
            this.setState({width: 450, height: 102});
        } else {
            let update_width = window.innerWidth;
            let update_height = Math.round(update_width);
            this.setState({width: update_width, height: update_height});
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    //Render
    render() {
        return (
            <h1>Content Managment System</h1>
        )
    }

}
export default CMS;