import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// $(document).ready(function() {
//   function calculate() {
//     var principle = document.loandata.principle.value;
//     var interest = document.loandata.interest.value / 100 / 12;
//     var payments = document.loandata.payments.value * 12;
//
//     var x = Math.pow(1+ interest, payments);
//     var monthly = (principle * x * interest)/(x-1);
//
//     var payment = document.getElementById("payment");
//     var total = document.getElementById("total");
//     var totalinterest = document.getElementById("totalinterest");
//
//     if (isFinite(monthly)){
//       payment.innerHTML = monthly.toFixed(2);
//       total.innerHTML = (monthly * payments).toFixed(2);
//       totalinterest.innerHTML = ((monthly * payments)-principle).toFixed(2);
//     } else {
//       payment.innerHTML = "";
//       total.innerHTML = "";
//       totalinterest.innerHTML = "";
//     }
//   }
// });
