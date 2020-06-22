const path = require('path')
const express = require('express')
const app = express ()
const hbs = require('hbs')
const foreCast = require('./utils/foreCast')
const geoCode = require('./utils/geoCode')
const port = process.env.PORT || 3000

const partialsPath = path.join(__dirname, '../public/templates/partials')
const publicDirectoryPath = path.join(__dirname,'../public/')

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../public/templates/views'))
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get ('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get ('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name:'steven'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'steven'
    })
})

app.get ('/weather',(req, res) => {
    if (!req.query.address){
        return res.send('Must provide address')
    }
    geoCode(req.query.address, (e, r) =>{
        if (e) {
          return  res.send({e});
        }
        foreCast(r.lo,r.la, (error, data) => {
            if (error){
                return res.send({error})
            }
            res.send ({
                location: data.des,
                temperature: data.temp,
            })
        })
    })
})

app.get ('/product', (req, res) => {
    if (!req.query.search){
        return res.send('error')
    }
    console.log('test done')
    res.send({
        product: 'NN'
    })
    console.log('hi')
})

app.get ('/help/*', (req, res) => {
    res.render('404', {
        content: 'No help page found'
    })
})

app.get ('*', (req, res) => {
    res.render('404', {
        content: 'Error, 404 page'
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})