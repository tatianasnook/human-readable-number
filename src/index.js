module.exports = function toReadable (number) {
    let oneDigit = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let twoDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let threeDigit = 'hundred';

    let arrNum = String(number).split('');

     if(arrNum.length === 1){
      return oneDigit[arrNum[0]]
     }
     else if(arrNum.length === 2 && arrNum[0] === '1'){
      return teens[arrNum[1]]
     }
     else if(arrNum.length === 2 && arrNum[1] === '0'){
      return twoDigit[arrNum[0]]
     }
     else if(arrNum.length === 2){
      return twoDigit[arrNum[0]] + ' ' + oneDigit[arrNum[1]]
     }
     else if(arrNum.length === 3 && arrNum[1] === '0' && arrNum[2] === '0'){
      return oneDigit[arrNum[0]] + ' ' + threeDigit;
     }
     else if(arrNum.length === 3 && arrNum[1] === '1'){
      return oneDigit[arrNum[0]] + ' ' + threeDigit + ' '+ teens[arrNum[2]];
     }
     else if(arrNum.length === 3 && arrNum[1] === '0'){
      return oneDigit[arrNum[0]] + ' ' + threeDigit + ' '+ oneDigit[arrNum[2]];
     }
     else if(arrNum.length === 3 && arrNum[2] === '0'){
      return oneDigit[arrNum[0]] + ' ' + threeDigit + ' '+ twoDigit[arrNum[1]];
     }
     else if(arrNum.length === 3){
      return oneDigit[arrNum[0]] + ' ' + threeDigit + ' '+ twoDigit[arrNum[1]] + ' '+ oneDigit[arrNum[2]];
     }
}
