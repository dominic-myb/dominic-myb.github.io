import { cn } from "@/utils/cn";

function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex h-16 w-full max-w-5xl items-center justify-between rounded-full px-6",
          "bg-white/70 backdrop-blur-md shadow-lg border border-black/8",
          "dark:bg-zinc-900/40 dark:backdrop-blur-md dark:border-white/10 dark:shadow-2xl",
        )}
      >
        <div className="flex items-center space-x-4">
          <span className="font-bold tracking-tight max-sm:text-base text-lg">
            Dominic Esguerra<span className="text-red-500">.</span>
          </span>
          <div className="h-5 w-px bg-white/20" />
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="#projects"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              href="#tools"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Tools
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contacts
            </a>
          </li>
        </ul>

        <div>
          <button
            type="button"
            className="bg-[#D64933] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-md shadow-red-900/20"
          >
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  );
}

export { Header };
