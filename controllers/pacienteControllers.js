

// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next ) => {
    console.log(req.body);

    res.json({ mensaje: 'El cliente se agregó correctamente'});
}