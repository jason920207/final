import React, { useState, useEffect, useRef } from 'react'
import {
  Link, useHistory
} from "react-router-dom";
import logo from '../../assets/images/logo.svg'

const projects = [
  { className: "luvtalk-project", title: "LUV TALK Website", desc: "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress." },
  { className: "personal-website-project", title: "Personal Website", desc: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests." },
  { className: "strike-zone-project", title: "Strike Zone Analysis", desc: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game." },

]

const Projects = () => {
  const projectRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
  const titleRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
  const rowRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const [height, setHeight] = useState(0)
  const [paddingTop, setPaddingTop] = useState(0)
  const heightRef = useRef(height);
  heightRef.current = height

  useEffect(() => {
    const timer = setTimeout(() => {
      const projectHeight = projectRefs.current[0].current.clientWidth
      setHeight(projectHeight)
      const projectPaddingTop = (heightRef.current - titleRefs.current[0].current.clientHeight - rowRefs.current[0].current.offsetHeight) / 2
      setPaddingTop(projectPaddingTop)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="projects" id="projects">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-sm-4 col-md-4 text-center" key={`project-${index}`}>
              <div className={project.className} ref={projectRefs.current[index]} style={height ? { height: height } : {}}>
                <h3 ref={titleRefs.current[index]} style={paddingTop ? { paddingTop: paddingTop } : {}}>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="row" ref={rowRefs.current[index]}>
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
            <div className="see-more-button">
              <a className="btn btn-default btn-border" href="#">More Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export { Projects }