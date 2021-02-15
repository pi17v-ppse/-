var t = new Array(9);

function ai() {
    var id = Math.floor(Math.random() * 9);
    t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
    if (t[0] == 'ai' && t[1] == 'ai' && t[2] == 'ai' || t[0] == 'Игрок' && t[1] == 'Игрок' && t[2] == 'Игрок') return true;
    if (t[3] == 'ai' && t[4] == 'ai' && t[5] == 'ai' || t[3] == 'Игрок' && t[4] == 'Игрок' && t[5] == 'Игрок') return true;
    if (t[6] == 'ai' && t[7] == 'ai' && t[8] == 'ai' || t[6] == 'Игрок' && t[7] == 'Игрок' && t[8] == 'Игрок') return true;
    if (t[0] == 'ai' && t[3] == 'ai' && t[6] == 'ai' || t[0] == 'Игрок' && t[3] == 'Игрок' && t[6] == 'Игрок') return true;
    if (t[1] == 'ai' && t[4] == 'ai' && t[7] == 'ai' || t[1] == 'Игрок' && t[4] == 'Игрок' && t[7] == 'Игрок') return true;
    if (t[2] == 'ai' && t[5] == 'ai' && t[8] == 'ai' || t[2] == 'Игрок' && t[5] == 'Игрок' && t[8] == 'Игрок') return true;
    if (t[0] == 'ai' && t[4] == 'ai' && t[8] == 'ai' || t[0] == 'Игрок' && t[4] == 'Игрок' && t[8] == 'Игрок') return true;
    if (t[2] == 'ai' && t[4] == 'ai' && t[6] == 'ai' || t[2] == 'Игрок' && t[4] == 'Игрок' && t[6] == 'Игрок') return true;
    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'Игрок') ? ai() : null : reset()
}

function reset() {
    alert("Игра окончена!");
    location.reload();
}