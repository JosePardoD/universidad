import axios from 'axios';



export async function updateTransaction() {
  try {
    console.log("holi");
    const id = "656ae8206a7536dbf3a03c64";

    // Generar valores dummy para newData2
    const newData2 = {
      namePet: "NombreDummy",
      especie: "EspecieDummy",
      raza: "RazaDummy",
      foto: "URLFotoDummy",
    };

    console.log('Datos a enviar:', newData2);

    const response = await axios.put(`http://localhost:6001/api/mascotas/${id}`, newData2, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 50000,  // Tiempo de espera en milisegundos (ajusta según sea necesario)
    });

    // Log de depuración
    console.log('Respuesta del servidor:', response);

    console.log(`Transacción con ID ${id} actualizada con éxito`);

  } catch (error) {
    // Log del error completo
    console.error('Error al realizar la actualización:', error);

    // Puedes imprimir detalles específicos del error si los hay
    if (axios.isCancel(error)) {
      console.error('La solicitud fue cancelada:', error.message);
    } else if (error.response) {
      console.error('Respuesta del servidor:', error.response.data);
    } else {
      console.error('Error de red:', error.message);
    }
  }
}

export async function getTransactions(token) {
  const res = await fetch("http://localhost:8089/api/reservations", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}


export async function deleteTransactionById(id) {
  console.log(id);
  try {
    const response = await fetch(`http://localhost:6001/api/mascotas/${id}`, {
      method: 'DELETE',
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`Error al eliminar la transacción con ID ${id}: ${response.statusText}`);
    }

    console.log(`Transacción con ID ${id} eliminada con éxito`);


    } catch (error) {
      console.error(error.message);
    }
  }

export async function createMascota(namePet, especie,raza,edad,foto) {
  const data = {

      namePet: namePet,
      especie: especie,
      raza:raza,
      edad:edad,
      foto:foto,

  };

  const res = await fetch("http://localhost:6001/api/mascotas/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const document = await res.json();
    console.log(document);
    return document;
  } else {
    return null;
  }
}

