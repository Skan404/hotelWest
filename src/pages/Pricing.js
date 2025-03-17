import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h1>Cennik</h1>
      <table>
        <thead>
          <tr>
            <th>Typ pokoju</th>
            <th>Cena za noc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jednoosobowy</td>
            <td>100 zł</td>
          </tr>
          <tr>
            <td>Dwuosobowy</td>
            <td>180 zł</td>
          </tr>
          <tr>
            <td>Trzyosobowy</td>
            <td>250 zł</td>
          </tr>
          <tr>
            <td>Grupy (powyżej 3 osób)</td>
            <td>80 zł/osoba</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pricing;