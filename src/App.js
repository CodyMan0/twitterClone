
import { useRecoilValue } from "recoil";
import LoggedInRouter from "./routers/LoggedInRouter";
import LoggedOutRouter from "./routers/LoggedOutRouter";
import { authState } from "./stores/authState";
import {auth} from "./config/firebaseConfig";



function App() {
  
  const { isLoggedIn } = useRecoilValue(authState)


  return (
    <div >
      {isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
    </div>
  );
}

 export default App;
