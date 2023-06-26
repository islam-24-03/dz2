import './App.css';
import { Route, Routes } from "react-router-dom";
import postList from "./ pages/postL/Postlist";
import deletePostCon from "./ pages/deletePost/deletePostCon";
import postList from "./ pages/ePostFo/editPostForm";
import CrPostForm from "./ pages/CrPostForm/CrPostForm";
import header from "./components/headers";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<PostList />} />
                <Route path='delete' element={<DeletePostConfirmation />} />
                <Route path='edit' element={<EditPostForm />} />
                <Route path='create' element={<CreatePostForm />} />
            </Routes>
        </div>
    );
}

export default App;
