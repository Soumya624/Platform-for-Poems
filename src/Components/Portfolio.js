import React, { Component } from 'react';

class Portfolio extends Component {
  render() {


    if(this.props.data){
      console.log(this.props.data.category)
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var array=['SPIRITUALITY', 'PHILOSOPHY', 'RELIGIOUS', 'LOVE', 'ROMANCE', 'FRIENDSHIP', 'COLLAB', 'SHIVA', 'SHAKTHI'];
      var i;
      for(i=0;i<9;i++)
      {
        // document.getElementById('abc').innerHTML= "";
      }
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">
           {this.props.data === undefined ? null :
            <h1 id="abc">Check Out My Work On {this.props.data.category} </h1>}

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
