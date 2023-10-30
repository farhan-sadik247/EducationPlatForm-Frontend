import { Routes as Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CourseDetail from "./CourseDetail";
import About from './About';
import Footer from './Footer';

//Student Pannel
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavouriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileUpdate from "./User/ProfileUpdate";
import ChangePassword from "./User/ChangePassword";

//Teacher Pannel
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherCourses from "./Teacher/TeacherCourses";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";
import TeacherProfileUpdate from "./Teacher/TeacherProfileUpdate";
import AddCourse from "./Teacher/AddCourse";




function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/details/:course_id" element={ <CourseDetail /> } />

        {/* User or Student */}
        <Route path="/user-login" element={ <Login /> } />
        <Route path="/user-register" element={ <Register /> } />
        <Route path="/user-dashboard" element={ <Dashboard /> } />
        <Route path="/my-courses" element={ <MyCourses /> } />
        <Route path="/favourite-courses" element={ <FavouriteCourses /> } />
        <Route path="/recommended-courses" element={ <RecommendedCourses /> } />
        <Route path="/profile-update" element={ <ProfileUpdate /> } />
        <Route path="/change-password" element={ <ChangePassword /> } />

        {/* Teacher */}
        <Route path="/teacher-login" element={ <TeacherLogin /> } />
        <Route path="/teacher-register" element={ <TeacherRegister /> } />
        <Route path="/teacher-dashboard" element={ <TeacherDashboard /> } />
        <Route path="/:teacher_id/teacher-courses" element={ <TeacherCourses /> } />
        <Route path="/teacher-change-password" element={ <TeacherChangePassword /> } />
        <Route path="/teacher-profile-update" element={ <TeacherProfileUpdate /> } />
        <Route path="/add-courses" element={ <AddCourse /> } />

      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
