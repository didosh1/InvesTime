import React, { useState } from 'react';
import {
  Container,
  Pagination,
  SimpleGrid,
  Flex,
  Input,
  Text,
  Col,
  Grid,
  Radio,
  RangeSlider,
} from '@mantine/core';
import AttractionCard from '../AttractionCard/AttractionCard';

const mockdata = [
    {
      title: 'Верхний город',
      rating: 4.8,
      description: 'Центр, сердце архитектурного ансамбля города и место, от которого можно добраться до любой точки столицы.',
      price: 0,
      address: 'ул. Площадь Свободы 23А, г. Минск',
      images: [
        'https://lh5.googleusercontent.com/s1vnosiTpAWZOQcvuirI0hMlfgCV3gKa3jdaTeQZdfXjnzk0yhjevG48RcHwyN-R4-_4T4tZ3dzQklIUFZ1tt8NgdNP0vo7gOHlZw4CpPFxs2NgDtFPvEWv81ln1UAEV5LogsGQR',
        'https://bestbelarus.by/upload/resize_cache/iblock/15a/0_510_2a18e1f56f4eaac9195ab4f8530310a0f/15a123cfe1c368ddf799e1eecb948b3e.jpg',
        'https://belarustourist.by/upload/resize_cache/iblock/c8f/848_502_2/c8fd9ccff658bc1e25420a2fd811d0c2.jpg',
      ],
    },
    {
      title: 'Национальная библиотека',
      rating: 4.9,
      description: 'Алмаз знаний, внутри которого читателям и простым туристам доступны 10 миллионов экземпляров в виде рукописей, книг, газет и других бумажных носителей. После отдыха в кафе можно посетить обзорную площадку на высоте 73 метров, чтобы увидеть Минск как на ладони.',
      price: 0,
      address: 'Пр. Независимости 116, г. Минск',
      images: [
        'https://www.nlb.by/upload/iblock/231/2318ae99ee0c027c477242b356c91eed.jpg',
        'https://www.belarus.by/dadvimages/001337_478092.jpg',
        'https://1prof.by/wp-content/uploads/2021/09/bib-1509.jpg',
      ],
    },
    {
      title: 'Красный дворик',
      rating: 4.7,
      description: 'Сегодня Красный дворик стал объектом внимания художников-граффитистов и любителей нестандартного времяпровождения. Здесь располагается парочка кафе с очень специфическими названиями (как вам «Синяя коза»?), проводятся кино- и музыкальные вечера, творческие встречи и другие мероприятия «не для всех».',
      price: 0,
      address: 'Ул. Революционная 7, г. Минск',
      images: [
        'https://lh5.googleusercontent.com/glDEhgXcIg_x2OXTn_ah69jQfBYIvdEwyK6ZkOXclegVjUsJNOKhhWXGFumwcI9OVzz0zJtGtMyQxi-bhC4dJmYRZRbDJFU6FtaK-K9w9HHJis5An4I0aXvoi8m8m2-uobSUE-Rv',
        'https://realt.by/uploads/pics/2_ada973.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fe/8b/83/red-yard.jpg?w=1200&h=1200&s=1',
      ],
    },
    { 
        title: 'Мирский замок', 
        rating: 4.8, 
        description: 'Посетите одну из самых известных достопримечательностей Беларуси. Красота этого замка ещё никого не оставила равнодушным!', 
        price: 16,
        address: 'Красноармейская ул. 2, г. Мир',  
        images: [ 
          'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg', 
          'https://baa.by/images/news/2021/november/24/zamok.jpg', 
          'https://www.toursoyuz.by/wp-content/uploads/2022/11/11.jpg', 
        ], 
      }, 
      { 
        title: 'Новый замок в Гродно', 
        rating: 4.5, 
        description: 'Замок с одной из лучших экспозиций в Беларуси. Вся история края размещена в стенах бывшей резиденции польских королей и великих князей литовских. Тут вы задержитесь надолго.', 
        price: 4,
        address: 'улица Замковая 20, г. Гродна',  
        images: [ 
          'https://bestbelarus.by/upload/iblock/d57/d5708d4959565d9a84eab7ae6e094dfc.jpg', 
          'https://grodno-museum.by/wp-content/uploads/2017/06/2017.08.01_Muzej_banifacyj.com_33.jpg', 
          'https://welcome-belarus.ru/wp-content/uploads/2019/05/%D0%AD%D0%BA%D1%81%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B8-%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.jpg', 
        ], 
      }, 
     
      { 
        title: 'Лидский замок', 
        rating: 4.5, 
        description: 'Лидский замок является главной достопремичательностью города. После последней реставрации замок обзавёлся множеством новых экспанатов. В одной из множества комнат каждый сможет найти что-то интересное для себя.', 
        price: 9, 
        address: 'Ул. Замковая, г. Минск', 
        images: [ 
          'https://belarusgid.com/wp-content/uploads/2016/06/KeoA3fk363M.jpg', 
          'https://marshryt.by/wp-content/uploads/Lidskij-zamok.jpg', 
          'https://turby.by/images/Statiya/1/Screenshot_2275.jpg', 
        ], 
      }, 

      { 
        title: 'Красный костел', 
        rating: 4.8, 
        description: 'Легенда самого знаменитого католического храма Минска весьма трогательная. Сейчас в храме проводятся мессы на белорусском и польском языках и его можно посетить в рамках экскурсии. На площади Независимости, где расположился Красный костел, можно прогуляться еще и по подземному торговому центру.', 
        price: 0, 
        address: 'Ул. Советская 15, г. Минск',
        images: [ 
          'https://lh4.googleusercontent.com/CQXl9lTPG6gXukAbM39cjKZPOQD5yaw6RFQV-kqogAS4BifbPXyGg_Pj3nsQsOnaByxqvYL7qFY8hBq28uR98ieqdDbxLuDmnPLWzzhlZzHxNPQUQt_GdE3hdfZ0XTbQzytBHXMo', 
          'https://minsknews.by/wp-content/uploads/2020/07/Krasnyj-kostel.jpg', 
          'https://img-fotki.yandex.ru/get/6210/84579633.16/0_b841e_9caa6b0a_orig.jpg', 
        ], 
      }, 
      { 
        title: 'Парк Горького', 
        rating: 4.6, 
        description: 'Не знаете, где провести время в Минске? Парк Горького — самая семейная достопримечательность города Минск. Аттракционов, уличные кафе и смех. Это максимально уютное место отдыха для семей и влюбленных парочек, встреч закатов и рассветов и прогулок вдоль набережной.', 
        price: 0,
        address: 'Ул. Фрунзе 2, г. Минск',
        images: [ 
          'https://bestbelarus.by/upload/iblock/a0b/a0b377cc01a20c8d5e90f75dba716d5b.jpg', 
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/cb/38/10/gorky-park-entrada.jpg?w=1200&h=1200&s=1', 
          'https://www.belta.by/images/storage/news/with_archive/2022/000022_1652377209_501412_big.jpg', 
        ], 
      }, 
      { 
        title: 'Октябрьская улица', 
        rating: 4.2, 
        description: 'Vulica Brazil» — фестиваль граффити-культуры, — подарил городу не только парочку запоминающихся вечеров музыки и южноамериканской культуры. Помимо шикарного фона для любителей селфи, Октябрьская улица предлагает перекусить уличной едой, послушать музыку в местном кафе и посетить галерею современного искусства, который называется просто и лаконично — «Ў».', 
        price: 0,
        address: 'Ул. Октябрьская, г. Минск', 
        images: [ 
          'https://lh6.googleusercontent.com/h3c05qtJs0iSyFbw40mPXWqJcNaF4NVDprurxMbIe6f_ch1uLn-fViw7pNw_4IT-PZqUvfQerQKpovVhQrthgxDt2gKNqwm9K7ulLISnpHLSSjsLfFfghIFqsYRDd18On30y7Na7', 
          'https://www.belta.by/uploads/lotus/news/2020/000023_9FFABA377F3C7A9E432585AA003EF767_158640.jpg', 
          'https://www.belta.by/uploads/lotus/news/2020/000023_9FFABA377F3C7A9E432585AA003EF767_501235.jpg', 
        ], 
      }, 
      { 
        title: 'Театр оперы и балета', 
        rating: 4.8, 
        description: 'Своеобразный монополист от мира искусства: единственный оперный театр в Беларуси и по совместительству самый большой в стране. Он занимает почетное место памятника архитектуры и каждый день впечатляет прохожих белоснежными куполами и колоннами, а посетителей — симфоническим оркестром, детским хором, выступлениями оперной и балетной труппы.', 
        price: 45, 
        address: 'Пл. Парижской Комунны 1, г. Минск',
        images: [ 
          'https://minsktourist.by/upload/resize_cache/iblock/5cf/848_502_2/5cfe3a155ac80660ae393cee44a5228a.jpg', 
          'https://bolshoibelarus.by/images/Den_001.jpg', 
          'https://belarusgid.com/wp-content/uploads/2016/12/teatr-opery-i-baleta-1.jpg', 
        ], 
      }, 
      { 
        title: 'Зыбицкая улица', 
        rating: 4.5, 
        description: 'Если спросить у минчанина, где тут поблизости можно классно отдохнуть и выпить, он отправит вас на Зыбицкую. Подают тут все: от простейших шотов до авторских коктейлей с соусом табаско. В каждом баре — своя атмосфера, музыка и меню, поэтому одним вечером вы точно не закроете графу изучения питейной культуры Минска.', 
        price: 0, 
        address: 'Ул. Зыбицкая, г. Минск',
        images: [ 
          'https://upload.wikimedia.org/wikipedia/commons/a/a2/%D0%9C%D1%96%D0%BD%D1%81%D0%BA._%D0%97%D1%8B%D0%B1%D1%96%D1%86%D0%BA%D0%B0%D1%8F_%D0%B2%D1%83%D0%BB%D1%96%D1%86%D1%8B_%282018%29_%2802%29.jpg', 
          'https://bestbelarus.by/upload/iblock/7b0/7b072a0b1beb0c140f0fae140ed2dc86.jpg', 
          'https://bestbelarus.by/upload/resize_cache/iblock/792/0_510_2a18e1f56f4eaac9195ab4f8530310a0f/792f077528aee2104c56a75b10040eb3.jpg', 
        ], 
      },
      { 
        title: 'Хатынь', 
        rating: 5.0, 
        description: 'Хатынь – бывшая деревня Логойского района Минской области, сожженная гитлеровцами вместе со всеми жителями в марте 1943 года. Хатынь стала символом страданий и мучений белорусского народа в Великой Отечественной войне. На месте уничтоженной деревни создан мемориальный комплекс', 
        price: 10, 
        address: 'Минская область, Логойский район, Каменский сельсовет, парк Кладбище деревень',
        images: [ 
          'https://avatars.mds.yandex.net/get-altay/3933982/2a000001764c7442b7b032c2627dde1e03f6/h300', 
          'https://avatars.mds.yandex.net/get-altay/10147638/2a0000018af88cb0fcde1a30732692e27bf7/h300', 
          'https://avatars.mds.yandex.net/get-altay/758053/2a00000161efaed44a84ba7cc6f8e06cdbb7/h300', 
        ], 
      },
      { 
        title: 'Мемориальный комплекс Буйничское поле', 
        rating: 4.6, 
        description: 'На поле воинской славы под Могилёвом, где 12-го июля 1941-го года произошёл самый ожесточённый бой с танковыми частями вермахта, в 1995 году построен мемориальный комплекс «Буйничское поле». Это священное место стало символом мужества, школой патриотического воспитания.', 
        price: 12, 
        address: 'Могилёвский район, Буйничский сельсовет',
        images: [ 
          'https://avatars.mds.yandex.net/get-altay/1246719/2a000001642ab4e9f92597e680789e765c0e/h300',
          
          'https://avatars.mds.yandex.net/get-altay/2701879/2a00000174fbfe46b3c06605315ac0dacb59/h300', 

          'https://avatars.mds.yandex.net/get-altay/1363018/2a000001642ab4e8cf282f1325089c03628b/h300',
        ], 
      }, 

      { 
        title: 'Костёл Святой Троицы', 
        rating: 5.0, 
        description: 'Костел Святой Троицы в Гервятах появился на рубеже XIX и XX столетий. Специально для строительства костела неподалеку был построен кирпичный завод, чтобы без задержек поставлять высококачественный материал. Ежедневно на объекте работали не менее 70 человек. В результате получилось величественное сооружение в неоготическом стиле: на территории Беларуси подобных практически нет.', 
        price: 0, 
        address: 'Набережная ул. 10, агрогородок Гервяты',
        images: [ 
          'https://avatars.mds.yandex.net/i?id=7387fd8769d26149810faee02ef73e27753cbaea-10747677-images-thumbs&n=13', 

          'https://yandex-images.clstorage.net/eP4pT9198/220160v_/y6HRwes3mqhfoXsRdYcrY4g3LZojBsBJxs-mzNHV7z7MWeOoj33ga2goJQgEyCXUjEocN5aHFUjT3_ySZxt6ax7VIbWf8y4Z-nQvIPDHq1PYFvhOEhcF6YMeAukUdL8bbBmTm0y_txkr77MPo7_CcIx_7GeidvA81Ul49yQtHgprMiOT6xbbXD4zGza2hcqRWnZ76rME5xgBbCYJ9DUp6glOtDotreXKSs-wzHKtEcMPT890o1ORH9WrvMc0rU5b2yDC4cvmWrwNIUtn5vVJQpg1-ShidueZ8h_H2ZZW-znLfhc5HD_GS6jv4j4jPkDj7y39t8Bjgi_2GZ2FJg7PW3qi8uOativeHeGpRybFKbGZVEmYcESU2wCt9qgXJwjL222Ue90N9enZLWDt4a1yI-0vXSaSoAGPtHreBvR-3EvIoMNgeXZqPu8BySWlZfrh2KWYK4MFxonCH7S7lSbIO_i_h7j-XCYIWm-zj0KtAbA9Da0kg8IzH4ZZHtcVP9yZaVDRg6mE-0zPknun5CfbI9nHiwgBNMZoMq3VGceXySubnteKHFzFuhiOQE4C_yLQnX5fpdBQsb9Xyh3FJg0feHigk8C7V4kcXAMrFgUmKLLq5TnZ49Ymi4OtdJtnp8upKU2mypwvd-o4T2KP418BAUyNXsSxMQL_FPnsZ8VerVlr8AMSiBfqn-wxe4VXhinRWge7CFJVlEuDb4WJ9cUKycheZYgvvbdZuu5gj4EsUQB9TF0Go8FAnfYYHtZXXP2L-LJz4LpVq_6t4_t1NjfZIpt3iHli10UaQX_Vu2Y0OLsrrhZJPs0UKKgNcb4zbQHwvK4vFXJiss82yl50dB_8SVjDM0JrFxmMn7B6h6WHKNH59cuZYPS2m7PcFBoGFXpouTwV-mzPF7pqT4CtI42zgo18HLehYzEfJhsN57fcfolJ8BOB-BbozI8SO7VllWvD-NQbG0BUxChBHwZbxsa4A', 

          'https://avatars.mds.yandex.net/i?id=4da7ee711e31d8aed33d65635fa4fa0667d26d94-9099630-images-thumbs&n=13', 
        ], 
      }, 
      { 
        title: 'Троицкое и Раковское предместья', 
        rating: 4.2, 
        description: 'Вернемся в исторический центр города — Немигу. Троицкое и Раковское предместья известны всем с открыток города и учебников: ещё в младших классах на их страницах дети белорусских школ встречают изображения этого района. Помимо архитектурного стиля (фундаменты некоторых домов уже достигли возраста в 400 лет) и очевидных достопримечательностей, вроде Петропавловской церкви, музея искусства и центра литературы, здесь находится множество аутентичных кафе и сувенирных магазинов. А ещё отсюда открывается прекрасный вид на набережную Свислочи, по которой можно прокатиться на лодке и катамаране.', 
        price: 0, 
        address: "Старовиленская ул., 10, г. Минск" ,
        images: [ 
          'https://lh5.googleusercontent.com/2I92-giX6rdTNFqWopC739BlGv5mCdvRU-BHpRsrZJSWE5R_y1gqjAYAPad-04BquK3LZAwl5jy2rpFPLMJ_SQzE989CyyPvfQ5uYiDNkFPTWFjzII9IBWgO7M-FK6mcbOdEz9tb', 
          'https://limberi.by/assets/images/articles/tours/troica/2.jpg', 
          'https://s.inyourpocket.com/gallery/29745.jpg'
        ], 
      },  
      { 
        title: 'Ботанический сад', 
        rating: 4.7, 
        description: 'Еще одна интересная достопримечательность и самая зеленая точка Минска является отнюдь не парком: сад академии НАН гордится своей коллекцией декоративных и хозяйственно-полезных растений. 15000 видов прекрасно себя чувствуют в созданных климатических условиях и радуют посетителей уже много лет. Тут проводятся регулярные экскурсии для детей и взрослых, которые могут понаблюдать за флорой разных климатических зон: от тайги до субтропиков.', 
        price: 30, 
        address: "ул. Сурганова 2в, г. Минск",
        images: [ 
          'https://bestbelarus.by/upload/iblock/379/379d80e2ef4304682a6ff7c2ad53ad39.jpg', 
          'https://cbg.org.by/sites/default/files/styles/slide/public/2023-04/slide-266151894.jpg?itok=ZenmF0Ui', 
          'https://cdn.culture.ru/c/68519.jpg', 
        ], 
      },
      { 
        title: 'Музей истории Великой Отечественной войны', 
        rating: 4.6 , 
        description: 'Здание крайне необычной для музея формы — куполообразная постройка с «солнечными лучами» по краю, — открылось в 2014 году и уже успело впечатлить не одного туриста. 143 тысячи экспонатов, 10 залов, посвященных разным периодам войны, и настоящая площадь памяти под стеклянной крышей, где золотыми буквами вписаны имена героев сражений. Современный подход к проведению экскурсий и мультимедийное оснащение музея прекрасно сочетаются с памятными вещами солдат и найденными реликвиями. На входе в музей можно увидеть стелу «Минск —  город-герой», а прямо за ним находится Парк Победы и остров птиц.', 
        price: 0, 
        address: "пр-т. Победителей 8, г. Минск",
        images: [ 
          'https://lh6.googleusercontent.com/HuGB1Q8MO1t3dWfY89cqWzngPGR0_2MjarP0nIXgwnEXZ1pDZKSWVBP-JgYjtRSfrMxnDgsfVoEhTUzhYa__j7w0X-Q5vawShhqhnyjJ3PLhVt4bmXwJg6h0W_W-Ee2ZftqrFvLw', 
          'https://minsknews.by/wp-content/uploads/2020/05/1-55.jpg', 
          'https://museums.by/upload/medialibrary/f76/f76a2d160a685913af3f581842c2f008.JPG', 
        ], 
      },
    //   17 sights
];

export default function AttractionCardPagination() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    title: '',
    rating: 0,
    description: '',
    price: 0,
  });

  const filteredData = mockdata.filter((attraction) => {
    return (
      attraction.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      attraction.rating >= filters.rating &&
      attraction.description.toLowerCase().includes(filters.description.toLowerCase()) &&
      attraction.price >= filters.price
    );
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageContent = filteredData.slice(startIndex, endIndex);

  return (
    <Container fluid>
      <Container>
        <Grid gutter="xs">
          <Grid.Col span="auto">
            <Input
              value={filters.title}
              onChange={(event) => setFilters({ ...filters, title: event.target.value })}
              placeholder="Filter by title"
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <Text align="center">Filter by rating:</Text>
            <Radio
              value={0}
              name="rating"
              label="All"
              checked={filters.rating === 0}
              onChange={() => setFilters({ ...filters, rating: 0 })}
            />
            <Radio
              value={4.5}
              name="rating"
              label="4.5+"
              checked={filters.rating === 4.5}
              onChange={() => setFilters({ ...filters, rating: 4.5 })}
            />
            <Radio
              value={4.8}
              name="rating"
              label="4.8+"
              checked={filters.rating === 4.8}
              onChange={() => setFilters({ ...filters, rating: 4.8 })}
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Input
              value={filters.description}
              onChange={(event) => setFilters({ ...filters, description: event.target.value })}
              placeholder="Filter by description"
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Text>Filter by price:</Text>
            {/* <RangeSlider
              min={0}
              max={100}
              step={5}
              value={Number(filters.price)}
              onChange={(value) => setFilters({ ...filters, price: value })}
            /> */}
          </Grid.Col>
        </Grid>
      </Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {currentPageContent.map((attraction, index) => (
          <AttractionCard key={index} data={attraction} />
        ))}
      </SimpleGrid>
      <Flex justify="center" style={{ marginTop: '20px' }}>
        <Pagination
          total={Math.ceil(filteredData.length / itemsPerPage)}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </Flex>
    </Container>
  );
}