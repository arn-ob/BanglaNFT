// components
import { useEffect, useState } from "react";
import { Button, Skeleton } from 'antd'
import Header from "../components/header";
import Table from "../components/table";
import axios from "axios";


export default function Details() {

    const [traxList, setTraxList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTraxlist();
    }, [])

    const getTraxlist = async () => {
        setLoading(true);

        let data = await axios.post('/api/traxList')

        setTraxList(data.data);
        setLoading(false);
    }

    return (
        <>
            <Header />

            <div className="container mx-auto">
     
                <div className="mt-5">
                    <Button onClick={getTraxlist}>Refresh</Button>
                </div>

                <Skeleton loading={loading}>
                    <Table traxList={traxList} />
                </Skeleton>
            </div>
        </>
    )
}