const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const column1 = document.querySelectorAll('.column1');
let message = "";

const findInTable = () => {
    const searchedText = document.querySelector('#input-id').value.toLowerCase();

    if (searchedText.length != 0) {
        summ = 0;
        for (i = 0; i < column1.length; i++) {
            if (column1[i].innerHTML.toLowerCase().includes(searchedText)) {
                console.log(column1[i]);
                summ += 1;
                column1[i].classList.add('searched');
            }
        }

        if (summ == 0) {
            message = document.createTextNode('Ничего не найдено');
        }
        else {
            message = document.createTextNode(`Найдено ${summ}`);
        }
    }
    else {
        message = document.createTextNode('Введите текст');
    }
    result.appendChild(message);
};

btn.addEventListener('click', (event) => {
    event.preventDefault;
    result.innerHTML = "";
    column1.forEach(el => el.classList.remove('searched'));
    findInTable();
});


