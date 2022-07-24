import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import nft1 from "./images/nft1.png";
import nft2 from "./images/nft2.png";
import nft3 from "./images/nft3.jpg";
import nft4 from "./images/nft4.png";
import nft5 from "./images/nft5.png";

import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import shirt3 from "./images/shirt3.jpg";
import shirt4 from "./images/shirt4.jpg";
import shirt5 from "./images/shirt5.jpg";
import shirt6 from "./images/shirt6.jpg";
import shirt7 from "./images/shirt7.jpg";

import React from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const images = [
  shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7
];

const nftImages = [
  nft1, nft2, nft3, nft4, nft5
];


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.onNftSelectedChange = this.onNftSelectedChange.bind(this);
    this.onShirtChange = this.onShirtChange.bind(this);
  }

  state = {
    selectedNft: null,
    shirtIndex: 0
  }

  onNftSelectedChange =(index, item)=>{
      console.log(index);
      console.log(nftImages[index]);
      this.setState({ selectedNft: nftImages[index]});
  }

  onShirtChange = (index) =>{
    console.log('onShirtChange ====', index);
    this.setState({ shirtIndex: index});
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-5 m-auto" style={{width: '60vh'}}>
            <Carousel showThumbs={false} selectedItem={this.state.shirtIndex} onChange={this.onShirtChange}>
              {
                  images.map((item, key)=>{
                    return (
                      <div key={key}>
                        <div className="shirt-block">
                          <img className="shirt-img" src={item}/>
                          {
                              this.state.selectedNft && key===this.state.shirtIndex && <img className="nft-img" src={this.state.selectedNft}/>
                          }
                        </div>
                      </div>
                    )
                  }
                )
            }
            </Carousel>    
          </div>
  
          <div className="row mt-5 m-auto" style={{width: '20vh'}}>
            <Carousel showThumbs={false} onClickItem={this.onNftSelectedChange}>
              {
                nftImages.map((item, key)=>
                  <div key={key}>{<img src={item}/>}</div>
                )
              }
            </Carousel>    
          </div>
  
        </div>
        
      </div>
    );
  }
}

