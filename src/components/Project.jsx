import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.js';

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  CardLink,
} from 'reactstrap';
import { useTheme } from '../contexts/ThemeContext';

function Project(props) {
  const { dil } = props;
  const { theme } = useTheme();
  return (
    <>
      <section className="cards">
        <div
          className={`proje-card ${
            theme === 'dark'
              ? ' bg-[#2f4f4f] text-white'
              : 'bg-[#DDEEFE] text-black '
          }`}
        >
          <h2> {data.en.projectsSection.project1.title}</h2>
          <p>
            {dil === 'en'
              ? data.tr.projectsSection.project1.paragraph
              : data.en.projectsSection.project1.paragraph}
          </p>
          <div className="btn1">
            <Button color="light" size="lg">
              {data.en.projectsSection.project1.buttons[0]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project1.buttons[1]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project1.buttons[2]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project1.buttons[3]}
            </Button>
          </div>
          <div className="link">
            <a href="" className={`${theme === "dark" ? "text-white": "text-black"}`}>View on Github</a>
            <a href="" className={`${theme === "dark" ? "text-white": "text-black"}`}>Go to app ➜</a>
          </div>
          <img className="img pc1" src={data.en.projectsSection.project1.img} alt="" />
        </div>

        <div
          className={`proje-card ${
            theme === 'dark'
              ? ' bg-[#2f4f4f] text-white'
              : 'bg-[#DDEEFE] text-black '
          }`}
        >
          <h2> {data.en.projectsSection.project2.title}</h2>
          <p>
            {dil === 'en'
              ? data.tr.projectsSection.project2.paragraph
              : data.en.projectsSection.project2.paragraph}
          </p>
          <div className="btn1">
            <Button color="light" size="lg">
              {data.en.projectsSection.project2.buttons[0]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project2.buttons[1]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project2.buttons[2]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project2.buttons[3]}
            </Button>
            <Button color="light" size="lg">
              {data.en.projectsSection.project2.buttons[4]}
            </Button>
          </div>
          <div className="link">
            <a href="" className={`${theme === "dark" ? "text-white": "text-black"}`}>View on Github</a>
            <a href="" className={`${theme === "dark" ? "text-white": "text-black"}`}>Go to app ➜</a>
          </div>
          <img className="img" src={data.en.projectsSection.project2.img} alt="" />
        </div>


        
      </section>
    </>
  );
}

export default Project;
