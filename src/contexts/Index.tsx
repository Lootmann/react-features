import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { UserContext } from "./UserContext";
import "../index.css";

export function App() {
  // get data from API
  const user = { name: "hoge", email: "hogehoge@gmail.com" };

  return (
    <div className="flex flex-col gap-6 h-screen bg-slate-700 text-slate-200 text-xl p-4">
      <UserContext.Provider value={user}>
        <Header />
        <MainContent />
      </UserContext.Provider>
    </div>
  );
}
