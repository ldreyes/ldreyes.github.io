import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-middle items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <img src="/home/construction.png" style={{ width: "25vh", height: "auto" }} />
        <div className="uppercase text-lg text-indigo-950">
          Under Construction
        </div>
        <div className="text-sm text-zinc-400">
          New website coming soon!
        </div>
      </div>
    </main>
  );
}
