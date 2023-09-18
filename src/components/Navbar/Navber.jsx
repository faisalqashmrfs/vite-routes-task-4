import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './NavStyle.css';

function Navber() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  console.log(backgroundColor)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);

    if (position >= 200) {
      setBackgroundColor("#00000099");
    } else {
      setBackgroundColor("");
    }
  };
  return (
    <>
      <nav className='FQ-nav1' style={{backgroundColor}} >
          <div className='Fq-3infoLeft'>
              <div className='ch1'><i class="fa-regular fa-circle-question"></i><span>Have a questions?</span></div>
              <div className='ch2'><i class="fa-solid fa-phone"></i><span>10 20 30 1234</span></div>
              <div className='ch3'><i class="fa-solid fa-envelope"></i><span>info@mydimain.com</span></div>
          </div>
          <div className='Fq-2infright'>
              <div className='ch1'><i class="fa-solid fa-lock"></i><span>Loge In</span></div>
              <div className='ch2'><i class="fa-solid fa-user"></i><span>Register</span></div>
          </div>
      </nav>
      <nav className='FQ-nav11' style={{backgroundColor}} >
          <div className='Fq-3infoLeft'>
              <div className='ch1'><i class="fa-regular fa-circle-question"></i></div>
              <div className='ch2'><i class="fa-solid fa-phone"></i></div>
              <div className='ch3'><i class="fa-solid fa-envelope"></i></div>
          </div>
          <div className='Fq-2infright'>
              <div className='ch1'><i class="fa-solid fa-lock"></i></div>
              <div className='ch2'><i class="fa-solid fa-user"></i></div>
          </div>
      </nav>
      <nav className='FQ-nav2' style={{backgroundColor}} >
          <div>
              <span>Learner</span>
              <ul>
                  <Link className='link' to="/vite-routes-task-4/">Home</Link>
                  <Link className='link' to="/vite-routes-task-4/AboutUs">About Us</Link>
                  <Link className='link' to="/vite-routes-task-4/News">News</Link>
              </ul>
              <button>ENROLL NOW</button>
          </div>
      </nav>
    </>
  )
}

export default Navber