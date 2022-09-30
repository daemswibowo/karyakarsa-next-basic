export default function Card(props) {
  return (
    <div className="p-4 bg-slate-100 rounded-md">
      <h1 className={"text-lg text-red " + props.titleStyle}>{props.title}</h1>
      <h1 className="text-sm">{props.subtitle}</h1>
    </div>
  );
}
