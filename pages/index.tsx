import { useAuth } from "../context/auth";
import useStyle from "../Hooks/useStyle";
import styles from "../components/styles/indexStyle";
import { Container } from "@material-ui/core";
import News from './news'

const Home = () => {
  const { login } = useAuth();
  let classes: any | null = useStyle(styles);
  return (
    <>
    <News/>
    </>
    // <div className={classes.MainDiv}>
      /* <Container fixed>
        <div className={classes.MainCard}>
          <div className={classes.logoMain}>
            <img
              src="http://images.ctfassets.net/x0aigtiomhhn/29zoE1UEPsDLMZx2ZdZXoD/91e3794c7801baf81f3c7acc12ba9860/Logo.svg"
              alt="logo"
            />
          </div>
          <div className={classes.Title}>
            <h1>CredibleMind in the News</h1>
          </div>
          <div className={classes.SignIn}>
            <button onClick={login}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon-svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with Google</b>
              </p>
            </button>
          </div>
        </div>
      </Container> */
    // </div>
  );
};
export default Home;
