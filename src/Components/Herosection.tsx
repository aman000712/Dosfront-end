import herosection from '../../public/herosection.jpg'
import Image from 'next/image'

function Herosection() {
  return (
    <div className='relative -z-10'>
      <Image
        src={herosection}
        alt="hero"
        width={1920}
        height={500}
        className="w-full h-lvh"
      />
    </div>
  )
}

export default Herosection
