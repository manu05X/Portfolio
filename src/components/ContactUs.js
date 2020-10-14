import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h5 style={{color:"#00AD45"}}>Contact</h5>
              <h1 >I'd Love To Hear From You</h1>
              <p className="lead" style={{color:"#00AD45"}}>
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          
          <div className="row contact-info">
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-pin"></i>
              </div>
              
              <h5 style={{color:'azure'}}> Where to find me</h5>
              <p>
                  RA - 217, Salt Lake
                  <br/>
                  Bidhan Nagar
                  <br/> 
                  Kolkata, West Bengal, INDIA
              </p>
            </div>
            
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-pin"></i>
              </div>
          
              <h5 style={{color:'azure'}}> Email Me At</h5>
              <p>
                  k.manu00005@gmail.com
                <br/>
                  https://github.com/manu05X
              </p>
            </div>
            
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-pin"></i>
              </div>
              
              <h5 style={{color:'azure'}}> Mob Contact</h5>
              <p>
                  (+91)8637056324
              </p>
            </div>

          </div>
        </section>
        );
  }
}