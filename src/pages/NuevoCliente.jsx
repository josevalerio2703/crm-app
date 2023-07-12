import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const email = formData.get('email')
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  //validacion
  const errores = []
  if(Object.values(datos).includes('')){
  errores.push('Todos los campos son Obligatorios')
  }

  if(!regex.test(email)){
  errores.push('El email es invalido')
  }
  
  //Retornar datos si hay errores
  if(Object.keys(errores).length){
  return errores
  }
  return null
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate();


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Rellene todos los campos para crear un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 font-bold uppercase "
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length && errores.map((ele, i) => <Error key={i}>{ele}</Error>)}
        <Form method="post" >
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold tex-lg "
            value="Registar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
