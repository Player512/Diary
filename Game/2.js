audio1.addEventListener('ended', function () {
    document.getElementById("gameText").innerHTML = 'クリアおめでとう！</br><a href="#" onclick="clearReward()">約束のブツだ、受け取れ。</a>'
    isGameActive = false;
})
function clearReward() {
    document.body.innerHTML = '';
    const newContent = document.createElement('div');
    newContent.innerHTML = '<h1 style="font-size:48px; text-align:center;">!Thank you for playing!</h1><img src="Picture/1.png" alt="1" style="display: block; margin: 0 auto;" width="768" hright="768"></img>';
    document.body.appendChild(newContent);
}