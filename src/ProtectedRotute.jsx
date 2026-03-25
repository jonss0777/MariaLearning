import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { useAuth } from './Providers/AuthProvider';
import youtubeIcon from '../src/assets/youtube.png';
import instagramIcon from '../src/assets/instagram.png';
import linkedinIcon from '../src/assets/linkedin.png';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log("Current User State:", user);
    console.log("Is Loading:", loading);

    if (loading) return <div>Loading...</div>;

    // If authorized, render the "Outlet" (the child routes)
    // If not, redirect to login
    return (<>

        {user
            ?
            <>
                (<div className="content">
                    <nav>
                        <Link style={{ margin: "0px", padding: "8px" }} to="/collection">Collection</Link> |{" "}
                        <Link style={{ margin: "0px", padding: "8px" }} to="/shop">Shop</Link> |{" "}

                        <Link style={{ margin: "0px", padding: "8px" }} to="/about">About</Link> |{" "}

                        <Link style={{ margin: "0px", padding: "8px" }} to="/login">Logout</Link>

                    </nav>
                    <Outlet />

                </div>
                <footer>
                    <p>Contact Information</p>
                    <div style={{display:"flex", flexDirection:"row", columnGap: "30px"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p>Email: johndoe@marialearning.com</p>
                    </div>
                    <div>
                        <div style={{ display: "flex", flexDirection: "row", columnGap: "30px" }}>
                            <img src={youtubeIcon} widht="50px" height="50px"></img>
                            <img src={instagramIcon} widht="50px" height="50px"></img>
                            <img src={linkedinIcon} widht="50x" height="50px"></img>
                        </div>
                    </div>
                    </div>
                    <p>Copyright &copy;  2026 Maria Learning</p>
                </footer>

                )
            </>
            : <Navigate to="/login" state={{ from: location }} replace />}

    </>
    )
};

export default ProtectedRoute;