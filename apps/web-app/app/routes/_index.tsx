import type { MetaFunction } from "@remix-run/node";
import { Button } from "@ui/components/general/button";
import { Input } from "@ui/components/general/input";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4 flex flex-col gap-2 items-start">
      <h1 className="">Welcome to Remix</h1>
      <ul className="bg-blue-200 w-full">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Input type="text" />
      <Button variant="destructive">削除</Button>
    </div>
  );
}
