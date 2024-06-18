import CountUp from "react-countup";

const CardLayout = () => {
  return (
    <>
      <div
        className="container p-3 my-3 bg-dark text-white d-flex"
        style={{ borderRadius: "10px", minHeight: "300px", padding: "0px" }}
      >
        <div className="row w-100">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="row">
              <h1 className="">Projects</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                elementum turpis ac quam gravida, in scelerisque sapien
                scelerisque. Maecenas ut libero ac est faucibus feugiat. Nulla
                facilisi. Cras egestas elit at risus tincidunt, ac vestibulum
                odio consequat. Integer vehicula varius quam, sit amet gravida
                ex vulputate id. Curabitur accumsan nibh sed libero congue, nec
                egestas massa elementum. Sed id velit sit amet arcu venenatis
                interdum. Sed vel orci vitae sapien placerat dictum vel at est.
              </p>
              <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1 className="">Display 1</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLayout;
