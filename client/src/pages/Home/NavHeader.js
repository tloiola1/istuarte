import React, { Component } from 'react';
import { Logo, Brand } from '../../components/Brand';
import { Button } from '../../components/Buttons';
import { Icon, SMContainer } from '../../components/SocialMedia';
import  '../../stylesheets/components/all.css';
import  '../../stylesheets/components/mediaQueries.css';

export class NavHeader extends Component {

    constructor( props ){
        super(props);
        this.state ={
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
    }

    handleEvent = key => {
        console.log(key);
    }

    render(){
        return(
            <span>
                <SMContainer>
                    <a href={this.state.facebookLink} target='_blank' ><Icon src={this.state.facebookIcon}/></a>
                    <a href={this.state.instagramLink} target='_blank' ><Icon src={this.state.instagramIcon}/></a>
                    <a href={this.state.googleLink} target='_blank' ><Icon src={this.state.googleIcon}/></a>
                </SMContainer>
                <Button><a href={`tel:${this.state.phone}`}><h5>{this.state.phone}</h5></a></Button>
                <Button onClick={()=>{this.handleEvent(3)}}><h5>AGENDA</h5></Button>
                <Button role='button' onClick={()=>{this.handleEvent(2)}}><h5>ISTUARTE</h5></Button>
                <Button onClick={()=>{this.handleEvent(1)}}><h5>INICIO</h5></Button>
            </span>
        )
    }
}
