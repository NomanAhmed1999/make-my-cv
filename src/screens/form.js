import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Form = (props, router) => {

    const location = useLocation()

    useEffect(() => {
        console.log("props", location.state.test);
    }, [])

    return (
        <div className='form-container'>
            <div className='form-box1'>
            </div>
            <div className='form-box2'>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="Last name" />
                        </div>
                    </div>
                    <input type="email" className="form-control mt-3" placeholder="Enter email" />
                    <input type="phoneNumber" className="form-control mt-3" placeholder="Phone number" />
                    <div className='border mt-3'>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label">male</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label">female</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Form;