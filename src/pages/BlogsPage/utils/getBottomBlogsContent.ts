import { allMaterials, popularMaterials } from '../BlogsPage.data'
import { IBottomControls } from '../BlogsPage.interface'

export const getBottomBlogsContent = (
	controlsBottomValue: IBottomControls | undefined
) => {
	console.log(allMaterials)
	switch (controlsBottomValue) {
		case 'Популярные материалы':
			return popularMaterials
		case 'Все':
			return allMaterials
		default:
			return []
	}
}
