async function upload() {
    console.log("Receiving file...");
    await new Promise(r => setTimeout(r,500));
    await Promise.all([
        new Promise(r=>setTimeout(r,300)),
        new Promise(r=>setTimeout(r,300))
    ]);
    console.log({
        success: true,
        filename: "photo.jpg",
        size: "245KB",
        thumbnail: "thumb_photo.jpg"
    });
}
upload();