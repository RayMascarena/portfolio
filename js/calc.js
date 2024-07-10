let calculation = localStorage.getItem('calculation') || '';

      updateCalculation('');

      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-display').innerHTML = calculation;
        localStorage.setItem('calculation', calculation);
      }