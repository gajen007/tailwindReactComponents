export default function NewNavBar() {
return <nav>
    <ul>
        <li className="group relative dropdown px-4 text-tw-violet hover:text-tw-green cursor-pointer font-bold text-base uppercase tracking-wide">
            <a>Dropdown</a>
            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-tw-orange shadow px-6 py-8">
                    <li className="py-1 group">
                        <a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item</a>
                            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                                <ul className="top-0 w-48 bg-tw-orange shadow px-6 py-8">
                                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item A</a></li>
                                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item B</a></li>
                                </ul>
                            </div>
                    </li>
                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item 2</a></li>
                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item 3</a></li>
                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item 4</a></li>
                    <li className="py-1"><a className="block text-tw-violet font-bold text-base uppercase hover:text-tw-green cursor-pointer">Item 5</a></li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
}
