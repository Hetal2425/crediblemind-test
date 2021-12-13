import { makeStyles } from "@material-ui/styles";
import styles  from '../components/styles/NewsPageStyles'

export const useStyles = (commonStyles :any) => {
  return makeStyles((theme) => {
    return {  ...styles(theme),...commonStyles(theme) };
  })();
};

export default useStyles;