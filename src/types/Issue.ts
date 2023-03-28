export type Issue = {
    code: string;
    name: string;
    rate: number;
    maturity: string;
    couponTimes: number;
    marketValue?: number;
}