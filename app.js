const express = require('express')
const app = express()

app.set('view engine','ejs')    // setting penggunaan template engine untuk express 
app.set('views', 'view-ejs') //setting penggunaan folder untuk menyimpan seluruh file .ejs

app.get('/', (req, res)=>{
    //  res.send('<h1>My Company</h1> <hr><hr><hr>')
        res.render('beranda')
})

app.get('/profil', (req, res) =>{
    let dataView = {
        nama_coach: 'Aji Kowiyu' ,
         gender:'L',
         profesi: 'Programmer',
         pengalaman: ['Senior Developer @Podomoro Group', 'web Developer @Kompas Group',"Tenaga Pengajar Univeritas @Courset.Net"]
    }

     res.render('halaman-profile', dataView)
})

app.listen(3000, ()=>{
    console.log('server sdh on , silahkan buka http://localhost:3000');
  
})