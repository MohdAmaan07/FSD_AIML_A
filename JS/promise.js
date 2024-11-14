const fetchGitHubData = new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject('Failed to fetch data from GitHub API.');
            }
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
});

fetchGitHubData
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });