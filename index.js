let number = Number(prompt('Zadejte číslo: '));

if (number >= 0 && number <= 36) {
  if (number === 0) {
    alert(
      'Číslo je 0 a není tedy liché nebo sudé a nemá barvu červenou ani černou.',
    );
  } else {
    let evenOrOdd;
    if (number % 2 === 0) {
      evenOrOdd = 'sudé';
    } else {
      evenOrOdd = 'liché';
    }
    let color;
    if ((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
      if (number % 2 === 0) {
        color = 'černé';
      } else {
        color = 'červené';
      }
    } else {
      if (number % 2 === 0) {
        color = 'červené';
      } else {
        color = 'černé';
      }
    }
    alert('Číslo ' + number + ' je ' + evenOrOdd + ' a ' + color + '.');
  }
} else {
  alert('Číslo není platné. Zadejte prosím číslo 0 -36');
}
