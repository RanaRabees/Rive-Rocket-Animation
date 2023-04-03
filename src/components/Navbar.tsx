import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <div className='md:pl-[500px] flex flex-row items-center justify-start space-x-4 p-5'>
      <Image src={logo} alt='' className='h-[50px] w-[50px] hover:h-[60px] hover:w-[60px]' />
      <p className='text-lg font-medium pt-2 text-center ml-20 text-orange-500 italic hover:text-xl hover:text-white'>
        Rive - Rocket - Animation
      </p>
    </div>
  );
}
