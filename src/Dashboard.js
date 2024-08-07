import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./Footer";
function Dashboard() {
  return (
    <div className="abc">
    <div className="dashboard">
      <Header/>
      <Carousel>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/54/716/901/quote-motivational-books-dalai-lama-wallpaper-preview.jpg" />
                    <p className="legend">WELCOME TO XENONSTACK LIBRARY</p>
                </div>
                <div>
                    <img src="https://quotefancy.com/media/wallpaper/3840x2160/7678711-Joseph-Fink-Quote-The-library-will-be-under-a-sort-of-renovation.jpg" />
                    <p className="legend">HAVE A CUP OF COFFEE</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" />
                    <p className="legend">LETS START WITH THE BOOK</p>
                </div>
            </Carousel>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;
