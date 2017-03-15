import React, { Component } from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
class Footer extends Component {
  render(){
    return (
      <div className="footer">
				<div className="container">
					<div className="row">
						<div className="text-center">
							<p className="footerwebsite">
                COPYRIGHT © 2017 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">  Team Mike Dang(Mike Dang Not Included)</a>.
							</p>
              <p>
                NOT ALL RIGHTS RESERVED. BUT MOST OF THE RIGHTS RESERVED.
              </p>
						</div>
					</div>
				</div>
			</div>
    )
  }
};

export default Footer;
