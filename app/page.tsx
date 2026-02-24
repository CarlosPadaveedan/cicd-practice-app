export default function Home() {
  const version = "1.0.0";
  const time = new Date().toLocaleString();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        🚀 CI/CD Practice App
      </h1>

      <p className="text-xl mb-2">
        Version: {version}
      </p>

      <p className="text-lg mb-2">
        Deployed at: {time}
      </p>

      <p className="text-green-400 mt-4">
        If you see this updated after push → CI/CD working!
      </p>
    </main>
  );
}