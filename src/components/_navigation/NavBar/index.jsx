import Image from '../../_styled/Image';
import UserAccount from '../UserAccount';
import { Link } from '@tanstack/react-router';
import Notification from '../Notification';

const NavBar = () => {
  // todo Add api fetch for user notifications
  return (
    <section className="px-10 py-3 bg-white">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto">
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
        <div>
          <Link to="/dashboard" className="text-lg">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Notification count={5} />
          <UserAccount />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
