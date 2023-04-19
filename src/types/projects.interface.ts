export interface IProject {
	id: number
	title: string
	img: string
	news: {
		id: number
		title: string
		date: string
		description: string
	}[]
}
