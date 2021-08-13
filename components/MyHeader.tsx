import Image from "next/image";

const Header = () => {
  return (
    <header className="my-header">
      <div className="logo-box">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="logo"
          height="49"
          width="49"
        />
        <h5>Anzen Pay</h5>
      </div>
      <div className="avatar-box">
        <h5>Kevin D Goveas</h5>
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          className="avatar"
          height="35"
          width="35"
        />
      </div>
    </header>
  );
};

export default Header;
