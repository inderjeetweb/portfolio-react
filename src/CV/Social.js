import React from 'react'

export const Social = () => {
  return (
   <>
      <div className="card">
            <div className="card-block">
              <h2>Social Network</h2>
              <div className="row">
                <div className="col-md-3">
                  <p className="social-buttons"><a href="https://x.com/indjeet19" target="_blank" title="Twitter"><span
                        className="social-round-icon fa-icon"><i className="fa fa-twitter"></i></span>@indjeet19</a></p>
                </div>
                <div className="col-md-3">
                  <p className="social-buttons"><a href="https://www.linkedin.com/in/inderjeetweb" target="_blank" title="Linkedin"><span
                        className="social-round-icon fa-icon"><i className="fa fa-linkedin"></i></span>inderjeetweb</a></p>
                </div>
                <div className="col-md-3">
                  <p className="social-buttons"><a href="https://www.facebook.com/inderjeetweb" target="_blank" title="Facebook"><span
                        className="social-round-icon fa-icon"><i className="fa fa-facebook"></i></span>Inderjeet Das</a></p>
                </div>
              </div>
            </div>
          </div>
   </>
  )
}
