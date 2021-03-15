module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    let n1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let n10 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let n11 = ['',  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberStr = number.toString();
   
   if (number < 20) {
     return n1[number];
   }
   if (numberStr.length === 2)  {
     if (numberStr[1] === '0')
      return n10[numberStr[0]];
        else 
        return n10[numberStr[0]] + ' ' + n1[numberStr[1]];
   }
   
   if (numberStr.length === 3) {
     if (numberStr[1] === '0' && numberStr[2] === '0')
       return n1[numberStr[0]] + ' hundred';
  
       else if ( numberStr[1] === '0')
       return n1[numberStr[0]] + ' hundred ' + n1[numberStr[2]];
  
       else if (numberStr[1] === '1' && numberStr[2] !== '0')
       return n1[numberStr[0]] + ' hundred ' + n11[numberStr[2]];
  
       else if (numberStr[2] === '0' && numberStr[1] !== '0')
       return n1[numberStr[0]] + ' hundred ' + n10[numberStr[1]];
  
     else 
       return n1[numberStr[0]] + ' hundred ' + n10[numberStr[1]] + ' ' + n1[numberStr[2]];
   } 
};
