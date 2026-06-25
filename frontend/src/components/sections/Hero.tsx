function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px]">
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-4">
        <h2 className="text-2xl italic tracking-wider">Hello World!</h2>
        <h1 className="text-7xl font-bold tracking-tight">
          Dominic Esguerra
        </h1>
        <p className="text-2xl tracking-wide">Junior Software Developer</p>
      </div>
    </section>
  );
}

export { Hero };
