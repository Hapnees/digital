export interface IBlog {
	id: number
	username: string
	avatar: string
	blogPosts: IBlogPost[]
	isPopular: boolean
}

export interface IBlogPost {
	id: number
	title: string
	body: string
	thumbnail: string
	date: string
	isPopular: boolean
	tags: string[]
}

export interface IBlogControl<T extends string = string> {
	id: string
	title: T
	isDefaultChecked?: boolean
}
