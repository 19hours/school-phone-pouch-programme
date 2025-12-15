import React from 'react';

type Row = {
  label: string;
  pouch: string;
  lockers: string;
};

type ComparisonTableProps = {
  rows: Row[];
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="table-wrapper">
      <table>
        <caption className="caption">Comparison: phone pouch vs phone lockers</caption>
        <thead>
          <tr>
            <th scope="col">Area</th>
            <th scope="col">Phone pouch</th>
            <th scope="col">Phone lockers</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.pouch}</td>
              <td>{row.lockers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
