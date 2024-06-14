import Header from "./_componenets/Header";
import Hero from "./_componenets/Hero";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <SignInButton/>
    </div>
  );
}
