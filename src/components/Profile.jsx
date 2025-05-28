import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './Profile.css';
import data from '../data.js';
import { useTheme } from '../contexts/ThemeContext';

function Profile(props) {
  const { changeDil, dil } = props;
  const { theme } = useTheme();
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute right-[-45px] top-[1100px] w-[121px] md:w-[120px] h-[121px] md:h-[120px] border-[21px] md:border-[24px] border-[#EA2678] dark:border-gray-700 rounded-full"
      >
        {/* pembe renkli yarım halka */}
      </div>
      <section
        className={` bilgi ${
          theme === 'dark' ? 'bg-[#363636] text-white' : 'bg-[#F4F4F4] text-black'
        }`}
      >
        <h1 className="profile-title">
          {' '}
          {dil === 'en'
            ? data.tr.profileSection.title
            : data.en.profileSection.title}
        </h1>
        <div className=  "profile-info" >
        <div  className= {`card ${theme === 'dark' ? ' bg-black text-white' : 'bg-[#cfcfcf]text-black '}` }>
        <p className="text-[#EA2678]">
        {' '}
                {dil === 'en'
                  ? data.tr.profileSection.cardTitle
                  : data.en.profileSection.cardTitle}
        </p>
        <div className= {` info ${theme === 'dark' ? '  text-white' : 'text-black '}` }>
                <div className="soru">
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.date
                      : data.en.profileSection.date}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.city
                      : data.en.profileSection.city}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.education
                      : data.en.profileSection.education}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.rol
                      : data.en.profileSection.rol}
                  </p>
                </div>
                <div className="cevap">
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.answer_date
                      : data.en.profileSection.answer_date}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.answer_city
                      : data.en.profileSection.answer_city}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.answer_education
                      : data.en.profileSection.answer_education}
                  </p>
                  <p>
                    {dil === 'en'
                      ? data.tr.profileSection.answer_rol
                      : data.en.profileSection.answer_rol}
                  </p>
                </div>
              </div>
        </div>
        


          <div  className= {` aboutme relative ${theme === 'dark' ? ' text-white' : 'text-black '}` }>
            <h3 className="relative">
              <div className="absolute left-[-10px] top-[13px] w-[90px] h-[18px] bg-[#82BBFF] rounded-[5px] z-0">
                {/* About me yazısının altındaki mavi çizgi */}
              </div>
              <span className="relative z-10">
                {dil === 'en'
                  ? data.tr.profileSection.aboutMe
                  : data.en.profileSection.aboutMe}
              </span>
            </h3>
            <p>
              {' '}
              {dil === 'en'
                ? data.tr.profileSection.paragraph1
                : data.en.profileSection.paragraph1}
            </p>

            <p>
              {dil === 'en'
                ? data.tr.profileSection.paragraph2
                : data.en.profileSection.paragraph2}{' '}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
