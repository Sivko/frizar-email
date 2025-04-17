// [SALE_NEW_ORDER] Новый заказ
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import info from "./static/info.json";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    {/* <Preview>You're now ready to make live transactions with Stripe!</Preview> */}
    <Tailwind
      config={{
        theme: {
          borderRadius: {
            DEFAULT: "20px",
          },
          extend: {
            colors: {
              main: "#3C569F",
              wrapper: "#F4F5FA", // "#E9EEF6",
              secondary: "#75798a",
            },
          },
        },
      }}
    >
      <Body className="bg-wrapper my-auto mx-auto font-sans px-2 pb-[50px]">
        <Container className="max-w-[600px] py-4">
          <Link href={info.site}>
            <Img
              src={`https://frizar.ru/logo.png`}
              width="114"
              height="30"
              alt="frizar"
            />
          </Link>
        </Container>
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
            Чтобы следить за статусом заказа, перейдите по{" "}
            <Link
              className="text-main"
              href={`https://frizar.ru/personal`}
            >
              ссылке
            </Link>
          </Text>
        </Container>
        <Container className="max-w-[600px] p-4 bg-white rounded">
          <Section>
            <Row>
              <Column className="align-top">
                <Text className="font-bold text-[20px] ">Свяжитесь с нами</Text>
                <Link
                  href={`mailto:${info.email}`}
                  className="text-main text-[14px]"
                >
                  {info.email}
                </Link>
                <br />
                <Link
                  href={`tel:${info.phoneHref}`}
                  className="text-main text-[14px]"
                >
                  {info.phone}
                </Link>
              </Column>
              <Column className="align-top">
                <Text className="font-bold text-[20px] ">Полезные ссылки</Text>
                <Link
                  href={`https://frizar.ru/stati`}
                  className="text-main text-[14px]"
                >
                  Наш Блог
                </Link>
                <br />
                <Link
                  href={`https://frizar.ru/company/contacts`}
                  className="text-main text-[14px]"
                >
                  Форма обратной связи
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr />
          <Text className="text-[10px] leading-[15px]">
            Вы получили это письмо, так как подписались на товаров на сайте
            frizar.ru
          </Text>
          <Text className="text-[10px] leading-[15px] text-secondary !mb-0">
            Общество с ограниченной ответственностью «Фризар». Юридический
            адрес: {info.urAddress} ИНН {info.inn} КПП {info.kpp} ОГРН{" "}
            {info.ogrn}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default StripeWelcomeEmail;
