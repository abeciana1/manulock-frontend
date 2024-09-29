import UserAccount from '../UserAccount';

const NavBar = () => {
  return (
    <nav className="px-10 py-3 flex justify-end items-center">
      {/* <div>
        <Image
          src="https://media.graphassets.com/output=format:jpg/BZcUI4wrSx6BB1zpOyO6"
          alt="Manulock logo"
          height={620}
          width={1060}
          priority
          className="h-10 w-20"
        />
      </div> */}
      <div>
        <UserAccount />
      </div>
    </nav>
  );
};

export default NavBar;
