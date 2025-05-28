import './Header.css';
import data from '../data.js';
import { useTheme } from '../contexts/ThemeContext';

function Header(props) {
  const { dil } = props;
  const {theme} = useTheme();
  return (
    <>
    <div
        aria-hidden="true"
        className=" sag-pink absolute right-[0] bottom-[80px] w-[120px] h-[50px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[35px] bg-[#EA2678] rounded-r-full rotate-180"
      >{/*profile resmin altındaki pembe çizgi */}</div>
      <div
        aria-hidden="true"
        className=" gri-daire md:block absolute w-[120px] h-[120px] left-[421px] top-[-45px] bg-[#D9D9D9] rounded-full opacity-50"
      >{/*yukarıdaki gri renkli yarım daire */}</div>
      <section className= {` header ${theme === 'dark' ? 'bg-[#363636] text-white' : 'bg-[#F4F4F4] '}` }>
        <h1 className="hi">
          {dil === 'en' ? data.tr.header.greeting : data.en.header.greeting}{' '}
        </h1>
        <div className="profile">
          <div className="relative inline-block">
            <div
              aria-hidden="true"
              className=" almila-pink absolute left-0 top-[37px] w-[140px] h-[31px] bg-[#E92577] rounded-[7px] z-0"
            >{/* almila yazısının altındaki çizgi */}</div>
            <p  className= {` almila relative ${theme === 'dark' ? ' text-[#f8f8ff]' : 'bg-[#F4F4F4] text-black'}` }>
              {dil === 'en' ? data.tr.header.intro : data.en.header.intro}
            </p>
          </div>
          

          <img
            className="profileimg"
            src={data.en.header.profileimg}
            alt="profile"
          />
        </div>
        <div className="icongroup">
          <div className="icon">
            <a href={data.en.header.socials[0].link}>
              <img
                className="linkedinimg"
                src={data.en.header.socials[0].logo}
                alt={data.en.header.socials[0].alt}
              />
            </a>
            <a href={data.en.header.socials[1].link}>
              <img
                className="githubimg"
                src={data.en.header.socials[1].logo}
                alt={data.en.header.socials[1].alt}
              />
            </a>
          </div>
          <p className= {` ${theme === 'dark' ? ' text-white' : ' text-black'}` }      
           dangerouslySetInnerHTML={{ __html: dil === 'en' ? data.tr.header.ctaHTML : data.en.header.ctaHTML }}
          />
        </div>
      </section>
    </>
  );
}

export default Header;
