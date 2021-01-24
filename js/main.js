homeNode = document.getElementById('homeContent');
contactNode = document.getElementById('contactContent');

contactNode.style.display = "none";

var lastNode = homeNode;

var changeTab = (newNode) => {
    if (lastNode === newNode) { } else {
        lastNode.style.display = "none";
        newNode.style.display = "";
        lastNode = newNode;
    }
}

document.getElementById('homeButton').onclick = () => {
    changeTab(homeNode);
}

document.getElementById('contactButton').onclick = () => {
    changeTab(contactNode);
}

document.getElementById('resumeButton').onclick = () => {
    window.location.href = '/John-Samuels.pdf';
}

document.getElementById('blogButton').onclick = () => {
    window.location.href = 'https://www.blog.johnsamuels.ninja';
}