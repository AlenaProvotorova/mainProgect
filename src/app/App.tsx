import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classnames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import AppRouter from "./providers/router/AppRouter";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>swith theme</button>
      <Link to={'/'}>главная</Link>
      <Link to={'/about'}>о сайте</Link>
      <AppRouter />
    </div>
  )
}
 
export default App