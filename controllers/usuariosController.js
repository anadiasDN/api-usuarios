const Usuario = require('../models/usuarioModel');

exports.listarUsuarios = (req, res) => {
  Usuario.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.buscarUsuario = (req, res) => {
  Usuario.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.json(results[0]);
  });
};

exports.criarUsuario = (req, res) => {
  const novoUsuario = req.body;
  Usuario.create(novoUsuario, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...novoUsuario });
  });
};

exports.atualizarUsuario = (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  Usuario.update(id, dadosAtualizados, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensagem: 'Usuário atualizado com sucesso' });
  });
};

exports.excluirUsuario = (req, res) => {
  Usuario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensagem: 'Usuário excluído com sucesso' });
  });
};
