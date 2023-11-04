
import logo from "../assets/logo.svg"
export default function Navbar() {
  return (
    <nav className="py-10 text-white">
        <div className='flex max-w-[1400px] mx-auto items-center gap-2 font-semibold'>
            <img src={logo} alt="logo of helloween" />
            <h2>SPOOKY HOLIDAY</h2>
        </div>
    </nav>
  )
}
