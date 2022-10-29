import { useState } from "react";

// components
import Header from "../components/header";
import Tenet from '../components/tenet'

export default function Explore() {

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
        },
        {
            name: 'test 21',
            trx: 6,
        }
    ])

    return (
        <>
            <Header />

            <div className=" container mx-auto">
                <Tenet
                    tenet={tenets}
                />
            </div>

        </>
    )
}