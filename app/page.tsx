import { Header } from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to o-talk</h1>
        <p className="text-gray-500">A place to talk about anything you want</p>
      </main>
      <footer className="p-4 text-center text-gray-500">
        <p>© 2021 o-talk</p>
      </footer>
    </div>
  );
}
