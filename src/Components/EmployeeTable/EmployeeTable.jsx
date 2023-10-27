import React from 'react';
import { useTable, useSortBy } from 'react-table';

// Ici aussi, nous devont ameliorer les performances de notre composant
// Il faut donc utiliser React.memo pour memoriser le composant
// React.memo prend en parametre le composant a memoriser
// React.memo retourne un composant memorise
// React.memo prend en parametre une fonction de comparaison
// Cette fonction prend en parametre les props precedentes et les props actuelles
// Cette fonction retourne un booleen
// Si la fonction retourne true, le composant n'est pas mis a jour
// Si la fonction retourne false, le composant est mis a jour
// exemple : 
// function areEqual(prevProps, nextProps) {
//   // return true si les props sont egales
//   // return false si les props sont differentes
// }

const EmployeeTable = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy // Ajoutez useSortBy pour activer la fonctionnalité de tri
  );
  return (
    <div className="employee-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
