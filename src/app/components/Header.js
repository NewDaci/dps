import styles from "../styles/header.module.css";
import Link from "next/link";

function Header() {
    return (
        <>
        <div className={styles['top-header']}>
		<div className="container">
			<div className="row">
				<div className="span3">
				</div>
				<div className="span9">
					<ul>
						<li><Link href='/pages/careers'>Career</Link></li>
						<li><Link href='/pages/transfer_certificate'>Transfer Certificate</Link></li>
					    <li><Link href='/pages/rte_notification'>RTE Notification 2019</Link></li>
						<li><Link href='/pages/blogs'>Blogs</Link></li>
						<li><Link href='/pages/internation_links'>International Links</Link></li>
						<li><Link href='/pages/student_login'>Student Login</Link></li>
						<li><Link href='/pages/staff_login'>Staff Login</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    </>
    )
}

export default Header;
