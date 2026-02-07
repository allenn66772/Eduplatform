import React, { useState } from 'react'
import Header from '../Components/Header'
import { FaArrowLeft } from 'react-icons/fa'
import { FiCheckCircle, FiClock, FiFileText } from 'react-icons/fi'
import { LuBrain, LuGraduationCap } from 'react-icons/lu'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

function View_textPractice() {
    const [menuOpen, setMenuOpen] = useState(false)
          const [courseOpen, setCourseOpen] = useState(false)
  return (
    <>
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

          <div className="absolute top-10 left-0 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

      {/* Right Section (Profile + Menu) */}
      <div className="flex items-center gap-4">

        {/* Profile */}
        <img
          src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
          className="w-[36px] h-[36px] rounded-full object-cover lg:w-[42px] lg:h-[42px]"
          alt="profile"
        />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

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
    <div className="w-full min-h-[900px] mb-6 flex justify-center px-4">
  <div className="w-full max-w-[1280px] min-h-[855.2px] bg-white">

    <div className="w-full max-w-[1216px] min-h-[68px] mt-16">
      <h1 className="text-2xl md:text-3xl font-semibold">Test Practice</h1>
      <p className="text-base md:text-lg text-gray-500">
        Practice With tests from your purchased courses
      </p>
    </div>

    <div className="w-full max-w-[1216px] min-h-[56px] flex flex-col md:flex-row justify-between gap-4 mt-10">
      <div className="w-full md:w-[550px] min-h-[56px]">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Plus Two Bio Science - Complete Course
        </h1>
        <p className="text-gray-500">Choose your practice type</p>
      </div>

      <button className="w-[160.6px] h-[40px] rounded-2xl border border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-700 hover:bg-gray-100 transition">
        <FaArrowLeft className="text-xs" />
        Back To Courses
      </button>
    </div>

    <div className="w-full max-w-[1216px] min-h-[603.2px] grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <FiCheckCircle className="text-green-500 text-xl" />
            <h3 className="font-semibold text-gray-900">Daily Practice</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Quick daily questions to keep you sharp
          </p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside mb-4">
            <li>Full syllabus coverage</li>
            <li>3 hour duration</li>
            <li>All subjects included</li>
          </ul>
          <p className="text-sm text-gray-500">
            Quick 10–15 questions daily
          </p>
        </div>

      <Link to='/test-screen/:id'>
          <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 mt-3">
            Start Daily Practice
          </button>
      </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <LuBrain className="text-blue-600 text-xl" />
            <h3 className="font-semibold text-gray-900">
              Full Syllabus Mock Test
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Complete mock test covering all topics
          </p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Full syllabus coverage</li>
            <li>3 hour duration</li>
            <li>All subjects included</li>
          </ul>
        </div>

        <Link to='/test-screen/:id'>
          <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 mt-3">
            Start Mock Test
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <FiClock className="text-orange-500 text-xl" />
          <h3 className="font-semibold text-gray-900">
            Previous Year Papers
          </h3>
        </div>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Solve previous year question papers
        </p>

        <p className="text-sm text-gray-600 mb-3">Select Subject:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Mathematics Previous Papers
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Botany Previous Papers
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Physics Previous Papers
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Zoology Previous Papers
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Chemistry Previous Papers
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            English Previous Papers
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <FiFileText className="text-blue-600 text-xl" />
          <h3 className="font-semibold text-gray-900">Model Exam</h3>
        </div>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Subject-wise model examinations
        </p>

        <p className="text-sm text-gray-600 mb-3">Select Subject:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Mathematics Model Exam
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Botany Model Exam
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Physics Model Exam
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Zoology Model Exam
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            Chemistry Model Exam
          </button>
          <button className="border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
            English Model Exam
          </button>
        </div>
      </div>

    </div>

  </div>
</div>

     {/* Footer */}
     <Footer/>  
    </>
  )
}

export default View_textPractice