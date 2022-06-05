const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Bejing, China',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'        
    },
    'green': {
        'type': 'green',
        'origin': 'Bejing, China',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flavor': 'delicious'        
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavor': 'unknown'        
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')  
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName])
        response.json(tea[teaName])
    else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`This server is running on port ${PORT}! GO CATCH IT!`)
})