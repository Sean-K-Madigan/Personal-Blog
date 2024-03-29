// Create an alert warning
// window.onload = function() {    
//     alert('You may find some opinions on this page triggering. Just because you disagree does not give you the right to harass the poster. It is perfectly acceptable to agree to disagree.');
// };

// make theme toggle work steal code from form.js
const themeSlider = document.getElementById('themeSlider');
const backBtn = document.getElementById('backBtn');
const links = document.getElementsByClassName('links');
const mainDiv = document.getElementsByTagName('main');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    backBtn.classList.toggle('dark-modeBtn');

    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.toggle('dark-modeLinks')
    }
};

themeSlider.addEventListener('click', toggleTheme);


// pull info from local storage
let postsArray = [];

    if (localStorage.getItem('postInfo')) {
        
        postsArray = JSON.parse(localStorage.getItem('postInfo'));
    }

// create a div in main section
if (!postsArray) {
    
} else {

    for (const post of postsArray) {
        const articleDiv = document.createElement('div');

        // const title = document.createElement('h3');
        // title.textContent = post.title;

        const username = document.createElement('h4');
        username.textContent = post.username;

        // const post = document.createElement('p');
        // post.textContent = post.post;

        articleDiv.appendChild(username);
        mainDiv[0].appendChild(articleDiv);
        
    }
}

// backBtn functionality to 


// navigate back to the new post form