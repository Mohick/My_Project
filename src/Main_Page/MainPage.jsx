import Discorver from "./Discover/Discover"
import Header from "./Header/Header"
import Navigation from "./Nav/Nav"
import Endow from "./Endow/Endow"
import FindMore from "./FindMore/FindMore"
import Car from "./car/Car"
import BoxChat from "../BoxChat/BoxChat"
import TableSupport from "./TableSupport/TableSupport"
import Footer from "../Footer/Footer"
import handleSCroll from './HandleScroll'
import { useEffect, useState } from "react"

export default function MainPage() {

    let [scroll, setScroll] = useState()

    useEffect(() => {
        let handleScroll = setTimeout(() => {
            setScroll(handleSCroll())
        }, 300);

        return () => clearTimeout(handleScroll)
    })

    return (<>
        <Header />
        <Navigation />
        <Discorver />
        <Endow />
        <FindMore />
        <Car />
        <TableSupport />
        <Footer />
        <BoxChat />
    </>
    )
}