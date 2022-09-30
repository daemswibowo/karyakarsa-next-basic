import Title from "../components/title";
import Card from "../components/card";
import LoginForm from "../components/loginForm";
import { data } from "autoprefixer";

export default function AboutPage() {
  function handleSubmit(data) {
    alert("email: " + data.email);
  }
  return (
    <div>
      <Title>Ini halaman about</Title>
      <Card
        title="Karyakarsa"
        titleStyle="text-xl"
        subtitle="platform apresiasi kreator"
      />

      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
