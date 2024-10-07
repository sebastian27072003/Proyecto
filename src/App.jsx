import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import ListadoPaciente from './Components/ListadoPaciente'
import Formulario from './Components/Formulario'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  )
  const [paciente, setPaciente] = useState({});

  const EliminarPaciente = (id) => {
    const NuevaLista = pacientes.filter((nuevalista) => nuevalista.id !== id);
    setPacientes(NuevaLista);
    toast.success("Paciente eliminado");
  };

  const borrartodo = () => {
    const listanueva = [];
    setPacientes(listanueva);
    toast.success("Pacientes eliminados");

  };
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPaciente
          borrartodo={borrartodo}
          pacientes={pacientes}
          setPaciente={setPaciente}
          //setPacientes = {setPacientes}
          EliminarPaciente={EliminarPaciente}
        />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App