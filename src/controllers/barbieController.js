import barbies from "../models/dados.js";

//Buscar itens
const getAllBarbies = (req, res) => {
    const { id, nome, profissao, anoLancamento } = req.query;
    let resultado = barbies;

    if(nome) {
        resultado = resultado.filter(b => b.nome.toLowerCase().includes(nome.toLowerCase()))
    }
    if(id) {
        resultado = resultado.filter(b => b.id === id)
    }

    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
};

const getBarbiesByld = (req, res) => {
    const id = parseInt(req.params.id);
    const barbies = barbies.find(b => b.id === id);

    if(!barbies) {
        return res.status(404).json({
            message: "Barbie não encontrado"
        });
    }

    res.status(200).json(barbies);
};

const createBarbie = (req, res) => {
    const { nome, id, profissao, anoLancamento } = req.body;

    if(!nome || !profissao) {
        return res.status(400).json({
            success: false,
            message: "Nome e profissão são obrigatório"
        });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome,
        profissao,
        anoLancamento
    };

    barbies.push(novaBarbie);
    res.status(201).json({
        success: true,
        message: "Nova Barbie cadastrada com sucesso",
        barbies: novaBarbie
    });
};

//Deletar

const deleteBarbie = (req, res) => {
    const id = parseInt(req.params.id);

    //Verificação
    if(isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O ID selecionado é invalido"
        });
    }

    //Verificar se não tem outra Barbie com o ID
    const barbieParaRemover = barbies.find(b => b.id === id);

    if(!barbieParaRemover) {
        return res.status(404).json({
            success: false,
            message: `Barbie com o ID ${id} não existe`
        });
    }

    //Remover Barbie com o ID
    const barbiesFiltradas = barbies.filter(barbies => barbies.id !== id);
    barbies.slice(0, barbies.length, ...barbiesFiltradas);

    res.status(200).json({
        success: true,
        message: `A Barbie ${id} foi removido com sucesso`
    })
};

export { getAllBarbies, getBarbiesByld, createBarbie,deleteBarbie };