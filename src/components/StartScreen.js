function StartScreen({ numQuestions, dispatch, difficulty }) {
  function handleDifficulty(e) {
    if (!e.target.value) return;

    dispatch({
      type: "setDifficulty",
      payload: e.target.value,
    });
  }
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      {difficulty && (
        <h3>
          {numQuestions} questions to test your React{" "}
          {difficulty === "Beginner"
            ? "Noobery"
            : difficulty === "Intermediate"
            ? "Averagery"
            : "Mastery"}
        </h3>
      )}
      <div onClick={(e) => handleDifficulty(e)} className="difficulty">
        {!difficulty && <p>🔽 Set Difficulty 🔽</p>}
        <button
          value="Master"
          className={`btn btn-ui ${difficulty === "Master" ? "selected" : ""}`}
        >
          Master
        </button>
        <button
          value="Intermediate"
          className={`btn btn-ui ${
            difficulty === "Intermediate" ? "selected" : ""
          }`}
        >
          Intermediate
        </button>
        <button
          value="Beginner"
          className={`btn btn-ui ${
            difficulty === "Beginner" ? "selected" : ""
          }`}
        >
          Beginner
        </button>
      </div>
      {difficulty && (
        <button
          onClick={() => dispatch({ type: "start" })}
          className="btn btn-ui"
        >
          Let's start
        </button>
      )}
    </div>
  );
}

export default StartScreen;
