import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Templates = () => {
    const [cvImages1, setCvImages1] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const [cvImages, setCvImages] = useState([
        {
            id: 0,
            src: 'https://cdn-images.zety.com/images/zety/landings/templates/in/cv-template-concept@3x.png',
            isSelected: false
        },
        {
            id: 1,
            src: 'https://www.coolfreecv.com/images/resume_template_bartender.jpg',
            isSelected: false
        },
        {
            id: 2,
            src: 'https://www.dayjob.com/wp-content/uploads/2020/02/Premium-CV-template-2-1-page-version.jpg',
            isSelected: false
        },
        {
            id: 3,
            src: 'https://app.resumekraft.com/assets/img/8.jpg',
            isSelected: false
        },
        {
            id: 4,
            src: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/34698/image/6-graphicriver.jpg',
            isSelected: false
        },
        {
            id: 5,
            src: 'https://img.freepik.com/free-vector/attractive-online-curriculum-template_23-2147820454.jpg?w=2000',
            isSelected: false
        },
        {
            id: 6,
            src: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/34698/image/2-graphicriver.jpg',
            isSelected: false
        },
        {
            id: 7,
            src: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/108277227/original/c08ee9a38fc5ac1c9bfd697e1bfb450865f552fe/design-a-professional-attractive-resume.png',
            isSelected: false
        },
        {
            id: 8,
            src: 'https://officetemplatesonline.com/wp-content/uploads/2021/06/best-resume-cv-format-for-freshers-for-ms-word.jpg',
            isSelected: false
        },
        {
            id: 9,
            src: 'https://thumbs.dreamstime.com/b/professional-cv-resume-template-black-gold-colors-vec-vector-design-sample-114142543.jpg',
            isSelected: false
        },
        {
            id: 10,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIyktC0dP3fhS1s6h-dLhr10WfpLWfTxSwjotDfS4-M1cL--9jwVAi57il0ucTAn4wcU&usqp=CAU',
            isSelected: false
        },
        {
            id: 12,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdP-xAqVC7TD2DQ1Ab2KSeKuSDEE3PORUtepgcZvNcY1m0rt2CQHkvXWzCBPrY8O-QMo&usqp=CAU',
            isSelected: false
        },
        {
            id: 13,
            src: 'https://bestfreecv.com/en/wp-content/uploads/cv-formal-download.jpg',
            isSelected: false
        },
        {
            id: 14,
            src: 'https://www.myperfectresume.com/wp-content/uploads/2021/07/social-worker-resume-example.svg',
            isSelected: false
        },
        {
            id: 15,
            src: 'https://img.freepik.com/free-vector/modern-cv-template-with-photo_23-2148859009.jpg?w=2000',
            isSelected: false
        },
    ]);
    const [imgOpen, setImgOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('https://img.freepik.com/free-vector/modern-cv-template-with-photo_23-2148859009.jpg?w=2000');

    const changeImg = (item) => {
        setSelectedImg(item.src)
    }


    return (
        <div className='templates-main-container'>
            <h2 className='blue-color'>Choose Template</h2>
            <div className='templates-theme-lg'>
                <img onClick={() => setImgOpen(!imgOpen)} className='templates-cv-img' src={selectedImg} />
                <Link to="/form" state={{ test: "hello" }}><Button variant="primary" className="mx-2 blue-bg-color next-btn">Next</Button></Link>
            </div>
            {
                imgOpen === true ?
                    <div className='templates-theme-review style-3'>
                        <p className='cross-icon'> <i className="fa fa-times-circle" aria-hidden="true" onClick={() => setImgOpen(!imgOpen)}></i></p>
                        <img className='templates-cv-img-review' src={selectedImg} />
                    </div>
                    :
                    <div className='templates-theme-temp style-3'>
                        {cvImages.map((key, i) => {
                            return (
                                <div key={key.id}>
                                    <img className='templates-cv-sm' src={key.src} onClick={() => changeImg(key)} />
                                </div>
                            )
                        })}
                    </div>
            }

        </div >
    )
}

export default Templates;