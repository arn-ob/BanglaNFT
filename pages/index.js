import axios from "axios";
import { useEffect, useState } from "react";

// components
import Header from "../components/header";
import Tenet from '../components/tenet'


export default function Home() {

    const [tenets, setTenets] = useState([])

    useEffect(() => {
        findUser();
    }, [])

    const findUser = async () => {
        let data = await axios.post("/api/list")
        setTenets(data.data)
    }

    return (
        <>
            <Header />

            <div className="container mx-auto px-4 py-8 flex items-center">
                <p className="text-xl">
                    Welcome to BanglaNFT
                </p>
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