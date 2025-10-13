fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json(); // parse JSON
  })
  .then((comments) => {
    console.log("Comments for Post 1:", comments);
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });
