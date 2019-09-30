"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConexionSequelize_1 = require("./../Config/ConexionSequelize");
var sqlz = require('sequelize');
var query = sqlz.Op;
/* Exportamos Multer para subir Archivos o ficheros: */
var multer = require('multer');
exports.RegistrarProducto = function (req, res) {
    var objProducto = ConexionSequelize_1.Producto.build(req.body);
    console.log(objProducto);
    objProducto.save().then(function (ProductoCreado) {
        var rpta = {
            message: "Creado Correctamente",
            contenido: ProductoCreado
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: "Error Al Creado",
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.ActualizarProducto = function (req, res) {
    var p_prod_id = req.params.p_prod_id;
    ConexionSequelize_1.Producto.update({
        prod_nom: req.body.prod_nom,
        prod_prec: req.body.prod_prec,
        prov_id: req.body.prov_id
    }, {
        where: {
            prod_id: p_prod_id
        }
    }).then(function (ProductUpdate) {
        var rpta = {
            message: 'Producto Actualizado Correctamente',
            contenido: ProductUpdate
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Al Actualizar',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.EliminarProducto = function (req, res) {
    var p_prod_id = req.params.p_prod_id;
    ConexionSequelize_1.Producto.destroy({
        where: {
            prod_id: p_prod_id
        }
    }).then(function (DeleteProduct) {
        var rpta = {
            message: 'Eliminado Satisfactoriamente',
            contenido: DeleteProduct
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Al Eliminar',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.AgregarDescripcion = function (req, res) {
    var p_prod_id = req.params.p_prod_id;
    var objDescripcion = ConexionSequelize_1.Descripcion.build({ descripcion: req.body.descripcion, prod_id: p_prod_id });
    /*objDescripcion = {
        descripcion:req.body.descripcion,
        prod_id:p_prod_id
    }*/
    console.log(objDescripcion);
    objDescripcion.save().then(function (DescripcionSave) {
        var rpta = {
            message: 'Descripcion Agregada Satisfactoriamente',
            contenido: DescripcionSave
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Descripcion No Agregada, ¡Jodete!',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.ActualizarDescripcion = function (req, res) {
    var p_desc_prod_id = req.params.p_desc_prod_id;
    ConexionSequelize_1.Descripcion.update({
        descripcion: req.body.descripcion
    }, {
        where: {
            desc_prod_id: p_desc_prod_id
        }
    }).then(function (UpdateDesc) {
        var rpta = {
            message: 'Descripcion Actualizada',
            contenido: UpdateDesc
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Al Actulizar',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.EliminarDescripcion = function (req, res) {
    var p_desc_prod_id = req.params.p_desc_prod_id;
    ConexionSequelize_1.Descripcion.destroy({
        where: {
            desc_prod_id: p_desc_prod_id
        }
    }).then(function (DeleteDesc) {
        var rpta = {
            message: 'Eliminado Satisfactoriamente',
            contenido: DeleteDesc
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Al Eliminar',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.AgregarItinirario = function (req, res) {
    var p_prod_id = req.params.p_prod_id;
    var objItinerario = ConexionSequelize_1.Itinerario_Producto.build({
        iti_prod_desc: req.body.iti_prod_desc,
        prod_id: p_prod_id
    });
    objItinerario.save().then(function (AddItinirario) {
        var rpta = {
            message: 'Itinerario Agregado Correctamente',
            contenido: AddItinirario
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Itinerario No Agregado',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.ActualizarItinerario = function (req, res) {
    var p_iti_prod_id = req.params.p_iti_prod_id;
    ConexionSequelize_1.Itinerario_Producto.update({
        iti_prod_desc: req.body.iti_prod_desc
    }, {
        where: {
            iti_prod_id: p_iti_prod_id
        }
    }).then(function (UpdateItinerario) {
        var rpta = {
            message: 'Itinerario Actualizado Correctamente',
            contenido: UpdateItinerario
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Itinerario No Actualizado',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.EliminarItinerario = function (req, res) {
    var p_iti_prod_id = req.params.p_iti_prod_id;
    ConexionSequelize_1.Itinerario_Producto.destroy({
        where: {
            iti_prod_id: p_iti_prod_id
        }
    }).then(function (DeleteItinerario) {
        var rpta = {
            message: 'Eliminado Satisfactoriamente',
            contenido: DeleteItinerario
        };
        res.status(201).json(rpta);
    }).catch(function (error) {
        var rpta = {
            message: 'Error Al Eliminar',
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.SubirImagenProducto = function (req, res) {
    var DIR = './Api/ImgProducto';
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, DIR);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
    var upload = multer({
        dest: DIR,
        storage: storage
    }).single('imgprod');
    upload(req, res, function (error) {
        if (error) {
            console.log(error);
            return res.status(422).send('Error Al Subir Tu Imagen');
        }
        else {
            var imgupload = req.file.filename;
            console.log("Imagen Subida" + imgupload);
            var objImagenProducto = ConexionSequelize_1.Imagen.build({ img_url: imgupload });
            console.log(objImagenProducto);
            objImagenProducto.save().then(function (saveImage) {
                var rpta = {
                    message: "Creado Correctamente",
                    img: imgupload,
                    contenido: saveImage
                };
                res.status(201).json(rpta);
            }).catch(function (error) {
                var rpta = {
                    message: "Error Al Creado",
                    contenido: error
                };
                res.status(501).json(rpta);
            });
        }
    });
};
exports.AddImageForProducto = function (req, res) {
};
