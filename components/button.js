export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      data-testid="tombol"
      className="bg-blue-500 text-white  rounded-md px-4 py-2 active:bg-blue-600"
    >
      {props.children}
    </button>
  );
}
