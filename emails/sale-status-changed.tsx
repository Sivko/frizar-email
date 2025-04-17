// [SALE_STATUS_CHANGED] Изменение статуса заказа
import { Container, Link, Text } from "@react-email/components";
import * as React from "react";
import Layout from "./layout";

export const index = () => (
  <Layout>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4 text-center">
      <Text className="text-[20px] font-bold">
        Изменение статуса заказа в магазине FRIZAR
      </Text>
    </Container>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
      <Text>Статус заказа номер #ORDER_ID# от #ORDER_DATE# изменен.</Text>
      <Text>Новый статус заказа: #ORDER_STATUS#</Text>
      <Text>
        Чтобы следить за статусом заказа, перейдите по ссылке: &nbsp;
        <Link
          className="text-main"
          href={`https://frizar.ru/personal/order/#ORDER_ID#`}
        >
          https://frizar.ru/personal/order/#ORDER_ID#
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default index;
