import { Routes as Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CourseDetail from "./CourseDetail";
import About from './About';
import Footer from './Footer';
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavouriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileUpdate from "./User/ProfileUpdate";
import ChangePassword from "./User/ChangePassword";


function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/details/:course_id" element={ <CourseDetail /> } />
        <Route path="/user-login" element={ <Login /> } />
        <Route path="/user-register" element={ <Register /> } />
        <Route path="/user-dashboard" element={ <Dashboard /> } />
        <Route path="/my-courses" element={ <MyCourses /> } />
        <Route path="/favourite-courses" element={ <FavouriteCourses /> } />
        <Route path="/recommended-courses" element={ <RecommendedCourses /> } />
        <Route path="/profile-update" element={ <ProfileUpdate /> } />
        <Route path="/change-password" element={ <ChangePassword /> } />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
