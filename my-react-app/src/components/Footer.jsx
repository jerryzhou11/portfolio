
function Footer(){
    return(
        <div className="relative z-20 text-gray-600">
            <footer>
                <p>&copy; {new Date().getFullYear()} Jerry Zhou. Built with React + Vite</p>
                <p>Contact: jerryzhou2027@u.northwestern.edu</p>
            </footer>
        </div>
    );
}

export default Footer