import { useState, useEffect } from "react";
import Notice from './notice';


export default function Noticeboard() {
  const [data, setData] = useState([])
  useEffect(()=>{
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:9000/notices/index")
      response = await response.json()
      setData(response.notices)
    }
    fetchMyAPI()
  }, [])
  return (
    <div>
      <div className="Notice-container">
      </div>
      <div>{data.forEach( notice => console.log(notice.title))}</div>
      <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
      
    <div class="section no-pad-bot" id="index-banner">
    <div class="container">
    
      <h1 class="header center orange-text">School Notice Board</h1>
      <div class="row center">
        <h5 class="header col s12 light">Keep up to date with your School </h5>
      </div>
      <div class="row center">
        <a href="https://makers.tech" id="download-button" class="btn-large waves-effect waves-light orange">School website</a>
        <a href="/noticeboard/new" id="download-button" class="btn-large waves-effect waves-light orange">Add New Notice</a>
      </div>
  

    </div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        {data.map((noticeInfo, key) => {
          return (
            // <Notice noticeInfo = {noticeInfo} />
            <div class="col s12 m4">
              <div class="icon-block">
                <h5 class="center">{ noticeInfo.title } </h5>
        
                <p class="light"> { noticeInfo.description } </p>
              </div>
            </div>
          );
        })}

        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">Join Makers</h5>

            <p class="light">Join Maker's distance learning course. They will pay commission to the school. </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">Book today</h5>

            <p class="light">Your local Jodo coach is now coaching kids for free at our school. Join classes now. It is on first come first serve bases </p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">Speeds up development</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">Speeds up development</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">User Experience Focused</h5>

            <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h5 class="center">Easy to work with</h5>

            <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>
    
  </div>
  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>

    </div>
  )
}