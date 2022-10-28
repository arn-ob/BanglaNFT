export default function Header() {
    return (
        <>
            <header className="bg-white">
                <div className="container mx-auto px-4 py-8 flex items-center">
                    <div onClick={() =>  window.location.href = "/"} className="mr-auto md:w-48 flex-shrink-0">
                        BanlaNFT
                    </div>

                    <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
                    </div>

                    <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
                    </div>

                    <nav className="contents">
                        <ul className="ml-4 xl:w-48 flex items-center justify-end">
                            <li className="ml-2 lg:ml-4 relative inline-block">
                                <a className="" href="/explore">
                                    Explore
                                </a>
                            </li>
                            <li className="ml-2 lg:ml-4 relative inline-block">
                                <div className="">
                                    <a className="">
                                        <img 
                                            className="h-9 lg:h-10 p-2 text-gray-500" 
                                            src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Menu-8-bits-others-inmotus-design.png" 
                                        />
                                    </a>
                                </div>

                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}