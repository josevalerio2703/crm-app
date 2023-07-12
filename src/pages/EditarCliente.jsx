import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { obtenerClienteId } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";


export async function loader({params}) {
   const cliente = await obtenerClienteId(params.clienteId)
   
   if(Object.values(cliente).length === 0) {
    throw new Response('',{
    status: 404,
    statusText: 'No Hay Resultados'
    })
}
   
   return cliente
   }

   

const EditarCliente = () => {
     const navigate =  useNavigate()
     const cliente = useLoaderData()
     console.log(cliente);
    return (
        <>
          <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
          <p className="mt-3">
            Modifique los Datos del Cliente
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
    
            {/* {errores?.length && errores.map((ele, i) => <Error key={i}>{ele}</Error>)} */}
            <Form method="post" >
              <Formulario 
              cliente={cliente}
              />
    
              <input
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold tex-lg "
                value="Registar Cliente"
              />
            </Form>
          </div>
        </>
      );
}

export default EditarCliente