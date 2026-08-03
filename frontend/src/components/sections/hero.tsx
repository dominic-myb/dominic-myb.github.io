import BlurText from "@/components/ui/blurtext";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]"
    >
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-4">
        <BlurText
          text="Hello World! I am"
          className="text-2xl italic tracking-wider text-current/90"
          delay={300}
        />
        <h1 className="text-7xl font-bold tracking-tight">Dominic Esguerra</h1>
        <p className="text-xl tracking-wide text-current/80">
          Junior Software Developer
        </p>
      </div>
    </section>
  );
}

export { Hero };
