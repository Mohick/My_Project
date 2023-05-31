import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import clsx from "clsx";
import items from './dataItems'
import cssFindMore from './FindMore.module.scss'


export default function FindMore() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 3,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 759,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (<div className={clsx(cssFindMore.form)}>
        <div className={clsx(cssFindMore.form__container)} id="grid__System">
            <div className={clsx(cssFindMore.form__container_title)}><h2>Tìm hiểu thêm</h2></div>
            <div className={clsx(cssFindMore.form__container_slider)}>
                <Slider {...settings}>
                    {items.map((item, index) => {
                        return (<div key={index}>
                            <div className={clsx(cssFindMore.form__box_slider)}>
                                <div className={clsx(cssFindMore.form__box_content)}>
                                    <div className={clsx(cssFindMore.form__box_img)}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={clsx(cssFindMore.form__box_title_description)}>
                                        <div className={clsx(cssFindMore.form__box_title)}>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className={clsx(cssFindMore.form__box_description)}>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(cssFindMore.form__box_access)}>
                                        <Link className={clsx(cssFindMore.access)} to={item.title}>
                                            <button>{item.access}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </Slider>
            </div>
        </div>
    </div>)
}