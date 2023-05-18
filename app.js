var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var addBtn = document.querySelector('button');
var result = document.getElementById('result');
function add(n1, n2) {
    return n1 + n2;
}
addBtn.addEventListener('click', function (e) {
    var sum = add(+n1.value, +n2.value);
    result.innerText += " " + sum;
});