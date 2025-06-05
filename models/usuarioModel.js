const db = require('../db');

const Usuario = {
  getAll: (callback) => {
    db.query('SELECT * FROM usuarios', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
  },

  create: (usuario, callback) => {
    db.query('INSERT INTO usuarios SET ?', usuario, callback);
  },

  update: (id, usuario, callback) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  }
};

module.exports = Usuario;
