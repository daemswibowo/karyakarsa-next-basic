import { useState } from "react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (props.onSubmit) {
      props.onSubmit({
        email,
        password,
      });
    }
  }

  return (
    <form onSubmit={() => handleSubmit()}>
      {email}
      <br />
      <input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email kamu"
      />
      <input
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password kamu"
      />
      <button>Login</button>
    </form>
  );
}
