import { classNames } from "shared/lib/classnames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import AppRouter from "./providers/router/AppRouter";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>swith theme</button>
      <AppRouter />
    </div>
  )
}
 
export default App