export default function DropDown(props) {
return <ul className={`dropdown-menu min-w-max absolute ${props.visibility} bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 ${props.visibility} m-0 bg-clip-padding border-none left-auto right-0 ${props.visibility}`}>
<li><a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-tw-purple hover:bg-gray-100" href="#">Action</a></li>
<li><a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-tw-purple hover:bg-gray-100" href="#">Another action</a></li>
<li><a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-tw-purple hover:bg-gray-100" href="#">Something else here</a></li>
</ul>
}
