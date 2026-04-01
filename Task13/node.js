const fs=require('fs');
async function fetchUserData(id) {
    console.log(`Fetching user ${id}...`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id>10) reject("User not found");
            else resolve({id,name:"Arun",email:"arun@mail.com" });
        }, 400);
    });
}
async function validateUser(user) {
    console.log("Validating email...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (!user.email.includes("@")) reject("Invalid email");
            else resolve(user);
        }, 200);
    });
}
async function enrichUser(user) {
    console.log("Enriching user data...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            user.role="admin";
            user.joinedAt=new Date().toISOString();
            resolve(user);
        },300);
    });
}
async function saveUser(user) {
    console.log("Saving to users.json...");
    return new Promise((resolve,reject)=>{
        fs.writeFile("users.json",JSON.stringify(user),(err)=>{
            if(err)reject("Save failed");
            else resolve();
        });
    });
}
async function main() {
    try {
        let user=await fetchUserData(5);
        user=await validateUser(user);
        user=await enrichUser(user);
        try {
            await saveUser(user);
        } catch {
            console.log("Retrying save...");
            await saveUser(user);
        }
        console.log("Done:", user);
    } catch (err) {
        console.log("Error:", err);
    }
}
main();