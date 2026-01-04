import express from 'express'

const app=express();
var r=1;
app.get('/',(req,res) => {
    res.send(`Server is ready ${r} times`);
    console.log(`Refreshed ${r} times`);
    r++;
});

app.get('/api/jokes', (req,res) => {
    const jokes=[
        {
            id:1,
            title:'idn',
            content:'Yes true'
        },
         {
            id:2,
            title:'idn2',
            content:'Yes true2'
        }
    ]
        res.json(jokes);

    
})

const port = process.env.PORT || 3000;
app.listen(port,() => 
{
    console.log(`Server serving at http://localhost:${port}`);
});