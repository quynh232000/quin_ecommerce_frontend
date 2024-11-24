import { Routes, Route } from "react-router-dom";
import Middleware from "./routes/Middleware";
import { routesConfig } from "./routes/routesConfig";
import "./components/GlobalStyles/GlobalStyles.css";
import "./components/GlobalStyles/custom.css";
import "./i18n/i18n";

import { useEffect, useState } from "react";
import { AppProvider } from "./routes/provider/AppProvider";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Lưu trạng thái vào localStorage và áp dụng theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <main className="dark:bg-red-800 bg-white h-[100vh]">
      <AppProvider>
        <Routes>
          {routesConfig.map(
            ({ path, element, children, middleware }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  middleware ? (
                    <Middleware middleware={middleware}>{element}</Middleware>
                  ) : (
                    element
                  )
                }
              >
                {children &&
                  children.map((child, childIndex) => (
                    <Route
                      key={childIndex}
                      path={child.path}
                      element={
                        child.middleware ? (
                          <Middleware middleware={child.middleware}>
                            {child.element}
                          </Middleware>
                        ) : (
                          child.element
                        )
                      }
                    />
                  ))}
              </Route>
            )
          )}
        </Routes>
      </AppProvider>

      <button onClick={toggleDarkMode}>dark mode</button>
    </main>
  );
};

export default App;