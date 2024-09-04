import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="service-area-2 pt-120 pb-120">
                        <div className="container">
                            <div className="row gx-30 gy-30">
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">01</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">UI/UX Design</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">02</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">Web Design</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">03</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">Website Development</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">04</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">Illustration Modelling</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-3.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">05</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">Branding</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="service-card style2">
                                        <div className="service-card-img">
                                            <img src="/assets/img/service/1-2.jpg" alt="img" />
                                        </div>
                                        <h5 className="service-card-number">06</h5>
                                        <h4 className="service-card-title"><Link href="/service-details">Digital Marketing</Link></h4>
                                        <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                        <Link href="/service-details" className="link-btn">
                                            Learn More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Service Section ========*/}
                    {/*==============================
    Skill Area 01
    ==============================*/}
                    <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                        <div className="skill-area-bg-shape1 square-shape-wrap">
                            <div className="square-shape1" />
                            <div className="square-shape3" />
                            <div className="square-shape4" />
                        </div>
                        <div className="container">
                            <div className="row gy-40 align-items-center">
                                <div className="col-xl-5">
                                    <div className="skill-thumb-box1 wow img-custom-anim-left">
                                        <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                        <div className="square-shape-wrap">
                                            <div className="square-shape1" />
                                            <div className="square-shape2" />
                                            <div className="square-shape3" />
                                            <div className="square-shape4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="skill-wrap1">
                                        <div className="section__title mb-50 wow img-custom-anim-left">
                                            <h2 className="title text-white">DEVOTED TO CREATING QUALITY DESIGN EXPERIENCES</h2>
                                            <p className="sec-text text-white">We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. We believe in crafting campaigns that not only drive traffic but also foster engagement and conversions.</p>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">BRANDING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '90%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">90</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '70%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">70</span>%</div>
                                            </div>
                                        </div>
                                        <div className="skill-feature">
                                            <h3 className="skill-feature_title">MARKETING</h3>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '69%' }}>
                                                </div>
                                                <div className="progress-value"><span className="counter-number">69</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Skill Section ========*/}
                    {/*==============================
    FAQ Area 2
    ==============================*/}
                    <section className="faq-area-2 pt-120 pb-120 gray-bg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}