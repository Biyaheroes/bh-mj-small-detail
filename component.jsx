
"use strict";

import React from "react";
import ReactDOM from "react-dom";

import SmallDetail from "./small-detail.js";

ReactDOM.render( 
	<SmallDetail
		title="Hello World" 
		value="This is a normal value" 
		padding="20px 20px 20px 20px">
	</SmallDetail>,
	document.getElementById( "root" ) 
);
