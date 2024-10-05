import Image from '../../_styled/Image';
import UserAccount from '../UserAccount';
import { Link } from '@tanstack/react-router';

const NavBar = () => {
  return (
    <nav className="px-10 py-3 flex justify-between items-center bg-white">
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
      <div>
        <UserAccount />
      </div>
    </nav>
  );
};

export default NavBar;
