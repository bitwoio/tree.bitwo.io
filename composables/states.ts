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
    id: 'cupcake',
    name: 'Cupcake',
    order: 3
  },
  {
    id: 'dracula',
    name: 'Dracula',
    order: 4
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    order: 5
  },
  {
    id: 'bumblebee',
    name: 'Bumblebee',
    order: 6
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
  {
    id: 'lofi',
    name: 'Lo-Fi',
    order: 9
  }
];

const links: LinksInterface[] = [
  {
    name: 'bitwo.io',
    url: 'https://bitwo.io/',
    img: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4',
    disabled: true,
    order: 1
  },
  {
    name: 'Bitwo OSS',
    url: 'https://oss.bitwo.io/',
    img: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4',
    disabled: true,
    order: 2
  },
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
