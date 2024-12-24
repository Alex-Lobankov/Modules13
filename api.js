const url = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      data.forEach(user => {
        console.log(user.name);
      })
    } catch (error) {
      console.log(error, 'Ошибка');
    }
}

fetchUsers();