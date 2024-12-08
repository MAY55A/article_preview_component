btn = document.getElementById('share-btn');
container1 = document.getElementById('default');
container2 = document.getElementById('share');

function toggle() {
    container1.classList.toggle('visible');
    container2.classList.toggle('visible');
}

btn.addEventListener('click', toggle);