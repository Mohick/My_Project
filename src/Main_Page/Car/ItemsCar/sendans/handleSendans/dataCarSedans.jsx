import SetData from './sendData'
import { createContext } from 'react'
import aClass1 from '../../../../../../assets/imgCar/Sedan/A-Class/A-class1.png'
import aClass2 from '../../../../../../assets/imgCar/Sedan/A-Class/A-class2.png'
import aClass3 from '../../../../../../assets/imgCar/Sedan/A-Class/A-class3.png'

import cClass1 from '../../../../../../assets/imgCar/Sedan/C-Class/C-class1.png'
import cClass2 from '../../../../../../assets/imgCar/Sedan/C-Class/C-class2.png'
import cClass3 from '../../../../../../assets/imgCar/Sedan/C-Class/C-class3.png'

import eClass1 from '../../../../../../assets/imgCar/Sedan/E-Class/E-class1.png'
import eClass2 from '../../../../../../assets/imgCar/Sedan/E-Class/E-class2.png'
import eClass3 from '../../../../../../assets/imgCar/Sedan/E-Class/E-class3.png'

import eqs1 from '../../../../../../assets/imgCar/Sedan/EQS/EQS1.png'
import eqs2 from '../../../../../../assets/imgCar/Sedan/EQS/EQS2.png'
import eqs3 from '../../../../../../assets/imgCar/Sedan/EQS/EQS3.png'

import sclass1 from '../../../../../../assets/imgCar/Sedan/S-Class/S-Class1.png'
import sclass2 from '../../../../../../assets/imgCar/Sedan/S-Class/S-Class2.png'
import sclass3 from '../../../../../../assets/imgCar/Sedan/S-Class/S-Class3.png'

import bmSClass1 from '../../../../../../assets/imgCar/Sedan/mer-maybach-SClass/mer-MB-S-Class1.png'
import bmSClass2 from '../../../../../../assets/imgCar/Sedan/mer-maybach-SClass/mer-MB-S-Class2.png'
import bmSClass3 from '../../../../../../assets/imgCar/Sedan/mer-maybach-SClass/mer-MB-S-Class3.png'
import SetDataSendans from '../Sedans'



export default function DataCarSedans({ children }) {
    let sedans =
        [{
            "name": "EQS",
            "trademark": "Mercedes",
            "price": "Giá Từ 4.839.000.000 ₫",
            "kind": "Xe Điện",
            "img0": eqs1,
            "img1": eqs2,
            "img2": eqs3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "Đăng ký lái thử ",
                "design": "Thiết kế cấu hình xe",
                "findCar": "Tìm Xe Có Sẵn"
            }]
        },
        {
            "name": "A-Class",
            "trademark": "AMG",
            "price": "Giá Từ 2.429.000.000 ₫",
            "kind": "",
            "img0": aClass1,
            "img1": aClass2,
            "img2": aClass3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "Đăng ký lái thử ",
                "design": "Thiết kế cấu hình xe",
                "findCar": ""
            }]
        },
        {
            "name": "C-Class",
            "price": "Giá Từ 1.709.000.000 ₫",
            "kind": "",
            "img0": cClass1,
            "img1": cClass2,
            "img2": cClass3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "Đăng ký lái thử ",
                "design": "Thiết kế cấu hình xe",
                "findCar": "Tìm Xe Có Sẵn"
            }]
        },
        {
            "name": "E-Class",
            "price": "Giá Từ 2.159.000.000 ₫",
            "kind": "",
            "img0": eClass1,
            "img1": eClass2,
            "img2": eClass3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "Đăng ký lái thử ",
                "design": "Thiết kế cấu hình xe",
                "findCar": "Tìm Xe Có Sẵn"
            }]
        },
        {
            "name": "S-Class",
            "price": "Giá Từ 5.039.000.000 ₫",
            "kind": "",
            "img0": sclass1,
            "img1": sclass2,
            "img2": sclass3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "Đăng ký lái thử ",
                "design": "Thiết kế cấu hình xe",
                "findCar": "Tìm Xe Có Sẵn"
            }]
        },
        {
            "name": "Mercedes-Maybach S-Class",
            "price": "Giá Từ 8.199.000.000 ₫",
            "trademark": "MAYBACH",
            "kind": "",
            "img0": bmSClass1,
            "img1": bmSClass2,
            "img2": bmSClass3,
            "showMore": [{
                "findMore": "Tìm hiểu thêm",
                "drive": "",
                "design": "Thiết kế cấu hình xe",
                "findCar": "Tìm Xe Có Sẵn"
            }]
        },
        ]


    let a = 123
    return (<SetData.Provider value={sedans}>
        {children}
    </SetData.Provider>)
}









