export interface IPost {
	id: number
	category: string
	img: string
	title: string
	subtitle: string
	body: () => JSX.Element
	isPopular: boolean
	date: string
}
