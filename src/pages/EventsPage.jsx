import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const EventsPage = ({header, cover, title, link, body}) => {
    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh]">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl"> IEC Materials / Gallery </strong>
                </div>
                {header}
                <div className="mt-5 flex">
                    <div className="w-25">
                        <div className="mx-5 mobile-lg:max-w-[100px] mobile-lg:max-h-[100px] mobile-lg:py-8 mobile-lg:px-3 mobile-lg:text-xl w-[220px] h-[220px] px-5 py-[80px] text-3xl text-center rounded-full border border-violet border-[5px]">
                            {cover}
                        </div>
                    </div>
                    <div className="w-75">
                        <div className="mobile-lg:text-2xl text-8xl mobile-lg:p-1 px-10 py-5">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end text-xl mobile-lg:text-lg mobile-lg:mt-5">
                    <Link className="text-decoration-none text-black bg-haze hover:bg-violet hover:text-white hover:shadow-2xl mobile-lg:p-2 px-5 py-2" to={link}>
                        Proceed to Gallery
                        <i className="fas fa-images p-1 ms-1"></i>
                    </Link>
                </div>
                {body}
            </div>
        </Layout>
    )
}

export default EventsPage