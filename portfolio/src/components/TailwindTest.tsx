import "../Tailwind.css";
import lmsLogo from "../assets/Project/Java/LMS/Screenshot 2024-05-06 at 20.11.20.png";

const TailwindTest = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <>
      <div className="tw-relative tw-h-full tw-w-full tw-bg-slate-950">
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:4px_24px]"></div>
        <div
          className="circular-container"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <img src={lmsLogo} className="bulletpoint" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindTest;
