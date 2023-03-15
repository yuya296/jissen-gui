import MergedData from "./MergedData";

const initialdata:MergedData[] = [
  {
      code: 'code1',
      name: '銘柄1',
      maturityDate: '20231231',
      rate: 0.5,
      couponTimes: 1,
      quantity: 100,
      bookValue: 100,
      marketValue: 100,
      profitAndLoss: 0,
  },
  {
      code: 'code2',
      name: '銘柄2',
      maturityDate: '20231231',
      rate: 0,
      couponTimes: 1,
      quantity: 300,
      bookValue: 500,
      marketValue: 0,
      profitAndLoss: 0,
  },
  {
      code: 'code3',
      name: '銘柄3',
      maturityDate: '20231231',
      rate: 0.5,
      couponTimes: 1,
      quantity: 100,
      bookValue: 100,
      marketValue: 100,
      profitAndLoss: 0,
  },
]

const codes:string[] = ['code1', 'code2', 'code3']

export {initialdata, codes};