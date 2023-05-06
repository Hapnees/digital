import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import BlogsPage from './pages/BlogsPage/BlogsPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PostPage from './pages/PostPage/PostPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SpecificBlogsPage from './pages/SpecificBlogsPage/SpecificBlogsPage'
import LectoriumPage from './pages/LectoriumPage/LectoriumPage'

function App() {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/category/:category/:id' element={<PostPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/blogs/:username' element={<SpecificBlogsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/lectorium' element={<LectoriumPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
