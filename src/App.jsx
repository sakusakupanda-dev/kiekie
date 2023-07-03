import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import BlankPage from "./BlankPage";
import LoginPage from "./LoginPage";
import UserEdit from "./UserEdit";
import MyPage from "./MyPage";
import TodoPage from "./TodoPage";
import MainLayout from "./Layout";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/blank" element={<BlankPage />} />
        <Route path="/user_edit" element={<UserEdit />} />
        <Route path="/my_page" element={<MyPage />} />
        <Route path="/todo_page" element={<TodoPage />} />
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
