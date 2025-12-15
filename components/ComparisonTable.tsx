import React from 'react';

interface Row {
  title: string;
  programme: string[];
  lockers: string[];
}

export function ComparisonTable({ rows }: { rows: Row[] }) {
  return (
    <div className="table-wrapper" id="comparison">
      <table>
        <thead>
          <tr>
            <th scope="col">Focus area</th>
            <th scope="col">School Phone Pouch Programme</th>
            <th scope="col">Phone lockers</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.title}>
              <th scope="row">{row.title}</th>
              <td>
                <ul>
                  {row.programme.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.lockers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
