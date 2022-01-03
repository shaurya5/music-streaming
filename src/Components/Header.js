import { useAuth0, Auth0Provider } from "@auth0/auth0-react";

const Header = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header;