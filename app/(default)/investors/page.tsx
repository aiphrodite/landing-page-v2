import { redirect } from "next/navigation";

export default function Home() {
  redirect("/investors/about");
}