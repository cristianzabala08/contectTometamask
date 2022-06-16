import styles from "./Nav.module.css";

const NavHome = (props:any) => {
  const menuOptions = ["all", "to do", "completed"];

  return (
    <section class={styles.Nav}>
      {menuOptions.map((option) => (
        <button
          style={ 'font-weight'+ `${props.view() === option ? `bold` : ""}` }
          onClick={() => props.setView(option)}
        >
          {option}
        </button>
      ))}
    </section>
  );
};

export default NavHome;
