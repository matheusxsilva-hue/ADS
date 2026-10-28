import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Programando em JAVA"
    },
    {
        id: 2,
       titulo: "Programando em JS"
    },
    {
        id:3,
        titulo: "Desenvolvimento com" 
    }
];

app.use(express.json());1

app.get("/", (req,res) => {
    res.status(200).send("NODE JS");
});

app.get("/livros", (req,res) => {
    res.status(200).json(livros);
});

app.post("/livros",(req,res)=>{
    livros.push(req.body);

    req.status(201).send("Livro cadastrado com sucesso!");
});


export default app;

