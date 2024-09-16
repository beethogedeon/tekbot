import Link from 'next/link'

export default function OffcanvasMenu({ isOffcanvasMenu, handleOffcanvasMenu }: any) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvasMenu ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvasMenu}>
                    <button><i className="fas fa-times" /></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div className="offCanvas__side-info mb-30">

                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>contact@tekbot.io</p>
                        <p>mohamed.salifou@tekbot.io</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <ul className="list-wrap">
                        <li><Link href="https://bj.linkedin.com/company/tekbot-robotics" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="https://www.instagram.com/tekbot_robotics/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="https://www.youtube.com/@TEKBOTROBOTICS" target="_blank"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                </div>
            </div >
            <div className={`offCanvas__overly  ${isOffcanvasMenu ? "active" : ""}`} onClick={handleOffcanvasMenu} />
        </>
    )
}
