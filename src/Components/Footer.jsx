import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrYoutube } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'
import { LuGraduationCap } from 'react-icons/lu'
import { MdLocalPhone, MdMailOutline } from 'react-icons/md'
import { SlSocialFacebook } from 'react-icons/sl'

function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="w-full bg-linear-to-b from-[#0B1220] to-[#0E1627] text-gray-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
    
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2 text-white text-xl font-semibold">
              <LuGraduationCap className="text-blue-500 text-3xl" />
              <span>EduPlatform</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Empowering students with quality education through comprehensive
              online tuition and coaching programs.
            </p>
            <div className="flex gap-4 text-gray-400 text-lg">
              <SlSocialFacebook />
              <FaXTwitter />
              <FaInstagram />
              <GrYoutube />
            </div>
          </div>
    
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>School Tuition</li>
              <li>College Tuition</li>
              <li>Entrance Coaching</li>
              <li>Government Exams</li>
              <li>UPSC Coaching</li>
            </ul>
          </div>
    
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
    
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MdMailOutline className="text-blue-500 text-xl shrink-0" />
                support@eduplatform.com
              </li>
              <li className="flex items-center gap-3">
                <MdLocalPhone className="text-blue-500 text-xl shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <IoLocationSharp className="text-blue-500 text-xl shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
    
        </div>
    
        <div className="w-full h-px bg-gray-700/40 my-10 sm:my-12"></div>
    
        <div className="text-center text-xs sm:text-sm text-gray-500 px-4">
          © 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education
        </div>
    
      </div>
    </footer>
    </>
  )
}

export default Footer