// components
import Header from "../components/header";
import Table from "../components/table";


export default function Details() {
    return (
        <>
            <Header />

            <div className="container mx-auto">
                <div>
                    <div className="border m-2 shadow p-10 flex flex-col items-center text-center group">
                        <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200">
                            <img
                                className="h-10 w-10"
                                src="https://img.icons8.com/office/16/000000/human-head.png"
                            />
                        </span>

                        <p className="text-xl font-medium text-slate-700 mt-3">
                            Test 1
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Total Trx: 10
                        </p>

                    </div>
                </div>

                <Table />
            </div>
        </>
    )
}