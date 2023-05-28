import MyMenu from "@ui/Menu";
import { Button } from "@ui/Button";
import Nav from "@ui/Nav";
import { cx } from "class-variance-authority";

const intents = [undefined, "primary", "secondary", "danger"] as const;
const sizes = [undefined, "medium", "small"] as const;

export default function Home() {
  return (
    <section className="flex-center w-full flex-col bg-green-400">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
    </section>
  );
}
