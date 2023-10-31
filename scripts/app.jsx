const { useState, useEffetct } = React;

 function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isHidden, setIsHidden] = useState(false);

  const handleChangeSection = (section) => {
    setIsHidden(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsHidden(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="nav">
        <button className="button" onClick={() => handleChangeSection('home')}>Home</button>
        <button className="button" onClick={() => handleChangeSection('about')}>About</button>
        <button className="button" onClick={() => handleChangeSection('contact')}>Contact</button>
      </div>
      <div className={`content ${isHidden ? 'hidden' : ''}`}>
        {currentSection === 'home' && <div>Welcome to my website!</div>}
        {currentSection === 'about' && <div>This is the about section.</div>}
        {currentSection === 'contact' && <div>Contact us at example@example.com</div>}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
