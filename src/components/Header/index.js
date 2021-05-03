import React, { useState, useEffect, useRef } from 'react'
import {
  Link, useHistory
} from "react-router-dom";
import logo from '../../assets/images/logo.svg'


const Header = () => {

  const logoEl = useRef(null)
  const liEl = useRef(null)
  const [navHeight, setNavHeight] = useState(0)
  const [liHeight, setLiHeight] = useState(0)
  const navRef = useRef(navHeight)
  navRef.current = navHeight

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavHeight(logoEl.current.offsetHeight)
      setLiHeight((navRef.current - liEl.current.offsetHeight) / 2)
    }, 500)

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo" ref={logoEl}>
              <Link to={"/"}><img src={logo} /></Link>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav" style={navHeight ? { height: navHeight } : {}}>
              <ul>
                <li ref={liEl} style={liHeight ? { marginTop: liHeight } : {}}><Link to="/">Home</Link></li>
                <li style={liHeight ? { marginTop: liHeight } : {}}><Link to="/portfolio">Portfolio</Link></li>
                <li style={liHeight ? { marginTop: liHeight } : {}}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export { Header }