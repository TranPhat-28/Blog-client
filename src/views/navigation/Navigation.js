import ReactLoading from 'react-loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import NotFound from '../pages/NotFound';
import { Suspense } from 'react';
import AllPosts from '../pages/AllPosts';
import Login from '../pages/Login';
import NewPost from '../pages/NewPost';
import PostDetail from '../pages/PostDetail';

const Navigation = () => {
    return (
        <main>
            <Suspense fallback={<ReactLoading type='spin' color="black" />}>
                <BrowserRouter>

                    <Navbar />
                    <Routes>
                        <Route path="/" element={<AllPosts />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/newPost" element={<NewPost />} />
                        <Route path="/post/:id" element={<PostDetail />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </main>
    );

}

export default Navigation;