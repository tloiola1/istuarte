import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import CONTENT from "../../utils/CONTENT";
import '../../stylesheets/home.css';
import '../../stylesheets/@media_home.css';

class Home extends Component {

    componentWillMount() {
        this.loadData();
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    constructor(props) {
        super(props);
        this.state = {
            cms: [],
            main_phone: '',
            social_media: '',
            brand_size: '',
        };
    }
    loadData() {
        CONTENT
            .GetContent({})
            .then(res => {
                this.SetMyStates(res);
                console.log(res.status);
            })
            .catch(err => console.log(err));
    }

    SetMyStates(res) {
        this.setState({cms: res.data[0]});
        this.setState({main_phone: this.state.cms.contact[0].phone});
        this.setState({social_media: this.state.cms.socialMedia});

        console.log(this.state.social_media);
    }
    updateDimensions() {
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;
        let brand_size = '';
        this.setState({width: innerWidth, height: innerHeight });
        if(innerWidth > 1024)brand_size = innerWidth/20;
        if(innerWidth > 800 && innerWidth <= 1024)brand_size = innerWidth/15;
        if(innerWidth > 0 && innerWidth < 800)brand_size = innerWidth/10;

        this.setState({brand_size: brand_size });
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    openNav(){
        console.log("nav");
    }

    closeNav(){
        console.log("nav");
    }
    //Render
    render() { //https://www.dobneylondon.co.uk/
        return (
            <span>
                <div className='header'>
                    <Grid>
                        <span className='left'>
                            <a href='tel:{this.state.main_phone}' className="fa-phone">
                                <i className="fas fa-phone"></i>{" "}{this.state.main_phone}</a>
                        </span>
                        <span className='right'>
                            <div className='social-media'>
                                {this.state.social_media.length
                                    ? <span>
                                            {this
                                                .state
                                                .social_media
                                                .map(media => (
                                                    <span key={media._id}>
                                                        <a href={media.link} target='_blank'>
                                                            <i className='icon' className={media.icon}>{" "}</i>
                                                        </a>
                                                    </span>
                                                ))}{/**/}
                                        </span>
                                    : <span/>}
                            </div>
                        </span>
                        <span className='openNav'>
                            <span onClick={this.openNav}>&#9776;</span>
                        </span>
                    </Grid>
                </div>
                {/*<span style={{fontSize:"30px", cursor:"pointer"}} onClick={this.openNav}>&#9776;</span>*/}
                {/*<a href="javascript:void(0)" className='closebtn' onClick={this.closeNav}>&times;</a>*/}
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <div id="mySidenav" className='main-header sidenav'>
                                <div>
                                    <a href='/'>INICIO</a>
                                </div>
                                <div>
                                    <a href='/stylistes'>PROFISSIONAIS</a>
                                </div>
                                <div className='brand-name' style={{fontSize:this.state.brand_size}}>
                                    <a href='/'>ISTU ARTE</a>
                                </div>
                                <div>
                                    <a href='/servicos'>SERVICOS</a>
                                </div>
                                <div>
                                    <a href='/agenda'>AGENDA</a>
                                </div>
                            </div>
                            <hr/>
                        </Col>
                    </Row>
                </Grid>
                {/*
                <p>{this.state.width}</p>
                <p>{this.state.brand_size}</p>
                */}
            </span>
        )
    }

}
export default Home;