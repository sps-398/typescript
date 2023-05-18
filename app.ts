const n1 = document.getElementById('n1') as HTMLInputElement;
const n2 = document.getElementById('n2') as HTMLInputElement;
const addBtn = document.querySelector('button')!;
const result = document.getElementById('result')!;

function add(n1: number, n2: number) {
   return n1 + n2; 
}

addBtn.addEventListener('click', (e) => {
    const sum = add(+n1.value, +n2.value);
    result.innerText = `${sum}`;
});