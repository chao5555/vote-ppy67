document.addEventListener('DOMContentLoaded', function() {
    loadVotes();
});

function loadVotes() {
    const votes = JSON.parse(localStorage.getItem('votes')) || { 'คนที่ 1': 0, 'คนที่ 2': 0 };
    const results = document.getElementById('results');
    results.innerHTML = `
        <div>คนที่ 1: ${votes['คนที่ 1']} คะแนน</div>
        <div>คนที่ 2: ${votes['คนที่ 2']} คะแนน</div>
    `;
}

function editCandidate(candidateNumber) {
    const newName = prompt('กรุณากรอกชื่อผู้สมัครใหม่:');
    if (newName) {
        document.getElementById(`candidate-${candidateNumber}`).innerText = newName;
    }
}