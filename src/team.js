import women1 from './imgs/photo1.png'
import pic2 from './imgs/photo2.png'
import { useEffect } from 'react';
import { AiOutlineInstagram } from "react-icons";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Aos from 'aos';
import Header from './header';

const Team = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true})
  }, []);

    return ( 
        <div>
        <div>
        <Navbar className="bg-body-tertiary nav1">
      <Container>
        <Navbar.Brand href="#home" className='titile' data-aos="zoom-in">Our Team</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">XYZ</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        <div className='content'>
<h1 data-aos="fade-down">Team Page</h1>     
     <p>Leran from scientists,research scholars from the to institute in the world</p>
        </div>
        {/* <section className='pt-5 text-dark'> */}
          <div className="container  mt-3 sec3cont pt-5 text-dark">
             
              <div className='industdiv'> 
                  <div data-aos="fade-up" className="indust1">
                    {/* <img src={require('./img1.jpg')} alt="" /> */}
                    <div className='indtextpad'><h5>Cambridge University <br/> </h5></div>
                  </div>
                  <div data-aos="fade-down" className="indust1">
                    
                    <div className='indtextpad'><h5>Harvard University <br/> </h5></div>
                  </div>
                  <div data-aos="fade-up" className="indust1">
                    
                    <div className='indtextpad'><h5>University of California</h5></div>
                  </div>
                  <div data-aos="fade-down" className="indust1">
                    
                    <div className='indtextpad'><h5>Eth Zurich <br/> </h5></div> 
                  </div>
                  <div data-aos="fade-up" className="indust1">
                  
                    <div className='indtextpad'><h5>University of Edinberg</h5></div>
                  </div>
                  <div data-aos="fade-down" className="indust1 none">
                    
                    <div className='indtextpad'><h5>John's Hoopkins</h5></div>
                  </div>
                  <div data-aos="fade-up" className="indust1 none">
                    
                    <div className='indtextpad'><h5>Midigous State</h5></div>
                  </div>
                  <div data-aos="fade-down" className="indust1 none">
                    
                    <div className='indtextpad'><h5>University Of Illinious</h5></div>
                  </div>
              </div>
          </div>
      {/* </section> */}
      <div className='content'>
        <h1>Meet your Mentors</h1>
      </div>


<section id="team" class="team-area section5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">

      </div>
    </div>
    <div class="row team-items" >
      <div class="col-md-3 single-item" data-aos="fade-down-left">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
      
      <div class="col-md-3 single-item" data-aos="fade-down-left">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>University</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.

              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 single-item" data-aos="fade-down-right">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 single-item" data-aos="fade-down-right">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      </div>
    
  </div>
  
</section>
<section id="team" class="team-area section5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">

      </div>
    </div>
    <div class="row team-items" data-aos = "fade-up">
      <div class="col-md-3 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
      
      <div class="col-md-3 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>University</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.

              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4 style={{color:"black" , fontSize:"22px"}}>Name</h4>
            <span>University</span>
          </div>
        </div>
      </div>
      </div>
    
  </div>
  
</section>
<div className='content'>
  <h1>Mentors and Advicer</h1>
</div>
 <section id="team" class="team-area section5 msg">
 <div class="container">
 <div class="row">
      <div class="col-md-12">

      </div></div>
     
 <div class="row team-items msg1" >
 <div class="col-md-4 single-item" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<div class="card" style={{width:"20rem"}} >
  <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">University</p>
    <a href="#" class="btn btn-primary">Message him Now</a>
  </div>
</div>
</div>
  <div class="col-md-4 single-item" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<div class="card" style={{width:"20rem"}} >
  <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">University</p>
    <a href="#" class="btn btn-primary">Message him Now</a>
  </div>
</div>
</div>
 <div class="col-md-4 single-item" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<div class="card" style={{width:"20rem"}} >
  <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">University</p>
    <a href="#" class="btn btn-primary">Message him Now</a>
  </div>
</div>
</div>
 
</div>


</div>
</section>
</div>

     );
}
 
export default Team;