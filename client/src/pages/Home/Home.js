import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { Logo, Brand } from '../../components/Brand';
import { BackImg} from '../../components/BackImg';
import  '../../stylesheets/components/all.css';
import  '../../stylesheets/components/icons.css';
import  { NavHeader } from './NavHeader.js';
import  { NavFooter } from './NavFooter.js';
// import  '../../stylesheets/components/backimg.css';
// import $ from 'jquery';

class Home extends Component {
    
    componentDidMount() {      
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    constructor( props ){
        super(props);
        this.state ={
            brand: 'ISTU ARTE',
            X: '|||',
            rotate: 'rotate90',
            background_img: 'http://tekthost.info/wp-content/uploads/2017/12/imposing-hair-salon-flooring-ideas-regarding-floor-how-to-design-a-functional-and-attractive-beauty-mary.jpg',
        };
    }

    updateDimensions() {
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;
        this.setState({ width: innerWidth, height: innerHeight });
        if(innerWidth < 500) {
            this.setState({ width: 450, height: 102 });
        } else {
            let update_width  = window.innerWidth;
            let update_height = Math.round(update_width);
            this.setState({ width: update_width, height: update_height });
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    toggleIcon(){
        if(this.state.X === 'X'){
            this.setState({X: '|||'});
            this.setState({rotate: 'rotate90'});
        }else {
            this.setState({X: 'X'});
            this.setState({rotate: 'rotateX'});
        }
    }
    render(){
        return(
            <div>
                {this.state.width > 664 ?
                <BackImg className='backimg' src={this.state.background_img}/>
                :<span/>}
                <Row>
                {this.state.width > 440 ?
                    <Col lg={12}>
                        <Brand>
                            <Logo>
                                <nav className="navbar">
                                    <a href='/' className='brand-name'>{this.state.brand}</a>
                                    {this.state.width > 768 && this.state.width <= 992?
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{this.toggleIcon()}}>
                                    <span id={this.state.rotate} className="navbar-toggler-icon">{this.state.X}</span>
                                    </button>
                                    : this.state.width > 768 ? <NavHeader/> : <span/>}
                                </nav>                    
                            </Logo>
                        </Brand>
                        {this.state.width > 768 && this.state.width <= 992?
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavHeader/>
                            </div>
                        :<span></span>}
                    </Col>
                    : <span/>}
                    {this.state.width <= 768 ?
                    <Grid> <NavFooter/> </Grid>
                    : <span/>}

                </Row>
            </div>
        )
    }

}
export default Home;