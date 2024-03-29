
// Theme slider function bacground color to dark, text color to light, submit lettering and title bacground to yellow, input and text are bg dark and text light
// Will my slider work the same as a check box
const themeSlider = document.getElementById('themeSlider');
const toBlogBtn = document.getElementById('blogBtn')
const blogTitle = document.getElementById('blogTitle');
const userInput = document.getElementsByClassName('userInput');
const submitBtn = document.getElementById('submitBtn');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    toBlogBtn.classList.toggle('dark-modeBtn')

    blogTitle.classList.toggle('dark-modeTitle');

    for (let i = 0; i < userInput.length; i++) {
        const element = userInput[i];
        element.classList.toggle('dark-mode')
    }

    submitBtn.classList.toggle('dark-modeBtn');
};

themeSlider.addEventListener('click', toggleTheme);

// navigate to blog page without submitting new post

toBlogBtn.addEventListener('click', toBlog)

function toBlog() {
    window.location.replace('./blog.html')
}

// Submit buton functionality

// Grab username, title, and post values
const username = document.querySelector('#username');
const title = document.querySelector('#postTitle');
const post = document.querySelector('#postContent');

submitBtn.addEventListener('click', function (event) {
    
    event.preventDefault();

    let postsArray = [];

    if (localStorage.getItem('postInfo')) {
        
        postsArray = JSON.parse(localStorage.getItem('postInfo'));
    }
    
    // Save them to localStorage
    const postInfo = {
        username: username.value,
        title: title.value,
        post: post.value,
    }
    
    postsArray.push(postInfo);

    localStorage.setItem("postInfo", JSON.stringify(postsArray));

    console.log(postsArray)

    username.textContent = '';
    title.textContent = '';
    post.textContent = '';

    window.location.replace('./blog.html');
});

// Then navigate to blog page
