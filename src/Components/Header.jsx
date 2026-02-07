import React, { useState } from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false)

  return (
    <div className="w-full h-16 flex items-center justify-between px-6 lg:px-36 bg-white relative">

      {/* Logo */}
      <div className="text-2xl flex font-bold gap-3 items-center">
        <span className="text-3xl text-blue-500">
          <LuGraduationCap />
        </span>
        EduPlatform
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 items-center">

        <li className="cursor-pointer hover:text-blue-500">Home</li>

        {/* Course dropdown */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-500">Course</span>

          <div className="
            absolute top-8 left-0 w-48 bg-white shadow-lg rounded-xl
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200 z-50
          ">
            <ul className="py-2 text-sm">
              {[
                "School Tuition",
                "College Tuition",
                "Entrance Coaching",
                "Government Exams",
                "UPSC Coaching"
              ].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="cursor-pointer hover:text-blue-500">My Learning</li>
        <Link to="/test-practice"><li className="cursor-pointer hover:text-blue-500">Test Practice</li></Link>
        <li className="cursor-pointer hover:text-blue-500">About</li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-5">
        <button className="px-4 h-9 rounded-xl border border-gray-200 shadow-sm">
          Login
        </button>
        <button className="px-4 h-9 rounded-xl bg-blue-500 text-white border border-blue-500 hover:bg-white hover:text-blue-500">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">

          <ul className="flex flex-col p-6 gap-4">

            <li>Home</li>

            {/* Mobile Course Dropdown */}
            <li>
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex justify-between w-full"
              >
                Course
                <span>{courseOpen ? "−" : "+"}</span>
              </button>

              {courseOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
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

            <div className="flex gap-4 mt-4">
              <button className="flex-1 h-9 rounded-xl border border-gray-200">
                Login
              </button>
              <button className="flex-1 h-9 rounded-xl bg-blue-500 text-white">
                Sign up
              </button>
            </div>

          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
