import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Whitechapel Khela Ghar
            </h3>
            <p>109 New Road, London E1 1HJ</p>
            <p>Mobile: 07405 282346, 07944 521471</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-gray-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-gray-300">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <p>Monday - Sunday: 05:00 PM - 11:30 PM</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2024 Whitechapel Khela Ghar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
