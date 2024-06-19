function submitVote(candidateName) {
    const votes = JSON.parse(localStorage.getItem('votes')) || { 'คนที่ 1': 0, 'คนที่ 2': 0 };
    votes[candidateName]++;
    localStorage.setItem('votes', JSON.stringify(votes));
    alert(`คุณได้ลงคะแนนให้ ${candidateName} แล้ว`);
}