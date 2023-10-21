const Header = () => {

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="logo">
            <h2>Ostad</h2>
          </div>
          <h2>Ostad Assignment</h2>
          <div className="navlinks">
            <ul><a href="#about">About</a></ul>
            <ul><a href="#project">Project</a></ul>
            <ul><a href="#service">Service</a></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
