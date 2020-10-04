
//changes placeholder to indicate the time input should be in months
btnCarLoan.onclick=function(){
  inptTime.placeholder = "Enter the number of months"
}

//changes placeholder to indicate the time should either be 15 or 30 years
btnHomeLoan.onclick = function(){
  inptTime.placeholder  = "Enter 15 or 30 years"
}

//function to calculate car payment
function carLoanPayment(principle,months,rate){
  rate = rate/1200
  console.log(rate)
  payment = principle * (rate*((1+rate)**months))/((1+rate)**months-1)
  payment = Math.round(payment)
  return payment
  }
  
  //button to calculate payment and give the output
btnCalc.onclick = function(){
if (inptTime.placeholder == "Enter the number of months"){
  lblOutput.value = `A car loan for $${inptAmount.value} over ${inptTime.value} months at ${inptIntRate.value}% interest would have a monthly payment of 
  ${carLoanPayment(parseFloat(inptAmount.value),parseFloat(inptTime.value),parseFloat(inptIntRate.value))}`
  }
  }