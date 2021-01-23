document.getElementById('homeContent').style.display = "";
document.getElementById('otherContent').style.display = "none";

document.getElementById('homebutton').onclick = () => {
    document.getElementById('homeContent').style.display = "";
    document.getElementById('otherContent').style.display = "none";
}
document.getElementById('blogbutton').onclick = () => {
    window.location.href = 'https://www.blog.johnsamuels.ninja';
}
document.getElementById('gpgbutton').onclick = () => {
    window.location.href = 'https://www.johnsamuels.ninja/John_Samuels_public.asc';
}
document.getElementById('otherbutton').onclick = () => {
    document.getElementById('homeContent').style.display = "none";
    document.getElementById('otherContent').style.display = "";
}