import React from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
      <header className="py-6">
        <h1 className="text-center text-4xl font-extrabold text-blue-800">
          Todo App
        </h1>
      </header>
      <main className="flex justify-center">
        <div className="w-full max-w-4xl">
          <HomePage />
        </div>
      </main>
    </div>
  );
};

export default App;
