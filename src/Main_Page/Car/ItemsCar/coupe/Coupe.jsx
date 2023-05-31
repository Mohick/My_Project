
import { useContext, useState } from "react"
import clsx from "clsx"
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import cssCoupe from './Coupe.module.scss'
import Plus from "../../../../plus/Plus";
import SetDataCoupe from "./DataCoupe/sendData";

export default function Coupe() {


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const settings = {
        infinite: true,
        autoplay: hoveredIndex !== null,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplaySpeed: 1000,
        arrows: false,
        useCSS: false,
        initialSlide: true
    };
    let data = useContext(SetDataCoupe)
    return (<div className={clsx(cssCoupe.form)}>
        <div className={clsx(cssCoupe.form__container_title,'title-coupe')}>
            <h2 className={clsx(cssCoupe.title)}>Xe Coupé</h2>
        </div>
        <div className={clsx(cssCoupe.form__container_items)}>
            {data.map((car, index) => {
                return (
                    <div key={index} className={clsx(cssCoupe.form__box_items, 'items')} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                        <Link to={'/Tìm Hiểu Thêm'}>
                            <div className={clsx(cssCoupe.form__box_items_content,)}>
                                <div className={clsx(cssCoupe.form__box_items_name)}>
                                    <h3 className="setName">{car.name}</h3>
                                </div>
                                <div className={clsx(cssCoupe.form__box_items_price)}>
                                    <p>{car.price}</p>
                                </div>
                                <div className={clsx(cssCoupe.form__box_items_kind)}>
                                    <p>{car.kind}</p>
                                </div>
                            </div>
                            <div className={clsx(cssCoupe.form__box_items_img, 'js-slider')}>

                                {hoveredIndex === index ? (
                                    <Slider {...settings}>
                                        <div style={{ transition: 'all 0.3s', animation: 'runSlider 0.2s ease' }}>
                                            <img className="imgSlider1" src={car.img0} alt="" />
                                        </div>
                                        <div style={{ opacity: 'opacity: all 0.3s' }}>
                                            <img className="imgSlider2" src={car.img1} alt="" />
                                        </div>
                                        <div style={{ opacity: 'transition: all 0.3s' }}>
                                            <img className="imgSlider3" src={car.img2} alt="" />
                                        </div>
                                    </Slider>
                                ) : (

                                    <div>
                                        <img className="imgSlider1" src={car.img0} alt="" />
                                    </div>
                                )}

                            </div>
                        </Link>
                        <div className={clsx(cssCoupe.form__box_items_slider_plus)}>

                            <div className={clsx(cssCoupe.form__box_items_plus)}>
                                <div className={clsx(cssCoupe.plus)}><Plus /></div>
                            </div>
                        </div>
                        <div className={clsx(cssCoupe.form__box_list_find_more, 'js_list')}>
                            {(car.showMore).map((showListCar, index) => {
                                return <div key={index} className={clsx(cssCoupe.list_find_more)}>
                                    {((showListCar.findMore).length) > 3 ? <Link to={`/Tìm Hiểu Thêm`}>{<p>{showListCar.findMore}</p>}</Link> : undefined}
                                    {((showListCar.drive).length) > 3 ? <Link to={`/Đăng Ký Lái Thử`}><p>{showListCar.drive}</p></Link> : undefined}
                                    {((showListCar.design).length) > 3 ? <Link to={`/Thiết Kế Cấu Hình Xe`}><p>{showListCar.design}</p></Link> : undefined}
                                    {((showListCar.findCar).length) > 3 ? <Link to={`/Tìm Xe Có Sẵn`}><p>{showListCar.findCar}</p></Link> : undefined}
                                </div>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div >)


}