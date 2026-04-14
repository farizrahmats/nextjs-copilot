import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 transition-opacity hover:opacity-75 dark:text-white"
        >
          ShopaShop
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="/lists"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            My Lists
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Contact
          </a>
          <a
            href="/styleguide"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Styleguide
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
