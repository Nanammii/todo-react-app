import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import ProjectPage from "../../pages/project-page/project-page";
import {AppRoute} from "../../const";
import ModalTask from "../modal-task/modal-task";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={AppRoute.Root} element={ <MainPage /> }></Route>
        <Route path={`${AppRoute.Project}/:projectId`} element={ <ProjectPage /> }></Route>
        <Route path={AppRoute.Modal} element={ <ModalTask /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
