const request = require('supertest')
const apiUrl = 'https://ghibliapi.vercel.app'

describe("GET /films/{id}", () =>{

    it('should return status 200 when find My Neighbor Totoro movie', () => {
        request(apiUrl)
        .get('/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
        .expect(200)
        .then((response) => {
            expect(response.body.title).toEqual("My Neighbor Totoro")
        })

    })
})

describe("GET /people}", () =>{

    it('should return status 200 when find a personagem', () => {
        request(apiUrl)
        .get('/people')
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({'name': 'Pazu'})]))
        })

    })
})
