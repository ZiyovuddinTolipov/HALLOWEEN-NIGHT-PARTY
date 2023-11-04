
import logo from "../assets/logo.svg"
export default function Navbar() {
  return (
    <nav className="py-10 text-white  w-full flex max-w-[1400px] mx-auto justify-between">
      <div className='flex items-center gap-2 font-semibold'>
        <img src={logo} alt="logo of helloween" />
        <h2>SPOOKY HOLIDAY</h2>
      </div>
      <ul className="flex gap-7">
        <li>ABOUT EVENT</li>
        <li>RULES</li>
        <li>GALLERY</li>
        <li>PRICES</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}
