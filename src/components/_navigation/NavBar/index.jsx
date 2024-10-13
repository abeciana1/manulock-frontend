import { useState } from 'react';
import Image from '../../_styled/Image';
import UserAccount from '../UserAccount';
import { Link } from '@tanstack/react-router';
import Notification from '../Notification';
import { Turn as Hamburger } from 'hamburger-react';
import cx from 'classnames';
import useResponsiveness from '../../../hooks/useResponsiveness';

const NavBar = () => {
  const [mobileMenuOpen, setMenu] = useState(false);
  // todo Add api fetch for user notifications
  // todo Add rendering of either dropdown or modal
  const { isMobile } = useResponsiveness() || {};
  return (
    <>
      <section className="px-4 sm:px-10 py-3 bg-white">
        <nav className="">
          <div className="flex justify-between items-center max-w-[1440px] mx-auto flex-row">
            {isMobile && (
              <Hamburger toggled={mobileMenuOpen} toggle={setMenu} />
            )}
            <div>
              <Image
                src="https://media.graphassets.com/output=format:jpg/BZcUI4wrSx6BB1zpOyO6"
                alt="Manulock logo"
                height={620}
                width={1060}
                priority
                className="h-10 w-20"
              />
            </div>
            {!isMobile && (
              <ul>
                <li>
                  <Link to="/dashboard" className="text-lg">
                    Dashboard
                  </Link>
                </li>
              </ul>
            )}
            <div
              className={cx('flex items-center', {
                ['gap-6']: !isMobile,
              })}
            >
              {!isMobile && <Notification count={5} />}
              <UserAccount />
            </div>
          </div>
          {mobileMenuOpen && isMobile && (
            <ul className="h-dvh z-50 absolute bg-white w-full left-0">
              <li className="ml-5 mt-5">
                <Link to="/dashboard" className="text-lg">
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </section>
    </>
  );
};

export default NavBar;
