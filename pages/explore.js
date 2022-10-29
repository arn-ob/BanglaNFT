import axios from "axios";
import { useEffect, useState } from "react";

// components
import Header from "../components/header";
import Tenet from '../components/tenet'

export default function Explore() {

    const [tenets, setTenets] = useState([])

    useEffect(() => {
        findUser()
    }, [])

    const findUser = async () => {
        let data = await axios.post("http://localhost:3300/list")
        setTenets(data.data)
    }

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