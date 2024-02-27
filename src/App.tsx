import "./App.css";
import { Input } from "./components/form/Input/input";
import { Button } from "./components/ui/Button/button";
import { Card } from "./components/ui/Card/card";
import Typography from "./components/ui/Typography/typography";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-12 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faChalkboardUser}
          className="text-zinc-50 text-5xl"
        />
        <Typography variant="title" className="text-zinc-50">
          primeiros passos
        </Typography>
      </div>
      <Card className="w-96 p-4 text-center">
        <Typography variant="title2">Seja bem-vinda</Typography>
        <div className="mt-4 flex flex-col gap-2">
          <Input placeholder="Digite seu e-mail" type="email" />
          <Input placeholder="Digite sua senha" type="password" />
        </div>
        <Button className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600">
          Acessar
        </Button>
      </Card>
    </div>
  );
}

export default App;
