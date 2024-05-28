import React, { useState } from 'react';
import Questions from './questions.json';
import Display from './Display';

const App = () => {
  const [marks, setMarks] = useState([]);

  const marksHandler = (index, value) => {
    // Create a copy of the marks array
    const tempMarks = [...marks];
    // Update the score for the question at the given index
    tempMarks[index] = value;
    // Set the new marks array
    setMarks(tempMarks);
  };

  const handleEndQuiz = () => {
    alert(marks.reduce((a, b) => a + b, 0));
  };

  return (
    <div>
      <center>
        {Questions.map((question, index) => (
          <div key={index}>
            <Display question={question} index={index} marksHandler={marksHandler} />
          </div>
        ))}
        <button onClick={handleEndQuiz}>END QUIZ</button>
      </center>
    </div>
  );
};

export default App;
