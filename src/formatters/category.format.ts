import { ECategory } from '@/types/category.interface'

export const formatCategory = (category: string) => {
  switch (category) {
    case ECategory.laws:
      return 'laws'
    case ECategory.internetMarketing:
      return 'internetMarketing'
    case ECategory.digital:
      return 'digital'
    case ECategory.cybersport:
      return 'cybersport'
    case ECategory.researches:
      return 'researches'
    default:
      return ''
  }
}
