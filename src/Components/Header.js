import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
           
            <li><a className="smoothscroll" href="#portfolio">Spirituality</a></li>
	         <li><a className="smoothscroll" href="#portfolio">Philosophy</a></li>
            <li><a className="smoothscroll" href="#portfolio">Religious</a></li>
            <li><a className="smoothscroll" href="#portfolio">Love</a></li>
            <li><a className="smoothscroll" href="#portfolio">Romance</a></li>
            <li><a className="smoothscroll" href="#portfolio">Friendship</a></li>
            <li><a className="smoothscroll" href="#portfolio">Collab</a></li>
            <li><a className="smoothscroll" href="#portfolio">Shiva</a></li>
            <li><a className="smoothscroll" href="#portfolio">Shakthi</a></li>
            
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Welcome Voyagers!</h1>
            <h3>I'm {name} <br/><span>I'm presenting you the ultimate poetry collection of mine</span></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
