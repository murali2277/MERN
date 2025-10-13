const fetchData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const success = true;
            if (success) resolve("Data received!");
            else reject("Error occurred!");
        },2000);
    });
};

fetchData().then(
    data =>  console.log(data)
).catch(
    error => console.log(error)
);