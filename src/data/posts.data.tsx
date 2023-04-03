import cybersport1 from '@/assets/CyberSport/cybersport_1.png'
import digital1 from '@/assets/Digital/digital_1.png'
import internetMarketing1 from '@/assets/InternetMarketing/internetMarketing_1.png'

import laws1 from '@/assets/Laws/laws_1.png'
import laws2 from '@/assets/Laws/laws_2.png'
import laws3 from '@/assets/Laws/laws_3.png'
import laws4 from '@/assets/Laws/laws_4.png'

import { ECategory } from '@/types/category.interface'
import { IPost } from '@/types/post.interface'

const laws1Body = () => {
	return (
		<div>
			<p>
				Депутаты Госдумы обсудят в начале 2023 года возможное ужесточение
				условий пользования интернетом для детей. Чиновники хотят обновить
				законодательство о защите несовершеннолетних в онлайн-пространстве:
				ввести регистрацию в социальных сетях по паспортным данным, а также
				ввести административную и уголовную ответственность за буллинг в
				Интернете, пишут «Известия»
			</p>
			<br />
			<p>
				Детей до 14 лет, не имеющих еще паспорта, могут зарегистрировать их
				родители или законные представители
			</p>
		</div>
	)
}

export const postsData: IPost[] = [
	{
		id: 1,
		category: ECategory.laws,
		img: laws1,
		title:
			'В Госдуме предложили ввести регистрацию детей в соцсетях по паспортным данным',
		subtitle:
			'Чиновники хотят ужесточить законодательство о защите несовершеннолетних в Интернете',
		body: laws1Body,
		date: 'сегодня в 11:40',
		isPopular: false,
	},
	{
		id: 2,
		category: ECategory.laws,
		img: '',
		title:
			'Депутат Госдумы Антон Ткачев предложил РКН разблокировать Twitter в России',
		subtitle: '',
		body: () => <p></p>,
		date: '18.12.2022',
		isPopular: true,
	},
	{
		id: 3,
		category: ECategory.internetMarketing,
		img: internetMarketing1,
		title: '«Реклама ВКонтакте» запустила продвижение лид-форм',
		subtitle:
			'Решение позволяет создавать формы с настраиваемыми полями и запускать кампании',
		body: () => <p></p>,
		date: 'четверг в 16:25',
		isPopular: false,
	},
	{
		id: 4,
		category: ECategory.internetMarketing,
		img: '',
		title:
			'Микроинфлюенсеры вместо блогеров-миллионеров: тренды блогосферы 2022',
		subtitle: '',
		body: () => <p></p>,
		date: '13.12.2022',
		isPopular: true,
	},
	{
		id: 5,
		category: ECategory.digital,
		img: digital1,
		title: 'Кризис усложняет маркетинг: тренды мирового цифрового рынка 2023',
		subtitle: 'Развивающиеся страны лидируют в росте расходов на рекламу',
		body: () => <p></p>,
		date: 'вчера в 17:50',
		isPopular: false,
	},
	{
		id: 6,
		category: ECategory.digital,
		img: '',
		title:
			'Минцифра заявила, что уход Nokia и Ericsson не повлияет на качество связи в России',
		subtitle: '',
		body: () => <p></p>,
		date: '20.12.2022',
		isPopular: true,
	},
	{
		id: 7,
		category: ECategory.cybersport,
		img: cybersport1,
		title: 'My.Games покинет Россию',
		subtitle:
			'Российское юрлицо договорилось о создании СП с другой игровой компанией',
		body: () => <p></p>,
		date: 'пятница в 06:50',
		isPopular: false,
	},
	{
		id: 8,
		category: ECategory.researches,
		img: '',
		title: 'Рынок постеров к концу года вырастет на 4%',
		subtitle: '',
		body: () => <p></p>,
		date: '20.12.2022',
		isPopular: true,
	},
	{
		id: 9,
		category: ECategory.laws,
		img: laws2,
		title: 'ВКонтакте начали помечать группы с возможным ЛГБТ-контентом',
		subtitle:
			'Соцсеть предупредила, что ее могут заблокировать за несоблюдение российского законодательства',
		body: () => <p></p>,
		date: '09.12.2022',
		isPopular: false,
	},
	{
		id: 10,
		category: ECategory.laws,
		img: laws3,
		title:
			'Минцифра хочет обязать Apple разрешить установку сторонних приложений на iPhone в России	',
		subtitle: 'Ранее аналогичный закон был принят для стран ЕС',
		body: () => <p></p>,
		date: '12.15.2022',
		isPopular: false,
	},
	{
		id: 11,
		category: ECategory.laws,
		img: laws4,
		title: 'Еврокомиссия обвинила Meta* в монополии на рынке онлайн-рекламы',
		subtitle:
			'Корпорация связала свой маркетплейс для рекламы с собственной социальной сетью',
		body: () => <p></p>,
		date: 'вторник в 09:40',
		isPopular: false,
	},
]
