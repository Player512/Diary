let playerHP = 10;
let BPM = 80;
let Offset = 2.101;

//.squareクラスの要素を取得
const player = document.querySelector('.player');
const canvas = document.querySelector('.canvas');
const playerHPElement = document.getElementById('playerHP');
playerHPElement.innerText = `HP:${playerHP}`;
let isGameActive = true;
const audio1 = document.getElementById("34");
const audio2 = document.getElementById("SE1");
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        playAudio();
        document.getElementById('gameText').innerHTML = '';
    }
});
function playAudio() {
    setTimeout(() => {
        createEnemyAttack();
        //定期的な時間で実行する関数
        setInterval(() => {
            createEnemyAttack();
        }, 1000 / (BPM / 60));
    }, 1000 * Offset);
    audio1.play()
}
function createEnemyAttack() {
    //もし、isGameActiveがtureだった場合、if関数内を実行
    if (isGameActive) {
        const enemyAttack1 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack1);
        const enemyAttack2 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack2);
        const enemyAttack3 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack3);
        const enemyAttack4 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack4);
        const enemyAttack5 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack5);
        const enemyAttack6 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack6);
        const enemyAttack7 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack7);
        const enemyAttack8 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack8);
        const enemyAttack9 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack9);
        const enemyAttack10 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack10);
        const enemyAttack11 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack11);
        const enemyAttack12 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack12);
        const enemyAttack13 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack13);
        const enemyAttack14 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack14);
        const enemyAttack15 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack15);
        const enemyAttack16 = createSingleEnemyAttack();
        displayEnemyAttack(enemyAttack16);
    }
}
function createSingleEnemyAttack() {
    const enemyAttack = document.createElement('div');
    enemyAttack.classList.add('enemyAttack');
    enemyAttack.style.opacity = '0';
    const canvasRect = canvas.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * (canvasRect.width / 100)) * 100;
    const randomY = Math.floor(Math.random() * (canvasRect.height / 100)) * 100;
    enemyAttack.style.top = `${randomY}px`;
    enemyAttack.style.left = `${randomX}px`;
    canvas.appendChild(enemyAttack);
    return enemyAttack;
}
function displayEnemyAttack(enemyAttack) {
    let opacity = 0;
    const interval = 70;
    const duration = 1000 / (BPM / 60);
    const increment = (interval / duration) * 1;
    const fadeInInterval = setInterval(() => {
        opacity += increment;
        enemyAttack.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, interval);
    //指定した時間に実行される関数
    setTimeout(() => {
        removeEnemyAttack(enemyAttack);
    }, 1000 / (BPM / 60));
}
function removeEnemyAttack(attack) {
    const playerRect = player.getBoundingClientRect();
    const attackRect = attack.getBoundingClientRect();
    if (playerRect.left < attackRect.right && playerRect.right > attackRect.left && playerRect.top < attackRect.bottom && playerRect.bottom > attackRect.top) {
        playerHP -= 1;
        playerHPElement.innerText = `HP:${playerHP}`;
        audio2.play()
        if (playerHP <= 0) {
            playerHP = 0;
            playerHPElement.innerText = `HP:${playerHP}`;
            isGameActive = false;
            document.getElementById('gameText').innerHTML = 'END';
            //ゲームオーバー時に音楽を止める
            audio1.pause();
        }
    }
    attack.remove();
}
//初期位置
let x = 0;
let y = 0;
//移動するステップ
const step = 100;
//キー入力を監視
window.addEventListener('keydown', (event) => {
    const parentRect = player.parentElement.getBoundingClientRect();
    const childRect = player.getBoundingClientRect();
    switch (event.key) {
        case 'ArrowUp':
            //y - step = -100の場合
            //-100, 0になるので、0が返される
            //y - step = 100の場合
            //100, 0になるので、100が返される
            y = Math.max(y - step, 0);
            break;
        case 'ArrowDown':
            //parentRect.heightは、親要素
            //cildRect.heightは、子要素

            //ここで言う親要素、子要素と言うのはHTMLの<div>タグの中に
            //もう一つの<div>タグがある事を言う。

            //親要素(500)-子要素(100)=400になる
            //y + step = 500の場合
            //500, 400になるので、400が返される
            //y + step = 300の場合
            //300, 400になるので、300が返される
            y = Math.min(y + step, parentRect.height - childRect.height);
            break;
        case 'ArrowLeft':
            x = Math.max(x - step, 0);
            break;
        case 'ArrowRight':
            x = Math.min(x + step, parentRect.width - childRect.width);
            break;
    }
    //新しい位置を適用
    player.style.transform = `translate(${x}px, ${y}px)`;
});