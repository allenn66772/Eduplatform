import React, { useState } from 'react'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaRegClock } from 'react-icons/fa'
import { FiBarChart2, FiCheckCircle, FiDownload } from 'react-icons/fi'
import { HiMenu, HiX } from 'react-icons/hi'
import { LuFileText, LuGraduationCap } from 'react-icons/lu'
import { RxCrossCircled } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { IoEyeOutline } from 'react-icons/io5'

function Testresult({review}) {
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
<div className="flex items-center gap-4">
  <img
    src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    className="w-[38px] h-[38px] rounded-full object-cover hidden lg:block"
    alt="profile"
  />

  {/* Mobile profile */}
  <img
    src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    className="w-[38px] h-[38px] rounded-full object-cover lg:hidden"
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

{/* content div */}
<div className="w-full min-h-screen bg-[#F9FAFB] flex justify-center px-4 mb-8">
  <div className="w-full max-w-[1280px]">
    <div className="w-full mt-4 flex flex-col sm:flex-row justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Physics Model Exam</h1>
        <h4 className="text-sm text-gray-500">Completed on 1/15/2025</h4>
      </div>
      <div className="w-fit h-[40px] bg-white border border-gray-300 rounded-lg flex justify-center items-center gap-2 px-4">
        <FiDownload /> Download Report
      </div>
    </div>

    <div className="w-full mt-6">
        {/* Toggle buttton */}
       <div className="w-full flex rounded-lg p-1">
        <Link to="/test-result" className="flex-1 bg-white shadow shadow-[#F1F5F9] flex justify-center items-center text-sm sm:text-lg rounded-md gap-2 font-medium">
          <FiBarChart2 className="text-lg sm:text-xl" />
          Results & Analysis
        </Link>
        <Link to="/test-review" className="flex-1 bg-[#F1F5F9] flex justify-center items-center text-sm sm:text-lg rounded-md gap-2 text-gray-500">
          <LuFileText className="text-lg sm:text-xl" />
          Review Solutions
        </Link>
      </div>




       {/* Review analysis */}
     
       {review ? (
   <div className="w-full">
  {/* Heading */}
  <div className="w-full mt-4">
    <h1 className="text-2xl font-semibold">Review Solutions</h1>
  </div>

  {/* Box 1  */}
  <div className="w-full bg-[#EFF6FF] border border-[#BBF7D0] rounded-xl mt-4 flex flex-col items-center px-3 py-4">
    
    {/* Header */}
    <div className="w-full max-w-[1164.8px] flex flex-wrap justify-between items-center gap-2">
      <h2 className="text-xl font-semibold flex items-center gap-1">
        <FiCheckCircle className="text-green-600" />
        Question 1
      </h2>

      <div className="flex items-center gap-2">
        <div className="px-3 py-0.5 bg-[#E2E8F0] rounded-full text-sm">
          Physics
        </div>
        <div className="px-3 py-0.5 bg-[#F97316] text-white rounded-full text-sm">
          4 Marks
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="w-full max-w-[1164.8px] mt-4">
      <p className="mb-3">Which organ is known as powerhouse of the cell?</p>

      <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-white border border-[#E2E8F0] rounded-2xl">
        A. Nucleus
      </div>

     <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-[#DCFCE7] border border-[#22C55E] rounded-2xl text-[#22C55E]">
  <h1>B. Mitochondria</h1>

  <FiCheckCircle className="ml-auto text-green-600" />
</div>


      <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-white border border-[#E2E8F0] rounded-2xl">
        C. Ribosome
      </div>

      <div className="w-full min-h-[48px] flex items-center px-3 mb-3 bg-white border border-[#E2E8F0] rounded-2xl">
        D. Golgi apparatus
      </div>

      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm">
          Your answer: B | Correct answer: B
        </p>

        <div className="sm:ml-auto w-full sm:w-[168px] h-[40px] bg-white rounded-xl flex justify-center items-center cursor-pointer">
          <IoEyeOutline className="mr-1" />
          Show Explanation
        </div>
      </div>
    </div>
  </div>

  {/* Box 2  */}
  <div className="w-full bg-[#EFF6FF] border border-[#BBF7D0] rounded-xl mt-7 flex flex-col items-center px-3 py-4">
    
    <div className="w-full max-w-[1164.8px] flex flex-wrap justify-between items-center gap-2">
      <h2 className="text-xl font-semibold flex items-center gap-1">
        <FiCheckCircle className="text-green-600" />
        Question 2
      </h2>

      <div className="flex items-center gap-2">
        <div className="px-3 py-0.5 bg-[#E2E8F0] rounded-full text-sm">
          Physics
        </div>
        <div className="px-3 py-0.5 bg-[#F97316] text-white rounded-full text-sm">
          4 Marks
        </div>
      </div>
    </div>

    <div className="w-full max-w-[1164.8px] mt-4">
      <p className="mb-3">What is the function of ribosomes?</p>

      <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-white border border-[#E2E8F0] rounded-2xl">
        A. DNA Replication
      </div>

     <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-[#DCFCE7] border border-[#22C55E] rounded-2xl text-[#22C55E]">
     <h1>B. Protein Synthesis</h1>

  <FiCheckCircle className="ml-auto text-green-600" />
</div>


      <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-white border border-[#E2E8F0] rounded-2xl">
        C. Lipid Synthesis
      </div>

      <div className="w-full min-h-[48px] flex items-center px-3 mb-3 bg-white border border-[#E2E8F0] rounded-2xl">
        D. ATP Production
      </div>

      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm">
          Your answer: B | Correct answer: B
        </p>

        <div className="sm:ml-auto w-full sm:w-[168px] h-[40px] bg-white rounded-xl flex justify-center items-center cursor-pointer">
          <IoEyeOutline className="mr-1" />
          Show Explanation
        </div>
      </div>
    </div>
  </div>
 
    {/* Box 3 */}
    
<div className="w-full bg-[#EFF6FF] border border-[#BBF7D0] rounded-xl mt-7 mb-6 flex flex-col items-center px-3 py-4">
  
  {/* Header */}
  <div className="w-full max-w-[1164.8px] flex flex-wrap justify-between items-center gap-2">
    <h2 className="text-xl font-semibold flex items-center gap-1">
      <FiCheckCircle className="text-green-600" />
      Question 3
    </h2>

    <div className="flex items-center gap-2">
      <div className="px-3 py-0.5 bg-[#E2E8F0] rounded-full text-sm">
        Physics
      </div>
      <div className="px-3 py-0.5 bg-[#F97316] text-white rounded-full text-sm">
        4 Marks
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="w-full max-w-[1164.8px] mt-4">
    <p className="mb-3">
      Which process occurs in the chloroplasts?
    </p>

    <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-[#FEE2E2] border border-[#EF4444] text-[#EF4444] rounded-2xl">
       <span>A. Respiration</span>
     
       <RxCrossCircled className="ml-auto text-[#EF4444]" />
     </div>


      <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-[#DCFCE7] border border-[#22C55E] rounded-2xl text-[#22C55E]">
     <h1>B. PhotoSynthesis</h1>

  <FiCheckCircle className="ml-auto text-green-600" />
</div>

    <div className="w-full min-h-[48px] flex items-center px-3 mb-2 bg-white border border-[#E2E8F0] rounded-2xl">
      C. Fermentation
    </div>

    <div className="w-full min-h-[48px] flex items-center px-3 mb-3 bg-white border border-[#E2E8F0] rounded-2xl">
      D. Glycolysis
    </div>

    <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
      <p className="text-sm">
        Your answer: B | Correct answer: B
      </p>

      <div className="sm:ml-auto w-full sm:w-[168px] h-[40px] bg-white rounded-xl flex justify-center items-center cursor-pointer">
        <IoEyeOutline className="mr-1" />
        Show Explanation
      </div>
    </div>
  </div>
</div>

  
</div>

     ) : (
        <>
          <div className="w-full flex flex-wrap justify-center gap-4 mt-5">
            <div className="w-full sm:w-[286px] h-[134px] bg-white shadow rounded-lg text-center">
              <p className="text-3xl text-green-600 font-semibold mt-4">4</p>
              <p>
                Out of 5
                <span className="block text-sm text-gray-500">Total Score</span>
              </p>
            </div>
    
            <div className="w-full sm:w-[286px] h-[134px] bg-white shadow rounded-lg flex flex-col items-center justify-center gap-1">
              <p className="text-3xl font-bold text-[#2563EB]">80%</p>
              <p className="text-sm text-gray-500">Percentage</p>
              <div className="px-4 py-1 bg-[#017CBA] rounded-full text-white text-xs font-medium">
                Excellent
              </div>
            </div>
    
            <div className="w-full sm:w-[286px] h-[134px] bg-white shadow rounded-lg flex flex-col items-center justify-center gap-1">
              <p className="text-3xl font-bold text-[#7C3AED]">#234</p>
              <p className="text-sm font-medium text-gray-700">Your Rank</p>
              <p className="text-xs text-gray-500">out of 1250</p>
            </div>
    
            <div className="w-full sm:w-[286px] h-[134px] bg-white shadow rounded-lg flex flex-col items-center justify-center gap-1">
              <p className="text-3xl font-bold text-[#F97316]">52m</p>
              <p className="text-sm font-medium text-gray-700">Time Taken</p>
              <p className="text-xs text-gray-500">out of 60m</p>
            </div>
          </div>
           <div className="w-full mt-12 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[800px] bg-white shadow rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-8">
                <AiOutlineBarChart className="text-2xl font-semibold" />
                <h1 className="text-2xl font-semibold">Question Analysis</h1>
              </div>
    
              <div className="flex justify-between mb-10 px-2 sm:px-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                    <FiCheckCircle className="text-green-500 text-2xl" />
                  </div>
                  <p className="text-lg font-semibold text-green-600">4</p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>
    
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                    <RxCrossCircled className="text-red-500 text-2xl" />
                  </div>
                  <p className="text-lg font-semibold text-red-600">7</p>
                  <p className="text-sm text-gray-600">Incorrect</p>
                </div>
    
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                    <FaRegClock className="text-gray-700 text-2xl" />
                  </div>
                  <p className="text-lg font-semibold text-gray-700">3</p>
                  <p className="text-sm text-gray-600">Skipped</p>
                </div>
              </div>
    
              <div className="space-y-6">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Cell Biology</span>
          <span className="text-gray-600">7/8 (87.5%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: "linear-gradient(to right, #017CBA 87.5%, #F97316 87.5%)",
            }}
          ></div>
        </div>
      </div>
    
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Genetics</span>
          <span className="text-gray-600">8/10 (80%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: "linear-gradient(to right, #017CBA 80%, #F97316 80%)",
            }}
          ></div>
        </div>
      </div>
    
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Ecology</span>
          <span className="text-gray-600">5/7 (71.4%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: "linear-gradient(to right, #017CBA 71.4%, #F97316 71.4%)",
            }}
          ></div>
        </div>
      </div>
    
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Plant Physiology</span>
          <span className="text-gray-600">9/12 (75%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: "linear-gradient(to right, #017CBA 75%, #F97316 75%)",
            }}
          ></div>
        </div>
      </div>
    
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Human Physiology</span>
          <span className="text-gray-600">6/8 (75%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: "linear-gradient(to right, #017CBA 75%, #F97316 75%)",
            }}
          ></div>
        </div>
      </div>
    </div>
    
            </div>
    
            <div className="w-full lg:w-[390px] flex flex-col gap-6">
              <div className="bg-white shadow rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <button className="w-full py-2 border border-gray-400 rounded-lg mb-3">
                  Review Solutions
                </button>
                <button className="w-full py-2 border border-gray-400 rounded-lg mb-3">
                  Take Similar Test
                </button>
              <Link to="/test-practice">
                    <button className="w-full py-2 bg-[#017CBA] text-white rounded-lg">
                      Back to Tests
                    </button>
              </Link>
              </div>
    
              <div className="bg-white shadow rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4">Performance Comparison</h2>
                <div className="flex justify-between text-sm mb-2">
                  <span>Your Score</span>
                  <span className="font-semibold">80%</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average Score</span>
                  <span>65.4%</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>Top Score</span>
                  <span>94.2%</span>
                </div>
                <div className="bg-blue-50 text-blue-600 text-sm p-3 rounded-lg">
                  You scored better than 68% of test takers!
                </div>
              </div>
            </div>
          </div>
        </>
     )
       }

    
      
     
   
    </div>
  </div>
</div>

<Footer/>

    </>
  )
}

export default Testresult