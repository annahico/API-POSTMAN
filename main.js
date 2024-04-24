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
        view += createUserHTML(user);
        
    }
    root.innerHTML = view;
};

const createUserHTML = (user) => { //solo una estructura HTML simple
    return `
    <div class="user">
        <img class="user__image" src="${user.image}" alt="${user.firstName}">
        <div class="user__name"> ${user.firstName}</div>
        <div class="user__age"> ${user.age}</div>
    </div>
    `;
};

const delay = (t) => new Promise(r => setTimeout(r, t));
