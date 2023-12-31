import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerCliente } from "../data/clientes";

export function loader() {
 const cliente =  obtenerCliente()
  return cliente
}

function Index() {
  const datos = useLoaderData();
  

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administar Clientes</p>

      {datos.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {datos.map((ele) => (
              <Cliente ele={ele} key={ele.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Hay Clientes</p>
      )}
    </>
  );
}

export default Index;
