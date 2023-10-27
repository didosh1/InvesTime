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
import { dataAttraction as mockdata } from '../../../Consts/Consts';
import CardShop from '../Card/CardShop';

export default function ShopCardPagination() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageContent = mockdata.slice(startIndex, endIndex);

  return (
    <Container fluid>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {currentPageContent.map((attraction, index) => (
          <CardShop key={index} article={attraction} />
        ))}
      </SimpleGrid>
      <Flex justify="center" style={{ marginTop: '20px' }}>
        <Pagination
        color="rgb(79, 181, 69)"
          total={Math.ceil(mockdata.length / itemsPerPage)}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </Flex>
    </Container>
  );
}