import "./styles.css";

export default function Query(props) {
  return (
    <a className="Query" href="#">
      {props.value}
    </a>
  );
}
