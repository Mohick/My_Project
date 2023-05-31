
import amgCoupe1 from '../../../../../../assets/imgCar/coupe/mer-AMG_coupe/mer-AMG_coupe1.png'
import amgCoupe2 from '../../../../../../assets/imgCar/coupe/mer-AMG_coupe/mer-AMG_coupe2.png'
import amgCoupe3 from '../../../../../../assets/imgCar/coupe/mer-AMG_coupe/mer-AMG_coupe3.png'

import amgGt1 from '../../../../../../assets/imgCar/coupe/Mer-AMG_GT_4-door_Coupe/Mer-AMG_GT_4-door_Coupe1.png'
import amgGt2 from '../../../../../../assets/imgCar/coupe/Mer-AMG_GT_4-door_Coupe/Mer-AMG_GT_4-door_Coupe2.png'
import amgGt3 from '../../../../../../assets/imgCar/coupe/Mer-AMG_GT_4-door_Coupe/Mer-AMG_GT_4-door_Coupe3.png'

import SetDataCoupe from './sendData'

export default function DataCoupe({ children }) {
    let data = [{
        "name": "Mercedes-AMG GT Coupé",
        "trademark": "AMG",
        "price": "Giá Từ 11.590.000.000 ₫",
        "kind": "",
        "img0": amgCoupe1,
        "img1": amgCoupe2,
        "img2": amgCoupe3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    },
    {
        "name": "Mercedes-AMG GT 4-door Coupé",
        "trademark": "AMG",
        "price": "Giá Từ 6.719.000.000 ₫",
        "kind": "",
        "img0": amgGt1,
        "img1": amgGt2,
        "img2": amgGt3,
        "showMore": [{
            "findMore": "Tìm hiểu thêm",
            "drive": "Đăng ký lái thử ",
            "design": "Thiết kế cấu hình xe",
            "findCar": "Tìm Xe Có Sẵn"
        }]
    }
    ]

    return <SetDataCoupe.Provider value={data}>
        {children}
    </SetDataCoupe.Provider>
}


