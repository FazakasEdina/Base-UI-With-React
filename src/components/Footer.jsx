import React from 'react';

export default function Footer() {
  return (
    <footer>
      <table>
      <tr>
        <th> Company name </th>
        <th> Availability </th>
      </tr>
        
      <tr>
        <td> Home </td>
        <td> Location: ... </td>
      </tr>

      <tr>
        <td> About </td>
        <td> Phone: 0000 </td>
      </tr>

      <tr>
        <td> Products </td>
        <td> Email: ... </td>
      </tr>

      <tr>
        <td> Contact </td>
        <td> </td>
      </tr>
      </table>

    <div className="copyright">
      <p>Copyright 2022 </p>
      <p>Made by: fazakasedina20@gmail.com</p>
      <p> Icons from Flaticon.com</p>
    </div>
    </footer>
  );
}
