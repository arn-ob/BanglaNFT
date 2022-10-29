import { useState } from "react";
import Header from "../components/header";
import axios from 'axios'
import { Button, message } from "antd";

export default function Registration() {

    const [fstname, setFstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    const [nid, setNid] = useState("");
    const [address, setAddress] = useState("");


    const handleSubmit = async () => {
        await axios.post("http://localhost:3300/create", {
            fst_name: fstname,
            last_name: lastname,
            dob,
            nid,
            address,
        })

        message.destroy()
        message.success("User Created")

    }


    return (
        <>
            <Header />

            <div className="container mx-auto">

                <div className="bg-white rounded px-8 pt-6 mb-4 flex flex-col my-2">
                    <p class="mb-6 text-xl"> Introduction </p>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input onChange={(e) => setFstname(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input onChange={(e) => setLastname(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded px-8 mb-4 flex flex-col">
                    <p class="mb-6 text-xl"> Relation </p>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                DOB
                            </label>
                            <input onChange={(e) => setDob(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                NID
                            </label>
                            <input onChange={(e) => setNid(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                Address
                            </label>
                            <input onChange={(e) => setAddress(e.target.value)} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>

                    </div>
                </div>

                <div className=" container">
                    <button
                        className="mb-10 mx-8 inline-block px-3 py-2 text-xl font-medium text-center text-white transition duration-200 bg-green-800 rounded-lg hover:bg-green-700 ease"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>

        </>
    )
}