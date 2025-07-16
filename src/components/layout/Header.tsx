import React from 'react'

export default function Header() {
  return (
    <nav className='bg-white flex justify-between items-center p-4 shadow-md'>
        <div className="justify-start text-slate-800 text-3xl font-semibold font-['Inter'] leading-7">Exam Score</div>
        <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-tight">Kỳ thi THPT Quốc gia 2024</div>
      
    </nav>
  )
}
