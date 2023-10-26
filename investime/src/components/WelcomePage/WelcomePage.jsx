import '@mantine/core/styles.css';
import { Container, Grid, Paper } from '@mantine/core';
import HeaderWelcome from './WelcomePageСomponents/Header/HeaderWelcome';
import CardsCarousel from './WelcomePageСomponents/CardCarousel/CardCarousel';
import Hero from './WelcomePageСomponents/HeroComponent/Hero';
// import Stats from './WelcomePageСomponents/StatsComponent/Stats';
import FooterWelcome from './WelcomePageСomponents/Footer/FooterWelcome';
import ContactUs from './WelcomePageСomponents/ContactComponent/ContactUs';


export default function WelcomePage() {
  const dataEvent = [

    { 
      title: 'Сладость или гадость', 
      image: 
        'https://99px.ru/sstorage/53/2018/10/tmb_239962_604843.jpg', 
      date: 'Октябрь до 31, 2023', 
      address: 'yл. Интернациональная, 20А, эт. 1, пом. 45-15' 
    }, 
    
    { 
      title: 'Осенний карнавал', 
      image: 
        'https://img.freepik.com/premium-photo/smiling-women-in-traditional-clothing-celebrate-halloween_145644-13827.jpg', 
      date: 'Октябрь 28, 2023', 
      address: 'ул. Тимирязева, 9/10' 
    }, 


    { 
      title: 'Легенды драконов', 
      image: 
        'https://img.wallpapic.com/i1294-823-317/medium/drakon-fentezi-devushki-kompyuternaya-grafika-mifologiya-oboi.jpg', 
      date: 'Декабрь 31, 2023', 
      address: 'Борисовский р-н, Пересадский сельсовет, 5',
    },
    { 
      title: 'Вечеринка Brooklyn Live!', 
      image: 
        'https://kartinki.pibig.info/uploads/posts/2023-04/1681175712_kartinki-pibig-info-p-diskoteka-kartinka-arti-krasivo-1.jpg', 
      date: 'Ноябрь 3, 2023', 
      address: 'ул. Тимирязева, 9/10',
    }, 
    { 
      title: 'Рене Магритт. За гранью реальности. Выставка полотен в технике жикле', 
      image: 
        'https://static.dw.com/image/37766942_605.webp', 
      date: 'Октябрь 30, 2023 - Декабрь 24, 2023', 
      address: 'пр. Независимости 58/1-6, Минск',
    }, 


    { 
      title: 'The International DOTA 2 Championship', 
      image: 
        'https://i.insider.com/5d5477d7cd97845da6308fb4?width=1200&format=jpeg', 
      date: 'Октябрь 29, 2023',
      address: 'ул. Тимирязева, 74А, Минск',
    },
    

    { 
      title: 'Концерт ANNA ASTI',
      image: 
        'https://gorodw.by/wp-content/uploads/2022/09/1080-560.jpg', 
      date: 'Декабрь 06, 2023', 
      address: 'пр-т. Победителей 111, Минск',
    },

    { 
      title: 'Концерт Cinema Medley 2', 
      image: 
        'https://bel.cultreg.ru/uploads/d4a0675e0af689602be4f067c508195f.jpg', 
      date: 'Октябрь 29, 2023', 
      address: 'проспект Победителей 111, Минск',
    }, 

    { 
      title: 'Стейк фест в «Робинсон Сити»', 
      image: 
        'https://ferma-m2.ru/images/shop/recipe_image/crop__1_3.jpg', 
      date: 'Октябрь до 31, 2023', 
      address: 'ул. Зыбицкая 4, Минск' 
    }, 
    

    { 
      title: 'Тур по барам Минска City Pub Crawl Minsk', 
      image: 
        'https://ms1.relax.by/images/4685216d489897fb599b5726737cc163/thumb/w%3D740%2Ch%3D508%2Cq%3D81/afisha_event_photo_photo/d9/b0/c4/d9b0c48b5287872430a67ccdcc754054.jpg', 
      date: 'Октябрь 27, 2023', 
      address: 'ул. Зыбицкая 6, Минск' 
    }, 
    { 
      title: 'Игра Мафия. Клуб NEFT', 
      image: 
        'https://mafneft.by/uploads/images/infobox/7/10.jpg', 
      date: 'Октябрь 28-29, 2023', 
      address: 'yл. Аранская, 8' 
    }, 

    
    { 
      title: '«Горошекмаркет» в ТРЦ Galleria Minsk', 
      image: 
        'https://ms1.relax.by/images/4685216d489897fb599b5726737cc163/thumb/w%3D740%2Ch%3D508%2Cq%3D81/afisha_event_photo_photo/3c/c4/c9/3cc4c94e6bd452c70e2aba36b7c5d651.jpg', 
      date: 'Октябрь 28-29, 2023', 
      address: 'пр-т. Победителей 9, Минск' 
    } ,

    ];
    
    const dataAttraction = [
      {
        title: 'Национальная библиотека',
        rating: 4.9,
        description: 'Алмаз знаний, внутри которого читателям и простым туристам доступны 10 миллионов экземпляров в виде рукописей, книг, газет и других бумажных носителей. После отдыха в кафе можно посетить обзорную площадку на высоте 73 метров, чтобы увидеть Минск как на ладони.',
        price: 0,
        address: 'Пр. Независимости 116, г. Минск',
        image: 'https://1prof.by/wp-content/uploads/2021/09/bib-1509.jpg',
        
      },
      
      {
        title: 'Верхний город',
        rating: 4.8,
        description: 'Центр, сердце архитектурного ансамбля города и место, от которого можно добраться до любой точки столицы.',
        price: 0,
        address: 'ул. Площадь Свободы 23А, г. Минск',
        image:'https://lh5.googleusercontent.com/s1vnosiTpAWZOQcvuirI0hMlfgCV3gKa3jdaTeQZdfXjnzk0yhjevG48RcHwyN-R4-_4T4tZ3dzQklIUFZ1tt8NgdNP0vo7gOHlZw4CpPFxs2NgDtFPvEWv81ln1UAEV5LogsGQR', 
      },
      
      {
        title: 'Красный дворик',
        rating: 4.7,
        description: 'Сегодня Красный дворик стал объектом внимания художников-граффитистов и любителей нестандартного времяпровождения. Здесь располагается парочка кафе с очень специфическими названиями (как вам «Синяя коза»?), проводятся кино- и музыкальные вечера, творческие встречи и другие мероприятия «не для всех».',
        price: 0,
        address: 'Ул. Революционная 7, г. Минск',
        image :'https://lh5.googleusercontent.com/glDEhgXcIg_x2OXTn_ah69jQfBYIvdEwyK6ZkOXclegVjUsJNOKhhWXGFumwcI9OVzz0zJtGtMyQxi-bhC4dJmYRZRbDJFU6FtaK-K9w9HHJis5An4I0aXvoi8m8m2-uobSUE-Rv', 
      },
      { 
          title: 'Мирский замок', 
          rating: 4.8, 
          description: 'Посетите одну из самых известных достопримечательностей Беларуси. Красота этого замка ещё никого не оставила равнодушным!', 
          price: 16,
          address: 'Красноармейская ул. 2, г. Мир',  
          image : 'https://belarusgid.com/wp-content/uploads/2015/05/IMG_0845.jpg',  
          
        }, 
        { 
          title: 'Новый замок в Гродно', 
          rating: 4.5, 
          description: 'Замок с одной из лучших экспозиций в Беларуси. Вся история края размещена в стенах бывшей резиденции польских королей и великих князей литовских. Тут вы задержитесь надолго.', 
          price: 4,
          address: 'улица Замковая 20, г. Гродна',  
          image :  
            'https://bestbelarus.by/upload/iblock/d57/d5708d4959565d9a84eab7ae6e094dfc.jpg',  
        }, 
       
        { 
          title: 'Лидский замок', 
          rating: 4.5, 
          description: 'Лидский замок является главной достопремичательностью города. После последней реставрации замок обзавёлся множеством новых экспанатов. В одной из множества комнат каждый сможет найти что-то интересное для себя.', 
          price: 9, 
          address: 'Ул. Замковая, г. Минск', 
          image: 
            'https://marshryt.by/wp-content/uploads/Lidskij-zamok.jpg', 
            
        }, 
  
        { 
          title: 'Красный костел', 
          rating: 4.8, 
          description: 'Легенда самого знаменитого католического храма Минска весьма трогательная. Сейчас в храме проводятся мессы на белорусском и польском языках и его можно посетить в рамках экскурсии. На площади Независимости, где расположился Красный костел, можно прогуляться еще и по подземному торговому центру.', 
          price: 0, 
          address: 'Ул. Советская 15, г. Минск',
          image:
            'https://img-fotki.yandex.ru/get/6210/84579633.16/0_b841e_9caa6b0a_orig.jpg', 
           
        }, 
        { 
          title: 'Парк Горького', 
          rating: 4.6, 
          description: 'Не знаете, где провести время в Минске? Парк Горького — самая семейная достопримечательность города Минск. Аттракционов, уличные кафе и смех. Это максимально уютное место отдыха для семей и влюбленных парочек, встреч закатов и рассветов и прогулок вдоль набережной.', 
          price: 0,
          address: 'Ул. Фрунзе 2, г. Минск',
          image: 
            'https://bestbelarus.by/upload/iblock/a0b/a0b377cc01a20c8d5e90f75dba716d5b.jpg',
          
        }, 
        { 
          title: 'Октябрьская улица', 
          rating: 4.2, 
          description: 'Vulica Brazil» — фестиваль граффити-культуры, — подарил городу не только парочку запоминающихся вечеров музыки и южноамериканской культуры. Помимо шикарного фона для любителей селфи, Октябрьская улица предлагает перекусить уличной едой, послушать музыку в местном кафе и посетить галерею современного искусства, который называется просто и лаконично — «Ў».', 
          price: 0,
          address: 'Ул. Октябрьская, г. Минск', 
          image: 
            'https://lh6.googleusercontent.com/h3c05qtJs0iSyFbw40mPXWqJcNaF4NVDprurxMbIe6f_ch1uLn-fViw7pNw_4IT-PZqUvfQerQKpovVhQrthgxDt2gKNqwm9K7ulLISnpHLSSjsLfFfghIFqsYRDd18On30y7Na7', 
            
        }, 
        { 
          title: 'Театр оперы и балета', 
          rating: 4.8, 
          description: 'Своеобразный монополист от мира искусства: единственный оперный театр в Беларуси и по совместительству самый большой в стране. Он занимает почетное место памятника архитектуры и каждый день впечатляет прохожих белоснежными куполами и колоннами, а посетителей — симфоническим оркестром, детским хором, выступлениями оперной и балетной труппы.', 
          price: 45, 
          address: 'Пл. Парижской Комунны 1, г. Минск',
          image:
            'https://bolshoibelarus.by/images/Den_001.jpg', 
          
        }, 
        { 
          title: 'Зыбицкая улица', 
          rating: 4.5, 
          description: 'Если спросить у минчанина, где тут поблизости можно классно отдохнуть и выпить, он отправит вас на Зыбицкую. Подают тут все: от простейших шотов до авторских коктейлей с соусом табаско. В каждом баре — своя атмосфера, музыка и меню, поэтому одним вечером вы точно не закроете графу изучения питейной культуры Минска.', 
          price: 0, 
          address: 'Ул. Зыбицкая, г. Минск',
          image: 
            'https://bestbelarus.by/upload/iblock/7b0/7b072a0b1beb0c140f0fae140ed2dc86.jpg', 
            
        },
        { 
          title: 'Хатынь', 
          rating: 5.0, 
          description: 'Хатынь – бывшая деревня Логойского района Минской области, сожженная гитлеровцами вместе со всеми жителями в марте 1943 года. Хатынь стала символом страданий и мучений белорусского народа в Великой Отечественной войне. На месте уничтоженной деревни создан мемориальный комплекс', 
          price: 10, 
          address: 'Минская область, Логойский район, Каменский сельсовет, парк Кладбище деревень',
          image: 
            'https://avatars.mds.yandex.net/get-altay/3933982/2a000001764c7442b7b032c2627dde1e03f6/h300', 
           
        },
        { 
          title: 'Мемориальный комплекс Буйничское поле', 
          rating: 4.6, 
          description: 'На поле воинской славы под Могилёвом, где 12-го июля 1941-го года произошёл самый ожесточённый бой с танковыми частями вермахта, в 1995 году построен мемориальный комплекс «Буйничское поле». Это священное место стало символом мужества, школой патриотического воспитания.', 
          price: 12, 
          address: 'Могилёвский район, Буйничский сельсовет',
          image:
            'https://avatars.mds.yandex.net/get-altay/1246719/2a000001642ab4e9f92597e680789e765c0e/h300',
           
        }, 
  
        { 
          title: 'Костёл Святой Троицы', 
          rating: 5.0, 
          description: 'Костел Святой Троицы в Гервятах появился на рубеже XIX и XX столетий. Специально для строительства костела неподалеку был построен кирпичный завод, чтобы без задержек поставлять высококачественный материал. Ежедневно на объекте работали не менее 70 человек. В результате получилось величественное сооружение в неоготическом стиле: на территории Беларуси подобных практически нет.', 
          price: 0, 
          address: 'Набережная ул. 10, агрогородок Гервяты',
          image:
            'https://avatars.mds.yandex.net/i?id=7387fd8769d26149810faee02ef73e27753cbaea-10747677-images-thumbs&n=13', 
          
        }, 
        { 
          title: 'Троицкое и Раковское предместья', 
          rating: 4.2, 
          description: 'Вернемся в исторический центр города — Немигу. Троицкое и Раковское предместья известны всем с открыток города и учебников: ещё в младших классах на их страницах дети белорусских школ встречают изображения этого района. Помимо архитектурного стиля (фундаменты некоторых домов уже достигли возраста в 400 лет) и очевидных достопримечательностей, вроде Петропавловской церкви, музея искусства и центра литературы, здесь находится множество аутентичных кафе и сувенирных магазинов. А ещё отсюда открывается прекрасный вид на набережную Свислочи, по которой можно прокатиться на лодке и катамаране.', 
          price: 0, 
          address: "Старовиленская ул., 10, г. Минск" ,
          image: 
            
            'https://s.inyourpocket.com/gallery/29745.jpg'
          
        },  
        { 
          title: 'Ботанический сад', 
          rating: 4.7, 
          description: 'Еще одна интересная достопримечательность и самая зеленая точка Минска является отнюдь не парком: сад академии НАН гордится своей коллекцией декоративных и хозяйственно-полезных растений. 15000 видов прекрасно себя чувствуют в созданных климатических условиях и радуют посетителей уже много лет. Тут проводятся регулярные экскурсии для детей и взрослых, которые могут понаблюдать за флорой разных климатических зон: от тайги до субтропиков.', 
          price: 30, 
          address: "ул. Сурганова 2в, г. Минск",
          image: 
            'https://bestbelarus.by/upload/iblock/379/379d80e2ef4304682a6ff7c2ad53ad39.jpg',  
          
        },
        { 
          title: 'Музей истории Великой Отечественной войны', 
          rating: 4.6 , 
          description: 'Здание крайне необычной для музея формы — куполообразная постройка с «солнечными лучами» по краю, — открылось в 2014 году и уже успело впечатлить не одного туриста. 143 тысячи экспонатов, 10 залов, посвященных разным периодам войны, и настоящая площадь памяти под стеклянной крышей, где золотыми буквами вписаны имена героев сражений. Современный подход к проведению экскурсий и мультимедийное оснащение музея прекрасно сочетаются с памятными вещами солдат и найденными реликвиями. На входе в музей можно увидеть стелу «Минск —  город-герой», а прямо за ним находится Парк Победы и остров птиц.', 
          price: 0, 
          address: "пр-т. Победителей 8, г. Минск",
          image:
            'https://lh6.googleusercontent.com/HuGB1Q8MO1t3dWfY89cqWzngPGR0_2MjarP0nIXgwnEXZ1pDZKSWVBP-JgYjtRSfrMxnDgsfVoEhTUzhYa__j7w0X-Q5vawShhqhnyjJ3PLhVt4bmXwJg6h0W_W-Ee2ZftqrFvLw', 
          
        },
  
    ];
         
  return (
    <div>
    <HeaderWelcome />
    <Container>
      <Hero />
      <Grid gutter="lg">
        <Grid.Col span={12}>
          <h1>Мероприятия</h1>
          <Paper padding="lg">
            <CardsCarousel data={dataEvent} />
          </Paper>
        </Grid.Col>
        {/* <Grid.Col span={12}>
          <Stats />
        </Grid.Col> */}
        <Grid.Col span={12}>
          <Paper padding="lg">
          <h1>Достопримечательности</h1>
            <CardsCarousel data={dataAttraction} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Paper padding="lg">
            <ContactUs data={dataAttraction} />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
    <FooterWelcome />
    </div>
  );
}
