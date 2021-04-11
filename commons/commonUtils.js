export default function CommonUtils() {
  function testReg(val, reg) {
    let patt = new RegExp(reg);
    return patt.test(val);
  }
}
