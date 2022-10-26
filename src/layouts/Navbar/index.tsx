import { InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Navbar() {
  return (
    <header className="flex w-full justify-center  p-5">
      <nav className="flex w-full max-w-screen-xl items-center justify-between">
        <aside className="flex flex-col items-center justify-center">
          <h1 className="l text-2xl font-bold">Denner Nascimento</h1>
          <span className="text-center font-black uppercase tracking-[.45em]">Web Developer</span>
        </aside>
        <ul className="flex gap-8 text-sm font-bold uppercase">
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">About me</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <aside className="flex gap-2">
          <a href="/">
            <InstagramLogo size={32} color="#d8d4d4" />
          </a>
          <a href="/">
            <LinkedinLogo size={32} color="#d8d4d4" weight="fill" />
          </a>
        </aside>
      </nav>
    </header>
  );
}
