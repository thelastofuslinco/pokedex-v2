import { useState } from "react";
import { Header } from "../../components/Header";
import { Toggle } from "../../components/Toggle";
import { Input } from "../../components/Input";

export const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <Header>
        <Toggle
          value={toggle}
          onClick={() => setToggle(!toggle)}
          firstContent={"sidasdasdasm"}
          secondContent={"não"}
        />
        <Input
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
      </Header>
    </div>
  );
};
