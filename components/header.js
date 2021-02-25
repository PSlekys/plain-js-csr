const Header = (app) => {
  const headerBox = /*html*/ `
        <header style="background: grey">
            <div style="width: 750px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center">
                <img style="height: 40px" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
            
                <nav>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contacts">Link</a>
                </nav>
            </div>
        </header>
    `;

  app.innerHTML += headerBox;
};

export default Header;
