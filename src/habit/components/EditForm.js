import { h } from "preact";
import { useState } from "preact/hooks";

const EditForm = ({ initial }) => {
  const [name, setName] = useState(initial.name);
  const onSubmit = event => {
    event.preventDefault();
    console.log(name);
  };
  return h(
    "form",
    { onsubmit: onSubmit },
    h(
      "fieldset",
      h("label", { for: "habit-name" }, "Habit Name"),
      h("input", {
        type: "text",
        min: 3,
        required: true,
        value: name,
        onchange: event => setName(event.target.value)
      })
    ),
    h("button", { class: "btn", type: "submit", onclick: onSubmit })
  );
};

export default EditForm;
