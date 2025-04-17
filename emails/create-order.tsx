// [SALE_NEW_ORDER] Новый заказ
import {
  Container,
  Link,
  Text,
} from "@react-email/components";
import * as React from "react";
import Layout from "./layout";

export const index = () => (
  <Layout>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4 text-center">
      <Text className="text-[20px] font-bold">
        Вами оформлен заказ в магазине FRIZAR
      </Text>
    </Container>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
      <Text className="font-bold">Уважаемый, #ORDER_USER# !</Text>
      <Text>Ваш заказ номер #ORDER_ID# от #ORDER_DATE# принят</Text>
      <Text>Товары:</Text>
      <Text>#ORDER_LIST#</Text>
      <Text>Общая сумма: #PRICE#</Text>
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
