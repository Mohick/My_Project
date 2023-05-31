import gClass1 from '../../../../../../assets/imgCar/topographic/G-Class/G-Class1.png'
import gClass2 from '../../../../../../assets/imgCar/topographic/G-Class/G-Class2.png'
import gClass3 from '../../../../../../assets/imgCar/topographic/G-Class/G-Class3.png'

import glaSUV1 from '../../../../../../assets/imgCar/topographic/GLA-SUV/GLA-SUV1.png'
import glaSUV2 from '../../../../../../assets/imgCar/topographic/GLA-SUV/GLA-SUV2.png'
import glaSUV3 from '../../../../../../assets/imgCar/topographic/GLA-SUV/GLA-SUV3.png'

import glb1 from '../../../../../../assets/imgCar/topographic/GLB/GLB1.png'
import glb2 from '../../../../../../assets/imgCar/topographic/GLB/GLB2.png'
import glb3 from '../../../../../../assets/imgCar/topographic/GLB/GLB3.png'

import glc1 from '../../../../../../assets/imgCar/topographic/GLC/GLC1.png'
import glc2 from '../../../../../../assets/imgCar/topographic/GLC/GLC2.png'
import glc3 from '../../../../../../assets/imgCar/topographic/GLC/GLC3.png'

import glcCoupe1 from '../../../../../../assets/imgCar/topographic/GLC_coupe/GLC_coupe1.png'
import glcCoupe2 from '../../../../../../assets/imgCar/topographic/GLC_coupe/GLC_coupe2.png'
import glcCoupe3 from '../../../../../../assets/imgCar/topographic/GLC_coupe/GLC_coupe3.png'

import gle1 from '../../../../../../assets/imgCar/topographic/GLE/GLE1.png'
import gle2 from '../../../../../../assets/imgCar/topographic/GLE/GLE2.png'
import gle3 from '../../../../../../assets/imgCar/topographic/GLE/GLE3.png'

import gleCoupe1 from '../../../../../../assets/imgCar/topographic/GLE_coupe/GLE_coupe1.png'
import gleCoupe2 from '../../../../../../assets/imgCar/topographic/GLE_coupe/GLE_coupe2.png'
import gleCoupe3 from '../../../../../../assets/imgCar/topographic/GLE_coupe/GLE_coupe3.png'

import gls1 from '../../../../../../assets/imgCar/topographic/GLS/GLS1.png'
import gls2 from '../../../../../../assets/imgCar/topographic/GLS/GLS2.png'
import gls3 from '../../../../../../assets/imgCar/topographic/GLS/GLS3.png'

import merMBGLS1 from '../../../../../../assets/imgCar/topographic/Mer-MB-GLS/Mer-MB-GLS1.png'
import merMBGLS2 from '../../../../../../assets/imgCar/topographic/Mer-MB-GLS/Mer-MB-GLS2.png'
import merMBGLS3 from '../../../../../../assets/imgCar/topographic/Mer-MB-GLS/Mer-MB-GLS3.png'

import SetDataTopogaphic from './sendData'

export default function DataCarTopogaphic({ children }) {

    let data = [{
        "name": "GLA SUV",
        "trademark": "AMG",
        "price": "Giá Từ 3.430.000.000 ₫",
        "kind": "",
        "img0": glaSUV1,
        "img1": glaSUV2,
        "img2": glaSUV3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLB",
        "trademark": "AMG",
        "price": "Giá Từ 2.089.000.000 ₫",
        "kind": "",
        "img0": glb1,
        "img1": glb2,
        "img2": glb3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLC",
        "price": "Giá Từ 1.909.000.000 ₫",
        "kind": "",
        "img0": glc1,
        "img1": glc2,
        "img2": glc3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLC Coupé",
        "price": "Giá Từ 3.129.000.000 ₫",
        "kind": "",
        "img0": glcCoupe1,
        "img1": glcCoupe2,
        "img2": glcCoupe3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLE",
        "price": "Giá Từ 4.619.000.000 ₫",
        "kind": "",
        "img0": gle1,
        "img1": gle2,
        "img2": gle3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLE Coupé",
        "trademark": "AMG",
        "price": "Giá Từ 8.199.000.000 ₫",
        "kind": "",
        "img0": gleCoupe1,
        "img1": gleCoupe2,
        "img2": gleCoupe3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "GLS",
        "price": "Giá Từ 5.309.000.000 ₫",
        "kind": "",
        "img0": gls1,
        "img1": gls2,
        "img2": gls3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "G-Clas",
        "trademark": "AMG",
        "price": "Giá Từ 11.750.000.000 ₫",
        "kind": "",
        "img0": gClass1,
        "img1": gClass2,
        "img2": gClass3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "Mercedes-Maybach GLS",
        "trademark": "MAYBACH",
        "price": "Giá Từ 8.679.000.000 ₫",
        "kind": "",
        "img0": merMBGLS1,
        "img1": merMBGLS2,
        "img2": merMBGLS3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    ]


    return <SetDataTopogaphic.Provider value={data}>
        {children}
    </SetDataTopogaphic.Provider>
}