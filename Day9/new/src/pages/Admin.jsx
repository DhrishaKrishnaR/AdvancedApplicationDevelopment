import React from 'react';
import '../assets/css/Admin.css'; // Import your CSS file
import ElevateAppBar from './NavBar';

function Admin() {
    return (
        <div className="container">
            
            <div className="navigation">
                <ul>
                    <li>
                        <a href="/">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <span className="title3">EventEuphoria.</span>
                        </a>
                    </li>
                    <li>
                    <a href="/admin">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title3">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/Edittheme">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title3">Edit Themes</span>
                    </a>
                </li>
                <li>
                    <a href="/createtheme">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title3">Create Themes</span>
                    </a>
                </li>
                <li>
                    <a href="/userinfo">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title3">User Info</span>
                    </a>
                </li>

                
             
              
                </ul>
            </div>

            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    
                </div>

                <div className="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Bookings</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName">Enquiries</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">₹7,842</div>
                        <div class="cardName">Earning</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
                </div>

                <div className="details">
                    <div className="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Under the Sea Adventure</td>
                                <td>₹1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Booked</span></td>
                            </tr>

                            <tr>
                                <td>Superhero Spectacular</td>
                                <td>₹1100</td>
                                <td>Payment pending</td>
                                <td><span class="status pending">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Enchanted Garden</td>
                                <td>₹1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Booked</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>₹1620</td>
                                <td>Payment pending</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Hollywood Red Carpet Affair</td>
                                <td>₹12000</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Masquerade Ball</td>
                                <td>₹11000</td>
                                <td>Payment pending</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            

                            
                        </tbody>
                    </table>
                
                    </div>

                    <div className="recentCustomers">
                    <div class="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                            </td>
                            
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                  
                    </table>
            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
