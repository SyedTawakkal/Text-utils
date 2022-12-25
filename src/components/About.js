export default function About(props) {
  // console.log(props.mode + "Hello");
  // const [dark, setDarkMode] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // if (props.mode === "primary") {
  //   setDarkMode({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  // } else {
  //   setDarkMode({
  //     color: "white",
  //     backgroundColor: "black",
  //   });
  // }
  // function darkmodeEnable() {
  //   console.log("Dark Mode");
  //   if (dark.color === "black") {
  //     setDarkMode({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     changebtnText("Light");
  //   } else {
  //     setDarkMode({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     changebtnText("Dark");
  //   }
  // }
  return (
    <div
      className="container my-2"
      style={
        props.mode === "primary"
          ? { color: "black", backgroundColor: "white" }
          : { color: "white", backgroundColor: "black" }
      }
    >
      <div className="accordion my-4" id="accordionExample">
        <div
          className="accordion-item my-2"
          style={
            props.mode === "primary"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2
            className="accordion-header"
            id="headingOne"
            style={
              props.mode === "primary"
                ? { color: "black", backgroundColor: "white" }
                : { color: "white", backgroundColor: "black" }
            }
          >
            <button
              style={
                props.mode === "primary"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "black" }
              }
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyse Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item my-2"
          style={
            props.mode === "primary"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2
            className="accordion-header"
            id="headingTwo"
            style={
              props.mode === "primary"
                ? { color: "black", backgroundColor: "white" }
                : { color: "white", backgroundColor: "black" }
            }
          >
            <button
              style={
                props.mode === "primary"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "black" }
              }
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Check with different colors
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item my-2"
          style={
            props.mode === "primary"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2
            className="accordion-header"
            id="headingThree"
            style={
              props.mode === "primary"
                ? { color: "black", backgroundColor: "white" }
                : { color: "white", backgroundColor: "black" }
            }
          >
            <button
              style={
                props.mode === "primary"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "black" }
              }
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Remove excess spaces
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body my-3">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
