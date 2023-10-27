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
import { dataAttraction as mockdata } from '../../../Consts/Consts';

export default function AttractionCardPagination() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageContent = mockdata.slice(startIndex, endIndex);

  return (
    <Container fluid >
    <Text align="center" size='200%' variant="gradient" gradient={{ from: 'lime', to: 'cyan', deg: 90 }} fw={900}>Достопримечательности</Text>
      <Container>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
    {currentPageContent.map((mockdata, index) => (
      <AttractionCard key={index} data={mockdata}></AttractionCard>
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