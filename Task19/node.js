function getUser() {
    return new Promise(r=>setTimeout(()=>r({ name: "Arun" }), 500));
}
function getPosts() {
    return new Promise(r=>setTimeout(()=> r(["Post1","Post2"]), 400));
}
getUser()
.then(user=>{
    console.log("User:",user.name);
    return getPosts();
})
.then(posts=>{
    console.log("Posts:",posts.join(", "));
})
.catch(console.log);