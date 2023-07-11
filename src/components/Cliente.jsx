const Cliente = ({ ele }) => {
  const { nombre, empresa, email, telefono, id } = ele;
  return (
    <tr>
      <td className="p-4">{nombre}</td>
    </tr>
  );
};

export default Cliente;
