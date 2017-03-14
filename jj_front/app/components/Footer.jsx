import React, { Component } from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
class Footer extends Component {
  render(){
    return (
      <div className="footer">
				<div className="container">
					<div className="row">
						<div className="text-center">
							<p className="social-icons">
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
								<a href="#"><i className="icon-twitter2"></i></a>
								<a href="#"><i className="icon-facebook2"></i></a>
								<a href="#"><i className="icon-instagram"></i></a>
								<a href="#"><i className="icon-dribbble2"></i></a>
								<a href="#"><i className="icon-youtube"></i></a>
							</p>
							<p className="footerwebsite">
                COPYRIGHT © 2014-2017 <a href="http://football-data.org">FOOTBALL-DATA.ORG</a>.
							</p>
              <p>
                ALL RIGHTS RESERVED.
              </p>
						</div>
					</div>
				</div>
			</div>
    )
  }
};

export default Footer;
