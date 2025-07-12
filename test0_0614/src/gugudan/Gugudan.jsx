import React from 'react';

const style = {
    tableTag: {
        border: '1px solid black',
        borderCollapse: 'collapse',
    },
    theadTag: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

function Gugudan() {
    const danNum = 10; 

    const rows = [];
    for (let num = 1; num <= 9; num++) {
        rows.push(
            <tr key={num}>
                <td style={style.tableTag}>{danNum}</td>
                <td style={style.tableTag}>*</td>
                <td style={style.tableTag}>{num}</td>
                <td style={style.tableTag}>=</td>
                <td style={style.tableTag}>{danNum * num}</td>
            </tr>
        );
    }

    return (
        <table style={style.tableTag}>
            <thead>
                <tr style={{ ...style.tableTag, ...style.theadTag }}>
                    <th colSpan={5}>{`${danNum}단`}</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Gugudan;
