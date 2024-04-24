const btnGetUsers = document.getElementById("get-users");
const loading = document.getElementById("loading");
const root = document.getElementById("root");

btnGetUsers.addEventListener("click", () => {
    getAllUsers(); // llamar a todos los usuarios
});

const getAllUsers = async () => {
    try {
        await delay(2000); //OJO eliminar en producción
        loading.textContent = "Loading...";

        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const users = data.users;
        console.log(users);
    } catch (error) {
        console.log(error);
    } finally {
        loading.textContent = "";
    }
};

