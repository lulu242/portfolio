import React, { FC } from 'react';
import { Link } from 'react-scroll';

interface NavListProps {
  isNavActive: boolean;
  setIsNavActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavList: FC<NavListProps> = React.memo(
  ({ isNavActive, setIsNavActive }) => {
    const navLists = [
      { to: 'aboutMe', value: 'ABOUT ME' },
      { to: 'skills', value: 'SKILLS' },
      { to: 'project', value: 'PROJECT' },
    ];

    return (
      <>
        {navLists.map(({to, value}) => (
          <li className="cursor-pointer hover:text-gray-600">
            <Link
              onClick={() => setIsNavActive(!isNavActive)}
              activeClass="underline decoration-solid"
              spy={true}
              to={to}
              smooth={true}
              duration={500}
            >
              {value}
            </Link>
          </li>
        ))}
        
      </>
    );
  }
);

export default NavList;
