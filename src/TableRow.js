import React from 'react';

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td><img src={coin.image} alt={coin.name} width="25" /></td>
      <td>{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>{coin.id}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default TableRow;