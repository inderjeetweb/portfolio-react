import React from 'react'

const Profile = () => {
  return (
    <>
       <div className="background-color-layer" style={{backgroundImage: `url('/images/cover.jpg')`}}></div>
  <main className="content-wrapper">
    <header className="white-text-container section-container">
      <div className="text-center">
        <h1>I am Inderjeet</h1>
        <p>Full Stack Developerrrrrr</p>
        <p>
          <a className="fa-icon fa-icon-2x" target="_blank" href="https://www.facebook.com/inderjeetweb" title="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a className="fa-icon fa-icon-2x" target="_blank" href="https://twitter.com/inderjeetweb" title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="fa-icon fa-icon-2x" target="_blank" href="https://www.linkedin.com/in/inderjeetweb" title="Linikedin">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="fa-icon fa-icon-2x" target="_blank" href="https://github.com/inderjeetweb" title="GitHub">
            <i className="fa fa-git"></i>
          </a>
          <a className="fa-icon fa-icon-2x" href="https://drive.google.com/uc?id=1VQeoBlQwzwpgWGvNLU-CbiKQcBv6zN3_&amp;export=download" title="Download CV">
            <i className="fa fa-download"></i>
          </a>
        </p>
      </div>
    </header>


    <div className="container">
      <div className="row">
        <div className="col-xs-12">

          <div className="card">
            <div className="customPadding-3">
                <div className='personalInfoOuter'>
                    <ul>
                      {/* <li><i className="fa fa-user"></i> <a href='javascript:void(0)'>Software Developer Engineer - III</a> </li> */}
                      <li><a href='Javascript:void(0)'><i className="fa fa-history"></i>6+ Years of Experience</a> </li>
                      <li><a href='tel:9560232327'><i className="fa fa-phone"></i>9560232327</a> </li>
                      <li><a href='mailto:inderjeetweb@gmail.com'><i className="fa fa fa-envelope-o"></i>inderjeetweb@gmail.com</a></li>
                      <li><a href='Javascript:void(0)'><i className="fa fa fa-map-marker"></i>Gurugram, Haryana</a></li>
                    </ul>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-block">
              <h2>About me</h2>
              <div className="row">
                <div className="col-md-4">
                  <p><img src="/images/inderjeet.jpg" className="img-responsive" alt="" /></p>
                </div>
                <div className="col-md-8">

                  <p>Web developer with <strong>6+ years experience</strong> in designing and developing user interface,
                    testing, debugging and training staff with web technologies. Developed dynamic and interactive
                    website that ensured high traffic, page views, and User Experience. I have done work for both minor
                    and major projects. Currently i work on front end technologies like HTML, HTML5, CSS, CSS3,
                    Javascript, Jquery, Ajax, Bootstrap, Web Responsive, Adobe Photoshop, Illustrator, Wordpress,
                    Angular 2/4/5/6/7, Typescript, PHP, Node.js, MySQL and MongoDB.</p>

                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-block">
              <h2>Technical Knowledge</h2>
              <div className="list-with-symbol">
                <ul className="devid-into-three">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Jquery</li>
                  <li>Ajax</li>
                  <li>Bootstrap</li>
                  <li>Web Responsive</li>
                  <li>Adobe Photoshop</li>
                  <li>Illustrator,</li>
                  <li>WordPress,&nbsp;</li>
                  <li>Angular 2/4/5/6/7</li>
                  <li>Typescript</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Core PHP</li>
                  <li>Laravel</li>
                  <li>MySQL</li>

                </ul>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-block">
              <h2>Projects</h2>
              <div className="projectsOuter">
                <ul>
                  <li><a href="https://.jungleerummy.com/">https://jungleerummy.com</a></li>
                  <li><a href="https://howzat.com/">https://howzat.com</a></li>
                  <li><a href="https://solitairegold.in/">https://solitairegold.in</a></li>
                  <li><a href=" https://jungleegames.com"> https://jungleegames.com</a></li>
                  <li><a href=" https://www.pokerindia.com"> https://www.pokerindia.com</a></li>
                  <li><a href=" https://www.carromstars.com/">https://www.carromstars.com</a></li>
                  <li><a href="https://zricks.com/">https://Zricks.com</a></li>
                  <li><a href="https://amesmarine.com/">https://amesmarine.com</a></li>
                  <li><a href="https://klifftechnologies.com/">https://Klifftechnologies.com</a></li>
                  <li><a href="https://klifftechnologies.in/">https://Klifftechnologies.in</a></li>
                  <li><a href="https://anjan.tv/">https://anjan.tv</a></li>
                  <li><a href="https://www.hectindia.com/">https://www.hectindia.com/</a></li>
                  <li><a href="http://rajvidyakender.org/">http://rajvidyakender.org</a></li>
                  <li><a href="http://thedreamcatchers.in/">http://thedreamcatchers.in</a></li>
                  <li><a href="http://guardianssecurity.in/">http://guardianssecurity.in</a></li>
                  <li><a href="http://rasayanam.com/">http://rasayanam.com</a></li>
                </ul>
                <div className="subModuleOuter">
                    <h4>Sub Module at Junglee Games</h4>
                    <ul>
                      <li>Rummy School</li>
                      <li>Influencers Program</li>
                      <li>The Grand Rummy Playground (Version: I, II, III, IV)</li>
                      <li>Rummy Tournaments with Leaderboard.</li>
                      <li>Dynamic Promotions</li>
                      <li>Many Dashboards (Using Laravel)</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

  

      

          <div className="card">
            <div className="card-block">
              <h2>Work</h2>
              <div className="work-experience">
                <small className="date">27 Apr 2020 - Till Date</small>
                <h3 className="h5 date-title">SDE - III - <a href="https://jungleegames.com"
                    title="Create professionnal website">Junglee Games India Pvt Ltd</a></h3>
              </div>

              <div className="work-experience">
                <small className="date">1 Nov 2016 – 26 Apr 2020</small>
                <h3 className="h5 date-title">Web developer - <a href="http://klifftechnologies.in" title="">Kliff Technologies Pvt Ltd.</a></h3>

              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-block">
              <h2>Education</h2>
              <div className="educationOuter">
                  <ul>
                    <li>10th passed from Haryana Board 2010. </li>
                    <li>12th passed from Haryana Board 2012.</li>
                    <li>Graduate from Delhi University (SOL) at 2016.</li>
                    <li>Web Designing course from Ducat at 2016.</li>
                    <li>Angular 2+ course from SDK ITS Solution Pvt Ltd at 2018.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-block">
              <h2>Language</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="language-experience">
                    <h3 className="h5">English <small>Bilingual</small></h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="language-experience">
                    <h3 className="h5">Hindi <small>Fluent</small></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

      

          <div className="card">
            <div className="card-block">
              <h2>Social Network</h2>
              <div className="row">
                <div className="col-md-3">
                  <p className="social-buttons"><a href="https://twitter.com/inderjeetweb" target="_blank" title="Twitter"><span
                        className="social-round-icon fa-icon"><i className="fa fa-twitter"></i></span>@inderjeetweb</a></p>
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

          <div className="card">
            <div className="card-block">
              <h2>Contact</h2>
              <form action="" className="reveal-content">
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className=" btn btn-primary">Send message</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  </main>

    </>
  )
}

export default Profile