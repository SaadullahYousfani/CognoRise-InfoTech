document.addEventListener("DOMContentLoaded", function() {
    const fromCurrency = document.getElementById("from");
    const toCurrency = document.getElementById("to");
    const amount = document.getElementById("amount");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");
    
    // Fetch list of supported currencies
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            currencies.forEach(currency => {
                const option1 = document.createElement("option");
                const option2 = document.createElement("option");
                option1.text = currency;
                option2.text = currency;
                fromCurrency.add(option1);
                toCurrency.add(option2);
            });
        });

    // Conversion logic
    convertButton.addEventListener("click", function() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amountValue = amount.value;

        fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[to];
                const convertedAmount = amountValue * rate;
                resultDiv.textContent = `${amountValue} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
            })
            .catch(error => {
                console.error("Error fetching exchange rates: ", error);
                resultDiv.textContent = "Error fetching exchange rates. Please try again later.";
            });
    });
});
