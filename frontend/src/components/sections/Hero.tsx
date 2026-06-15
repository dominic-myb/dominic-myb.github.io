function Hero() {
  return (
    <section id="hero" className="bg-linear-to-b from-green-200 via-emerald-400 to-primary">
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-4">
        <h2 className="text-2xl italic tracking-wider">Hello World!</h2>
        <h1 className="text-7xl font-bold tracking-tight text-neutral-dark">
          Dominic Esguerra
        </h1>
        <p className="text-2xl tracking-wide">Junior Software Developer</p>
      </div>
    </section>
  );
}

export { Hero };
