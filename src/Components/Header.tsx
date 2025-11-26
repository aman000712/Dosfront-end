import React from 'react'

function Header() {


  const navbars = [
    { name: "Home" },
    { name: "About" },
    { name: "Contact" },
  ];






  return (
    <div className='flex absolute w-full bg-transparent justify-between py-8 px-28 '>
      <div  className='flex justify-between w-full  border-white border py-4 px-8 rounded-full'>
        <div className='text-white'>
          logo
        </div>
        <div className='flex gap-22 '>
          {
            navbars.map((val, i) => {
              return (
                <div key={i}>
                  <div className='font-medium text-white capitalize'>
                    {val.name}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Header
