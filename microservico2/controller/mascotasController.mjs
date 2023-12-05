import mascotasModel from "../model/mascotasModel.mjs";

export async function createMascota(req, res) {
  const mascota = req.body;

  let documento;

  try {
    documento = await mascotasModel.create(mascota);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(201);
  res.json(documento);
}

export async function readMascotas(req, res) {
  //const { idReserv } = req.params
  let documento;
  console.log("hola")
  try {
    documento = await mascotasModel.find({});
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

export async function deleteMascotas(req, res) {
  const { id } = req.params;
  console.log("hola");
  let documento;
  console.log(id);
  try {
    documento = await mascotasModel.findOneAndDelete({
      _id: id,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}


export async function readMascotasid(req, res) {
  const { id } = req.params; 
  let documento;

  try {
    if (id) {
      documento = await mascotasModel.findById(id);
    } else {
      documento = await mascotasModel.find({});
    }
  } catch (error) {
    res.status(400);
    return res.json({ error: error.message });
  }

  if (!documento) {
    res.status(404);
    return res.json({ error: 'Mascota no encontrada' });
  }

  res.status(200);
  res.json(documento);
}


export async function updateMascotas(req, res) {
    const { id} = req.params
    const  changeMascota  = req.body
    console.log("hola11");
    console.log(changeMascota);
    console.log("hola12");
    let documento;

    try {
        documento = await mascotasModel.updateOne({"_id": id}, changeMascota)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
