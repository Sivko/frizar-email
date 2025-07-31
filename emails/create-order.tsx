// [SALE_NEW_ORDER] Новый заказ
import { Container, Link, Text } from "@react-email/components";
import * as React from "react";
import Layout from "./layout";

const name = `{{ $("Webhook").item.json.body.contactInfo.name }}`;
const orderNumber = `{{ $("Webhook").item.json.body.orderNumber }}`;
const productsHtml = `{{ $json.productsHtml }}`;
const orderLink = `{{ $json.orderLink }}`;
const totalAmount = `{{ $json.totalAmount }}`;

export const index = () => (
  <Layout>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4 text-center">
      <Text className="text-[20px] font-bold">
        Вами оформлен заказ в магазине FRIZAR
      </Text>
    </Container>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
      <Text className="font-bold">
        Уважаемый, <span dangerouslySetInnerHTML={{ __html: name }} /> !
      </Text>
      <Text>
        Ваш заказ №{" "}
        <span dangerouslySetInnerHTML={{ __html: orderNumber }} /> принят
      </Text>
      <Text>Товары:</Text>
      {/* <Text>Общая сумма: #PRICE#</Text> */}
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Код</th>
            <th>Название</th>
            <th>Цена</th>
            <th className="truncate">Кол-во</th>
            <th>Итог</th>
          </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{__html: productsHtml}} />
      </table>
      <Text className="text-right">
          <strong>Итого:</strong> <span  dangerouslySetInnerHTML={{__html: totalAmount}}/>
      </Text>
      <Text className="mb-0">
        Чтобы следить за статусом заказа, перейдите по ссылке: &nbsp;
        <Text className="text-main">
          <span dangerouslySetInnerHTML={{__html: orderLink}} />
        </Text>
      </Text>
    </Container>
  </Layout>
);

export default index;
