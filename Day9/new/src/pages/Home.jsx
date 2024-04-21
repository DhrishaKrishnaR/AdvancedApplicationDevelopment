import React, { useState, useEffect } from 'react';
import "../assets/css/Home.css"; 
import ElevateAppBar from './NavBar';
import Footer from './Footer';
import Testimony from './Testimony';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {
  const [slides, setSlides] = useState([
    {
      color: "#BBE2EC",
      background: "https://images.pexels.com/photos/7155961/pexels-photo-7155961.jpeg",
      quote: "BirthDay Parties",
      link: "/service"
    },
    {
      color: "#51829B",
      background: "https://images.pexels.com/photos/5804898/pexels-photo-5804898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Customizable Theme Parties",
      link: "/service"
    },
    {
        color: "#9195F6",
        background: "https://images.pexels.com/photos/7180737/pexels-photo-7180737.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Surprise your close ones",
      link: "/service"
    }
  ]);

  useEffect(() => {
    const cdSlider = document.querySelector('.cd-slider');
    const item = cdSlider.querySelectorAll("li");
    const nav = cdSlider.querySelector("nav");

    item[0].className = "current_slide";

    for (let i = 0, len = item.length; i < len; i++) {
      const color = item[i].getAttribute("data-color");
      item[i].style.backgroundColor=color;
    }

    if (item.length <= 1) {
      nav.style.display = "none";
    }

    function prevSlide() {
      const currentSlide = cdSlider.querySelector("li.current_slide");
      const prevElement = currentSlide.previousElementSibling;
      const prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1];
      const prevColor = prevSlide.getAttribute("data-color");
      const el = document.createElement('span');

      currentSlide.className = "";
      prevSlide.className = "current_slide";

      nav.children[0].appendChild(el);

      const size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2;
      const ripple = nav.children[0].querySelector("span");

      ripple.style.height = size + 'px';
      ripple.style.width = size + 'px';
      ripple.style.backgroundColor = prevColor;

      ripple.addEventListener("webkitTransitionEnd", function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      });

      ripple.addEventListener("transitionend", function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      });

    }

    function nextSlide() {
      const currentSlide = cdSlider.querySelector("li.current_slide");
      const nextElement = currentSlide.nextElementSibling;
      const nextSlide = ( nextElement !== null ) ? nextElement : item[0];
      const nextColor = nextSlide.getAttribute("data-color");
      const el = document.createElement('span');

      currentSlide.className = "";
      nextSlide.className = "current_slide";

      nav.children[1].appendChild(el);

      const size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2;
      const ripple = nav.children[1].querySelector("span");

      ripple.style.height = size + 'px';
      ripple.style.width = size + 'px';
      ripple.style.backgroundColor = nextColor;

      ripple.addEventListener("webkitTransitionEnd", function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      });

      ripple.addEventListener("transitionend", function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      });

    }

    function updateNavColor () {
      const currentSlide = cdSlider.querySelector("li.current_slide");

      const nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
      const prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

      if (item.length > 2) {
        nav.querySelector(".prev").style.backgroundColor = prevColor;
        nav.querySelector(".next").style.backgroundColor = nextColor;
      }
    }

    nav.querySelector(".next").addEventListener('click', function(event) {
      event.preventDefault();
      nextSlide();
      updateNavColor();
    });

    nav.querySelector(".prev").addEventListener("click", function(event) {
      event.preventDefault();
      prevSlide();
      updateNavColor();
    });

    // Auto update functionality
    const autoUpdate = false;
    const timeTrans = 4000;
    
    setInterval(function() {
      if (autoUpdate) {
        nextSlide();
        updateNavColor();
      }
    }, timeTrans);

  }, []);

  return (
    <div>
      <section >    
    <div className="cd-slider">
        <ElevateAppBar/>
      <ul>
        {slides.map((slide, index) => (
          <li key={index} data-color={slide.color} data-circle-color={slide.circleColor}>
            <div className="content" style={{ backgroundImage: `url(${slide.background})` }}>
              <blockquote>
                <p>{slide.quote}<br/></p>
                <Link to={slide.link} className='find'>Explore</Link> 
              </blockquote>
              
            </div>
          </li>
        ))}
      </ul>
      <nav>
        <div><a className="prev" href="#"></a></div>
        <div><a className="next" href="#"></a></div>
      </nav>
      
    </div>
    </section>
    
    <section >    
      <Testimony/>
    </section>
    <section >    
      <Footer/>
    </section>
    </div>
    

  );
}

export default Home;
