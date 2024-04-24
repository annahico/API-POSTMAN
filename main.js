const btnGetUsers = document.getElementById("get-users");
const loading = document.getElementById("loading");
const root = document.getElementById("root");

btnGetUsers.addEventListener("click", () => {
    getAllUsers(); // llamar a todos los usuarios
});

const getAllUsers = async () => {
    try {
        loading.textContent = "Loading...";
        await delay(1000);


        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        const users = data.users;
        console.log(users);
        renderAllUsers(users);
    } catch (error) {
        console.log(error);
    } finally {
        loading.textContent = "";
    }
};

const renderAllUsers = (users) => {
    for (const user of users) {
        root.innerHTML += user.firstName + ",";
    }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

