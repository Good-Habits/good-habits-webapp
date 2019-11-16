import { h } from "preact";
import { useState } from "preact/hooks";

const EditForm = ({ initial }) => {
  const [name, setName] = useState(initial.name);
  const onSubmit = event => {
    event.preventDefault();
    console.log(name);
  };
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="habit-name">Habit Name</label>
        <input
          type="text"
          minLength={3}
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </fieldset>
      <button className="btn" type="submit" onClick={onSubmit}>
        Save
      </button>
    </form>
  );
};

export default EditForm;
