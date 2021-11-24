import React from 'react';

const TableAlcohol = ( { item, index } ) => {
    const { question, a1, a2, a3, a4, a5, resize } = item;
    return (
        <tr><td>{ question }</td>
            <td>{ a1 ? (<label className="labl"><input type="radio" name={ "alcohol_q"+index } value="0"/><div>{a1}</div></label>) : ''}</td>
            <td>{ a2 ? (<label className="labl"><input type="radio" name={ "alcohol_q"+index } value="1"/><div>{a2}</div></label>) : ''}</td>
            <td>{ a3 ? (<label className={resize ? "labl resize" : "labl"}><input type="radio" name={ "alcohol_q"+index } value="2"/><div>{a3}</div></label>) : ''}</td>
            <td>{ a4 ? (<label className="labl"><input type="radio" name={ "alcohol_q"+index } value="3"/><div>{a4}</div></label>) : ''}</td>
            <td>{ a5 ? (<label className={resize ? "labl resize" : "labl"}><input type="radio" name={ "alcohol_q"+index } value="4"/><div>{a5}</div></label>) : ''}</td>
        </tr>
    );
};

export default TableAlcohol;