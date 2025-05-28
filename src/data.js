import Project from './components/Project';

const data = {
  en: {
    header: {
      greeting: 'Hi! 👋',
      intro:
        " I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend produts. Leet meet!",
      profileimg: '/images/profil.png',
      socials: [
        {
          logo: '/images/linkedIn.png',
          alt: 'linkedIn',
          link: 'www.linkedin.com/in/zeynep-aslan-erdoğan',
        },
        {
          logo: '/images/github.png',
          alt: 'github',
          link: 'https://github.com/zeynep-erdogan',
        },
      ],
      ctaHTML:
        " Currently <span>Freelancing</span> <span>UX, UI, & Web Design</span> Project. <br /> Invite me to join your team -> <span>pratamaiosi@gmail.com</span>",
    },
    skillsSection: {
      title: 'Skills',
      skills: [
        {
          img: '/images/js.png',
          name: 'JAVASCRİPT',
        },
        {
          img: '/images/react.png',
          name: 'REACT',
        },
        {
          img: '/images/redux.png',
          name: 'REDUX',
        },
        {
          img: '/images/node.png',
          name: 'NODE',
        },
        {
          img: '/images/vscode.png',
          name: 'VS CODE',
        },
        {
          img: '/images/figma.png',
          name: 'FİGMA',
        },
      ],
    },
    profileSection: {
      title: 'Profile',
      cardTitle: 'Basic İnformation',
      date: 'Date of Birth',
      city: 'City of Residence',
      education: 'Education',
      rol: 'Preferred Role',
      answer_date: '24.03.1996',
      answer_city: 'Ankara',
      answer_education: 'Hacettepe Ünv. Biyoloji Lisans, 2016',
      answer_rol: 'Frontend, UI',
      aboutMe: 'About me',
      paragraph1:
        'I am an enthusiastic and dedicated senior software developer with 3 years of experience in software development.',
      paragraph2:
        'I have a bachelors degree in Computer Science. I continue to improve myself in the software field.',
    },
    projectsSection: {
      title: 'Projects',
      project1: {
        title: 'Workinteck',
        paragraph:
          'Our Workintech NextGenAI artificial intelligence software revolutionizes education. It’s like having a private teacher right next to you, monitoring your code.',
        buttons: ['react', 'vercel', 'axios', 'router'],
        img: '/images/pc1.png',
      },
      project2: {
        title: 'NextGen-Al',
        paragraph:
          'In Workintech training, a project is done at the end of each course. In this way, our students graduate by creating real products that they can display in their portfolios.',
        buttons: ['react', 'redux', 'axios', 'router', 'vercel'],
        img: '/images/pc2.png',
      },
      footer: {
        text: 'Let’s work together on your next product.',
        li: ['Github', 'Personal Blog', 'Linkedin', 'Email'],
      },
    },
  },
  tr: {
    header: {
      greeting: 'Merhaba! 👋',
      intro:
        ' Ben Almila. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir ön yüz ürünleri tasarlayabilirim. Hadi tanışalım!',
      profileimg: '/src/images/profil.png',
      socials: [
        {
          logo: '/src/images/linkedIn.png',
          alt: 'linkedIn',
          link: 'www.linkedin.com/in/zeynep-aslan-erdoğan',
        },
        {
          logo: '/src/images/github.png',
          alt: 'github',
          link: 'https://github.com/zeynep-erdogan',
        },
      ],
      ctaHTML:
        " Şu anda <span> UX, UI ve Web Tasarımı </span> projesi için <span>Freelance</span> çalışıyorum. <br /> Ekibinize katılmam için bana ulaşın → <span>pratamaiosi@gmail.com</span>", 
    },
    skillsSection: {
      title: 'Yetenekler',
      skills: [
        {
          img: '/src/images/js.png',
          name: 'JAVASCRİPT',
        },
        {
          img: '/src/images/react.png',
          name: 'REACT',
        },
        {
          img: '/src/images/redux.png',
          name: 'REDUX',
        },
        {
          img: '/src/images/node.png',
          name: 'NODE',
        },
        {
          img: '/src/images/vscode.png',
          name: 'VS CODE',
        },
        {
          img: '/src/images/figma.png',
          name: 'FİGMA',
        },
      ],
    },
    profileSection: {
      title: 'Profil',
      cardTitle: 'Temel Bilgiler',
      date: 'Doğum Tarihi',
      city: 'İkamet Şehri',
      education: 'Eğitim Durumu',
      rol: 'Tercih Ettiği Rol',
      answer_date: '24.03.1996',
      answer_city: 'Ankara',
      answer_education: 'Hacettepe Ünv. Biyoloji Lisans, 2016',
      answer_rol: 'Frontend, UI',
      aboutMe: 'Hakkımda',
      paragraph1:
        'Yazılım geliştirme alanında 3 yıllık deneyime sahip hevesli ve kendini işine adamış kıdemli bir yazılımciyim.',
      paragraph2:
        'Bilgisayar Bilimleri alanında lisans derecesine sahibim. Yazılım alanında kendimi geliştirmeye devam ediyorum. ',
    },
    projectsSection: {
      title: 'Projeler',
      project1: {
        title: 'Workintech',
        paragraph:
          'Workintech eğitiminde her dersin sonunda proje yapılıyor. Böylece öğrencilerimiz portföylerinde sergileyebilecekleri gerçek ürünler oluşturarak mezun oluyorlar.',
        buttons: ['react', 'vercel', 'axios', 'router'],
        img: 'src/images/pc1.png',
      },
      project2: {
        title: 'Are you bored?',
        paragraph:
          'Workintech NextGenAI yapay zeka yazılımımız eğitimde çığır açıyor. Adeta özel bir öğretmen yanınızda kodunuzu takip ediyormuş gibi.',
        buttons: ['react', 'redux', 'axios', 'router', 'vercel'],
        img: 'src/images/pc2.png',
      },
      footer: {
        text: 'Bir sonraki ürününüz üzerinde birlikte çalışalım.',
        a: ['Github', 'Personal Blog', 'Linkedin', 'Email'],
      },
    },
  },
};

export default data;
