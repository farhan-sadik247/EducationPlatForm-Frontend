import { Routes as Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Header';
import Home from './Home';
import CourseDetail from "./CourseDetail";
import About from './About';
import Footer from './Footer';
import SearchBox from "./SearchBox";
import ProfilePicture from "./ProfilePicture";



//Student Pannel
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavouriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileUpdate from "./User/ProfileUpdate";
import ChangePassword from "./User/ChangePassword";
import StudentDetails from "./StudentDetails";
import UserAssignment from "./User/UserAssignment";
import StdCourseChapters from "./User/StdCourseChapers";
import UserForgotPassword from "./User/UserForgotPassword";
import UserForgotChangePassword from "./User/UserForgotChangePassword";

//Teacher Pannel
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherCourses from "./Teacher/TeacherCourses";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";
import TeacherProfileUpdate from "./Teacher/TeacherProfileUpdate";
import AddCourse from "./Teacher/AddCourse";
import EditCourse from "./Teacher/EditCourse";
import AddChapter from "./Teacher/AddChapter";
import CourseChapters from "./Teacher/CourseChapers";
import EditChapter from "./Teacher/EditChapter";
import CourseCategory from "./Teacher/CourseCategory";
import CategoryDetails from "./Teacher/CategoryDetails";
import TeacherSkillCourse from "./Teacher/TeacherSkillCourse";
import Test from "./Teacher/test"
import TeacherDetail from "./TeacherDetail";
import EnrolledStudent from "./Teacher/EnrolledStudent";
import AddAssignment from "./Teacher/AddAssignment";
import EditAssignment from "./Teacher/EditAssignment";
import ShowAssignments from "./Teacher/ShowAssignments";
import TeacherForgotChangePassword from "./Teacher/TeacherForgotChangePassword";
import ForgotPassword from "./Teacher/TeacherForgotPassword";



//list Pages
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeachers from "./PopularTeachers";
// import CategoryCourses from "./CategoryCourses";
import AfterSearchPage from "./AfterSearchPage";
import SearchPageSidebar from "./SearchPageSidebar";
import AddToCart from "./AddToCart";

import PayApp from "./Payment/PayApp";










function Main() {

  const [user, setUser] = useState("")
  const [search, setSearch] = useState("")
  const [type, getType] = useState(false)

  const getUser = async () => {
    try {
      let res = await fetch("/auth/getuser");
      let data = await res.json();
      setUser(data)
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  useEffect(
    () => {getUser()}, []
  )

  return (
    <div className="App">
      <Header user={user} setUser = {setUser} search = {search} setSearch= {setSearch}/>
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/details/:courseid" element={ <CourseDetail user = {user}/> } />
        <Route path="/test" element={ <Test /> } />
        <Route path="/searchbox" element={ <SearchBox /> } />
        <Route path="/profile-picture" element={ <ProfilePicture /> } />

        
        
        
        {/* User or Student */}
        <Route path="/user-login" element={ <Login user={setUser}/> } />    
        <Route path="/user-register" element={ <Register /> } />
        <Route path="/user-dashboard" element={ <Dashboard /> } />
        <Route path="/my-courses" element={ <MyCourses /> } />
        <Route path="/favourite-courses" element={ <FavouriteCourses /> } />
        <Route path="/recommended-courses" element={ <RecommendedCourses /> } />
        <Route path="/profile-update" element={ <ProfileUpdate /> } />
        <Route path="/change-password" element={ <ChangePassword /> } />
        <Route path="/user-details" element={ <StudentDetails /> } />
        <Route path="/user-assignment/:student_id" element={ <UserAssignment /> } />
        <Route path="/std-course-chapters/:chapter_id" element={ <StdCourseChapters /> } />
        <Route path="/user-forgot-password/:student_id" element={ <UserForgotPassword /> } />
        <Route path="/user-forgot-change-password/:student_id" element={ <UserForgotChangePassword /> } />
        

        {/* Teacher */}
        <Route path="/teacher-login" element={ <TeacherLogin user ={setUser}/> } />
        <Route path="/teacher-register" element={ <TeacherRegister /> } />
        <Route path="/teacher-dashboard" element={ <TeacherDashboard /> } />
        <Route path="/teacher-courses" element={ <TeacherCourses /> } />
        <Route path="/teacher-change-password" element={ <TeacherChangePassword /> } />
        <Route path="/teacher-profile-update" element={ <TeacherProfileUpdate /> } />
        <Route path="/add-courses" element={ <AddCourse /> } />
        <Route path="/edit-courses" element={ <EditCourse /> } />
        <Route path="/course-chapters/:chapter_id" element={ <CourseChapters /> } />
        <Route path="/edit-chapters/:chapter_id" element={ <EditChapter /> } />
        <Route path="/course-category" element={ <CourseCategory /> } />
        <Route path="/category-details/:category_id" element={ <CategoryDetails /> } />
        <Route path="/teacher-skill_course/:skill_name/:teacher_id" element={ <TeacherSkillCourse /> } />
        <Route path="/add-chapter/:course_id" element={ <AddChapter /> } />
        <Route path="/teacher-detail/:teacher_id" element={ <TeacherDetail /> } />
        <Route path="/enrolled-student" element={ <EnrolledStudent/> } />
        <Route path="/add-assignment/:teacher_id" element={ <AddAssignment/> } />
        <Route path="/edit-assignment/:user_id/:teacher_id" element={ <EditAssignment/> } />
        <Route path="/show-assignment/:user_id/:teacher_id" element={ <ShowAssignments/> } />
        <Route path="/teacher-forgot-password/:teacher_id" element={ <ForgotPassword/> } />
        <Route path="/teacher-forgot-change-password/:teacher_id" element={ <TeacherForgotChangePassword/> } />


        {/* List Pages */}
        <Route path="/all-courses" element={ <AllCourses /> } />
        <Route path="/popular-courses" element={ <PopularCourses /> } />
        <Route path="/popular-teachers" element={ <PopularTeachers /> } />
        <Route path="/aftersearchpage" element={ <AfterSearchPage search = {search}/> } />
        <Route path="/searchpage-sidebar" element={ <SearchPageSidebar/> } />
        <Route path="/add-to-cart" element={ <AddToCart/> } />
        {/* <Route path="/category/:category_slug" element={ <CategoryCourses /> } /> */}
        
        <Route path="/payment-gateway" element={ <PayApp/> } />

      </Switch>
      <Footer />
    </div>
  );
}


export default Main;
