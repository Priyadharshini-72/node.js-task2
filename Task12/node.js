async function authService(token) {
    if (token!=="ok") throw "401";
}
async function userService() {
    return {name:"Arun",email:"arun@mail.com" };
}
async function billingService() {
    return {due:1200 };
}
async function main() {
    await authService("ok");
    const [user,bill]=await Promise.all([userService(),billingService()]);
    console.log({user,bill });
}
main();