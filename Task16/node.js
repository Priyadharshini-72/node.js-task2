console.time("total");
async function run() {
    const [sales, expenses, refunds] = await Promise.all([
        Promise.resolve(85000),
        Promise.resolve(32000),
        Promise.resolve(5000)
    ]);
    const profit = sales - expenses - refunds;
    const tax = Math.floor(profit * 0.18);
    const net = profit - tax;
    console.timeEnd("total");
    console.log({
        sales, expenses, profit, tax, netAfterTax: net
    });
}
run();