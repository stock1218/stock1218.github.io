homeNode = document.getElementById('homeContent');
otherNode = document.getElementById('otherContent');
contactNode = document.getElementById('contactContent');

otherNode.style.display = "none";
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
}

document.getElementById('blogButton').onclick = () => {
    window.location.href = 'https://www.blog.johnsamuels.ninja';
}

document.getElementById('otherButton').onclick = () => {
    changeTab(otherNode);
}