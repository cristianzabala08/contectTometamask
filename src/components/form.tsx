import { createFormGroup,  formGroup, Validators } from "solar-forms";
import { createEffect } from "solid-js";

const Registration = (props: any) => {
  const fg = createFormGroup({
    email: ["", { validators: [Validators.required] }],
    name: "",
    password: ["", { validators: [Validators.required] }],
    acceptTerms: [true, { validators: [Validators.is(true)] }],
  });
  const [form, setForm] = fg.value;
  const validAll = fg.validAll;

  function logForm(): void {
    if (!validAll()) {
      return;
    }
    console.log(form());
  }
  
  createEffect(() => {
    
  });
  

  return (
    <>
      <form use:formGroup={fg}>
        <label>Email</label>
        <input id="email" type="email" formControlName="email" />

        <label>Name (optional)</label>
        <input id="name" type="text" formControlName="name" />

        <label>Password</label>
        <input id="password" type="password" formControlName="password" />

        <label>Accept terms</label>
        <input id="acceptTerms" type="checkbox" formControlName="acceptTerms" />

        <button
          type="submit"
          onClick={($event) => {
            $event.preventDefault();
            logForm();
            props.onSubmit(event);
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Registration;
