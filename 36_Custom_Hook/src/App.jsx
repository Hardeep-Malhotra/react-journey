import useOnlineStatus from "./useOnlineStatus";

const App = () => {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <h1>Your Internet :{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
    </div>
  );
};

export default App;
