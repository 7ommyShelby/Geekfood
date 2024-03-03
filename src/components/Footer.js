import './footer.css'
import img from '../img/ft.png'


const footer = () => {
    return (
        <>
            <section className="footer flex flex-col">

                <div className="flex items-center flex-col gap-8">
                <img src={img} alt="" />
                <div className="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
                </div>
                <ul className="flex gap-16">
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
                <ul className="icons flex gap-16">
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-brands fa-dribbble"></i></li>
                </ul>
                </div>

            </section>
        </>
    )
}
export default footer;