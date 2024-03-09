import Image from "next/image";
import LinkButton from "./components/link_button";

export default function Home() {
  return (
    <>
    <LinkButton name="Signup" href="./signup" />
    <LinkButton name="Login" href="./login" />
    <LinkButton name="News" href="./news" />
    </>
  );
}
