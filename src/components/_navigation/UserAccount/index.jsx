import { useEffect, useState } from 'react';
import Image from '../../_styled/Image';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { SolidButton } from '../../_inputs/Buttons';
import { PiSignOutBold } from 'react-icons/pi';

const UserAccount = () => {
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window && window?.Clerk) {
      setUserData(window.Clerk.user);
    }
  }, []);
  console.log('userData', userData);

  const toggleUserMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signOutToggle = () => {
    console.log('signout');
  };

  return (
    <div
      data-testId="user-account"
      className="relative ring-neutral-light ring-1 rounded-md py-2 px-2 bg-white w-44 max-w-44"
    >
      {userData && (
        <div className="flex gap-3 justify-between items-center">
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
          <div className="text-lg font-medium">
            {'Hi, ' + userData?.firstName}
          </div>
          <SolidButton
            onClick={toggleUserMenu}
            iconFirst
            icon={menuOpen ? HiMiniChevronUp : HiMiniChevronDown}
          />
        </div>
      )}
      {menuOpen && (
        <ul>
          <li>
            <SolidButton
              iconFirst
              icon={PiSignOutBold}
              text="Sign out"
              onClick={signOutToggle}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserAccount;
