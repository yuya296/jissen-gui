import MergedData from "../types/MergedData";

const initialdata:MergedData[] = [
  {
      code: 'item01',
      name: '銘柄1',
      maturity: '20231231',
      rate: 0.5,
      couponTimes: 1,
      quantity: 100,
      bookValue: 100,
      marketValue: 100,
      profitAndLoss: 0,
  },
  {
      code: 'item02',
      name: '銘柄2',
      maturity: '20231231',
      rate: 0,
      couponTimes: 1,
      quantity: 300,
      bookValue: 500,
      marketValue: 0,
      profitAndLoss: 0,
  },
  {
      code: 'item03',
      name: '銘柄3',
      maturity: '20231231',
      rate: 0.5,
      couponTimes: 1,
      quantity: 100,
      bookValue: 100,
      marketValue: 100,
      profitAndLoss: 0,
  },
]

const codes:string[] = ['item01', 'item02', 'item03']

export {initialdata, codes};