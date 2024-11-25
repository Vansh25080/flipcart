import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Flipcart</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/search" className="hover:text-gray-300">Search</Link></li>
          <li><Link href="/cart" className="hover:text-gray-300">Your Cart</Link></li>
          <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

