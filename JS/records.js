document.addEventListener('DOMContentLoaded', async function () {
    const preloaderContainer = document.querySelector('.preloader_container');
    const userCardsContainer = document.querySelector('.cards_container');
    const errorMessageContainer = document.querySelector('.error_message');
    const errorText = document.querySelector('.error_text');

    try {
        const fetchString = 'https://my-json-server.typicode.com/Lofranlof/MockRESTAPI/champions';

        preloaderContainer.style.display = 'flex';
        const response = await fetch(fetchString);

        await new Promise(resolve => setTimeout(resolve, 4000));

        if (response.ok) {
            const users = await response.json();
            preloaderContainer.style.display = 'none';
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user_card');
                userCard.innerHTML = `
                    <p class="user_info">Nickname: ${user.nickname}</p>
                    <p class="user_info">Date: ${user.date}</p>
                    <p class="user_info">Wellbeing: ${user.wellBeing}</p>
                    <p class="user_info">Bench Press: ${user.benchPress} кг</p>
                    <p class="user_info">Squat: ${user.squat} кг</p>
                    <p class="user_info">Deadlift: ${user.deadlift} кг</p>`;
                userCardsContainer.appendChild(userCard);
            });
        } else {
            throw new Error('Network response Error');
        }
    } catch (error) {
        preloaderContainer.style.display = 'none';
        errorMessageContainer.style.display = 'flex';
        errorText.innerText = 'I am so fucking retarded';
        console.log(error);
    }
});
