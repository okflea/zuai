"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArchiveIcon, CalendarIcon, CopyIcon, DashboardIcon, FrameIcon, HamburgerMenuIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Badge } from './ui/badge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbars = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 w-22 h-full transition-transform z-10 duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <div className="w-16 m-2 rounded-2xl h-[98vh] bg-white shadow-sm p-2 py-4 flex flex-col">
          <div>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <nav className="mt-8 flex flex-col gap-4">
              <div className='bg-primary rounded-full w-9 h-9 text-white flex items-center justify-center mx-auto'>
                <DashboardIcon className="h-5 w-5" />
              </div>
              <div className='hover:bg-primary/45 hover:text-white rounded-full w-9 h-9 flex items-center justify-center mx-auto'>
                <ArchiveIcon className="h-5 w-5" />
              </div>
              <div className='hover:bg-primary/45 hover:text-white rounded-full w-9 h-9 flex items-center justify-center mx-auto'>
                <CopyIcon className="h-5 w-5" />
              </div>
              <div className='hover:bg-primary/45 hover:text-white rounded-full w-9 h-9 flex items-center justify-center mx-auto'>
                <QuestionMarkCircledIcon className="h-5 w-5" />
              </div>
            </nav>
          </div>
          <div className='mt-auto flex justify-center'>
            <Image src="/user.png" alt="user" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 w-22 h-full transition-transform z-10 duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
      >
        <div className="w-16 m-2  h-[98vh]  p-2 py-4">
          <nav className="md:mt-2 sm:mt-14  flex flex-col gap-2">
            {/* Add icons or content for the right sidebar here */}
            <div className='bg-white p-1 text-slate-700 rounded-full flex items-center shadow hover:shadow-lg' >
              <Image src={"/zucoin.png"} alt="Logo" width={20} height={20} />
              <p className='text-xs pr-1'>120</p>
            </div>
            <div className='bg-white p-1 text-slate-700 rounded-full flex items-center shadow hover:shadow-lg' >
              <Image src={"/flames.png"} alt="Logo" width={20} height={20} />
              <p className='text-xs pr-1'>24</p>
            </div>
            <div className='bg-white p-2 text-slate-700 rounded-full flex mx-auto  items-center shadow hover:shadow-lg' >
              <CalendarIcon />
            </div>

            <div className='bg-white p-2 text-slate-700 rounded-full flex mx-auto  items-center shadow hover:shadow-lg' >
              <FrameIcon />
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar Toggle Button (for smaller screens) */}
      <div className="fixed top-0 w-full p-4 md:hidden flex justify-between z-20 bg-white shadow-md">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <Button onClick={toggleNavbars} className="" variant={"ghost"}>
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
