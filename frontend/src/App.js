import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import './App.css';
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import Upload from './Dashboard/Upload';
import Files from './Dashboard/Files';
import FilePreview from './Dashboard/FilePreview';
 

function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        {/* // Login Route */}
        <Route path="/Login" element={<Login/>}/>

        {/* // Register or Signup Route */}
        <Route path="/Signup" element={<SignUp/>}/>
        {/* // Login Router */}
        <Route path="/Dashboard" element={<Dashboard/>}/>
        {/* // Login Router */}
        <Route path="/Login" element={<Login/>}/>
        {/* // Upload Route */}
        <Route path="/Upload" element={<Upload/>}/>
        {/* // Files Route */}
        <Route path="/Files" element={<Files/>}/>
        {/* // Files Preview route */}
        <Route path="/filePreview/:fileid" element={<FilePreview/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
