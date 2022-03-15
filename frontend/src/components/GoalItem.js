import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal, editGoal } from "../features/goal/goalSlice";
import GoalEdit from "./GoalEdit";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const [newText, setNewText] = useState("");
  const [editState, setEditState] = useState(false);

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("ko")}</div>
      <h2>{goal.text}</h2>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>

      {editState ? (
        <>
          <label htmlFor="newText">Edit</label>
          <input
            type="text"
            id="newText"
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Enter Edit text"
          />

          <button
            onClick={() => dispatch(editGoal(goal._id, { text: newText }))}
          >
            수정하기
          </button>
          <button onClick={() => setEditState(!editState)}>취소하기</button>
        </>
      ) : (
        <button onClick={() => setEditState(!editState)}>Edit</button>
      )}
    </div>
  );
};

export default GoalItem;
