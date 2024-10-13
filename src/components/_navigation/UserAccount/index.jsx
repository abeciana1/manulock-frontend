import { useEffect, useRef, useState } from 'react';
import Image from '../../_styled/Image';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { SolidButton } from '../../_inputs/Buttons';
import { PiSignOutBold } from 'react-icons/pi';
import { FaGear } from 'react-icons/fa6';
import useResponsiveness from '../../../hooks/useResponsiveness';
import cx from 'classnames';

const UserAccount = () => {
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(0);
  const menuRef = useRef(null);
  const { isMobile } = useResponsiveness() || {};

  useEffect(() => {
    if (window && window?.Clerk) {
      setUserData(window.Clerk.user);
    }
  }, []);

  useEffect(() => {
    // todo add fetch for notifications count
    setCount(0);
  }, [isMobile]);

  const toggleUserMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signOutToggle = () => {
    window.Clerk.signOut();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    // Add event listener when the menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener when the component unmounts or menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        data-testId="user-account"
        className="relative ring-neutral-light ring-1 rounded-md py-2 px-2 bg-white w-auto max-w-fit"
      >
        {userData && (
          <div
            className={cx('flex items-center', {
              ['justify-between']: isMobile,
            })}
          >
            {userData?.hasImage && (
              <Image
                src={userData?.imageUrl}
                alt={`${userData?.firstName} profile picture`}
                height={32}
                width={32}
                priority
                className="rounded-md"
              />
            )}
            {!isMobile && (
              <div className="text-lg font-medium">
                {'Hi, ' + userData?.firstName}
              </div>
            )}
            <button
              className="text-lg rounded-lg ml-1.5"
              onClick={toggleUserMenu}
            >
              {menuOpen ? (
                <HiMiniChevronUp size={20} />
              ) : (
                <HiMiniChevronDown size={20} />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        {menuOpen && (
          <>
            <ul
              ref={menuRef}
              className="absolute text-lg ring-neutral-light ring-1 rounded-md py-2 px-2 bg-white w-44 max-w-44 mt-2 top-7 right-1 sm:right-6"
            >
              {isMobile && (
                <div className="text-lg font-medium ml-2">
                  {'Hi, ' + userData?.firstName}
                </div>
              )}
              {isMobile && (
                <li className="flex items-center gap-2 py-1 px-2">
                  {count > 0 && (
                    <div className="absolute bg-accent-red text-primary-light rounded-full px-1 text-sm -top-2 -right-3">
                      {count > 9 ? '9+' : count}
                    </div>
                  )}
                  <span>Notifications</span>
                </li>
              )}
              <li>
                <a
                  target="_blank"
                  title="User settings"
                  href="https://blessed-peacock-72.accounts.dev/user"
                  className="flex items-center gap-2 py-1 px-2"
                  rel="noreferrer"
                >
                  <FaGear />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <SolidButton
                  iconFirst
                  icon={PiSignOutBold}
                  text="Sign out"
                  onClick={signOutToggle}
                  iconSize={20}
                  buttonSize="sm"
                />
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default UserAccount;
