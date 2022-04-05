let email = 'joao@hcode.com.br';

email = 'glaucio@hcode.com.br';

console.log(email);
console.log('O seu email é: ' + email);
console.log(`O seu email é: ${email}`);

document.getElementById('button-submit').addEventListener('click', e=> {
    console.log('O botão foi clicado');
});

document.getElementById('form-login').addEventListener('mouseenter', e=> {
    console.log('O mouse está sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {
    console.log('O mouse está fora do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e=> {
    e.preventDefault();

    console.log('Formulário enviado: aqui vai o Ajax');

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);
    console.log(jsonParse.email);
    console.log(jsonParse.password);
});