import { ReactNode } from "react";

type HidableDivProps = {
    isShow: boolean;
    children: ReactNode;
}
export const HidableDiv = ({isShow, children}:HidableDivProps) => {
    return <>{isShow ? children : null}</>
}