function Solve(val) {
    var v = document.getElementById('result_panel');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('result_panel').value;
    var num2 = eval(num1);
    document.getElementById('result_panel').value = num2;
}
function Clear() {
    var inp = document.getElementById('result_panel');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('result_panel');
    ev.value = ev.value.slice(0,-1);
 }