    document.getElementById('fetchData').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const userList = document.getElementById('userList');
                userList.innerHTML = '';
                data.forEach(user => {
                    const listItem = document.createElement('li');
                    
                    // Create an h1 for the user's name
                    const userName = document.createElement('h4');
                    userName.textContent = user.name;

                    // Create a p for the user's email
                    const userEmail = document.createElement('p');
                    userEmail.textContent = user.email;

                    // Append the h1 and p to the listItem
                    listItem.appendChild(userName);
                    listItem.appendChild(userEmail);

                    // Append the listItem to the userList
                    userList.appendChild(listItem);

                })
            }).catch(error => console.error('Error fetching data', error));
    })