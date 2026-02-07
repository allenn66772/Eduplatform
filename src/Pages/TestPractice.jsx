import React, { useState } from 'react'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FiBarChart2, FiBookOpen, FiCheckCircle, FiClock } from 'react-icons/fi'
import { HiMenu, HiX } from 'react-icons/hi'
import { LuChartColumnIncreasing, LuGraduationCap } from 'react-icons/lu'
import { Link } from 'react-router-dom'
// import { FiClock } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Footer from '../Components/Footer'

function TestPractice() {
    const [menuOpen, setMenuOpen] = useState(false)
      const [courseOpen, setCourseOpen] = useState(false)


  return (
    <>
    {/* Header */}
<div className="w-full h-16 flex items-center justify-between px-6 lg:px-36 bg-white relative shadow-sm">

  {/* Logo */}
  <div className="text-2xl flex font-bold gap-3 items-center cursor-pointer">
    <span className="text-3xl text-blue-500">
      <LuGraduationCap />
    </span>
    EduPlatform
  </div>

  {/* Desktop Menu */}
  <ul className="hidden lg:flex gap-6 items-center text-sm font-medium">

    <li className="cursor-pointer hover:text-blue-500">Home</li>

    {/* Course dropdown */}
    <li className="relative group cursor-pointer">
      <span className="hover:text-blue-500">Course</span>

      <div className="
        absolute top-10 left-0 w-48 bg-white shadow-xl rounded-xl
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50
      ">
        <ul className="py-2 text-sm">
          <li className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500">School Tuition</li>
          <li className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500">College Tuition</li>
          <li className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500">Entrance Coaching</li>
          <li className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500">Government Exams</li>
          <li className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500">UPSC Coaching</li>
        </ul>
      </div>
    </li>

    <li className="cursor-pointer hover:text-blue-500">My Learning</li>

    <Link to="/test-practice" className="hover:text-blue-500">
      Test Practice
    </Link>

    <li className="cursor-pointer hover:text-blue-500">About</li>
  </ul>

  {/* Profile */}
  <div className="hidden lg:flex items-center">
    <img
      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
      className="w-[42px] h-[42px] rounded-full object-cover"
      alt="profile"
    />
  </div>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <HiX /> : <HiMenu />}
  </button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-16 left-0 w-full bg-white shadow-xl lg:hidden z-50">
      <ul className="flex flex-col p-6 gap-4 text-sm">

        <li className="cursor-pointer">Home</li>

        {/* Mobile Course Dropdown */}
        <li>
          <button
            onClick={() => setCourseOpen(!courseOpen)}
            className="flex justify-between w-full font-medium"
          >
            Course
            <span>{courseOpen ? "−" : "+"}</span>
          </button>

          {courseOpen && (
            <ul className="pl-4 mt-2 flex flex-col gap-2 text-gray-600">
              <li>School Tuition</li>
              <li>College Tuition</li>
              <li>Entrance Coaching</li>
              <li>Government Exams</li>
              <li>UPSC Coaching</li>
            </ul>
          )}
        </li>

        <li>My Learning</li>

        <Link to="/test-practice">Test Practice</Link>

        <li>About</li>
      </ul>
    </div>
  )}
</div>


    {/*  */}
    <div className="w-full min-h-42.5 mb-6 flex justify-center items-center px-4 mt-8">
  <div className="w-full max-w-[1280px] min-h-[630px] bg-white flex flex-col items-center">

    <div className="w-full max-w-[1216px] min-h-[68px]">
      <h1 className="text-3xl md:text-4xl font-bold">Test Practice</h1>
      <p className="text-base md:text-lg pt-3 text-gray-500">
        Practice with mock tests and improve your preparation
      </p>
    </div>

    <div className="w-full max-w-[1216px] min-h-[102px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      
      <div className="h-[120px] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
        <div className="w-[236px] h-[52px] flex items-center gap-4">
          <div className="w-[32px] h-[32px] flex items-center justify-center text-blue-600">
            <FiBookOpen className="text-3xl" />
          </div>
          <div className="w-[92px] h-[52px] flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-900">25</span>
            <span className="text-sm text-gray-500">Tests Taken</span>
          </div>
        </div>
      </div>

      <div className="h-[120px] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
        <div className="w-[236px] h-[52px] flex items-center gap-4">
          <div className="w-[32px] h-[32px] flex items-center justify-center">
            <FiCheckCircle className="text-3xl text-green-600" />
          </div>
          <div className="w-[92px] h-[52px] flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-900">850</span>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Questions Solved
            </span>
          </div>
        </div>
      </div>

      <div className="h-[120px] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
        <div className="w-[236px] h-[52px] flex items-center gap-4">
          <div className="w-[32px] h-[32px] flex items-center justify-center text-blue-600">
            <LuChartColumnIncreasing className="text-3xl" />
          </div>
          <div className="w-[92px] h-[52px] flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-900">82%</span>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Average Score
            </span>
          </div>
        </div>
      </div>

      <div className="h-[120px] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
        <div className="w-[236px] h-[52px] flex items-center gap-4">
          <div className="w-[32px] h-[32px] flex items-center justify-center">
            <FiClock className="text-3xl text-orange-500" />
          </div>
          <div className="w-[92px] h-[52px] flex flex-col justify-center">
            <span className="text-2xl font-semibold text-gray-900">45h</span>
            <span className="text-sm text-gray-500">Practice Time</span>
          </div>
        </div>
      </div>

    </div>

    <div className="w-full max-w-[1216px] min-h-[266px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
      
      <div className="h-[266px] shadow-lg rounded-xl p-5 flex flex-col justify-between bg-white">
        <h2 className="text-lg font-semibold text-gray-900">
          NEET Mock Test 2024 - Biology
        </h2>
        <div className="flex gap-3 mt-2 flex-wrap">
          <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            High
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-orange-500 text-white">
            180 Questions
          </span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="text-gray-900 font-medium">3 hours</span>
          </div>
          <div className="flex justify-between">
            <span>Attempts:</span>
            <span className="text-gray-900 font-medium">1250</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rating:</span>
            <span className="flex items-center gap-1 text-gray-900 font-medium">
              4.8 <AiFillStar className="text-yellow-400" />
            </span>
          </div>
        </div>
        <Link to="/view-textpractice/:id">
          <button className="mt-4 w-full py-3 rounded-lg bg-[#017CBA] text-white font-medium">
            Start Test
          </button>
        </Link>
      </div>

      <div className="h-[266px] shadow-lg rounded-xl p-5 flex flex-col justify-between bg-white">
        <h2 className="text-lg font-semibold text-gray-900">
          JEE Main Physics Practice
        </h2>
        <div className="flex gap-3 mt-2 flex-wrap">
          <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            Medium
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-orange-500 text-white">
            90 Questions
          </span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="text-gray-900 font-medium">3 hours</span>
          </div>
          <div className="flex justify-between">
            <span>Attempts:</span>
            <span className="text-gray-900 font-medium">2100</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rating:</span>
            <span className="flex items-center gap-1 text-gray-900 font-medium">
              4.6 <AiFillStar className="text-yellow-400" />
            </span>
          </div>
        </div>
        <Link to="/view-textpractice/:id">
          <button className="mt-4 w-full py-3 rounded-lg bg-[#017CBA] text-white font-medium">
            Start Test
          </button>
        </Link>
      </div>

      <div className="h-[266px] shadow-lg rounded-xl p-5 flex flex-col justify-between bg-white">
        <h2 className="text-lg font-semibold text-gray-900">
          Plus Two Bio Science
        </h2>
        <div className="flex gap-3 mt-2 flex-wrap">
          <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            Medium
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-orange-500 text-white">
            50 Questions
          </span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="text-gray-900 font-medium">2 hours</span>
          </div>
          <div className="flex justify-between">
            <span>Attempts:</span>
            <span className="text-gray-900 font-medium">890</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rating:</span>
            <span className="flex items-center gap-1 text-gray-900 font-medium">
              4.7 <AiFillStar className="text-yellow-400" />
            </span>
          </div>
        </div>
        <Link to="/view-textpractice/:id">
          <button className="mt-4 w-full py-3 rounded-lg bg-[#017CBA] text-white font-medium">
            Start Test
          </button>
        </Link>
      </div>

    </div>

  </div>
</div>


    <Footer/>
    
    </>
  )
}

export default TestPractice