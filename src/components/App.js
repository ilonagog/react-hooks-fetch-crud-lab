
import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App({ onDeleteQuestion, question }) {
  const [page, setPage] = useState("List");
  // const [questions, setQuestions] = useState([])
  // console.log(questions)

  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //     .then((resp) => resp.json())
  //     .then((questions) => setQuestions(questions))
  // }, []);


  //   fetch("http://localhost:4000/questions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(itemData),
  //   })
  //     .then((r) => r.json())
  //     .then((newItem) => onAddItem(newItem));
  // }

  // function handleDelete() {
  //   fetch(`http://localhost:4000/questions/${question.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => onDeleteQuestion(question));
  // }
  // function handleDeleteQuestion(deletedQuestion) {
  //   const questionToDelete = questions.map((question) => question.id !== deletedQuestion.id)
  //   setQuestions(updatedQuestion)


  // }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
      {/* <button className="delete" onClick={handleDelete}>Delete </button> */}
    </main>
  );
}

export default App;
