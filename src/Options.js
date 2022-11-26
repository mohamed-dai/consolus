import "./styles.css";

export default function Options(props) {
  const listItems = props.value.map((option, index) => (
    <span key={index} className="Option aa">
      {option}
    </span>
  ));
  return <span className="Options">{listItems}</span>;
}
