const btnGetUsers = document.getElementById("get-users");
const loadingIndicator = document.getElementById("loading");
const root = document.getElementById("root");

btnGetUsers.addEventListener("click", () => {
    fetchAllUsers(); // Llamar a todos los usuarios
});

const fetchAllUsers = async () => {
    try {
        loadingIndicator.textContent = "Cargando...";
        // await delay(500); //OJO eliminar en producción
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
    let userHTML = "";
    for (const user of users) {
        userHTML += createUserHTML(user);
    }
    root.innerHTML = userHTML;
};

const createUserHTML = (user) => {
    return `
    <div class="user">
        <img class="user__image" src="${user.image}" alt="${user.firstName}">
        <div class="user__name">${user.firstName} ${user.lastName}</div>
        <div class="user__age">${user.age}</div>
    </div>
    `;
};

const delay = (t) => new Promise(r => setTimeout(r, t));