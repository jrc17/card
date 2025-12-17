import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <img src="/src/assets/jayanthi.jpg" className="potrait" />
    <header>
      <h1>Jayanthi Chesetti</h1>
      <p className="role">Frontend Developer</p>
      <a href="#" className="website">
        jayanthi.website
      </a>
      <div className="links-1">
        <a href="mailto:jayanthi.chesetti@gmail.com">
          <img src="/src/assets/email.png" />
          Email
        </a>
        <a href="https://www.linkedin.com/in/jayanthi-chesetti-657805272/">
          <img src="/src/assets/linkedin.png" />
          LinkedIn
        </a>
      </div>
    </header>
    <main>
      <h2>About</h2>
      <p>
        I am a frontend developer with a particular interest in making things
        look nice and easy to navigate. I try to keep up with accessibility and
        best practices, and am always looking for new things to learn.
      </p>
      <h2>Interests</h2>
      <p>
        Art & design enthusiast. Eco-conscious. Foodie. Music lover. Avid
        reader.
      </p>
    </main>
    <footer className="links-2">
      <a href="https://github.com/jrc17">
        <img src="/src/assets/github.png" />
      </a>
      <a href="https://www.frontendmentor.io/profile/jrc17">
        <img src="/src/assets/frontendmentor.png" />
      </a>
      <a href="https://www.instagram.com/jayanthi_rc/">
        <img src="/src/assets/instagram.png" />
      </a>
    </footer>
  </>
);
