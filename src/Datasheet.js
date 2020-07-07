import React from 'react';
import ReactDataSheet from 'react-datasheet';
import './App.css';




function Datasheet() {
    const grid = [
        [{value:  5}, {value:  6}],
        [{value:  4}, {value:  8}]
     ]
     const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => console.log("New expression :"))


    return (
        <div>
        <ReactDataSheet className="datasheet"
        data={grid}
        valueRenderer={(cell) => cell.value}
        dataRenderer={(cell) => cell.value}
        onCellsChanged={onCellsChanged}
        cellRenderer={props => (
          <tr>
              <td className='action-cell'>
                  <input
        
                      
                  />
              </td>
              {props.children}
          </tr>
        )}
        />

        </div>
    )
}

export default Datasheet
