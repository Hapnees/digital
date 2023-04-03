import blogs1Avatar from '@/assets/Blogs/blogs_1/blogs_1_avatar.png'
import blogs2Avatar from '@/assets/Blogs/blogs_2/blogs_2_avatar.png'
import blogs3Avatar from '@/assets/Blogs/blogs_3/blogs_3_avatar.png'
import blogs4Avatar from '@/assets/Blogs/blogs_4/blogs_4_avatar.png'
import blogs5Avatar from '@/assets/Blogs/blogs_5/blogs_5_avatar.png'
import blogs6Avatar from '@/assets/Blogs/blogs_6/blogs_6_avatar.png'
import blogs7Avatar from '@/assets/Blogs/blogs_7/blogs_7_avatar.png'
import blogs8Avatar from '@/assets/Blogs/blogs_8/blogs_8_avatar.png'

import blog7Post1Thumbnail from '@/assets/Blogs/blogs_7/posts/post_1/blog_7_post_1_thumbnail.png'

import blog8Post1Thumbnail from '@/assets/Blogs/blogs_8/posts/post_1/blog_8_post_1_thumbnail.png'

import blog2Post1Thumbnail from '@/assets/Blogs/blogs_2/posts/post_1/blog_2_post_1_thumbnail.png'

import blog2Post2Thumbnail from '@/assets/Blogs/blogs_2/posts/post_2/blog_2_post_2_thumbnail.png'

import blog2Post3Thumbnail from '@/assets/Blogs/blogs_2/posts/post_3/blog_2_post_3_thumbnail.png'

import { IBlog } from '@/types/blogs.interface'

export const blogsData: IBlog[] = [
	{
		id: 1,
		username: 'Издание Диджитал',
		avatar: blogs1Avatar,
		blogPosts: [],
		isPopular: true,
	},
	{
		id: 2,
		username: 'Светлана Майбродская',
		avatar: blogs2Avatar,
		blogPosts: [
			{
				id: 1,
				title: 'Как продать слово, которое ничего не значит?',
				date: 'Окт 18',
				tags: ['Брендинг', 'стратегическое планирование'],
				thumbnail: blog2Post1Thumbnail,
				body: 'Генеральный директор Herb Мэтт Грей опубликовал в своем Твиттере десятку лучших тематических исследований всех времен. Я выложу пять, но если вам интересно продолжение, вот ссылка. 1. Дюрекс. Тем, кто пользуется продукцией наших конкурентов: "С Днем отца!" Забавный случай, в духе любой рекламы презервативов: дерзко, на грани. 2. Порше. «Она слишком мала, чтобы заниматься с ней сексом, но ты можешь',
				isPopular: false,
			},
			{
				id: 2,
				title: 'Лексические приемы для создания имен',
				date: 'Окт 18',
				tags: ['Креатив', 'креативные идеи', 'реклама'],
				thumbnail: blog2Post2Thumbnail,
				body: 'Как придумать имя? Это самый распространенный вопрос, который интересует всех, кто занимается неймингом. Ответ на него таков: методы придумывания слов, текстов и лозунгов одинаковы. Точнее, все, что связано со словами, подчиняется общей системе. Те. поэты, писатели, журналисты, копирайтеры и неймеры работают со словами сходным образом и используют одни и те же приемы. Какие? Это будет обсуждаться в',
				isPopular: false,
			},
			{
				id: 3,
				title: 'Как работать с возражениями клиентов в нейминге?',
				date: 'Окт 18',
				tags: ['Брендинг', 'стратегическое планирование'],
				thumbnail: blog2Post3Thumbnail,
				body: '«Этого нет в брифе». «Слишком неясно». "Слишком долго." «Он уже существует». «И вообще, что-то мне не нравится». Эти или подобные фразы говорят нам наши клиенты. С ними можно и нужно работать. Вы должны подготовиться к ним. Увидимся заранее. А иногда даже на стадии брифа. Такие замечания должны быть предупреждены. На них нужно ответить. В этой статье мы разберем самые популярные возражения клиентов',
				isPopular: false,
			},
		],
		isPopular: true,
	},
	{
		id: 3,
		username: 'Роман Гонжаров',
		avatar: blogs3Avatar,
		blogPosts: [],
		isPopular: true,
	},
	{
		id: 4,
		username: 'СберМаркетинг',
		avatar: blogs4Avatar,
		blogPosts: [],
		isPopular: true,
	},
	{
		id: 5,
		username: 'Ольга Лукьянова',
		avatar: blogs5Avatar,
		blogPosts: [],
		isPopular: true,
	},
	{
		id: 6,
		username: 'Маркетинговое агентство PROnline ROIF Expert',
		avatar: blogs6Avatar,
		blogPosts: [],
		isPopular: true,
	},
	{
		id: 7,
		username: 'Алексей Парфун',
		avatar: blogs7Avatar,
		blogPosts: [
			{
				id: 1,
				thumbnail: blog7Post1Thumbnail,
				title: 'Лучши рекламные случаи в истории',
				body: 'Генеральный директор Herb Мэтт Грей опубликовал в своем Твиттере десятку лучших тематических исследований всех времен. Я выложу пять, но если вам интересно продолжение, вот ссылка. 1. Дюрекс. Тем, кто пользуется продукцией наших конкурентов: "С Днем отца!" Забавный случай, в духе любой рекламы презервативов: дерзко, на грани. 2. Порше. «Она слишком мала, чтобы заниматься с ней сексом, но ты можешь',
				date: 'Окт 18',
				isPopular: true,
				tags: [],
			},
		],
		isPopular: false,
	},
	{
		id: 8,
		username: 'Юлия Корчагина-Озджан',
		avatar: blogs8Avatar,
		blogPosts: [
			{
				id: 1,
				thumbnail: blog8Post1Thumbnail,
				title:
					'Как психотерапия помогла мне заработать свой первый миллион рублей',
				body: 'Как психотерапия помогла мне заработать свой первый миллион рублей Психотерапия помогает не только выбраться из душевных ям, пережить трудные времена или разгадать тяжелые переживания из детства. Благодаря общению с психологом я смогла выйти на новый уровень дохода и теперь зарабатываю миллионы рублей, занимаясь любимым делом. Меня зовут Юлия Корчагина-Озджан, я предприниматель, журналист, специалист по коммуникациям и продажам. Я помогаю предпринимателям',
				date: 'Ноя 1',
				isPopular: true,
				tags: [],
			},
		],
		isPopular: false,
	},
]
