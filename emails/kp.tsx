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

const baseUrl = "https://frizar.ru";

const info = {
  site: "https://frizar.ru",
  email: "info@frizar.ru",
  phone: "8 800 700-51-21",
  phoneHref: "88007005121",
  company: "Frizar",

}

function numberWithSpaces(x: number | string) {
  const value = Number(x)
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const data = [
  {
    "name": "Патрон 250 токарный 3-х кулачковый 3-250.35.234В",
    "prop": "В (высокий)",
    "link": "patron_250_tokarnyy_3_kh_kulachkovyy_3_250_35_234v_beltapaz",
    "price": "63870.00"
  },
  {
    "name": "Патрон 160 токарный 3-х кулачковый 3-160.05.227П",
    "prop": "П (повышенный)",
    "link": "patron_160_tokarnyy_3_kh_kulachkovyy_3_160_05_227p_beltapaz",
    "price": "34530.00"
  },
  {
    "name": "Патрон 315 токарный 3-х кулачковый 3-315.41.234В",
    "prop": "В (высокий)",
    "link": "patron_315_tokarnyy_3_kh_kulachkovyy_3_315_41_234v_beltapaz",
    "price": "104430.00"
  },
  {
    "name": "Патрон 125 токарный 3-х кулачковый 3-125.03.224",
    "prop": "Н (нормальный)",
    "link": "patron_125_tokarnyy_3_kh_kulachkovyy_3_125_03_224_beltapaz",
    "price": "21795.00"
  },
  {
    "name": "Патрон 80 токарный 3-х кулачковый 3-80.01.01",
    "prop": "Н (нормальный)",
    "link": "patron_80_tokarnyy_3_kh_kulachkovyy_3_80_01_01_beltapaz",
    "price": "17265.00"
  },
  {
    "name": "Патрон 400 токарный 3-х кулачковый 3-400.45.234В",
    "prop": "В (высокий)",
    "link": "patron_400_tokarnyy_3_kh_kulachkovyy_3_400_45_234v_beltapaz",
    "price": "185550.00"
  },
  {
    "name": "Патрон 200 токарный 3-х кулачковый 3-200.07.214В",
    "prop": "В (высокий)",
    "link": "patron_200_tokarnyy_3_kh_kulachkovyy_3_200_07_214v_beltapaz",
    "price": "43590.00"
  },
  {
    "name": "Патрон 315 токарный 3-х кулачковый 3-315.55.234В",
    "prop": "В (высокий)",
    "link": "patron_315_tokarnyy_3_kh_kulachkovyy_3_315_55_234v_beltapaz",
    "price": "115005.00"
  },
  {
    "name": "Патрон 160 токарный 3-х кулачковый 3-160.05.229П",
    "prop": "П (повышенный)",
    "link": "patron_160_tokarnyy_3_kh_kulachkovyy_3_160_05_229p_beltapaz",
    "price": "34530.00"
  },
  {
    "name": "Патрон 160 токарный 3-х кулачковый 3-160.05.214П",
    "prop": "П (повышенный)",
    "link": "patron_160_tokarnyy_3_kh_kulachkovyy_3_160_05_214p_beltapaz",
    "price": "27630.00"
  },
  {
    "name": "Патрон 125 токарный 3-х кулачковый 3-125.03.224П",
    "prop": "П (повышенный)",
    "link": "patron_125_tokarnyy_3_kh_kulachkovyy_3_125_03_224p_beltapaz",
    "price": "23310.00"
  },
  {
    "name": "Патрон 250 токарный 3-х кулачковый 3-250.09.234В",
    "prop": "В (высокий)",
    "link": "patron_250_tokarnyy_3_kh_kulachkovyy_3_250_09_234v_beltapaz",
    "price": "63870.00"
  },
  {
    "name": "Патрон 250 токарный 3-х кулачковый 3-250.37.234А",
    "prop": "А (особо высокий)",
    "link": "patron_250_tokarnyy_3_kh_kulachkovyy_3_250_37_234a_beltapaz",
    "price": "75300.00"
  },
  {
    "name": "Патрон 200 токарный 3-х кулачковый 3-200.33.214В",
    "prop": "В (высокий)",
    "link": "patron_200_tokarnyy_3_kh_kulachkovyy_3_200_33_214v_beltapaz",
    "price": "43590.00"
  },
  {
    "name": "Патрон 100 токарный 3-х кулачковый 3-100.02.24",
    "prop": "Н (нормальный)",
    "link": "patron_100_tokarnyy_3_kh_kulachkovyy_3_100_02_24_beltapaz",
    "price": "19425.00"
  },
  {
    "name": "Патрон 250 токарный 4-х кулачковый 4-250.37.234",
    "prop": "Н (нормальный)",
    "link": "patron_250_tokarnyy_4_kh_kulachkovyy_4_250_37_234_beltapaz",
    "price": "91920.00"
  },
  {
    "name": "Патрон 400 токарный 3-х кулачковый 3-400.15.234В",
    "prop": "В (высокий)",
    "link": "patron_400_tokarnyy_3_kh_kulachkovyy_3_400_15_234v_beltapaz",
    "price": "185550.00"
  }
]

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Tailwind
      config={{
        theme: {
          borderRadius: {
            DEFAULT: "20px"
          },
          extend: {
            colors: {
              main: "#3C569F",
              wrapper: "#F4F5FA",
              secondary: "#75798a"
            }
          }
        }
      }}
    >
      <Body className="bg-wrapper my-auto mx-auto font-sans px-2">
        <Container className="max-w-[600px] py-4">
          <Link href={info.site}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="114"
              height="30"
              alt="frizar"
            />
          </Link>
        </Container>
        <Container className="max-w-[600px] p-4 bg-white rounded mb-4 text-center">
          <Text className="text-[20px] font-bold">Информация о поступлении товара</Text>
        </Container>
        <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
          <Text className="font-bold">Здравствуйте!</Text>
          <Text>
            {/* Товар <Link className="text-main underline" href="https://frizar.ru/catalog/izdeliya_dlya_vysadki_obrabotki_metallov_davleniem/vstavka_1010_0381_vk8_tverdosplavnaya_1/"> */}
            {/* Вставка 1010-0381 ВК8 твердосплавная</Link> поступил на склад. Вы просили оповестить вас о поступление товара. */}
            Информируем Вас о новом поступлении токарных патронов бренда "БелТАПАЗ" и  комплектующих к ним на наш склад.
          </Text>
          <Text>
            Актуальные запросы присылайте на почту <Link href="mailto:info@frizar.ru">info@frizar.ru</Link>
          </Text>
          <table className="text-[14px] w-full border-collapse">
            <thead>
              <tr>
                <td className="bg-[#d3d3d3] py-2 border border-solid border-[#e7e7e7] text-center">Название</td>
                <td className="bg-[#d3d3d3] py-2 border border-solid border-[#e7e7e7] text-center">Класс точности</td>
                <td className="bg-[#d3d3d3] py-2 border border-solid border-[#e7e7e7] text-center">Цена</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td className="px-2 py-2 border border-solid border-[#e7e7e7]">
                    <Text className="text-main m-0">{item.name}</Text>
                  </td>
                  <td className="px-2 py-2 border border-solid border-[#e7e7e7]">{item.prop}</td>
                  <td className="px-2 py-2 border border-solid border-[#e7e7e7] whitespace-nowrap">
                    <Link className="bg-main text-white px-2 rounded-[5px] py-2" href={`https://frizar.ru/sender-feedback?product=${item.name}`}>уточнить</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
        <Container className="max-w-[600px] p-4 bg-white rounded mb-4">
          <Section>
            <Row >
              <Column className="align-top">
                <Text className="font-bold text-[20px] ">Свяжитесь с нами</Text>
                <Link href={`mailto:${info.email}`} className="text-main text-[14px]">{info.email}</Link>
                <br />
                <Link href={`tel:${info.phoneHref}`} className="text-main text-[14px]">{info.phone}</Link>
              </Column>
              <Column className="align-top">
                <Text className="font-bold text-[20px] ">Полезные ссылки</Text>
                <Link href={`https://frizar.ru/stati`} className="text-main text-[14px]">Наш Блог</Link>
                <br />
                <Link href={`https://frizar.ru/company/contacts`} className="text-main text-[14px]">Форма обратной связи</Link>
              </Column>
            </Row>
          </Section>
          <Hr />
          {/* <Text className="text-[10px] leading-[15px]">
            Вы получили это письмо, так как подписались на товаров на сайте frizar.ru
          </Text> */}
          <Text className="text-[10px] leading-[15px] text-secondary !mb-0">
            Общество с ограниченной ответственностью «Фризар». Юридический адрес: Россия, 241047, г. Брянск, ул. 2-я Мичурина, д. 11. к. 27. ИНН 3250534321 КПП 325701001 ОГРН 1123256019457
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html >
);

export default StripeWelcomeEmail;
