let prices = [100, 200, 300, 400];
for (let i = 0; i < prices.length; i++) {
    console.log(`Price at index ${i} is ${prices[i]}`);
}
for (let i = 0; i < prices.length; i ++) {
    if (i % 2 === 0) {
        let total = total + prices[i];
    }
}     