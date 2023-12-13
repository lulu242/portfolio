import React, { FC, useState } from 'react';
import NavList from './NavList';

export const Nav: FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      {/* 데스크탑 버전 */}
      <nav className="hidden md:block md:fixed md:z-50 md:w-full md:p-5">
        <ul className="flex justify-end blackItalic gap-7">
          <NavList isNavActive={isNavActive} />
        </ul>
      </nav>

      {/* 모바일 버전 */}
      <nav className="fixed z-50 w-full p-5 md:hidden">
        <button 
          className="relative z-40 flex items-center justify-center w-10 h-10 rounded-full highlighted"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span className="text-2xl font-semibold material-icons">{isNavActive ? 'close':'menu'}</span>
        </button>
        {isNavActive && (
          <div className="absolute inset-0 w-full h-screen bg-white/90">
            <ul className="flex flex-col items-center justify-center h-full gap-10 blackItalic">
              <NavList isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
