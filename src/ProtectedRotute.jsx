import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { useAuth } from './Providers/AuthProvider';

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
            (<div className="content">
                <nav>
                    <Link style={{ margin: "5px", padding: "8px" }} to="/collection">Collection</Link>
                    <Link style={{ margin: "5px", padding: "8px" }} to="/shop">Shop</Link> |{" "}

                    <Link style={{ margin: "5px", padding: "8px" }} to="/about">About</Link> |{" "}
                    
                    <Link style={{backgroundColor:"rgb(183, 80, 80)", position: "fixed", right: 0, top: 0, padding: "10px", color: "white"}} to="/login">Logout</Link>
                
                </nav>
                <Outlet />
                <footer style={{ display: "flex", alignItems: "center", flexDirection: "column", position: "relative", bottom: 0, width: "100%", padding: "10px", margin: "0px" }}>
                    <p>Contach Information</p>
                    <p>johndoe@marialearning.com</p>
                    <p>Socials</p>
                    <div style={{ display: "flex", flexDirection: "row", rowGap: "30px" }}>
                        <p style={{ padding: "0px", margin: "0px 0px 0px 0px" }}>icon</p>
                        <p style={{ padding: "0px", margin: "0px 10px 0px 10px" }}>icon</p>
                        <p style={{ padding: "0px", margin: "0px 10px 0px 10px" }}>icon</p>
                    </div>
                </footer>
            </div>
            )
            : <Navigate to="/login" state={{ from: location }} replace />}

    </>
    )
};

export default ProtectedRoute;