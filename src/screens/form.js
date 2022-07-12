import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Form = (props, router) => {

    const location = useLocation()

    useEffect(() => {
        console.log("props", location.state.test);
    }, [])

    return (
        <div className='form-container'>

            {/* CV SIDE */}
            <div className='form-box1 style-3'>
                <div className='cv-container style-3'>
                    <div className='cv-header'>
                        <div className='left-row mt-4'>
                            <h2>NOMAN AHMED</h2>
                            <p>Frontend Developer</p>
                        </div>
                        <div className='right-row mt-4'>
                            <p><span>Address:</span> Street no # 3, Bin Qasim Road, Karachi, Pakistan</p>
                            <p><span>Email:</span> abdullah221@gmail.com</p>
                            <p><span>Phone:</span> 03156498236</p>
                        </div>
                    </div>

                    <div className='cv-body'>
                        <h3>Objective</h3><hr />
                        <p>Seeking a position as a Web Developer with Innovation utilizing exceptional skills, and abilities and experiences gained
                            through relevant education and projects to contribute to the ongoing success of the company.</p>
                        <h3>Skills Heighlights</h3><hr />
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Saas</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Vue Js</li>
                            <li>Angular</li>
                            <li>Ionic</li>
                            <li>Mongo DB</li>
                            <li>Firebase</li>
                        </ul>

                        <h3>Work Responsibility</h3><hr />
                        <ul>
                            <li>Ability to translate design into functional web apps using HTML5, React, Vue js.</li>
                            <li>Work with development delivering teams and project managers to ideate solutions.</li>
                            <li>Passionate about delivering elegant, secure, performant, and high-quality code that is functional and testable.</li>
                            <li>Ability to work independently with minimal supervision</li>
                        </ul>
                        <h3>Education</h3><hr />
                        <p><span className='edu-h'>Matriculation: </span> <span className='edu-field'>Computer Science - 2018 - </span><span className='clg'>MH-Grammar School.</span></p>
                        <p><span className='edu-h'>Intermidiate: </span> <span className='edu-field'>Computer Science - 2020 - </span><span className='clg'>Govt.Degree Collage Karachi.</span></p>
                        <p><span className='edu-h'>Deploma: </span> <span className='edu-field'>Mern Stack Developer - 2021 - </span><span className='clg'>SMIT ( Saylani Mass It Training ).</span></p>

                        <h3>Deploma</h3><hr />
                        <ul>
                            <li>MERN Stack Developer By SMIT</li>
                        </ul>

                        <h3>My Work</h3><hr />
                        <ul>
                            <li><a href='https://github.com/NomanAhmed1999'>https://github.com/NomanAhmed1999</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FORM SIDE */}
            <div className='form-box2 style-3'>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <input type="profession" className="form-control mt-3" placeholder="Profession" />
                    <input type="email" className="form-control mt-3" placeholder="Enter email" />
                    <input type="phoneNumber" className="form-control mt-3" placeholder="Phone number" />
                    <input type="address" className="form-control mt-3" placeholder="Address" />
                    <textarea type="education" className="form-control mt-3" placeholder="Education" rows="4" cols="50"></textarea>
                    <textarea type="objective" className="form-control mt-3" placeholder="Objective" rows="4" cols="50"></textarea>
                    <textarea type="skills" className="form-control mt-3" placeholder="Skills" rows="4" cols="50"></textarea>
                    <textarea type="responsibility" className="form-control mt-3" placeholder="Responsibility" rows="4" cols="50"></textarea>
                    <textarea type="deploma" className="form-control mt-3" placeholder="Deploma/Certificate" rows="4" cols="50"></textarea>
                    <textarea type="myWork" className="form-control mt-3" placeholder="My  Work" rows="4" cols="50"></textarea>
                    <Link to="/cv-view"><Button variant="primary" className="mx-2 mt-5 blue-bg-color">NEXT</Button></Link>
                </div>
            </div>
        </div>
    )
}


export default Form;