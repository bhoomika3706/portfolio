import React from "react";

function App() {
  return (
    <div style={styles.container}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={{ color: "#ff4da6" }}>Bhoomika</h2>
        <div>
          <a href="#about" style={styles.link}>About</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.section}>
        <h1 style={styles.heading}>Hi, I'm Bhoomika 👋</h1>
        <p style={styles.text}>
          Computer Engineering student building AI + FinTech driven systems.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2 style={styles.subheading}>About</h2>
        <p style={styles.text}>
          I'm a 3rd-year Computer Engineering student at SIES GST.  
          I focus on building real-world applications combining AI, web development, and business logic.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.subheading}>Projects</h2>

        <div style={styles.card}>
          <h3>MarketCart</h3>
          <p>Full-stack e-commerce app using Angular & Node.js.</p>
        </div>

        <div style={styles.card}>
          <h3>Data Visualizer</h3>
          <p>Visual platform for algorithms like Dijkstra & Prim’s.</p>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.subheading}>Skills</h2>
        <p style={styles.text}>
          C, Python, JavaScript, React, Angular, SQL, Git
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.subheading}>Contact</h2>
        <p style={styles.text}>your-email@gmail.com</p>
      </section>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0a0a0a",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px"
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none"
  },
  section: {
    marginBottom: "60px"
  },
  heading: {
    fontSize: "40px"
  },
  subheading: {
    fontSize: "28px",
    color: "#ff4da6"
  },
  text: {
    color: "#ccc",
    maxWidth: "600px"
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: "15px",
    marginTop: "10px",
    borderRadius: "10px"
  }
};

export default App;