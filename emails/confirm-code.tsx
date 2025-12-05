// NEW_USER_CONFIRM
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

import { Tailwind, Button } from "@react-email/components";

interface PlaidVerifyIdentityEmailProps {
  validationCode?: string;
}

const confirmCode = `{{ $json.confirmCode }}`;

export const PlaidVerifyIdentityEmail = ({
  validationCode,
}: PlaidVerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Tailwind
        config={{
          theme: {
            borderRadius: {
              DEFAULT: "20px",
            },
            extend: {
              colors: {
                main: "#3C569F",
                wrapper: "#F4F5FA",
                secondary: "#75798a",
              },
            },
          },
        }}
      >
        <Container style={container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="148"
            height="44"
            fill="none"
            viewBox="0 0 148 44"
            className="text-icon-blue"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "100%",
              height: "auto",
            }}
          >
            <g clipPath="url(#a)">
              <path
                fill="url(#b)"
                fillRule="evenodd"
                d="M100.14 2.264q.793-1.133 1.59-2.264L4.672.012l-1.681 2.72-.002.003h-.001v.001l-.001.002-.001.001L.829 6.225q.154.056.315.086 1.33.035 2.66.078c1.987.062 3.975.125 5.963.125q22.287.01 44.576.01h33.143c.221 0 .442.014.703.031q.194.013.425.026l-2.516 3.494-3.175 4.408q-10.4 14.4-20.784 28.813c-.098.13-.146.3-.195.469q-.033.121-.074.235h83.474l2.586-6.317H74.752q.067-.114.12-.214c.074-.135.136-.25.213-.354A29852 29852 0 0 0 96.79 7c1.13-1.57 2.24-3.152 3.349-4.734v-.001zm-51.963 22.55L45.16 35.211q.252.088.514.133l1.271.004c2.258.008 4.515.015 6.773-.018.245-.003.617-.332.706-.586l.28-.795v-.004c.53-1.506 1.062-3.015 1.454-4.556.43-1.695.813-3.46 0-5.16-.276-.592-.147-.85.357-1.19 1.579-1.07 2.828-2.42 3.473-4.239.419-1.179.327-1.304-.949-1.304l-6.56.001c-6.36.003-12.721.005-19.08-.024-.95-.005-1.348.254-1.61 1.158a978 978 0 0 1-3.062 10.344v.001q-.65 2.163-1.295 4.327c-.116.391-.214.787-.314 1.193v.002q-.092.372-.192.757.231.06.468.09l2.769.003c1.846.002 3.694.003 5.54.017.543.004.695-.29.827-.723q.556-1.81 1.122-3.619a595 595 0 0 0 1.682-5.459c.168-.58.447-.787 1.062-.773 1.372.031 2.744.028 4.115.025l1.247-.002zM0 35.3l.426-1.553v-.001c.316-1.155.62-2.266.932-3.374q.533-1.888 1.07-3.774a799 799 0 0 0 2.24-7.996c.22-.804.537-1.13 1.449-1.122 4.795.028 9.59.026 14.385.024h6.171c.293 0 .586.03.923.065q.246.026.53.051l-.503 1.616c-.566 1.826-1.115 3.595-1.712 5.347-.079.23-.658.413-1.007.417-3.485.026-6.97.034-10.456-.01-.776-.011-1.073.24-1.262.973a279 279 0 0 1-1.306 4.822 364 364 0 0 0-1.003 3.666c-.18.669-.469.942-1.223.93-2.017-.033-4.036-.027-6.054-.02q-1.306.004-2.613.004c-.164-.002-.327-.015-.536-.032H.45c-.13-.01-.275-.022-.45-.033m30.427-20.252-.223.423h1.212l27.864.013q.105.001.215.01c.18.015.363.029.49-.04.259-.132.632-.41.616-.599l-.035-.465v-.002c-.079-1.038-.157-2.087-.44-3.075-.463-1.61-2.116-2.71-3.784-2.71q-4.215-.004-8.43-.005h-.001c-4.215-.001-8.431-.003-12.647-.015-.59-.004-.913.216-1.206.688-.728 1.171-1.472 2.332-2.217 3.493q-.552.86-1.1 1.722c-.103.158-.19.325-.314.562M62.33 35.36l-1.4-.002c-.934-.003-1.867-.005-2.799.002-.604 0-.799-.176-.626-.792q2.31-8.121 4.582-16.248c.168-.6.473-.85 1.133-.841 1.509.017 3.019.014 4.53.012q1.667-.005 3.335.002c.945 0 1.033.118.78 1.027l-1.7 6.137v.006l-.002.003-.001.004v.003c-.929 3.345-1.857 6.69-2.776 10.04-.132.48-.34.666-.856.654-.98-.02-1.962-.015-2.941-.01h-.003zM30.168 9.743q.15-.523.303-1.054-.216-.021-.377-.041a4 4 0 0 0-.492-.04l-1.606-.002c-6.67-.008-13.34-.017-20.01.013a1.5 1.5 0 0 0-1.047.596 175 175 0 0 0-2.86 4.41h-.001l-.685 1.078q-.18.342-.315.704l.418.03c.24.018.447.033.654.033q11.703.013 23.403.013.312.034.62-.027a.7.7 0 0 0 .433-.338 551 551 0 0 0 1.562-5.375m32.712 5.594q.112-.425.22-.845c.14-.543.28-1.081.43-1.62l.086-.308.03-.107c.304-1.075.607-2.15.956-3.208.089-.262.432-.629.661-.632 2.205-.023 4.41-.011 6.615 0q1.072.006 2.144.01.185.04.357.118l-.127.546a34 34 0 0 1-.48 1.906c-.327 1.208-.656 2.423-1.029 3.612-.08.258-.425.62-.654.62-2.827.037-5.657.02-8.49.003l-.268-.002a2.3 2.3 0 0 1-.45-.093m80.088 14.548c.562-2.114.953-4.254-.193-6.287q.036-.057.056-.097c.026-.047.041-.076.064-.084q.15-.111.303-.218.138-.096.274-.196c1.505-1.114 2.751-2.427 3.366-4.224.401-1.172.29-1.322-.974-1.322l-2.17.005c-7.912.016-15.826.032-23.737.032-.747 0-1.058.26-1.251.923-.551 1.91-1.123 3.813-1.694 5.717h-.001l-.001.004a1441 1441 0 0 0-1.539 5.16l-.002.007-.41 1.377a4 4 0 0 1-.234-.528l-.526-2.5-.001-.003a794 794 0 0 1-1.866-9.03c-.161-.813-.495-1.128-1.352-1.128-2.575.01-5.151.011-7.726.012-3.348 0-6.695.002-10.043.025a1.78 1.78 0 0 0-1.233.63 174 174 0 0 0-2.992 4.201q-.47.675-.94 1.346c-.112.16-.207.326-.33.542q-.067.12-.15.263h1.159q1.566.005 3.13.012c3.393.015 6.785.03 10.178.017.732-.001 1.029.235 1.197.939.424 1.764.872 3.523 1.319 5.282q.501 1.963.989 3.93c.127.51.348.735.902.735q7.908-.027 15.814 0c.636.002.936-.21 1.115-.834.48-1.636.978-3.265 1.477-4.895.419-1.37.839-2.742 1.247-4.116.172-.576.426-.794 1.049-.784 1.798.03 3.595.027 5.393.025l1.487-.002c.166 0 .333.018.527.039q.158.017.346.033c-.551 1.891-1.094 3.76-1.635 5.626l-.017.058-.011.037-1.346 4.632q.302.09.613.13l.741.003.437.001c2.289.01 4.577.018 6.866-.018.272-.005.686-.343.781-.613.561-1.606 1.11-3.222 1.544-4.864m-28.17 3.324.238-.019.292 1.454.001.006.056.279h-1.062l.152-.55.002-.006.005-.017c.11-.4.214-.773.316-1.147m2.32-17.807q.153-.375.345-.73l.481-.76c1.005-1.588 2.01-3.176 3.053-4.732a1.489 1.489 0 0 1 1.053-.57q10.398-.089 20.797-.092c2.492 0 4.334 1.811 4.417 4.254.008.25.004.5-.001.75-.006.365-.012.731.02 1.095.061.704-.216.91-.906.906-2.34-.013-4.682-.008-7.022-.004h-.001q-1.755.004-3.51.004-8.703-.015-17.408-.05c-.263 0-.522-.019-.815-.04q-.233-.016-.503-.031m-21.766-1.714-1.276 1.503.197.28h16.773c.499.01.694-.152.56-.694a157 157 0 0 1-1.219-5.313c-.116-.548-.397-.692-.922-.692-1.331.006-2.661.004-3.992.003-1.736-.002-3.472-.004-5.208.01-.349.003-.814.14-1.026.381-1.314 1.486-2.6 3.004-3.887 4.522"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="b"
                x1="102.862"
                x2="102.862"
                y1="43.824"
                y2="1.348"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4285C5"></stop>
                <stop offset="1" stop-color="#252D5B"></stop>
              </linearGradient>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h148v44H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <Heading style={secondary}>Код для подтверждения</Heading>
          <Section style={codeContainer}>
            <Text style={code}>{confirmCode}</Text>
          </Section>
          <Text style={paragraph}>
            Введите код для подтверждения в поле на сайте.
          </Text>
        </Container>
        <Text style={footer}>© ООО "Фризар" </Text>
      </Tailwind>
    </Body>
  </Html>
);

PlaidVerifyIdentityEmail.PreviewProps = {
  validationCode: "144833",
} as PlaidVerifyIdentityEmailProps;

export default PlaidVerifyIdentityEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const secondary = {
  color: "#000",
  display: "block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};
