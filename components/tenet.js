export default function Tenet({ tenet }) {
    return (
        <div className="bg-opacity-10">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-4 group">
                {
                    Array.isArray(tenet) && tenet.length !== 0 && tenet.map(item => {
                        return (
                            <a href="/details">
                                <div className="border m-2 shadow p-10 flex flex-col items-center text-center group">
                                    <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200">
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
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}