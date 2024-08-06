import Main from "../pages/Main";
import Image from "next/image";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider>
      <div>
        <Main />
      </div>
    </MantineProvider>
  );
}
