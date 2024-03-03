import './main.css'
import Button from './Button.js'
import photo from '../img/house.avif'
import img from '../img/smimg.avif'
import Blog from './Blogs.js'
import Footer  from './Footer.js'

const main = () => {

    return (
        <>
            <div className="back flex bg-center justify-start items-center">
                <div className="cover flex flex-col gap-6">
                    <div className="head flex flex-col flex-wrap">
                        <h1 className="text-5xl font-black">Let us find your</h1>
                        <h1 className="text-5xl text-red-800 font-black">Forever Food.</h1>
                    </div>

                    <div>
                        <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    </div>

                    <div className="btn flex gap-4 ">
                        <Button fontcol="white" bgcol="tomato" brds="5px" pd="10px 40px" fw="600">Search Now</Button>

                        <Button fontcol="red" bgcol="white" brds="5px" pd="10px 40px" fw="600">Know More</Button>
                    </div>
                </div>
            </div>

            <section className="sec2 flex ">

                <div className="photo flex items-center w-[95vw]">

                    <div className="left h-[90vh] items-center">
                        <img src={photo} alt="" className=" w-full h-full object-cover translate-x-11 z-20" />
                    </div>

                    <div className="right flex justify-start items-center bg-slate-100 w-1/2 h-screen flex-wrap">

                        <div className="con flex flex-col gap-8 flex-wrap">
                            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                            <Button className="flex-none" fontcol="white" bgcol="blue" brds="5px" pd="10px 40px" fw="600">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Blog/>
            <Footer/>


        </>
    )
}
export default main