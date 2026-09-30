import { FaAws, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  LuArrowLeftRight,
  LuBrush,
  LuChartColumn,
  LuChartLine,
  LuChartPie,
  LuCloud,
  LuCode,
  LuDatabase,
  LuImages,
  LuLayoutTemplate,
  LuMegaphone,
  LuMonitorSmartphone,
  LuPalette,
  LuPartyPopper,
  LuPenTool,
  LuSchool,
  LuServer,
  LuSparkles,
  LuTrophy,
  LuUsers,
  LuWebhook,
} from 'react-icons/lu';
import {
  SiAngular,
  SiBootstrap,
  SiCentos,
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiRedis,
  SiTypescript,
  SiUbuntu,
  SiWordpress,
} from 'react-icons/si';

// Icons are looked up by the names used in src/data/content.js.
// Anything without a match falls back to a neutral icon, so new content never breaks.

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
};

export const categoryIcons = {
  Frontend: LuCode,
  Backend: LuServer,
  'Server & Cloud': LuCloud,
  Database: LuDatabase,
  Design: LuPalette,
  CMS: LuLayoutTemplate,
};

export const skillIcons = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  AJAX: LuArrowLeftRight,
  Bootstrap: SiBootstrap,
  'Responsive Design': LuMonitorSmartphone,
  'Angular 2+': SiAngular,
  TypeScript: SiTypescript,
  'Core PHP': SiPhp,
  Laravel: SiLaravel,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  'Nest.js': SiNestjs,
  'RESTful APIs': LuWebhook,
  Ubuntu: SiUbuntu,
  CentOS: SiCentos,
  AWS: FaAws,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  'Adobe Photoshop': LuBrush,
  'Adobe Illustrator': LuPenTool,
  WordPress: SiWordpress,
};

export const projectIcons = {
  school: LuSchool,
  users: LuUsers,
  party: LuPartyPopper,
  trophy: LuTrophy,
  megaphone: LuMegaphone,
  images: LuImages,
  chartColumn: LuChartColumn,
  webhook: LuWebhook,
  chartPie: LuChartPie,
  chartLine: LuChartLine,
};

export const fallbackIcon = LuSparkles;

export const getIcon = (map, key) => map[key] || fallbackIcon;
