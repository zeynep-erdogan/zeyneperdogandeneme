import { Container } from 'reactstrap';
import './Skills.css';
import data from '../data.js';
import { useTheme } from '../contexts/ThemeContext';

function Skills(props) {
  const { changeDil, dil } = props;
  const {changeTheme, theme} = useTheme();
  return (
    <>
    <div
        aria-hidden="true"
        className="absolute left-0 top-[1050px] w-[100px] h-[40px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[35px] bg-[#525252] rounded-r-full"
      >{/* javaScript altındaki gri çizgi */}</div>
      <div 
        aria-hidden="true"
        className="absolute right-[300px] top-[620px] w-[121px] md:w-[120px] h-[121px] md:h-[120px] border-[21px] md:border-[24px] border-[#D9D9D9] dark:border-gray-700 rounded-full"
      >{/* gri renkli  halka */}</div>
      <div  className= {` skills-container ${theme === 'dark' ? ' bg-[#4f4f4f] text-white' : ' text-[#777777]'}` }>
        <h1  className= {` skills-title ${theme === 'dark' ? ' text-white' : ' text-black'}` }>{dil === 'en' ? data.tr.skillsSection.title : data.en.skillsSection.title}</h1>
        <section className="skills" >
          <div>
            <img src={data.en.skillsSection.skills[0].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[0].name}</p>
          </div>
          <div >
            <img src={data.en.skillsSection.skills[1].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[1].name}</p>
          </div>
          <div>
            <img src={data.en.skillsSection.skills[2].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[2].name}</p>
          </div>
          <div>
            <img src={data.en.skillsSection.skills[3].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[3].name}</p>
          </div>
          <div>
            <img src={data.en.skillsSection.skills[4].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[4].name}</p>
          </div>
          <div>
            <img src={data.en.skillsSection.skills[5].img} alt="javascript" />
            <p>{data.en.skillsSection.skills[5].name}</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
