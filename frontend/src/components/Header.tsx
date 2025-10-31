import LeftArrow from "../../public/LeftArrow.svg";
import RightArrow from "../../public/RightArrow.svg";
import Collapse from "../../public/Collapse.svg";
import Expand from "../../public/Expand.svg";
import Close from "../../public/Close.svg";

const buttonClass = "p-[8px] opacity-75";

const Header = () => {
  return (
    <header
      className={
        "w-full flex items-center justify-center outline outline-[#ffffff]/50 px-[8px] py-[6px] gap-[10px]"
      }
    >
      <section className={"flex justify-start grow gap-[10px]"}>
        <nav className={"flex"}>
          <button aria-label={"Перейти назад"}>
            <img src={LeftArrow} className={buttonClass} alt={"Назад"} />
          </button>
          <button aria-label="Перейти вперед">
            <img src={RightArrow} className={buttonClass} alt={"Вперед"} />
          </button>
        </nav>
      </section>
      <section className={"flex justify-center grow"}></section>
      <section className={"flex justify-end grow"}>
        <nav className={"flex"}>
          <button className={"p-[8px]"} aria-label="Свернуть">
            <img src={Collapse} className={buttonClass} alt="Свернуть" />
          </button>
          <button className={"p-[8px]"} aria-label="Развернуть">
            <img src={Expand} className={buttonClass} alt="Развернуть" />
          </button>
          <button className={"p-[8px]"} aria-label="Закраыть">
            <img src={Close} className={buttonClass} alt="Закрыть" />
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
