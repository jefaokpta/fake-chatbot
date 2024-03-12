// run express server

const express = require('express');
const app = express();
const port = 3000;

app.get('/whats-api/chatbot-active/900023', (req, res) => {
    res.json(
        {
        "id": 136,
        "label": "",
        "active": true,
        "initialMessage": "TESTE Olá você esta na *Vip - Telefonia em Nuvem!*. \r\nComo podemos te ajudar hoje?",
        "agentsEmpty": "teste No momento, todos os nossos atendentes estão ocupados.\r\nEm breve retornaremos seu contato.",
        "invalidOption": "teste *Opção inválida!* Por favor, escolha uma das opções abaixo:",
        "validOption": "teste Estamos direcionando seu atendimento para o departamento responsável.\r\nVocê pode encerrar o seu atendimento a qualquer momento, basta enviar um *#*.",
        "finalMessage": "teste A *Vip Solutions* agradece o seu contato.",
        "options": [
            {
                "id": 2639,
                "option": 1,
                "department": "teste Já sou cliente",
                "chatbotId": 136,
                "deptoId": "412"
            },
            {
                "id": 2640,
                "option": 2,
                "department": "teste Não sou cliente",
                "chatbotId": 136,
                "deptoId": "413"
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});