import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal, editGoal } from "../features/goal/goalSlice";
import GoalEdit from "./GoalEdit";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editState, setEditState] = useState(false);

  const data = { _id: goal._id, text };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("ko")}</div>
      <h2>{goal.text}</h2>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>

      {editState ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Edit text"
          />

          <button onClick={() => dispatch(editGoal(data))}>수정하기</button>
          <button onClick={() => setEditState(!editState)}>취소하기</button>
        </>
      ) : (
        <button onClick={() => setEditState(!editState)}>Edit</button>
      )}
    </div>
  );
};

export default GoalItem;
