// [SALE_ORDER_CANCEL] Ваш заказ отменен
import { Container, Link, Text } from "@react-email/components";
import * as React from "react";
import Layout from "./layout";

export const index = () => (
  <Layout>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4 text-center">
      <Text className="text-[20px] font-bold">
        FRIZAR: Ваш заказ <strong>№ #ORDER_ID#</strong> отменен
      </Text>
    </Container>
    <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
      <Text className="font-bold">Уважаемый, #ORDER_USER# !</Text>
      <Text>Заказ <strong>№ #ORDER_ID#</strong> от #ORDER_DATE# отменен.</Text>
      <Text>
        Для получения подробной информации по заказу пройдите на сайт по ссылке:
        &nbsp;
        <Link
          className="text-main"
          href={`http://#SERVER_NAME#/personal/order/#ORDER_ACCOUNT_NUMBER_ENCODE#/`}
        >
          http://#SERVER_NAME#/personal/order/#ORDER_ACCOUNT_NUMBER_ENCODE#
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default index;
