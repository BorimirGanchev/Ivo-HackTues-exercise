import Image from "next/image";
import LinkButton from "./components/link_button";

export default function Home() {
  return (
    <>
    <LinkButton name="Signup" href="./signup" />
    <a className="ml-5">Login</a>
    <a className="ml-5">News</a>
    </>
  );
}
