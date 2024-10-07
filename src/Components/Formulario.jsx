import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";


const Formulario = ({ pacientes, setPacientes, setPaciente, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      setMensajeError("Todos los campos son obligatorios");
      return;
    }

    const regexNombre = /^[a-zA-Z\s]*$/;
    if (!regexNombre.test(nombre) || !regexNombre.test(propietario)) {
      setError(true);
      setMensajeError("Los nombres no pueden contener números");
      return;
    }

    if (!email.includes("@")) {
      setError(true);
      setMensajeError("El email debe contener @");
      return;
    }

    const obj = { nombre, propietario, email, fecha, sintomas };

    if (paciente.id) {
      obj.id = paciente.id;

      const pacientemodificado = pacientes.map((lista) =>
        lista.id === paciente.id ? obj : lista
      );

      setPacientes(pacientemodificado);
      setPaciente({});

      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");

      toast.success("Paciente Actualizado");
    } else {
      obj.id = generarId();
      setError(false);
      setPacientes([...pacientes, obj]);

      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");

      toast.success("Paciente agregado");
    }

    console.log("Enviando Formulario");
    console.log(nombre, propietario, email, fecha, sintomas);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Admistrarlos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>{mensajeError}</p>
          </div>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-black"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-black"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-black"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-black"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-black"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all rounded-lg"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
      
    </div>
  );
};

export default Formulario;
