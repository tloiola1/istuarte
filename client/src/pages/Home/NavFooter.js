import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Col } from "react-bootstrap";
import { Icon, SMContainer } from '../../components/SocialMedia';
import  '../../stylesheets/components/icons.css';
import  '../../stylesheets/components/mediaQueries.css';

export class NavFooter extends Component {

    constructor( props ){
        super(props);
        this.state ={
            dropupOpen: false,
            dropupFooterOpen: false,
            X: '|||',
            rotate: 'rotate90',
            brand: 'ISTU ARTE',
            facebookIcon: 'http://img-cdn.jg.jugem.jp/369/3168315/20180304_1832137.png',
            facebookLink: 'https://www.w3schools.com/js/default.asp',
            googleIcon: 'https://kusito.ch/wp-content/uploads/g+250.png',
            googleLink: 'https://getbootstrap.com/docs/4.0/utilities/clearfix/',
            instagramIcon: 'http://www.wpsdlocal6.com/wp-content/uploads/2017/11/instagram-logo-300x300.png',
            instagramLink: 'https://getbootstrap.com/docs/4.0/utilities/clearfix/',
            heigth: '',
            phone: '3826-3205',
        }
        this.dropUpFooter = this.dropUpFooter.bind(this);
        this.dropUp = this.dropUp.bind(this);
    }

    handleEvent = key => {
        console.log(key);
    }
    //DropUp
    dropUp() {
        if(this.state.X === 'X'){
            this.setState({X: '|||'});
            this.setState({rotate: 'rotate90'});
        }else {
            this.setState({X: 'X'});
            this.setState({rotate: 'rotateX'});
        }
        this.setState({
          dropupOpen: !this.state.dropupOpen
        });
      }
    //DropUpButton
    dropUpFooter() {
        
        this.setState({
          dropupButtonOpen: !this.state.dropupButtonOpen
        });
      }
    render(){
        return(
            <nav className="navbar fixed-bottom navbar-light">
                    <Col xs={12}>
                    <ButtonDropdown isOpen={this.state.dropupOpen} toggle={this.dropUp} dropup>
                        <DropdownToggle outline color="secondary">
                        <div id={this.state.rotate}>
                        <span>{this.state.X}</span>
                        </div>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><a href='/'>INICIO</a></DropdownItem>
                            <DropdownItem><a>AGENDA</a></DropdownItem>
                            <DropdownItem><a href={`tel:${this.state.phone}`}><h5>{this.state.phone}</h5></a></DropdownItem>
                            <DropdownItem id='unset-hover'>
                                <SMContainer>
                                    <a href={this.state.facebookLink} target='_blank' ><Icon src={this.state.facebookIcon}/></a>
                                    <a href={this.state.instagramLink} target='_blank' ><Icon src={this.state.instagramIcon}/></a>
                                    <a href={this.state.googleLink} target='_blank' ><Icon src={this.state.googleIcon}/></a>
                                </SMContainer>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    </Col>
            </nav>
        )
    }
}
