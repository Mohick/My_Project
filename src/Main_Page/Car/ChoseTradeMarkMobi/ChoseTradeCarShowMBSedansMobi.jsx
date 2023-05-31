import { useContext, useState } from "react"
import clsx from "clsx"
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SetDataSendans from "../ItemsCar/sendans/handleSendans/sendData";
import cssCoupeMobi from '../ItemsCar/sendans/sedansMobi.module.scss'
import Plus from "../../../plus/Plus";
import { showMenuCar } from "../ItemsCar/sendans/handleSendans/handleEventOnMobi/showMenuCar";


export default function ChoseTradeCarShowMBSedansMobi() {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    let data = useContext(SetDataSendans)
    let filterCar = data.filter((items) => {
        return items.trademark === "MAYBACH"
    })


    return (filterCar.length > 0 ?
        <div className={clsx(cssCoupeMobi.form)}>
            <div className={clsx(cssCoupeMobi.form__container_title, 'title-sedans')}>
                <h2 className={clsx(cssCoupeMobi.title)}>Sedans</h2>
            </div>
            <div className={clsx(cssCoupeMobi.form__container_items)}>
                {filterCar.map((car, index) => {
                    return (
                        <div key={index} className={clsx(cssCoupeMobi.form__box_items, 'items')}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <div className={clsx(cssCoupeMobi.form__box_items_content,)}>
                                <div className={clsx(cssCoupeMobi.form__box_items_name)}>
                                    <h3 className="setName">{car.name}</h3>
                                </div>
                                <div className={clsx(cssCoupeMobi.form__box_items_price)}>
                                    <p>{car.price}</p>
                                </div>

                            </div>
                            <div className={clsx(cssCoupeMobi.form__box_items_img, 'js-slider')}>


                                <Slider {...settings}>
                                    <div >
                                        <img className="imgSlider1" src={car.img0} alt="" />
                                    </div>
                                    <div >
                                        <img className="imgSlider2" src={car.img1} alt="" />
                                    </div>
                                    <div >
                                        <img className="imgSlider3" src={car.img2} alt="" />
                                    </div>
                                </Slider>

                            </div>
                            <div className={clsx(cssCoupeMobi.form__box_items_slider_plus)}>
                                <div className={clsx(cssCoupeMobi.form__box_items_plus)} onClick={(e) => showMenuCar(e)}>
                                    <div className={clsx(cssCoupeMobi.plus, cssCoupeMobi.offMenuCar)}><Plus /></div>
                                </div>
                            </div>
                            <div className={clsx(cssCoupeMobi.form__box_list_find_more, 'js_list')}>
                                {(car.showMore).map((showListCar, index) => {
                                    return <div key={index} className={clsx(cssCoupeMobi.list_find_more)}>
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
        </div >
        :
        undefined
    )

}

