import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Image from 'next/image';
 import Link from 'next/link';
 import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function BlogPage() {
    return (
      <div className='min-h-screen'>
         <TopBar/>
        <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shop List</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 p-5  bg-white pl-32 mb-20">

        {/* Blog Posts Section */}
        <div className=" space-y-8 ">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md ">
            <Image
              src="/1 (1).png"
              alt="Blog Image 1"
              width={600}
              height={200}
              className="w-[970px] h-[453px]  object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="/blog2" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
  
          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md">
            <Image
              src="/1 (2).png"
              alt="Blog Image 2"
              width={400}
              height={400}
              className="w-[970px] h-[453px] object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Aenean vitae in aliquam ultricies lectus. Etiam.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="/blog2" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
  
          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md">
            <Image
              src="/1 (3).png"
              alt="Blog Image 3"
              width={500}
              height={400}
              className="w-[970px] h-[453px] object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Sit nam congue feugiat nisl, mauris amet nisi.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="/blog2" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
  
        {/* Sidebar Section */}
        
        <div className=" space-y-6 pr-32">
          {/* Search */}
          <div className="bg-white p-4 ">
            <h2 className="font-bold text-lg mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded focus:outline-pink-500"
            />
          </div>
  
   {/* Categories */}
<div className="mb-6 ">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Categories</h3>
  <div className="grid grid-cols-2 gap-4 text-blue-900">
    <button className="bg-pink-500 text-white  py-2 rounded-lg font-semibold">
      Hobbies <span className="text-sm">(14)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
  </div>
 </div>
          {/* Recent Post */}
 <div className="mb-6 p-4">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Recent Post</h3>
  <div className="space-y-4">
    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <Image
        src="/127.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px]  object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <Image
        src="/126.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px] object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <Image
        src="/128.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px]  object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <Image
        src="/123.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px]  object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
  </div>
</div>

  
          {/* Sale Product */}
          <div className="mb-6 p-4">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Recent Post</h3>
  <div className="space-y-4">
          <div className="flex items-center space-x-4">
      <Image
        src="/122.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px]  object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Image
        src="/121.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px]  object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Image
        src="/124.png"
        alt="Post Image"
        width={100}
        height={100}
        className="w-[70px] h-[57px] object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
  </div>
  </div>
         
  
            {/* Offer Product Section */}
<div className="mb-2 w-[267px] h-[282px] p-4">
  <h2 className="font-bold text-2xl text-blue-900 mb-6">Offer product</h2>
  
  <div className="grid grid-cols-2 gap-6">
    {/* Product 1 */}
    <div className="text-center">
      <Image
        src="/Mask Group (3).png" 
        alt="Product 1" 
        width={100}
        height={100}
        className="w-[126px] h-[80px] object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Duis lectus est.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 2 */}
    <div className="text-center">
      <Image
        src="/Mask Group (4).png" 
        alt="Product 2"
        width={100}
        height={100}
        className="w-[126px] h-[80px]  object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Sed placerat.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 3 */}
    <div className="text-center">
      <Image
        src="/Mask Group (4).png" 
        alt="Product 3" 
        width={100}
        height={100}
        className="w-[126px] h-[80px]  object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Netus proin.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 4 */}
    <div className="text-center">
      <Image
        src="/Mask Group (5).png" 
        alt="Product 4" 
        width={100}
        height={100}
        className="w-[126px] h-[80px]  object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Platea in.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>
  </div>
</div>

{/* 
 {/* Follow Us */}
 {/* <div className="bg-white p-4 ">
            <h2 className="font-bold text-lg mb-3 text-[#151875]">Follow</h2>
            <div className="flex space-x-4">
            <Image
        src="/Group 224.png" 
        alt="Product 4" 
        width={40}
        height={40}
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
               </div>
          </div> */} 
              <div className="p-4 pt-40">
      {/* Social Follow Section */}
      <div className="mb-2 w-[126px] h-[78px] p-4">
        <h3 className="text-2xl font-bold text-indigo-900">Follow</h3>
        <div className="flex items-center space-x-4 mt-4">
          <a
            href="#"
            className="bg-white  p-3 flex items-center justify-center text-indigo-700 hover:scale-110 transition-transform"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="bg-white p-3 flex items-center justify-center text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="bg-white p-3 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Tags Section */}
      <div className='w-[227px] h-[104px] pt-10 p-4'>
        <h1 className="text-2xl font-bold text-indigo-900 mb-4">Tags</h1>
        <div className="flex flex-wrap mt-4 space-x-4">
          <a
            href="#"
            className="text-indigo-700 underline hover:text-indigo-900 transition-colors"
          >
            General
          </a>
          <a
            href="#"
            className="text-pink-500 underline hover:text-pink-700 transition-colors"
          >
            Atsanil
          </a>
          <a
            href="#"
            className="text-indigo-700 underline hover:text-indigo-900 transition-colors"
          >
            Insas.
          </a>
          <a
            href="#"
            className="text-indigo-700 underline hover:text-indigo-900 transition-colors"
          >
            Bibsaas
          </a>
          <a
            href="#"
            className="text-indigo-700 underline hover:text-indigo-900 transition-colors"
          >
            Nulla.
          </a>
        </div>
      </div>
    </div>

       
        </div>
        </div>
        <BrandLogos/>
        <Footer/>
      
      </div>
    );
  }
  



















