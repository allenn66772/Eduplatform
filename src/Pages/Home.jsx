import React from 'react'
import Header from '../Components/Header'
import { FaInstagram, FaPhone, FaRegStar, FaUsers } from "react-icons/fa";
import { LuHeadphones, LuShield, LuUsers } from "react-icons/lu";
import { FiBookOpen, FiCalendar, FiDownload, FiUsers } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { FiTarget } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";
import { LuCrown } from "react-icons/lu";
import { TfiTimer } from "react-icons/tfi";
import { FaStar } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsCameraVideo, BsGlobe2 } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoLocationSharp, IoNewspaper } from 'react-icons/io5';
import { GrLineChart, GrYoutube } from 'react-icons/gr';
import { MdLocalPhone, MdMailOutline, MdOutlinePhoneIphone } from 'react-icons/md';
import { SlSocialFacebook } from 'react-icons/sl';

function Home() {
  return (
    <>
    <Header/>
     {/* div 1 */}
 <div className="w-full min-h-171 justify-center items-center flex flex-col lg:flex-row bg-[linear-gradient(135deg,#DB0082_0%,#7B3FE4_45%,#017CBA_100%)] px-6 lg:px-0">
        <div className="w-full max-w-146 h-auto mx-auto lg:mx-13 lg:ms-35 lg:-mt-12.5 mt-7">
            {/* Main para */}
            <div className="w-full h-auto">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="block text-white">Master Your </span>
                  <span className="text-blue-500 block">Academic Goals</span>
                  <span className="block text-white">with Expert</span>
                  <span className="block text-white">Guidence</span>
                </p>
            </div>
            {/* short para */}
            <div className="w-full h-auto mt-4">
                <p className="text-white text-[18px] sm:text-[20px] leading-7.5 sm:leading-[32.5px] font-normal">
                    From school tution to competitive exam preperation,get personalized online coaching that adapts to your learning style and schedule 
                </p>
            </div>
            {/* rating div */}
            <div className="w-full h-auto mt-8 flex flex-wrap gap-5">
                <h4 className="flex gap-2 text-white"><span className="text-yellow-400 text-xl"><FaRegStar /></span>  4.9/5 Rating</h4>
                <h4 className="flex gap-2 text-white"><span className="text-blue-500 text-xl mt-0.5"><LuUsers /></span>50,000+ Students </h4>
                <h4 className="flex gap-2 text-white"><span className="text-amber-600 text-xl mt-0.5"><FiBookOpen /></span>500+ Courses</h4>
            </div>
            {/* button div */}
            <div className="w-full h-auto mt-8 flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-43.5 h-11 bg-blue-500 rounded-xl text-white hover:bg-white hover:text-blue-500">Explore Courses</button>
                <button className="w-full sm:w-[183.6px] h-11 bg-white rounded-xl text-blue-500 flex justify-center items-center gap-2 border border-blue-500 "><span className="text-blue-500 text-xl"><CiPlay1 /></span> Watch Demo</button>
            </div>
        </div>
        {/*  */}
     <div className="w-full max-w-146 lg:w-325 h-75 sm:h-87.5 mx-auto lg:mx-13 lg:mr-36 relative mt-10 lg:mt-0">

  {/* Image container */}
  <div className="w-full h-full rounded-[20px] -mt-2.5 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
      alt="Live Classes"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Live Classes badge — OUTSIDE image */}
  <div className="absolute -top-4.5 left-4 lg:-left-5.5 bg-white px-4 py-2.5 rounded-xl flex items-center gap-2.5
    shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
    <span className="text-[14px] font-medium text-gray-800">
      Live Classes
    </span>
  </div>

  {/* Success Rate badge — OUTSIDE image */}
 <div className="absolute bottom-1 sm:-bottom-4.5  right-4 lg:-right-6 bg-white px-4.5 py-3.5 rounded-[14px]
shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
  <p className="text-[28px] font-bold text-blue-600 leading-none">98%</p>
  <p className="text-[14px] text-gray-600 mt-1">
    Success Rate
  </p>
</div>

</div>
     </div>

     {/* div 2 */}
   <div className="w-full bg-white flex justify-center py-16 px-4">
  <div className="max-w-7xl w-full">

    {/* Heading */}
    <div className="max-w-304 w-full mx-auto text-center mb-14">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Comprehensive Learning Programs
      </h1>

      <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-600">
        <span className="block">
          Choose from our wide range of courses designed to help you achieve your
        </span>
        academic and career goals
      </p>
    </div>

    {/* Cards Grid */}
    <div className="max-w-304 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <FiBookOpen />
        </div>
        <h3 className="font-semibold text-lg mb-2">School Tuition</h3>
        <p className="text-sm text-gray-500 mb-4">
          <span className="block">
            Classes 4–12 covering CBSE, ICSE, and
          </span>
          State syllabus
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Interactive Live Classes</li>
          <li>Doubt Clearing Sessions</li>
          <li>Regular Assessments</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-[#A855F7] rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <LuGraduationCap />
        </div>
        <h3 className="font-semibold text-lg mb-2">College Tuition</h3>
        <p className="text-sm text-gray-500 mb-4">
          <span className="block">
            BSc, BCom, BA, BTech and other
          </span>
          degree programs
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Subject Experts</li>
          <li>Practical Learning</li>
          <li>Project Guidance</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-[#22C55E] rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <FiTarget />
        </div>
        <h3 className="font-semibold text-lg mb-2">Entrance Coaching</h3>
        <p className="text-sm text-gray-500 mb-4">
          <span className="block">NEET, JEE, KEAM, CUET</span>
          preparation
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Mock Tests</li>
          <li>Previous Year Papers</li>
          <li>Rank Prediction</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-[#F97316] rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <GiAchievement />
        </div>
        <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
        <p className="text-sm text-gray-500 mb-4">
          Career-focused skill enhancement programs
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Industry Projects</li>
          <li>Mentor Support</li>
          <li>Certification</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

      {/* CARD 5 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-[#EF4444] rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <LuCrown />
        </div>
        <h3 className="font-semibold text-lg mb-2">Premium Programs</h3>
        <p className="text-sm text-gray-500 mb-4">
          Personalized one-on-one learning experience
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Personal Mentor</li>
          <li>Custom Study Plan</li>
          <li>Progress Tracking</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

      {/* CARD 6 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-16 h-16 bg-[#14B8A6] rounded-xl flex items-center justify-center text-white mb-4 text-2xl">
          <LuUsers />
        </div>
        <h3 className="font-semibold text-lg mb-2">Group Learning</h3>
        <p className="text-sm text-gray-500 mb-4">
          Collaborative learning with peer groups
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside marker:text-blue-500 marker:text-xl">
          <li>Batch Learning</li>
          <li>Peer Interaction</li>
          <li>Group Activities</li>
        </ul>
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
          Explore Courses
        </button>
      </div>

    </div>
  </div>
</div>



    {/* div 3 */}
  <div className="w-full bg-[#F9FAFB] flex justify-center py-16 px-4">
  <div className="max-w-7xl w-full">

    {/* Heading */}
    <div className="max-w-304 w-full mx-auto text-center mb-12">
      <h1 className="text-2xl md:text-3xl font-bold">
        Popular Courses
      </h1>
      <p className="text-gray-500 text-base md:text-lg mt-4">
        Join thousands of students already learning with our top-rated courses
      </p>
    </div>

    {/* Cards */}
    <div className="max-w-304 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/470493341/photo/math-problems.jpg?s=612x612&w=0&k=20&c=zU6ZF4fWtcwTu5MozsyQc_AAGskkPXHyrroU5fxe91Y="
            className="h-45 w-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            44% OFF
          </span>
          <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>
        </div>

        <div className="p-5">
          <div className="flex justify-between mb-3">
            <span className="border text-xs px-3 py-1 rounded-full">Advanced</span>
            <span className="text-sm flex gap-1">
              <FaStar className="text-yellow-400 text-lg" /> 4.8 (12,500)
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2">
            Complete Mathematics for Class 10 CBSE
          </h3>

          <p className="text-sm text-gray-600 mb-4">Dr. Rajesh Kumar</p>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="flex gap-1">
              <TfiTimer className="mt-1" /> 6 months
            </span>
            <span className="flex gap-1">
              <FiBookOpen className="mt-1" /> 180 lessons
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <span className="text-xl font-bold">₹2,999</span>
            <span className="line-through text-gray-400">₹8,999</span>
          </div>

          <button className="w-26 bg-blue-600 text-white py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://www.swamivivekanandauniversity.ac.in/resource/assets/img/mathematics-png.jpg"
            className="h-45 w-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            40% OFF
          </span>
        </div>

        <div className="p-5">
          <div className="flex justify-between mb-3">
            <span className="border text-xs px-3 py-1 rounded-full">Intermediate</span>
            <span className="text-sm flex gap-1">
              <FaStar className="text-yellow-400 text-lg" /> 4.7 (8,900)
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2">
            CBSE Class 12 Physics Complete Course
          </h3>

          <p className="text-sm text-gray-600 mb-4">Prof. Meera Sharma</p>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="flex gap-1">
              <TfiTimer className="mt-1" /> 4 months
            </span>
            <span className="flex gap-1">
              <FiBookOpen className="mt-1" /> 120 lessons
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <span className="text-xl font-bold">₹2,999</span>
            <span className="line-through text-gray-400">₹4,999</span>
          </div>

          <button className="w-26 bg-blue-600 text-white py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://library.brentwoodtn.gov/files/assets/library/v/1/website/main-banner-photos/shelves.jpg"
            className="h-45 w-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            44% OFF
          </span>
          <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>
        </div>

        <div className="p-5">
          <div className="flex justify-between mb-3">
            <span className="border text-xs px-3 py-1 rounded-full">Expert</span>
            <span className="text-sm flex gap-1">
              <FaStar className="text-yellow-400 text-lg" /> 4.9 (15,600)
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2">
            UPSC Prelims & Mains Strategy 2024
          </h3>

          <p className="text-sm text-gray-600 mb-4">IAS Priya Joshi</p>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="flex gap-1">
              <TfiTimer className="mt-1" /> 12 months
            </span>
            <span className="flex gap-1">
              <FiBookOpen className="mt-1" /> 300 lessons
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <span className="text-xl font-bold">₹7,999</span>
            <span className="line-through text-gray-400">₹12,999</span>
          </div>

          <button className="w-26 bg-blue-600 text-white py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://media.assettype.com/tnm/import/sites/default/files/Woman_professional_on_laptop_090621_picxymunna_1200.jpeg"
            className="h-45 w-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            44% OFF
          </span>
        </div>

        <div className="p-5">
          <div className="flex justify-between mb-3">
            <span className="border text-xs px-3 py-1 rounded-full">Intermediate</span>
            <span className="text-sm flex gap-1">
              <FaStar className="text-yellow-400 text-lg" /> 4.6 (6,700)
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2">
            SSC CGL Complete Preparation
          </h3>

          <p className="text-sm text-gray-600 mb-4">Amit Verma</p>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="flex gap-1">
              <TfiTimer className="mt-1" /> 5 months
            </span>
            <span className="flex gap-1">
              <FiBookOpen className="mt-1" /> 150 lessons
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <span className="text-xl font-bold">₹3,499</span>
            <span className="line-through text-gray-400">₹5,999</span>
          </div>

          <button className="w-26 bg-blue-600 text-white py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>

    {/* View All Button */}
    <div className="max-w-304 w-full flex justify-center items-center mt-16 mx-auto">
      <button className="w-52.5 h-11 border border-blue-500 rounded-xl text-blue-500 flex items-center justify-center gap-2">
        View All Courses
        <FaArrowRight />
      </button>
    </div>

  </div>
</div>

     {/* div 4  */}
   <div className="w-full bg-[#017CBA] flex justify-center py-20 px-4">
  <div className="max-w-7xl w-full">

    {/* Heading */}
    <div className="text-center mb-14">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        Trusted by Thousands of Students
      </h1>
      <p className="mt-3 text-white text-sm sm:text-base">
        Our numbers speak for the quality of education we provide
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-400 flex items-center justify-center rounded-xl">
          <FiUsers className="text-2xl sm:text-3xl text-white" />
        </div>
        <div className="text-center">
          <div className="text-white text-xl sm:text-2xl font-bold">50,000+</div>
          <div className="text-white text-base sm:text-lg">Active Students</div>
          <div className="text-white text-sm">Learn with us</div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-400 flex items-center justify-center rounded-xl">
          <FiBookOpen className="text-2xl sm:text-3xl text-white" />
        </div>
        <div className="text-center">
          <div className="text-white text-xl sm:text-2xl font-bold">500+</div>
          <div className="text-white text-base sm:text-lg">Courses Available</div>
          <div className="text-white text-sm">Across all categories</div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-400 flex items-center justify-center rounded-xl">
          <GiAchievement className="text-2xl sm:text-3xl text-white" />
        </div>
        <div className="text-center">
          <div className="text-white text-xl sm:text-2xl font-bold">98%</div>
          <div className="text-white text-base sm:text-lg">Success Rate</div>
          <div className="text-white text-sm">In competitive exams</div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-400 flex items-center justify-center rounded-xl">
          <FaRegClock className="text-2xl sm:text-3xl text-white" />
        </div>
        <div className="text-center">
          <div className="text-white text-xl sm:text-2xl font-bold">10,000+</div>
          <div className="text-white text-base sm:text-lg">Hours of Content</div>
          <div className="text-white text-sm">High-quality videos</div>
        </div>
      </div>

    </div>
  </div>
</div>

{/* div 5 */}
<div className="w-full min-h-screen flex flex-col items-center px-4 bg-[#F9FAFB]">

  {/* Heading */}
  <div className="max-w-7xl w-full flex flex-col items-center text-center mt-12">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
      Why Choose EduPlatform?
    </h1>

    <p className="text-base sm:text-lg text-gray-600">
      <span className="block">
        Experience the blend of technology and personalized learning designed
      </span>
      for your success
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Card */}
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <BsCameraVideo />
      </div>
      <h3 className="font-semibold text-lg">Live Interactive Classes</h3>
      <p className="text-gray-600 text-sm">
        Attend live classes with real-time interaction, whiteboard sharing,
        and instant doubt resolution.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <FiMessageCircle />
      </div>
      <h3 className="font-semibold text-lg">Doubt Clearing</h3>
      <p className="text-gray-600 text-sm">
        24/7 doubt clearing through chat, voice calls or dedicated sessions.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <FiCalendar />
      </div>
      <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
      <p className="text-gray-600 text-sm">
        Choose class timings that fit your schedule with recorded sessions.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <IoNewspaper />
      </div>
      <h3 className="font-semibold text-lg">Test Series & Practice</h3>
      <p className="text-gray-600 text-sm">
        Regular mock tests and chapter-wise quizzes.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <GrLineChart />
      </div>
      <h3 className="font-semibold text-lg">Progress Tracking</h3>
      <p className="text-gray-600 text-sm">
        Detailed analytics with personalized improvement suggestions.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <BsGlobe2 />
      </div>
      <h3 className="font-semibold text-lg">Multi-language Support</h3>
      <p className="text-gray-600 text-sm">
        Learn in Hindi, English, and regional languages.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <LuShield />
      </div>
      <h3 className="font-semibold text-lg">Certified Instructors</h3>
      <p className="text-gray-600 text-sm">
        Learn from experienced teachers with proven track records.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 items-center text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl text-blue-500">
        <LuHeadphones />
      </div>
      <h3 className="font-semibold text-lg">24/7 Support</h3>
      <p className="text-gray-600 text-sm">
        Round-the-clock academic and technical support.
      </p>
    </div>

  </div>
</div>
{/* div 6 */}
<div className="w-full min-h-[1127.2px] flex justify-center overflow-x-hidden px-4 lg:px-0">

  <div className="w-full max-w-7xl lg:h-[967.2px] flex flex-col items-center">

    {/* Heading */}
    <div className="w-full max-w-304 lg:h-21 flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-3xl mt-8">
        Success Stories
      </h1>
      <p className="text-gray-600 mt-2">
        Hear From our students who achieved their dreams with our guidance
      </p>
    </div>

    {/* Cards */}
    <div
      className="
        w-full max-w-304
        lg:h-[657.6px]
        mt-15
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6
      "
    >

        {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "EduPlatform's NEET coaching was exceptional. The structured approach
            and regular mock tests helped me achieve my dream of getting into AIIMS."
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Priya Sharma</h4>
              <p className="text-xs text-gray-500">NEET 2024 AIR 156</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            NEET
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "The doubt clearing sessions and personalized attention from teachers
            made all the difference. Highly recommend for JEE preparation."
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Arjun Patel</h4>
              <p className="text-xs text-gray-500">JEE Advanced AIR 89</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            JEE
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "The interactive classes and comprehensive study material helped me
            score excellent marks in my boards. Teachers are very supportive."
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Sneha Reddy</h4>
              <p className="text-xs text-gray-500">Class 12 CBSE - 98.2%</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            CBSE
          </span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "EduPlatform's UPSC course is comprehensive with excellent current
            affairs coverage. The essay writing sessions were particularly helpful."
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Rahul Kumar</h4>
              <p className="text-xs text-gray-500">UPSC CSE 2023 - Rank 45</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            UPSC
          </span>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "The speed training and mock tests for SSC were exactly what I needed.
            The quantitative aptitude sessions boosted my confidence significantly."
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Ananya Singh</h4>
              <p className="text-xs text-gray-500">SSC CGL 2023 Selected</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            SSC
          </span>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-3xl text-gray-400">❝❞</span>
            <div className="flex gap-1 text-yellow-400"><FaStar /></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "The banking exam preparation course is well-structured with focus on
            reasoning and quantitative aptitude. Cleared SBI PO in first attempt!"
          </p>
          <div className="border-t border-gray-200 my-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="font-semibold text-sm">Vikash Mehta</h4>
              <p className="text-xs text-gray-500">Banking PO - SBI</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            Banking
          </span>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="w-full max-w-304 lg:h-[97.6px] mt-19 flex flex-col justify-center items-center gap-4">
      <div className="w-full text-center">
        <p className="text-gray-700">
          Join thousands of successful students
        </p>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-47 h-[49.6px] bg-blue-500 rounded-xl text-white">
          Explore Courses
        </button>
        <button className="w-[251.6px] h-[49.6px] rounded-xl border border-blue-500 text-blue-500">
          View All Success Stories
        </button>
      </div>
    </div>

  </div>
</div>
{/* div 7 */}
<div className="w-full min-h-[613.4px] mt-3 bg-linear-to-r from-blue-600 via-blue-500 to-pink-500 flex items-center justify-center px-4">

  <div className="w-full max-w-304 h-full flex flex-col lg:flex-row items-center justify-between text-white gap-12">

    {/* LEFT CONTENT */}
    <div className="w-full mt-3 lg:w-150 flex flex-col gap-6 text-center lg:text-left">

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
        Take Your Learning <br className="hidden sm:block" /> Anywhere with Our App
      </h1>

      <p className="text-white/90 text-base sm:text-lg leading-relaxed">
        Download the EduPlatform mobile app and access all your
        courses, live classes, and study materials on the go.
      </p>

      <ul className="flex flex-col gap-3 text-white/90 items-center lg:items-start">
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Offline video downloads
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Push notifications for classes
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Interactive practice tests
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Progress tracking & analytics
        </li>
      </ul>

      <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/90">
        <FaStar className="text-yellow-400" /> 4.8/5 on App Store & Play Store
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
        <button className="bg-black text-white px-6 py-3 rounded-xl text-sm">
          Download on the App Store
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-xl text-sm">
          Get it on Google Play
        </button>
      </div>
    </div>

    {/* div right */}
    <div className="w-full lg:w-105 flex justify-center relative mb-3">

      <div className="w-65 sm:w-70 h-125 sm:h-130 bg-white rounded-4xl shadow-2xl p-4 relative border-[6px] border-black">

        {/* Status bar */}
        <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <div className="text-black font-semibold text-lg mb-4 flex justify-between items-center">
            EduPlatform
            <span className="text-blue-500 text-xl">
              <MdOutlinePhoneIphone />
            </span>
          </div>

          <div className="bg-green-50 p-4 rounded-xl mb-3">
            <p className="text-blue-600 font-medium text-sm">
              Live Class Starting
            </p>
            <p className="text-gray-500 text-xs">
              Mathematics · 10:00 AM
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-3">
            <p className="text-gray-800 font-medium text-sm">
              Today's Practice
            </p>
            <p className="text-gray-500 text-xs">
              5 questions remaining
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <p className="text-green-600 font-medium text-sm">
              Test Results
            </p>
            <p className="text-gray-500 text-xs">
              Score: 85/100
            </p>
          </div>
        </div>
      </div>

   
      <div className="hidden lg:flex absolute -top-6 right-0 w-12 h-12 bg-yellow-400 rounded-full items-center justify-center">
        <FaRegStar className="text-yellow-800" />
      </div>

      <div className="hidden lg:flex absolute -bottom-2.5 -left-6 w-12 h-12 bg-green-400 rounded-full items-center justify-center">
        <FiDownload />
      </div>

    </div>

  </div>
</div>
{/* Footer */}
<footer className="w-full bg-linear-to-b from-[#0B1220] to-[#0E1627] text-gray-300">
  
  {/* Top section */}
  <div className="max-w-360 mx-auto px-8 py-16">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <LuGraduationCap className='text-blue-500 text-3xl'/> <span>EduPlatform</span>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">
          Empowering students with quality education through comprehensive
          online tuition and coaching programs.
        </p>

        <div className="flex gap-4 text-gray-400">
          <span><SlSocialFacebook /></span>
          <span><FaXTwitter /></span>
          <span><FaInstagram /></span>
          <span><GrYoutube /></span>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="flex flex-col gap-2 text-sm text-gray-400">
          <li>School Tuition</li>
          <li>College Tuition</li>
          <li>Entrance Coaching</li>
          <li>Government Exams</li>
          <li>UPSC Coaching</li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-white font-semibold mb-4">Support</h3>
        <ul className="flex flex-col gap-2 text-sm text-gray-400">
          <li>Help Center</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
        <ul className="flex flex-col gap-3 text-sm text-gray-400">
          <li className="flex items-center gap-3">
            <MdMailOutline className='text-blue-500 text-xl'/> support@eduplatform.com
          </li>
          <li className="flex items-center gap-3">
           <MdLocalPhone className='text-blue-500 text-xl' /> +91 98765 43210
          </li>
          <li className="flex items-center gap-3">
            <IoLocationSharp className='text-blue-500 text-xl' /> Mumbai, Maharashtra, India
          </li>
        </ul>
      </div>

    </div>

    {/* Divider */}
    <div className="w-full h-px bg-gray-700/40 my-12"></div>

    {/* Bottom */}
    <div className="text-center text-sm text-gray-500">
      © 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education
    </div>

  </div>
</footer>













    </>
  )
}   

export default Home
