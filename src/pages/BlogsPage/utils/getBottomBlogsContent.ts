import { allMaterials, popularMaterials } from '../BlogsPage.data'
import { IBottomControls } from '../BlogsPage.interface'

export const getBottomBlogsContent = (
	controlsBottomValue: IBottomControls | undefined
) => {
	switch (controlsBottomValue) {
		case 'Популярные материалы':
			return popularMaterials
		case 'Все':
			allMaterials
		default:
			return []
	}
}
