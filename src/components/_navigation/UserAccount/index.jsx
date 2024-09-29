import { useEffect, useState } from 'react';
import Image from '../../_styled/Image';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { SolidButton } from '../../_inputs/Buttons';

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

  return (
    <div
      data-testId="user-account"
      className="relative ring-neutral-light ring-1 rounded-md py-2 px-2 bg-white"
    >
      {userData && (
        <div className="flex gap-4 justify-between items-center">
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
    </div>
  );
};

export default UserAccount;
