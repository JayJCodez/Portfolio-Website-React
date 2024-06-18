interface Props {
  children: String;
  color: String;
}

const Button = ({ children, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
