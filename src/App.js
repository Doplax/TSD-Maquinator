import React from 'react';
import './App.css';
import  Machinebox from './components/Machinebox';


const data = [
  // ponemos column en vez de Row, pk cuando se carga  lo hace de arriba a bajo.
  { id: "10.7",      inclinacion:"5°" ,       column1: "3820",            column2: "3825",          column3: "3824",             column4: "-" ,                  column5: "3821",         column6: "3823",        column7: "-",              column8: "3829" ,      column9: "3822"},
  { id: "12",         inclinacion:"10%" ,       column1: "NR-535",        column2: "NR-541",      column3: "NR 534",         column4: "NR 537" ,        column5: "NR-538",    column6: "-",               column7: "-",              column8: "-" ,            column9: "NR 540"},
  { id: "12.7",      inclinacion:"5°" ,        column1: "3720",            column2: "3725",          column3: "3724",             column4: "-" ,                  column5: "3721",         column6: "3723",        column7: "-",              column8: "3729" ,      column9: "3722"},
  { id: "15",         inclinacion:"10%" ,       column1: "NR-550",        column2: "NR 620",      column3: "NR 548",          column4: "NR 552" ,       column5: "NR-554",    column6: "NR 559",    column7: "NR 563",     column8: "NR 605" , column9: "NR 557"},
  { id: "19",         inclinacion:"5°" ,      column1: "NR-567",        column2: "NR 574",      column3: "NR 566",          column4: "NR 569" ,       column5: "NR-570",    column6: "NR 573",     column7: "NR 577",     column8: "-" ,          column9: "NR 572"}
]






function App() {
  return (
    <div className="App">

      <div className="table_container">
        <table>
          <thead>
            <tr>         
              <th></th>
              <th><img src={require('./img/electrodos/1.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/2.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/3.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/4.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/5.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/6.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/7.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/8.png')} alt="Logo" /> </th>
              <th><img src={require('./img/electrodos/9.png')} alt="Logo" /> </th>
            </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
            return ( 
              
              <tr key={key}>
                <td className='column-left'><Machinebox nombre={val.id} inclinacion={val.inclinacion}/></td>
                <td><Machinebox nombre={val.column1}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column2}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column3}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column4}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column5}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column6}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column7}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column8}  foto={val.id}/></td>
                <td><Machinebox nombre={val.column9}  foto={val.id}/></td>
              </tr>
              
            )
          })}
          </tbody>
        </table> 
      

      </div>
      

      <div className='contenedor_conos'>
          {data.map((Element) => {
            return(
              <img  alt="imagen" src={require(`./img/conos/${Element.id}.png`)}></img>
          )})}
     
          
          
      </div>

    </div>
  );
}

export default App;

// Pruebas

// data.map(Element => console.log(Element.id))
