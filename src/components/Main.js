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
import AddChapter from "./Teacher/AddChapter";
import CourseChapters from "./Teacher/CourseChapers";
import Test from "./Teacher/test"
import TeacherDetail from "./TeacherDetail";

//list Pages
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeachers from "./PopularTeachers";
import CategoryCourses from "./CategoryCourses";






function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/details/:courseid" element={ <CourseDetail /> } />
        <Route path="/test" element={ <Test /> } />

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
        <Route path="/course-chapters" element={ <CourseChapters /> } />
        <Route path="/add-chapter/:course_id" element={ <AddChapter /> } />
        <Route path="/teacher-detail/:teacher_id" element={ <TeacherDetail /> } />


        {/* List Pages */}
        <Route path="/all-courses" element={ <AllCourses /> } />
        <Route path="/popular-courses" element={ <PopularCourses /> } />
        <Route path="/popular-teachers" element={ <PopularTeachers /> } />
        <Route path="/category/:category_slug" element={ <CategoryCourses /> } />
        
      

      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
