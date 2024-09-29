import Image from '../../_styled/Image';

const NavBar = () => {
  return (
    <nav className="px-10 py-3 bg-white">
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
    </nav>
  );
};

export default NavBar;
