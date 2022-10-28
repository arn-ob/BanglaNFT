import { useState } from "react";

// components
import Header from "../components/header";
import Swipers from "../components/swiper";
import Tenet from '../components/tenet'


export default function Home() {

    const [tenets, setTenets] = useState([
        {
            name: 'test 23',
            trx: 1,
        },
        {
            name: 'test 24',
            trx: 2,
        },
        {
            name: 'test 21',
            trx: 6,
        },
        {
            name: 'test 21',
            trx: 6,
        }
    ])

    return (
        <>
            <Header />

            <div className="container mx-auto px-4 py-8 flex items-center">
                <Swipers />
            </div>

            <div className=" container mx-auto">
                <Tenet
                    tenet={tenets}
                />
            </div>

            <div className="mb-10" /> 
        </>
    )
}