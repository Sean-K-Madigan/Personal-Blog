// Create an alert warning
// window.onload = function() {    
//     alert('You may find some opinions on this page triggering. Just because you disagree does not give you the right to harass the poster. It is perfectly acceptable to agree to disagree.');
// };

// make theme toggle work steal code from form.js
const themeSlider = document.getElementById('themeSlider');
const backBtn = document.getElementById('backBtn');
const links = document.getElementsByClassName('links');
const mainDiv = document.getElementsByTagName('main');
const headerFooterDiv = document.getElementsByClassName('headFoot');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    for (let i = 0; i < headerFooterDiv.length; i++) {
        const element = headerFooterDiv[i];
        element.classList.toggle('dark-modeHeadFoot');
    };

    backBtn.classList.toggle('dark-modeBtn');

    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.toggle('dark-modeLinks');
    };
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
        console.log(post);
        const articleDiv = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = `Title: ${post.title}`;

        const username = document.createElement('h4');
        username.textContent = `Author: ${post.username}`;

        const paragraph = document.createElement('p');
        paragraph.textContent = `-- ${post.paragraph} --`;

        articleDiv.setAttribute('class', 'card');
        title.setAttribute('class', 'postHead');
        username.setAttribute('class', 'postHead');
        paragraph.setAttribute('class', 'postContent');

        articleDiv.appendChild(title);
        articleDiv.appendChild(username);
        articleDiv.appendChild(paragraph);
        mainDiv[0].appendChild(articleDiv);
    }
}

// backBtn functionality to 
backBtn.addEventListener('click', goBack) 

function goBack() {

    window.location.replace('./index.html');
    
}