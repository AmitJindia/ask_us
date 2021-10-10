import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';

export const NavMenu = [
    { text: "Home", icon: HomeTwoToneIcon, titleText: "Home", routing: "/", active: true },
    {
      text: 'Raise Query',
      icon: BorderColorTwoToneIcon,
      routing: "/raise_query",
    },
    {
      text: 'FAQ',
      icon: LiveHelpTwoToneIcon,
      routing: "/",
    },
    {
      text: 'Quiz',
      icon: QuizTwoToneIcon,
      routing: "/",
    },
    {
      text: 'Careers',
      icon: AssignmentIndTwoToneIcon,
      routing: "/",
    },
    {
      text: 'About Us',
      icon: InfoTwoToneIcon,
      routing: "/",
    },
    {
      text: 'Contact Us',
      icon: ContactSupportTwoToneIcon,
      routing: "/contact_us",
    },
  ];