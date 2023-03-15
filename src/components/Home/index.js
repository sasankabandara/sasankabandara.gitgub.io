import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import lines from '../../assets/images/logo-lines.svg'
import lines2 from '../../assets/images/logo-lines-2.svg'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm
          <img src={LogoTitle} alt="developer" />
          asanka
          <br />
          Full Stack Developer
        </h1>
        <h2>Web Developer / Python Developer </h2>
        <Link to="/contact" className="flat-button">
          Contact ME
        </Link>
      </div>
      <div className="contain">
        <img src={LogoTitle} alt="developer" />
      </div>

      <div className="contain0">
        <img src={lines} alt="lines" />
      </div>
      <div className="contain1">
        <img src={lines2} alt="lines" />
      </div>
    </div>
  )
}

export default Home
