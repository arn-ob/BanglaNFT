// components
import { useEffect, useState } from "react";
import Header from "../components/header";
import Table from "../components/table";

import axios from "axios";

export default function Details() {

    const [traxList, setTraxList] = useState([])

    useEffect(() => {
        getTraxlist();
    }, [])

    const getTraxlist = async () => {
       let data = await axios.post('/api/traxList')
        setTraxList(data.data);
    }

    return (
        <>
            <Header />

            <div className="container mx-auto">
                <Table traxList={traxList} />
            </div>
        </>
    )
}