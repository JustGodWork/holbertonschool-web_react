import { newContext } from "../Context/context";
import React, { useContext } from "react";

import { getCurrentYear, getFooterCopy } from "../utils/utils"

function Footer() {
	const { user } = useContext(newContext);

	return (
		<div className="App-footer">
			<p>
				Copyright {getCurrentYear()} - {getFooterCopy(false)}
			</p>
			{user.isLoggedIn && (
				<p>
					<a href='#contact'>Contact us</a>
				</p>
			)}
		</div>
	);
}

export default Footer;