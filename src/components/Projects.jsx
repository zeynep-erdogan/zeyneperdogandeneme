import Project from './Project';
import './Projects.css';
import data from '../data.js';
import { useTheme } from '../contexts/ThemeContext';

function Projects(props) {
  const { dil } = props;
  const {theme} = useTheme();
  return (
    <>
    <div className= {` ${theme === 'dark' ? 'bg-[#4f4f4f] text-white' : 'bg-white  '}` }>
    <h1 className="project-title">{dil === 'en' ? data.tr.projectsSection.title : data.en.projectsSection.title}</h1>
      <Project dil={ dil }/>

      <div className="footer">
        <p className="yazi relative">
          <div className="mavi-cizgi absolute left-[190px] top-[40px] w-[250px] h-[18px] bg-[#82BBFF] rounded-[5px] z-0">
            {/* About me yazısının altındaki mavi çizgi */}
          </div>
          <span  className= {`relative ${theme === 'dark' ? 'text-white' : 'text-black '}` }>
          {dil === 'en' ? data.tr.projectsSection.footer.text : data.en.projectsSection.footer.text}
          </span>
        </p>

        <div className="list">
          <a href="https://github.com/"> <li style={{ color: '#1769FF' }}> Github</li> </a>
          <a href="https://github.com/" >  <li style={{ color: ` ${theme === 'dark' ? '#ffffff' : '#000000'}` }}>Personal Blog</li></a>
          <a href="https://github.com/" ><li style={{ color: '#0077B5' }}>Linkedin</li></a>
          <a href="https://github.com/" > <li style={{ color: '#AF0C48' }}>Email</li></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
