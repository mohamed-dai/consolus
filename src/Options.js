import "./styles.css";

export default function Options(props) {
  const listItems = props.value.map((option, index) => (
    <button key={index} className="Optionx">
      {option}
    </button>
  ));
  return <span className="Options">{listItems}</span>;
}
