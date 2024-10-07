
const Paciente = ({
  p,
  EliminarPaciente,
  setPaciente /*,setPacientes,pacientes*/,
}) => {
  const Eliminar = () => {
    //forma 1 de eliminar
    const respuesta = confirm(
      "Quieres eliminar al paciente " + p.propietario + "?"
    );
    if (respuesta) {
      
      EliminarPaciente(p.id);
      toast.success("Paciente eliminado");
    }

    //forma 2 de liminar
    //const respuesta = confirm("Quieres eliminar al paciente?")
    //if (respuesta) {
    // const modificada = pacientes.filter(eliminar => eliminar.id !== p.id)
    //setPacientes(modificada)
    //}
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-6 rounded-xl  ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{p.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{p.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{p.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{p.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{p.sintomas}</span>
      </p>

      <div className="flex justify-evenly flex-wrap ">
        <button
          className=" text-xl font-bold bg-blue-700 mt-0 rounded-md px-2 py-1 text-white"
          onClick={() => setPaciente(p)}
        >
          Editar
        </button>

        <button
          className=" text-xl font-bold bg-red-600 mt-0 rounded-md px-2 py-1 text-white"
          onClick={() => Eliminar()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
