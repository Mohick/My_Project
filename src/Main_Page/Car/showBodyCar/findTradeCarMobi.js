import cssCar from '../Car.module.scss'
import cssModalTradeMard from '../modalTradeMarkMer.module.scss'

export function findTradeMarkAll(e) {
    let nameTradeMark = e.target.innerText
    e.target.classList.add(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.form}`).style.display = 'none'
    document.querySelector(`.${cssModalTradeMard.merEQ}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merAMG}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merMB}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssCar.box_title_TradeMark}`).innerHTML = nameTradeMark

    let mobirSedans = document.querySelector(`.${cssCar.sedansMobi}`).style.display = 'block'
    let mobiMerSedans = document.querySelector(`.${cssCar.MerSedansMobi}`).style.display = 'none'
    let mobiAMGSedans = document.querySelector(`.${cssCar.AMGSendansMobi}`).style.display = 'none'
    let mobiCoupeSedans = document.querySelector(`.${cssCar.MBSedansMobi}`).style.display = 'none'

    let mobirSUVMobi = document.querySelector(`.${cssCar.SUVMobi}`).style.display = 'block'
    let mobiMerSUVMobi = document.querySelector(`.${cssCar.MerSUVMobi}`).style.display = 'none'
    let mobiAMGSUVMobi = document.querySelector(`.${cssCar.AMGSUVMobi}`).style.display = 'none'
    let mobiMBSUVMobi = document.querySelector(`.${cssCar.MBSUVMobi}`).style.display = 'none'

    let mobirCoupeMobi = document.querySelector(`.${cssCar.CoupeMobi}`).style.display = 'block'
    let mobiMerCoupeMobi = document.querySelector(`.${cssCar.MerCoupeMobi}`).style.display = 'none'
    let mobiAMGCoupeMobi = document.querySelector(`.${cssCar.AMGCoupeMobi}`).style.display = 'none'
    let mobiMBCoupeMobi = document.querySelector(`.${cssCar.MBCoupeMobi}`).style.display = 'none'


}
export function findTradeMarkEQ(e) {
    let nameTradeMark = e.target.innerText
    e.target.classList.add(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merEQ}`)
    document.querySelector(`.${cssModalTradeMard.form}`).style.display = 'none'
    document.querySelector(`.${cssModalTradeMard.allCar}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merAMG}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merMB}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssCar.box_title_TradeMark}`).innerHTML = nameTradeMark

    let mobirSedans = document.querySelector(`.${cssCar.sedansMobi}`).style.display = 'none'
    let mobiMerSedans = document.querySelector(`.${cssCar.MerSedansMobi}`).style.display = 'block'
    let mobiAMGSedans = document.querySelector(`.${cssCar.AMGSendansMobi}`).style.display = 'none'
    let mobiCoupeSedans = document.querySelector(`.${cssCar.MBSedansMobi}`).style.display = 'none'

    let mobirSUVMobi = document.querySelector(`.${cssCar.SUVMobi}`).style.display = 'none'
    let mobiMerSUVMobi = document.querySelector(`.${cssCar.MerSUVMobi}`).style.display = 'block'
    let mobiAMGSUVMobi = document.querySelector(`.${cssCar.AMGSUVMobi}`).style.display = 'none'
    let mobiMBSUVMobi = document.querySelector(`.${cssCar.MBSUVMobi}`).style.display = 'none'

    let mobirCoupeMobi = document.querySelector(`.${cssCar.CoupeMobi}`).style.display = 'none'
    let mobiMerCoupeMobi = document.querySelector(`.${cssCar.MerCoupeMobi}`).style.display = 'block'
    let mobiAMGCoupeMobi = document.querySelector(`.${cssCar.AMGCoupeMobi}`).style.display = 'none'
    let mobiMBCoupeMobi = document.querySelector(`.${cssCar.MBCoupeMobi}`).style.display = 'none'

}
export function findTradeMarkAMG(e) {
    let nameTradeMark = e.target.innerText
    e.target.classList.add(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merAMG}`)
    document.querySelector(`.${cssModalTradeMard.form}`).style.display = 'none'
    document.querySelector(`.${cssModalTradeMard.merEQ}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.allCar}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merMB}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssCar.box_title_TradeMark}`).innerHTML = nameTradeMark

    let mobirSedans = document.querySelector(`.${cssCar.sedansMobi}`).style.display = 'none'
    let mobiMerSedans = document.querySelector(`.${cssCar.MerSedansMobi}`).style.display = 'none'
    let mobiAMGSedans = document.querySelector(`.${cssCar.AMGSendansMobi}`).style.display = 'block'
    let mobiCoupeSedans = document.querySelector(`.${cssCar.MBSedansMobi}`).style.display = 'none'

    let mobirSUVMobi = document.querySelector(`.${cssCar.SUVMobi}`).style.display = 'none'
    let mobiMerSUVMobi = document.querySelector(`.${cssCar.MerSUVMobi}`).style.display = 'none'
    let mobiAMGSUVMobi = document.querySelector(`.${cssCar.AMGSUVMobi}`).style.display = 'block'
    let mobiMBSUVMobi = document.querySelector(`.${cssCar.MBSUVMobi}`).style.display = 'none'

    let mobirCoupeMobi = document.querySelector(`.${cssCar.CoupeMobi}`).style.display = 'none'
    let mobiMerCoupeMobi = document.querySelector(`.${cssCar.MerCoupeMobi}`).style.display = 'none'
    let mobiAMGCoupeMobi = document.querySelector(`.${cssCar.AMGCoupeMobi}`).style.display = 'block'
    let mobiMBCoupeMobi = document.querySelector(`.${cssCar.MBCoupeMobi}`).style.display = 'none'
}
export function findTradeMarkMayBach(e) {
    let nameTradeMark = e.target.innerText
    e.target.classList.add(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merMB}`)
    document.querySelector(`.${cssModalTradeMard.form}`).style.display = 'none'
    document.querySelector(`.${cssModalTradeMard.merEQ}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.allCar}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssModalTradeMard.merAMG}`).classList.remove(cssModalTradeMard.localUser)
    document.querySelector(`.${cssCar.box_title_TradeMark}`).innerHTML = nameTradeMark

    let mobirSedans = document.querySelector(`.${cssCar.sedansMobi}`).style.display = 'none'
    let mobiMerSedans = document.querySelector(`.${cssCar.MerSedansMobi}`).style.display = 'none'
    let mobiAMGSedans = document.querySelector(`.${cssCar.AMGSendansMobi}`).style.display = 'none'
    let mobiCoupeSedans = document.querySelector(`.${cssCar.MBSedansMobi}`).style.display = 'block'

    let mobirSUVMobi = document.querySelector(`.${cssCar.SUVMobi}`).style.display = 'none'
    let mobiMerSUVMobi = document.querySelector(`.${cssCar.MerSUVMobi}`).style.display = 'none'
    let mobiAMGSUVMobi = document.querySelector(`.${cssCar.AMGSUVMobi}`).style.display = 'none'
    let mobiMBSUVMobi = document.querySelector(`.${cssCar.MBSUVMobi}`).style.display = 'block'

    let mobirCoupeMobi = document.querySelector(`.${cssCar.CoupeMobi}`).style.display = 'none'
    let mobiMerCoupeMobi = document.querySelector(`.${cssCar.MerCoupeMobi}`).style.display = 'none'
    let mobiAMGCoupeMobi = document.querySelector(`.${cssCar.AMGCoupeMobi}`).style.display = 'none'
    let mobiMBCoupeMobi = document.querySelector(`.${cssCar.MBCoupeMobi}`).style.display = 'block'

}