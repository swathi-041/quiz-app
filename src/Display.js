import React from 'react';

const Display = ({ question, index, marksHandler }) => {
  const boxStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
  };

  const handler = (e) => {
    const temp = question.answer === e.target.value ? 1 : 0;
    marksHandler(index, temp);
  };

  return (
    <div style={boxStyle}>
      <h2 style={{ textAlign: "left", marginLeft: '10px' }}>{index + 1}. {question.title}</h2>
      <div style={{ textAlign: "left", marginLeft: '10px' }}>
        <input type="radio" name={`question-${index}`} value="A" onClick={handler} />{question.options[0]}
        <input type="radio" name={`question-${index}`} value="B" onClick={handler} />{question.options[1]}
        <input type="radio" name={`question-${index}`} value="C" onClick={handler} />{question.options[2]}
        <input type="radio" name={`question-${index}`} value="D" onClick={handler} />{question.options[3]}
      </div>
    </div>
  );
};

export default Display;
