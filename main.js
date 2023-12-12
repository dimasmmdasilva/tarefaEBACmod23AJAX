document.addEventListener('DOMContentLoaded', function () 
{
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

    try 
    {
        fetch('https://api.github.com/users/dimasmmdasilva')
            .then(function (res) 
            {
                if (!res.ok) {
                    throw new Error('Erro ao obter os dados do usuário do GitHub');
                }
                return res.json();
            })
            .then(function (json) 
            {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                seguidoresElement.innerText = json.followers;
                seguindoElement.innerText = json.following;
                repositoriosElement.innerText = json.public_repos;
                linkElement.href = json.html_url;

                linkElement.addEventListener('click', function (event) 
                {
                    event.preventDefault();
                    alert('Esse botão está quebrado. Clique na imagem.');
                });

                avatarElement.addEventListener('click', function () 
                {
                    window.location.href = json.html_url;
                });
                avatarElement.style.cursor = 'pointer';
            })
            .catch(function (error) 
            {
                console.error('Erro:', error.message);
                alert('Erro ao carregar os dados do GitHub. Por favor, tente novamente mais tarde.');
            })
            .finally(function () 
            {
                // Código que deve ser executado independentemente de ocorrer uma exceção ou não.
            });
    } 
            catch (error) 
            {
            console.error('Erro inesperado:', error.message);
            alert('Erro inesperado. Por favor, tente novamente mais tarde.');
            }
});
