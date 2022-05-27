import { IconType } from 'react-icons/lib';
import {
  SiTwitter,
  SiGithub,
  SiYoutube,
  SiPolywork,
  SiTwitch,
} from 'react-icons/si';
import * as icons from 'react-icons/si';
import { IoMoon } from 'react-icons/io5';
import * as icns from 'react-icons/io5';


import {
  GITHUB_PROFILE,
  LKD_PROFILE,
  CV_PROFILE,
} from 'src/constants';

type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
};

export type SocialItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type ThemeItem = BaseItem & {
  id: 'theme';
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
  social: SocialItem[];
  theme: ThemeItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: 'Accueil',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ],
  social: [
    {
      title: 'CV',
      icon: icns.IoDocumentLockSharp,
      href: CV_PROFILE,
    },
    {
      title: 'GitHub',
      icon: SiGithub,
      href: GITHUB_PROFILE,
    },
    {
      title: 'Linkedin',
      icon: icons.SiLinkedin,
      href: LKD_PROFILE,
    },
  ],
  theme: [
    {
      id: 'theme',
      title: 'Changer le theme',
      icon: IoMoon,
    },
  ],
};
