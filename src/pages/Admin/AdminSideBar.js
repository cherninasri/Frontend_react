import React from 'react'
import { Link } from 'react-router-dom'


const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        All Orders                    </div>
                </Link>
                <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        All Products                  </div>
                </Link>
               

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Category 
                    </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                         Add Product
                    </div>
                </Link>
                <Link to="/admin/AllUsers" style={{ textDecoration: 'none' }}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     All Users
                </div>
            </Link>
            <Link to="/admin/AllCategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                 All Category
            </div>
        </Link>
        <Link to="/admin/allClaim" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                  contacts or claims
            </div>
        </Link>


            </div>
        </div>
    )
}

export default AdminSideBar
