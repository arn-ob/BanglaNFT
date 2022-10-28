export default function Tenet({ tenet }) {
    return (
        <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group">
                {
                    Array.isArray(tenet) && tenet.length !== 0 && tenet.map(item => {
                        return (
                            <div className="p-10 flex flex-col items-center text-center group">
                                <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg> 
                                    */}

                                    <img
                                        className="h-10 w-10"
                                        src="https://img.icons8.com/office/16/000000/human-head.png"
                                    />
                                </span>

                                <p className="text-xl font-medium text-slate-700 mt-3">
                                    {item.name}
                                </p>
                                <p className="mt-2 text-sm text-slate-500">
                                    Total Trx: 10
                                </p>

                                <div className="mt-2">
                                    <button>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}