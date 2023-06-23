/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1OverridesProps = {
    Desktop1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "\u90E8\u7F72\u540D"?: PrimitiveOverrideProps<TextProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
    "\u3000\u3000\u3000\u696D\u52D9\u30D5\u30ED\u30FC\u7C21\u6613\u4F5C\u6210\u30A2\u30D7\u30EA"?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;
export default function Desktop1(props: Desktop1Props): React.ReactElement;
