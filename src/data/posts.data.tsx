import cybersport1 from '@/assets/CyberSport/cybersport_1.png'
import cybersport2 from '@/assets/CyberSport/cybersport_2.png'
import cybersport3 from '@/assets/CyberSport/cybersport_3.png'
import cybersport4 from '@/assets/CyberSport/cybersport_4.png'
import cybersport5 from '@/assets/CyberSport/cybersport_5.png'
import cybersport6 from '@/assets/CyberSport/cybersport_6.png'

import digital1 from '@/assets/Digital/digital_1.png'
import digital2 from '@/assets/Digital/digital_2.png'
import digital3 from '@/assets/Digital/digital_3.png'
import digital4 from '@/assets/Digital/digital_4.png'
import digital5 from '@/assets/Digital/digital_5.png'
import digital6 from '@/assets/Digital/digital_6.png'

import internetMarketing1 from '@/assets/InternetMarketing/internetMarketing_1.png'
import internetMarketing2 from '@/assets/InternetMarketing/internetMarketing_2.png'
import internetMarketing3 from '@/assets/InternetMarketing/internetMarketing_3.png'
import internetMarketing4 from '@/assets/InternetMarketing/internetMarketing_4.png'
import internetMarketing5 from '@/assets/InternetMarketing/internetMarketing_5.png'

import laws1 from '@/assets/Laws/laws_1.png'
import laws2 from '@/assets/Laws/laws_2.png'
import laws3 from '@/assets/Laws/laws_3.png'
import laws4 from '@/assets/Laws/laws_4.png'

import researches1 from '@/assets/Researches/researches_1.png'
import researches2 from '@/assets/Researches/researches_2.png'
import researches3 from '@/assets/Researches/researches_3.png'
import researches4 from '@/assets/Researches/researches_4.png'
import researches5 from '@/assets/Researches/researches_5.png'

import { ECategory } from '@/types/category.interface'
import { IPost } from '@/types/post.interface'

const Laws1Body = () => {
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
    body: <Laws1Body />,
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
    date: '13.12.2022',
    isPopular: true,
  },
  {
    id: 5,
    category: ECategory.digital,
    img: digital1,
    title: 'Кризис усложняет маркетинг: тренды мирового цифрового рынка 2023',
    subtitle: 'Развивающиеся страны лидируют в росте расходов на рекламу',
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
    date: 'пятница в 06:50',
    isPopular: false,
  },
  {
    id: 8,
    category: ECategory.researches,
    img: '',
    title: 'Рынок постеров к концу года вырастет на 4%',
    subtitle: '',
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
    date: 'вторник в 09:40',
    isPopular: false,
  },
  {
    id: 12,
    category: ECategory.researches,
    img: researches1,
    title: '50% россиян опасаются «умных» гаджетов для дома',
    subtitle:
      'Больше всего пользователи боятся, что устройства выйдут из-под контроля, а их данные попадут в руки злоумышленников',
    date: '28.04.2023',
    isPopular: false,
  },
  {
    id: 13,
    category: ECategory.researches,
    img: researches2,
    title:
      'Более 70% россиян называют рекламные объявления в соцсетях бесполезными',
    subtitle:
      'Пользователи хотят видеть персонализированное рекламное предложение',
    date: '28.04.2023',
    isPopular: false,
  },
  {
    id: 14,
    category: ECategory.researches,
    img: researches3,
    title: 'Спрос на онлайн-магазины «под ключ» вырос в два раза',
    subtitle:
      'Растущая популярность e-commerce стимулирует предпринимателей запускать свои продукты',
    date: '25.04.2023',
    isPopular: false,
  },
  {
    id: 15,
    category: ECategory.researches,
    img: researches4,
    title:
      'Объем рынка отечественных диджитал-сервисов за год вырос более чем на 50%',
    subtitle: 'Подсчитали «Точка» и Roistat',
    date: '14.03.2023',
    isPopular: false,
  },
  {
    id: 16,
    category: ECategory.researches,
    img: researches5,
    title:
      'VK лидирует по тратам рекламодателей, а маскот — по доверию пользователей',
    subtitle:
      'Эксперты «СберМаркетинга» и креативного агентства Invite выяснили, какие рекламные диджитал-форматы были востребованы у компаний в 2022 году',
    date: '02.03.2023',
    isPopular: false,
  },
  {
    id: 17,
    category: ECategory.digital,
    img: digital2,
    title:
      'Блогеры WildJam начали сотрудничать с рекламным маркетплейсом Centra',
    subtitle: 'На платформе представлены 39 инфлюенсеров, их число будет расти',
    date: '20.03.2023',
    isPopular: false,
  },
  {
    id: 18,
    category: ECategory.digital,
    img: digital3,
    title: 'Минпромторг обсуждает создание консорциума для экспорта ИТ-решений',
    subtitle:
      'Объединение будет способствовать минимизации угроз целостности технического суверенитета России',
    date: '10.02.2023',
    isPopular: false,
  },
  {
    id: 19,
    category: ECategory.digital,
    img: digital4,
    title:
      'Всегда на связи: как синхронизировать таск-трекеры и не пропускать задачи от клиентов',
    subtitle: 'Пять шагов, чтобы объединить Trello и Asana',
    date: '31.10.2022',
    isPopular: false,
  },
  {
    id: 20,
    category: ECategory.digital,
    img: digital5,
    title:
      'Агентства dentsu Russia и Streamerce интегрируют бренды в стримы интернет-магазинов',
    subtitle:
      'Isobar Moscow и iProspect заключили партнёрство с платформой онлайн-трансляций',
    date: '15.09.2022',
    isPopular: false,
  },
  {
    id: 21,
    category: ECategory.digital,
    img: digital6,
    title:
      'Инфлюенсер-агентства хотят объединиться для решения проблем отрасли',
    subtitle:
      'Игроки рынка предложили создать организацию, которая наладит диалог между отраслью и государством',
    date: '21.03.2022',
    isPopular: false,
  },
  {
    id: 22,
    category: ECategory.cybersport,
    img: cybersport2,
    title: 'Букмекеры отметили резкий рост ставок в сегменте киберспорта',
    subtitle:
      '95% из них приходятся на такие дисциплины, как Dota 2 и Counter-Strike',
    date: '12.04.2023',
    isPopular: false,
  },
  {
    id: 23,
    category: ECategory.cybersport,
    img: cybersport3,
    title: 'VK предложила создать Ассоциацию разработчиков видеоигр',
    subtitle: 'Однако игровые студии отказываются участвовать в объединении',
    date: '23.03.2023',
    isPopular: false,
  },
  {
    id: 24,
    category: ECategory.cybersport,
    img: cybersport4,
    title:
      'Elden Ring, Dota 2 и Apex Legends: Steam назвал лучшие видеоигры 2022 года',
    subtitle:
      'Сервис составил несколько списков — по размеру валовой выручки, количеству игроков и другим показателям',
    date: '30.12.2022',
    isPopular: false,
  },
  {
    id: 25,
    category: ECategory.cybersport,
    img: cybersport5,
    title: 'В российских вузах введут киберспортивные дисциплины',
    subtitle:
      'Основными направлениями могут стать менеджмент в сфере киберспорта, игровая журналистика и коммуникации',
    date: '23.12.2022',
    isPopular: false,
  },
  {
    id: 26,
    category: ECategory.cybersport,
    img: cybersport6,
    title: 'Игры World of Tanks и World of Warships переименовали в России',
    subtitle:
      'Студия Lesta Games провела ребрендинг игровых продуктов, ранее издававшихся компанией Wargaming',
    date: '13.10.2022',
    isPopular: false,
  },
  {
    id: 27,
    category: ECategory.internetMarketing,
    img: internetMarketing2,
    title: 'Как сделать e-mail рассылку',
    subtitle: '',
    date: '13.10.2022',
    isPopular: false,
  },
  {
    id: 28,
    category: ECategory.internetMarketing,
    img: internetMarketing3,
    title: 'Как создать корпоративный блог',
    subtitle: '',
    date: '13.10.2022',
    isPopular: false,
  },
  {
    id: 29,
    category: ECategory.internetMarketing,
    img: internetMarketing4,
    title: 'Контент-план: что это такое?',
    subtitle: '',
    date: '13.10.2022',
    isPopular: false,
  },
  {
    id: 30,
    category: ECategory.internetMarketing,
    img: internetMarketing5,
    title: 'Методы контент-маркетинга',
    subtitle: '',
    date: '13.10.2022',
    isPopular: false,
  },
]
