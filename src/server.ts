import express, { response } from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

app.get('/games/:id/ads', (resquest, response) => {
    //const gameId = resquest.params.id;

    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 1, name: 'Anúncio 2' },
        { id: 1, name: 'Anúncio 3' },
        { id: 1, name: 'Anúncio 4' },
        { id: 1, name: 'Anúncio 5' }
    ])
})

app.get('/ads/:id/discord', (resquest, response) => {
    //const adId = resquest.params.id;

    return response.json([])
})

app.listen(3333)