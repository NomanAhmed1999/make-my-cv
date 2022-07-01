import React from 'react';


const Form = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
        </div>
    )
}


export default Form;