import React, { useState } from 'react';
import { Container, Text, Pagination, Row, Col, SimpleGrid, Flex} from '@mantine/core';
import ListCard from '../ListCard';
import { v4 as uuidv4 } from 'uuid';
import { dataEvent as mockdata } from '../../../Consts/Consts';

export default function CardPagination() {
  const itemsPerPage = 4; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);

  // Рассчитываем индексы для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Получаем элементы текущей страницы
  const currentPageContent = mockdata.slice(startIndex, endIndex);

  return (
    <Container fluid >
    <Text align="center" size='200%' variant="gradient" gradient={{ from: 'lime', to: 'cyan', deg: 90 }} fw={900}>Мероприятия</Text>
      <Container>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
    {currentPageContent.map((mockdata, index) => (
      <ListCard key={index} article={mockdata}></ListCard>
    ))}
          </SimpleGrid>
      </Container>
      
      <Flex justify="center" style={{ marginTop: '20px' }}>
    <Pagination
    color="rgb(79, 181, 69)"
      total={Math.ceil(mockdata.length / itemsPerPage)} // Общее количество страниц
      value={currentPage} // Текущая страница
      onChange={setCurrentPage} // Обработчик смены страницы
    />
  </Flex>
  </Container>
  );
}