import Image from "next/image";
import {  ShoppingCart, Heart, Search ,CheckSquare2Icon } from "lucide-react";

export default function ProductPage() {
    return (
    <div>
      <div className="grid grid-col lg:grid-col gap-2 p-6 bg-gray-50">
        
        {/* Sidebar Section */}
        <div className="lg:w-1/4 w-full space-y-8 mt-8">
        
        <div className="">
              <h2 className="font-bold text-lg mb-3 text-[#151875]"> Product Brand </h2>
              <ul>
                <li > ☑ Coaster Furniture </li>
              </ul>
            </div>
          {/* Discount Offer */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-3">Discount Offer</h2>
            <ul className="space-y-2 text-gray-600">
              <li>✅ 20% Cashback</li>
              <li>✅ 5% Cashback Offer</li>
              <li>✅ 25% Discount Offer</li>
            </ul>
          </div>
  
          {/* Rating Item */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-3">Rating Item</h2>
            <ul className="space-y-1">
              <li>⭐ ⭐ ⭐ ⭐ ⭐ (321)</li>
              <li>⭐ ⭐ ⭐ ⭐ ☆ (176)</li>
              <li>⭐ ⭐ ⭐ ☆ ☆ (92)</li>
              <li>⭐ ⭐ ☆ ☆ ☆ (89)</li>
            </ul>
          </div>
  
          {/* Categories */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-3">Categories</h2>
            <ul className="space-y-1 text-gray-600">
              <li>☑ Prestashop</li>
              <li>☑ Magento</li>
              <li>☑ Bigcommerce</li>
              <li>☑ osCommerce</li>
              <li>☑ 3dcart</li>
              <li>☑ Bags</li>
              <li>☑ Accessories</li>
            </ul>
          </div>
  
          {/* Price Filter */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-3">Price Filter</h2>
            <ul className="space-y-2">
              <li className="text">☑</li>
              <li>☑ $150.00 - $350.00</li>
              <li>☑ $350.00 - $450.00</li>
              <li>☑ $450.00 +</li>

            </ul>
            <CheckSquare2Icon size={18}/>
          </div>
  
          {/* Color Filter */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-3">Filter By Color</h2>
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-2 absolute top-1/5 left-1/4">
        <div className=" p-6 ml-6   ">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (6).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Curabitur lectus
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>

        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (6).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Curabitur lectus
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        </div>
    </div>
    </div>
    )
}
