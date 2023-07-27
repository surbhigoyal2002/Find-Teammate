function SelectGitData() {
    firebase.database().ref('users').on('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var gitHubUsername = CurrentRecord.val().github;
                    
                    requestUserRepos(gitHubUsername);
                });

        });

}

window.onload = SelectGitData;

function requestUserRepos(username){

    const xhr = new XMLHttpRequest();

    const url = `https://api.github.com/users/${username}/repos`;
   
    xhr.open('GET', url, true);

    xhr.onload = function () {

        const data = JSON.parse(this.response);

        for (let i in data) {

            let ul = document.getElementById('userRepos');

            let li = document.createElement('li');

        
            li.innerHTML = (`
                <p><strong>Username:</strong> ${data[i].full_name}</p>
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Forks</strong> ${data[i].forks}</p>
                <p><strong>Stars:</strong> <a href="${data[i].html_url}">${data[i].stargazers_count}</a></p>
            `);
            ul.appendChild(li);
        
        }

    }

    xhr.send();
    
}


