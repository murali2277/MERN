const { error } = require("console");

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((response) => {
    if(!response.ok) throw new Error("Network response was not ok");
    return response.json();
})
.then((comment) => {
    const name = comment.map(comments => comments.name);
    console.log("Name is:",);
})
.catch(error => {
    console.error("Error fetching comments:",error);
});