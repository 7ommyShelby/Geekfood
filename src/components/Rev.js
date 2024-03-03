import img from '../img/smimg.avif'
const Rev = (props) => {





    return (

        <div className="box ">
            <div className="card bg-slate-200">
                <p className="text-base">{props.rev}</p>
            </div>
            <div className="auth flex gap-4">
                <img src={img} alt="" className="rounded-full w-12 h-12" />
                <span>
                    <h6>{props.auther}</h6>
                    <p>{props.posi}</p>
                </span>
            </div>
        </div>

    )
}

export default Rev;