import "./card.css";

function Card(props) {
  console.log("here");
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
