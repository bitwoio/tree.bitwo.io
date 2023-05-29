const socialMedias: SocialMediasInterface[] = [
  {
    name: 'GitHub',
    username: '@bitwoio',
    url: 'https://github.com/bitwoio/',
    order: 1
  },
  {
    name: 'Instagram',
    username: '@bitwoio',
    url: 'https://instagram.com/bitwoio/',
    order: 2
  },
  {
    name: 'Twitter',
    username: '@bitwoio',
    url: 'https://twitter.com/bitwoio',
    order: 3
  },
  {
    name: 'LinkedIn',
    username: 'company/bitwoio',
    url: 'https://www.linkedin.com/company/bitwoio/',
    order: 4
  },
];

const themes: ThemesInterface[] = [
  {
    id: 'light',
    name: 'Light',
    order: 1
  },
  {
    id: 'dark',
    name: 'Dark',
    order: 2
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    order: 5
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    order: 7
  },
  {
    id: 'retro',
    name: 'Retro',
    order: 8
  },
];

const links: LinksInterface[] = [
  {
    name: 'bitwo.io',
    url: 'https://bitwo.io/',
    icon: 'bitwo',
    disabled: true,
    order: 1
  },
  {
    name: 'Bitwo OSS',
    url: 'https://oss.bitwo.io/',
    icon: 'bitwo',
    disabled: true,
    order: 2
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/message/VALVIWAF2AOLM1',
    icon: 'whatsapp',
    disabled: false,
    order: 3
  },
  {
    name: 'Telegram',
    url: 'https://t.me/bitwoio',
    icon: 'telegram',
    disabled: false,
    order: 4
  }
];

function sortSocialMedias (): SocialMediasInterface[] {
  return sortByOrder(socialMedias);
}

function sortThemes (): ThemesInterface[] {
  return sortByOrder(themes);
}

function sortLinks (): LinksInterface[] {
  return sortByOrder(links);
}

function sortByOrder (objetcs: any[]): any[] {
  return objetcs.sort((a, b) => a.order - b.order);
}


const useSocialMedias = () => useState(() => sortSocialMedias());
const useThemes = () => useState(() => sortThemes());
const useLinks = () => useState(() => sortLinks());

export {
  useSocialMedias,
  useThemes,
  useLinks
}
