/* Calculate results */
calcResults = (e) => {
    // Collect input from UI
    // Input
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    // Output
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculaledPayments = parseFloat(years.value) * 12;
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculaledPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculaledPayments).toFixed(2);
        totalInterest.value = ((monthly * calculaledPayments) - principal).toFixed(2);
    } else {
        showError('Please check your number!');
    }
    e.preventDefault();
}

showError = (err) => {
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Create div
    const errorDiv = document.createElement('div');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node
    errorDiv.appendChild(document.createTextNode(err));
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
    // Clear error after 3 sec
    setTimeout(clearError, 3000);
}

clearError = () => {
    document.querySelector('.alert').remove();
}


/* Listen for submit */
document.querySelector('#loan-form').addEventListener('submit', calcResults);