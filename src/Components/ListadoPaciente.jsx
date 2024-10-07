import Paciente from "./Paciente";

function ListadoPaciente({
  pacientes,
  EliminarPaciente,
  setPaciente /*,setPacientes*/,
  borrartodo,
}) {
  return (
    <div className="relative md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
      <button
        className="absolute right-5  bg-red-700 rounded-md p-1 font-bold text-xl text-white"
        onClick={() => borrartodo()}
      >
        Eliminar todo
      </button>

      <h2 className="font-black text-3x1 text-center">ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map((p) => (
        <Paciente
          //setPacientes={setPacientes}
          setPaciente={setPaciente}
          pacientes={pacientes}
          EliminarPaciente={EliminarPaciente}
          key={p.id}
          p={p}
        />
      ))}
    </div>
  );
}

export default ListadoPaciente;
