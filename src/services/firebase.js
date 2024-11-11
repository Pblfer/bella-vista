
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `AIzaSyBjCRehhvxm-yyvlGje5UWjtImOpfcM_Cs`,
  authDomain: "owwny-32341.firebaseapp.com",
  projectId: "owwny-32341",
  storageBucket: "owwny-32341.appspot.com",
  messagingSenderId: "99289476778",
  appId: "1:99289476778:web:2d52c28ce42dd92c402ad3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
}
