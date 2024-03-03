import './blog.css'
import img from '../img/smimg.avif'
import Rev from './Rev.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const Blog = () => {


    useEffect(() => {
        AOS.init();
    }, [])


    const arr = [{
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }, {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }, {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }, {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, ",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }, {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, .",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }, {
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo.",
        writer: "Gladis Lennon",
        designation: "Head of SEO"
    }
    ]

    return (
        <>
            <section className="sec3 flex">
                <div className="gr flex gap-8 " data-aos="fade-right">

                    {
                        arr.map((elem, idx) => {
                            return (
                                <Rev rev={elem.review} auther={elem.writer}
                                    posi={elem.designation}
                                    key={idx}
                                />
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}
export default Blog;