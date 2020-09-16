import './style.css';

document.addEventListener('DOMContentLoaded', function() {
    let birthday = new Date(1995, 7, 12);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    let ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById("age").innerHTML = ageYears;
});