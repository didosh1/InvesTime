import React, { useState } from 'react';
import { Container, Text, Pagination, Row, Col, SimpleGrid, Flex} from '@mantine/core';
import ListCard from '../ListCard/ListCard';
import { v4 as uuidv4 } from 'uuid';

export default function CardPagination() {
  const itemsPerPage = 4; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);

  // Ваш массив с данными (контент)
  const mockdata = [

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

  // Рассчитываем индексы для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Получаем элементы текущей страницы
  const currentPageContent = mockdata.slice(startIndex, endIndex);

  return (
    <Container fluid >
        <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      {currentPageContent.map((mockdata, index) => (
        <ListCard key={index} article={mockdata}></ListCard>
      ))}
            </SimpleGrid>
        </Container>
        
        <Flex justify="center" style={{ marginTop: '20px' }}>
      <Pagination
        total={Math.ceil(mockdata.length / itemsPerPage)} // Общее количество страниц
        value={currentPage} // Текущая страница
        onChange={setCurrentPage} // Обработчик смены страницы
      />
    </Flex>
    </Container>
  );
}