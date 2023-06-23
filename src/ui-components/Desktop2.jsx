/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Desktop2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1571.72px"
      height="1003px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Desktop2")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="453px"
        left="39px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="業務名"
        {...getOverrideProps(overrides, "\u696D\u52D9\u540D\u306E\u5165\u529B")}
      ></Text>
      <View
        width="767px"
        height="93px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="437px"
        left="533px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(73,243,80,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Icon
        width="564px"
        height="126px"
        viewBox={{ minX: 0, minY: 0, width: 564, height: 126 }}
        paths={[
          {
            d: "M564 63C564 97.7939 437.744 126 282 126C126.256 126 0 97.7939 0 63C0 28.2061 126.256 0 282 0C437.744 0 564 28.2061 564 63Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="786px"
        left="calc(50% - 282px - 63.86px)"
        {...getOverrideProps(overrides, "Ellipse 2")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="286px"
        height="61px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="819px"
        left="calc(50% - 143px - -0.14px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="入力"
        {...getOverrideProps(overrides, "\u5165\u529B")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1007px"
        height="152px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="55px"
        left="89px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="業務名を入力してください"
        {...getOverrideProps(
          overrides,
          "\u696D\u52D9\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
        )}
      ></Text>
    </View>
  );
}
