import TopBar from '../components/topbar';
import Image from 'next/image';
import Footer from '../components/footer';
import Link from 'next/link';

const imagePaths = [
  '/Rectangle 34.png',
  '/Rectangle 35.png',
  '/Rectangle 36.png',
  '/Rectangle 37.png',
  '/Rectangle 38.png',
];

export default function ShoppingCart() {
  return (
    <div className='bg-[#F5F5F5] w-[#1920] h-[#1926]'>
      <TopBar />
        <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shopping Cart</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/product" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shopping Cart</span>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen py-12 px-4 md:px-8">
        <div className="bg-white max-w-7xl mx-auto">
          {/* Header */}
          {/* <h1 className="text-2xl font-bold text-blue-900">Shopping Cart</h1> */}

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Section: Product Table */}
            <div className="lg:col-span-2 bg-white p-6 ml-16 mt-10 space-y-10 ">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left font-bold text-[#1D3178] py-4">Product</th>
                    <th className="text-left font-bold text-[#1D3178] py-4">Price</th>
                    <th className="text-left font-bold text-[#1D3178] py-4">Quantity</th>
                    <th className="text-left font-bold text-[#1D3178] py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {imagePaths.map((path, index) => (
                    <tr key={index} className="border-b border-[#E1E1E4]">
                      <td className="py-4">
                        <div className="flex items-center">
                          <Image
                            src={path}
                            alt={`Product ${index + 1}`}
                            width={100}
                            height={100}
                            className="w-16 h-16 rounded mr-4"
                          />
                          <div>
                            <p className="font-semibold text-gray-700">
                              Product {index + 1}
                            </p>
                            <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
                            <p className="text-sm text-[#A1A8C1]">Size: XL</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-[#15245E]">$32.00</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="w-6 h-6 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                            -
                          </button>
                          <span className="px-3 text-gray-700">1</span>
                          <button className="w-6 h-6 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-gray-700">$32.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Cart Buttons */}
              <div className="flex justify-between mt-6">
                <button className="bg-[#FB2E86] hover:bg-pink-600 text-white py-2 px-6 ">
                  Update Cart
                </button>
                <button className="bg-[#FB2E86] hover:bg-pink-600 text-white py-2 px-6">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Right Section: Totals and Shipping */}
            <div className="space-y-6 mt-16">
              {/* Cart Totals */}
              <h2 className="text-lg text-center font-bold text-[#1D3178]">Cart Totals</h2>
              <div className="bg-[#F4F4FC] p-6 rounded-lg shadow  ">
                {/* <h2 className="text-lg font-bold text-blue-900">Cart Totals</h2> */}
                <div className="mt-4 space-y-8">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotals:</p>
                    <p className="font-bold text-gray-700">£160.00</p> {/* Update subtotal as needed */}
                  </div>
                  <div className='border-b-2 border-[#E8E6F1]'></div>

                  <div className="flex justify-between">
                    <p className="text-gray-600">Totals:</p>
                    <p className="font-bold text-gray-700">£160.00</p> {/* Update total as needed */}
                  </div>

                  <div className='border-b-2 border-[#E8E6F1]'></div>

                  <p className="text-sm text-[#8A91AB] mt-2">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 ">
                  Proceed To Checkout
                </button>
              </div>

              {/* Calculate Shipping */}
              <h2 className="text-lg text-center font-bold text-[#1D3178]">
                  Calculate Shipping
                </h2>
              <div className="bg-[#F4F4FC] p-6 rounded-lg shadow">
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
                  />
                  <button
                    type="submit"
                    className="w-48 bg-[#FB2E86] hover:bg-pink-600 text-white py-2 px-6 "
                  >
                    Calculate Shipping
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}