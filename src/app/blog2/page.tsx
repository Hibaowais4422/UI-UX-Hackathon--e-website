import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Image from 'next/image';
 import Link from 'next/link';
 import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


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
             
               <br />
             <br/>
             <div>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit harum commodi vero ipsam quisquam, enim quam eveniet, magnam consequuntur excepturi! Dolor, quod labore voluptatibus incidunt iusto at fuga odio.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime, cumque porro distinctio ullam ad odit consequatur minima velit libero odio esse eveniet fuga vero. Quia necessitatibus recusandae aperiam libero?
               </div>

             </div>
           </div>


           <div className='bg-[#FAFAFB] border-l-2 border-[#FC45A0] text-[#969CB4] py-8 px-6'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut quia? Deserunt placeat sapiente eius, saepe perferendis cupiditate pariatur tempore fugiat debitis, voluptatum ex nostrum doloremque totam autem dolorem est!
           </div>

             <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2 pb-4' >
               <div className='bg-slate-600 '>
               <div className="bg-white rounded-lg shadow-md">
         <Image
              src="/Rectangle 70.png"
              alt="Blog Image 1"
              width={400}
              height={200}
              className="w-[870px] h-[253px]  object-cover rounded-t-lg"
            />
            </div>
              </div>
              <div className='bg-slate-400 '>
              <div className="bg-white rounded-lg shadow-md">
            <Image
              src="/Rectangle 70 (1).png"
              alt="Blog Image 1"
              width={400}
              height={200}
              className="w-[870px] h-[253px]  object-cover rounded-t-lg"
            />
            </div>
            </div>
            </div>

                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quod reiciendis delectus eos architecto magni illum iste optio natus eligendi voluptas exercitationem, odit doloremque necessitatibus officiis ratione ad tempora consectetur.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {/* Product 1 */}
      <div className="  text-center hover:shadow-lg transition">
        <div className="w-full h-48 ">
          <Image
            src="/Rectangle 63.png"
            alt="Quam sed"
            width={300}
            height={200}
            className=" object-cover w-full h-full"
          />
        </div>
     
<div className="flex items-center space-x-2">
        {/* Title */}
      <h2 className=" text-md text-black">
      Quam sed
      </h2>
       </div>
        {/* Price */}
       <div className="flex items-start  ">
          <span className="text-[#111C85]  text-sm mr-1">$32.00</span>
          <span className="text-[#FF2AAA] line-through text-sm ">$56.00</span>

        {/* Rating */}
        <div className="flex text-sm ">
          <span className="text-[#FFC416] mr-1">★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
      </div>

      {/* Product 2 */}
      <div className=" text-center hover:shadow-lg transition">
        <div className="w-full h-48 mb-4">
          <Image
            src="/Rectangle 63 (1).png"
            alt="Tristique sed"
            width={300}
            height={200}
            className=" object-cover w-full h-full"
          />
        </div>
       
<div className="flex items-center space-x-2">
        {/* Title */}
      <h2 className=" text-md text-black">
      Quam sed
      </h2>
       </div>
        {/* Price */}
       <div className="flex items-start  ">
          <span className="text-[#111C85]  text-sm mr-1">$32.00</span>
          <span className="text-[#FF2AAA] line-through text-sm ">$56.00</span>

        {/* Rating */}
        <div className="flex text-sm ">
          <span className="text-[#FFC416] mr-1">★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="  text-center hover:shadow-lg transition">
        <div className="w-full h-48 mb-4">
          <Image
            src="/Rectangle 63 (4).png"
            alt="A etiam"
            width={300}
            height={200}
            className=" object-cover w-full h-full"
          />
        </div>
             
<div className="flex items-center space-x-2">
        {/* Title */}
      <h2 className=" text-md text-black">
      Quam sed
      </h2>
       </div>
        {/* Price */}
       <div className="flex items-start  ">
          <span className="text-[#111C85]  text-sm mr-1">$32.00</span>
          <span className="text-[#FF2AAA] line-through text-sm ">$56.00</span>

        {/* Rating */}
        <div className="flex text-sm ">
          <span className="text-[#FFC416] mr-1">★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
      </div>

      {/* Product 4 */}
      <div className=" text-center hover:shadow-lg transition">
        <div className="w-full h-48 mb-4">
          <Image
            src="/Rectangle 63 (3).png"
            alt="Mi nisi"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      
        <div className="flex items-center space-x-2">
        {/* Title */}
      <h2 className=" text-md text-black">
      Quam sed
      </h2>
       </div>
        {/* Price */}
       <div className="flex items-start  ">
          <span className="text-[#111C85]  text-sm mr-1">$32.00</span>
          <span className="text-[#FF2AAA] line-through text-sm ">$56.00</span>

        {/* Rating */}
        <div className="flex text-sm ">
          <span className="text-[#FFC416] mr-1">★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
      </div>
    </div>

    <div className="flex items-center  justify-center space-x-4 mt-10">
          {/* Facebook Icon */}
          <div className="w-[50px] h-[50px] bg-[#5625DF] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaFacebookF className="text-white text-2xl" />
          </div>

          {/* Instagram Icon */}
          <div className="w-[50px] h-[50px] bg-[#FF27B7] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaInstagram className="text-white text-2xl" />
          </div>

          {/* Twitter Icon */}
          <div className="w-[50px] h-[50px] bg-[#37DAF3] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaTwitter className="text-white text-2xl" />
          </div>
        </div>
                <div className="container mx-auto px-4 py-2">
      {/* Social Media Section */}
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="text-2xl text-blue-600 hover:text-blue-800">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-2xl text-pink-500 hover:text-pink-700">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-2xl text-blue-400 hover:text-blue-600">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center text-blue-500 text-sm mb-4  bg-[#F7F8FB] px-4 py-4">
        <button className="hover:underline">
          &larr; Previous Post
        </button>
        <button className="hover:underline">
          Next Post &rarr;
        </button>
      </div>

      {/* Blog Posts */}
      <div className="space-y-6">
        <div className="flex items-center bg-[#F7F8FB] shadow-md shadow-black p-4 rounded-lg">
          <Image
            src="/Rectangle 59.png"
            alt="Post Thumbnail"
            width={100}
            height={100}
            className="w-20 h-20 rounded-md mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Sapien ac</h3>
            <p className="text-gray-500 text-sm">Jan 09 2020</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-[#F7F8FB] shadow-sm shadow-black p-4 rounded-lg">
          <Image
            src="/Rectangle 59 (1).png"
            alt="Post Thumbnail"
            width={200}
            height={200}
            className="w-20 h-20 rounded-md mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Augue convo</h3>
            <p className="text-gray-500 text-sm">Aug 18 2020</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
            </p>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="mt-10">
        <form className="space-y-6">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Write Your Email*"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <textarea
            placeholder="Write your comment*"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500 h-32"
          ></textarea>
          <div>
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded" />
              <span>
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Continue Shipping
          </button>
        </form>
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


      <div className="p-4 pt-40">
   
      <div className="p-4">
      {/* Social Follow Section */}
      <div className="mb-2 w-[126px]">
        <h3 className="text-2xl font-bold text-indigo-900">Follow</h3>
        <div className="flex items-center space-x-4 mt-4">
          {/* Facebook Icon */}
          <div className="w-[68px] h-[35px] bg-[#5625DF] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaFacebookF className="text-white text-2xl" />
          </div>

          {/* Instagram Icon */}
          <div className="w-[68px] h-[35px] bg-[#FF27B7] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaInstagram className="text-white text-2xl" />
          </div>

          {/* Twitter Icon */}
          <div className="w-[68px] h-[35px] bg-[#37DAF3] flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            <FaTwitter className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>


      {/* Tags Section */}
      <div className='w-[227px] h-[104px]  p-4'>
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
  
