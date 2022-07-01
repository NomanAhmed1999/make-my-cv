import React, {useState} from 'react';

const Templates = () => {
    const [cvImages, setCvImages] = useState([1,2,3,4,5,6,7,8,9,10])



    return (
        <div className='templates-main-container'>
            <div className='templates-theme-lg'>
                <img className='templates-cv-img' src='https://cdn-images.zety.com/images/zety/landings/templates/in/cv-template-concept@3x.png' />
            </div>
            <div className='templates-theme-temp'>
            {cvImages.map((key, i) => {
                return(
                    <div key={i} style={{margin: "0 2px"}}>
                        <img className='templates-cv-sm' src='https://cdn-images.zety.com/images/zety/landings/templates/in/cv-template-concept@3x.png' />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Templates;