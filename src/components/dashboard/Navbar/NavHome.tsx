import { useNavigate } from "solid-app-router";
import { createSignal } from "solid-js";
import { useI18n } from "../../../contexts/i18n/context";
import { Modals } from "../../modal/Modal";
import "./Nav.css";

const NavHome = (props: any) => {
  const [item, setItem] = createSignal(0);
  const [show, setShow] = createSignal(false);
  const [isOpen, setIsOpen] = createSignal(false);
  const i18n: any = useI18n();
  const navigate = useNavigate();

  const menuOptions = [
    { text: i18n.t("home"), value: "home", icon: "fa fa-home" },
    { text: i18n.t("profile"), value: "profile", icon: "fa fa-user-o" },
    { text: i18n.t("settings"), value: "settings", icon: "fa fa-cog" },
    { text: i18n.t("singOut"), value: "salir", icon: "fa fa-sign-out" },
  ];

  function handleOpen(): void {
    setShow(true);
  }

  function handleClose(): void {
    setShow(false);
  }

  function handleTrigger(): void {
    setIsOpen(!isOpen());
  }
  /* 
  function closend(): void {
    if (isOpen() === false) return;
    setIsOpen(false);
  } */

  function handleClick(item: any, index: number) {
    if (item.value === "salir") {
      handleOpen();
      return;
    }
    setItem(index);
    props.setView(item.value);
  }

  function singOut(): void {
    localStorage.removeItem("profile");
    navigate("/");
  }

  return (
    <>
      <Modals
        title="sing out"
        body="seguro que quieres cerrar seccion"
        show={show()}
        handleClose={handleClose}
        out={singOut}
        showOut={true}
      />
      <div class="App">
        <div class="page">
          <div class="m-5">{props.children}</div>

          <section
            class={`sidebar sidebarSection ${isOpen() ? " sidebar--open" : ""}`}
          >
            <div class="trigger" onClick={handleTrigger}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

            {menuOptions.map((option, index) => (
              <div
                class={`sidebar-position${item() === index ? " active " : ""}`}
                onClick={() => {
                  handleClick(option, index);
                }}
              >
                <i class={option.icon} aria-hidden="true"></i>
                <span>{option.text}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default NavHome;
