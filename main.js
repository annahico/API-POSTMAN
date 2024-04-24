const btnGetUsers = document.getElementById("get-users");
const loadingIndicator = document.getElementById("loading");
const root = document.getElementById("root");

btnGetUsers.addEventListener("click", () => {
    fetchAllUsers(); // Call all users
});

const fetchAllUsers = async () => {
    try {
        loadingIndicator.textContent = "Loading...";
        await delay(500);

        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        const users = data.users;
        console.log(users);
        renderAllUsers(users);
    } catch (error) {
        console.log(error);
    } finally {
        loadingIndicator.textContent = "";
    }
};

const renderAllUsers = (users) => {
    let view = "";
    for (const user of users) {
        view += `
        <div>
        <img src="${user.image}">
        </div>
        <div>
        ${user.firstName}
        ${user.lastName},
        ${user.age}
        </div>`;
    }
    root.innerHTML = view;
};

const delay = (t) => new Promise(r => setTimeout(r, t));
