import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { GrPowerReset } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Testquestions() {
  return (
    <>
    {/* Header */}
    
    {/*  */}
<div className="w-full min-h-screen bg-gray-100">
  <div className="w-full bg-white flex justify-center px-4">
    <div className="w-full max-w-[1320px] py-4">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            Plus Two Bio Science - Complete Course
          </h1>
          <h4 className="text-sm text-gray-400">Question 1 of 3</h4>
        </div>
        <div className="flex gap-3">
          <div className="w-[116px] h-[40px] rounded-lg flex justify-center items-center bg-gray-200">
            01:29:04
          </div>
          <div className="w-[114px] h-[40px] rounded-lg border border-gray-300 flex justify-center items-center">
            Submit Test
          </div>
        </div>
      </div>
      <div
        className="w-full mt-6 h-3 rounded-full"
        style={{
          background:
            "linear-gradient(to right, #0B7DBB 35%, #F97316 35%)",
        }}
      ></div>
    </div>
  </div>

  <div className="w-full bg-gray-100 mt-9 flex justify-center px-4">
    <div className="w-full max-w-[1280px] bg-white rounded-lg flex flex-col lg:flex-row p-4 sm:p-6 gap-6">
      <div className="flex-1 flex flex-col gap-6">
        <div className="border border-gray-300 rounded-xl p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-semibold">Question 1</h1>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm border border-gray-300 rounded-full">
                Physics
              </span>
              <button className="w-9 h-9 border border-gray-300 rounded-lg flex items-center justify-center">
                <GrPowerReset />
              </button>
            </div>
          </div>

          <p className="text-base font-medium mb-6">
            Which of the following is the powerhouse of the cell?
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                A
              </div>
              <span>Nucleus</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                B
              </div>
              <span>Mitochondria</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                C
              </div>
              <span>Ribosome</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-300 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                D
              </div>
              <span>Endoplasmic Reticulum</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
          <button className="px-6 py-2 border border-gray-400 bg-white rounded-lg text-gray-500">
            ← Previous
          </button>

          <div className="flex gap-3">
            <button className="px-6 py-2 border border-gray-300 bg-white rounded-lg">
              Clear Response
            </button>
            <button className="px-6 py-2 border border-gray-300 bg-white rounded-lg">
              Save & Next
            </button>
          </div>

          <button className="px-6 py-2 bg-[#017CBA] text-white rounded-lg flex items-center gap-1">
            Next <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[280px] border border-gray-300 rounded-xl p-6">
        <h2 className="font-semibold mb-4">Question Navigation</h2>

        <div className="flex gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center">
            1
          </div>
          <div className="w-8 h-8 bg-gray-300 text-white rounded flex items-center justify-center">
            2
          </div>
          <div className="w-8 h-8 bg-gray-300 text-white rounded flex items-center justify-center">
            3
          </div>
        </div>

        <div className="space-y-2 text-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded"></span>
            Answered (0)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded"></span>
            Flagged (0)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded"></span>
            Skipped
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-400 rounded"></span>
            Not Visited
          </div>
        </div>

        <Link to="/test-result">
            <button className="w-full py-2 bg-red-500 text-white rounded-lg">
              Submit Test
            </button>
        </Link>
      </div>
    </div>
  </div>
</div>



    
    </>
  )
}

export default Testquestions