async function getUsers() {
    return ["Arun","Priya","Kiran"];
}
async function getOrders() {
    return [101,102,103,104];
}
async function main() {
    const [users, orders] = await Promise.all([getUsers(), getOrders()]);

    console.log({
        users,
        orders,
        totalUsers: users.length,
        totalOrders: orders.length
    });
}
main();