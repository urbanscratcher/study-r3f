import { chairColors, useCustomization } from "../contexts/CustomizationCtx";

function Configurator() {
  const { material, setMaterial, chairColor, setChairColor } =
    useCustomization();
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "knit" ? "item--active" : ""}`}
            onClick={() => setMaterial("knit")}
          >
            <div className="item__label">Knit</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Colors</div>
        <div className="configurator__section__values">
          {chairColors.map((el, idx) => {
            return (
              <div
                key={el.name}
                className={`item ${
                  el.color === chairColor.color ? "item--active" : ""
                }`}
                onClick={() => setChairColor(el)}
              >
                <div
                  className="item__dot"
                  style={{ backgroundColor: el.color }}
                ></div>
                <div className="item__label">{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
