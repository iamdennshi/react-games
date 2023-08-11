export default function splitMoney(money) {
    const moneyStr = money.toString();
    const SLICE = 3;
    let totalSlices = 0;
    let result = ""
    let separator = " ";
  
    while (totalSlices * SLICE + 4 <= moneyStr.length) {
        if (result !== "") {
            result = `${moneyStr.slice(-SLICE * totalSlices * 2, 0 - totalSlices * SLICE)}${separator}${result}`;
        } else {
            result = moneyStr.slice(-SLICE);
        }
        totalSlices += 1;
    }
    if (result !== "") {
        return `${moneyStr.slice(0, moneyStr.length - SLICE * totalSlices)}${separator}${result}`;
    } else {
        return moneyStr.slice(0);
    }
  }