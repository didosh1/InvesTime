import React from 'react';
import { Container, Card, Title, Text, Button } from '@mantine/core';
import CardShop from '../Card/CardShop';
import ShopCardPagination from '../ShopCardPagination/ShopCardPagination';
function ShopComponent() {
  return (
    <Container size="sm">
      <Text align="center" size='200%' variant="gradient" gradient={{ from: 'lime', to: 'cyan', deg: 90 }} fw={900}>Магазин Баллов</Text>
        <ShopCardPagination></ShopCardPagination>
    </Container>
  );
}

export default ShopComponent;
