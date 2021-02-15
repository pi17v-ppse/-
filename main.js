var t = new Array(9);

function ai() {
    var id = Math.floor(Math.random() * 9);
    t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
    if (t[0] == 'ai' && t[1] == 'ai' && t[2] == 'ai' || t[0] == '�����' && t[1] == '�����' && t[2] == '�����') return true;
    if (t[3] == 'ai' && t[4] == 'ai' && t[5] == 'ai' || t[3] == '�����' && t[4] == '�����' && t[5] == '�����') return true;
    if (t[6] == 'ai' && t[7] == 'ai' && t[8] == 'ai' || t[6] == '�����' && t[7] == '�����' && t[8] == '�����') return true;
    if (t[0] == 'ai' && t[3] == 'ai' && t[6] == 'ai' || t[0] == '�����' && t[3] == '�����' && t[6] == '�����') return true;
    if (t[1] == 'ai' && t[4] == 'ai' && t[7] == 'ai' || t[1] == '�����' && t[4] == '�����' && t[7] == '�����') return true;
    if (t[2] == 'ai' && t[5] == 'ai' && t[8] == 'ai' || t[2] == '�����' && t[5] == '�����' && t[8] == '�����') return true;
    if (t[0] == 'ai' && t[4] == 'ai' && t[8] == 'ai' || t[0] == '�����' && t[4] == '�����' && t[8] == '�����') return true;
    if (t[2] == 'ai' && t[4] == 'ai' && t[6] == 'ai' || t[2] == '�����' && t[4] == '�����' && t[6] == '�����') return true;
    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == '�����') ? ai() : null : reset()
}

function reset() {
    alert("���� ��������!");
    location.reload();
}