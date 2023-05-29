interface SocialMediasInterface {
  name: string
  username?: string
  url: string
  order: number
}

interface ThemesInterface {
  id: string
  name: string
  order: number
}

interface LinksInterface {
  name: string
  url: string
  img?: string | null
  icon?: string | null
  disabled?: boolean
  order: number
}
