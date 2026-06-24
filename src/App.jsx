import Main from "./components/Main";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Capital from "./pages/Capital";
import { Navigate, Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import AdminLayout from "./layout/AdminLayout";

function App() {


  return (
    <>
       <Routes>
          <Route path="/" element={<Navigate to={"/countries"} />} />
          
          <Route path="/" element={<RootLayout />}>

              <Route path="/countries">
                    <Route index element={<Main />} />
                    <Route path=":region" element={<Main />} />
              </Route>
              
              <Route path="/details">
                  <Route path=":ad" element={<Detail />} />
                  <Route path=":ad/:capital" element={<Capital />} />
              </Route>

              <Route path="*" element={<Error />} />
          </Route>

          <Route path="/admin">
              <Route index element={<AdminLayout />} />
          </Route>
       </Routes>

    </>
  )
}

export default App
