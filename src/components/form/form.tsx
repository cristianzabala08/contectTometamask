import "./style.css";
import "tippy.js/dist/tippy.css";
import { createForm } from "@felte/solid";
import { createSignal } from "solid-js";
import { validator } from "@felte/validator-yup";
import reporter from "@felte/reporter-tippy";
import * as yup from "yup";

function Form() {
  const [validForm, setValidForm] = createSignal(false);

  yup.setLocale({
    mixed: {
      default: "Not valid",
      required: "Must not be empty"
    },
    string: {
      email: "Must be a valid email",
      min: "Must not be empty"
    }
  });
  // Creating yup schema
  const schema = yup.object({
    account: yup.object({
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required(),
      type: yup.string().required()
    }),
  });

    const { form, data } = createForm({
      initialValues: {
        account: {
          email: "",
          password: ""
        },
        extras: {
          tags: [
            {
              value: ""
            }
          ]
        }
      },
      onSubmit: values => (console.log(values)),
      extend: [validator({ schema }), reporter()],
    });

  return (<div class="container">
  <form use:form>
  <fieldset class="col-5 container-fluid">
   <div class="form-grup col">
    <label class="form-label" for="email">Email:</label>
    <input class="form-control" id="email" name="account.email" type="email" />
   </div>
   <div class="form-grup col">
    <label class="form-label" for="password">Password:</label>
    <input class="form-control" id="password" name="account.password" type="password" />
   </div>
   <div class="form-grup col">
   <label  class="form-label" for="type">Type:</label>
    <select class="form-control" name="account.type" id="type">
      <option value="">Please choose an option</option>
      <option value="regular">Regular</option>
      <option value="special">Special</option>
    </select>
   </div>
  </fieldset>
  <div class="align-content-center col-12 d-flex justify-content-center">
  <button class="btn btn-primary" type="submit">Create Account</button>
  </div>
</form>
  </div>);
}

export default Form;
