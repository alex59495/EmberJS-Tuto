import Helper from '@ember/component/helper';

export default class Currency extends Helper {
  compute(params, hash = {}) {
    const [amount] = params;
    const { sign = '$' } = hash;
    const dollars = Math.floor(amount);
    let cents = Math.floor((amount * 100) % 100);
    if (cents.toString().length === 1) {
      cents = `0${cents}`;
    }
    return `${sign}${dollars}.${cents}`;
  }
}

// import { helper } from '@ember/component/helper';

// export default helper(function currency(params, hash = {}) {
//   const [amount] = params;
//   const { sign = '$' } = hash;
//   const dollars = Math.floor(amount);
//   let cents = Math.floor((amount * 100) % 100);
//   if (cents.toString().length === 1) {
//     cents = `0${cents}`;
//   }
//   return `${sign}${dollars}.${cents}`;
// });
