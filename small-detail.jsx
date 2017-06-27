"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "detail",
			"path": "detail/detail.jsx",
			"file": "detail.jsx",
			"module": "detail",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-small-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML SmallDetail Component.
	@end-module-documentation

	@include:
		{
			"MJMLElement": "mjml-core",
			"React": "react",
			"Component": "react.Component",
			"Column": "mjml-column",
			"Table": "mjml-table",
			"wichevr": "wichevr"
		}
	@end-include
*/

import { MJMLElement } from "mjml-core";
import React, { Component } from "react";
import Column from "mjml-column";
import Table from "mjml-table";

import wichevr from "wichevr";

const tagName = "mj-small-detail";

const parentTag = [ "mj-container", "mj-section" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"padding": "10px 10px 0px 10px",
		"width": "100%",
		"title": "Title",
		"label": "Label",
		"value": "Value"
	},
};

@MJMLElement
class SmallDetail extends Component {
	render( ){
		const { mjAttribute, width, padding } = this.props;

		return ( <Column
					{ ...this.props }
					width={ wichevr( width, mjAttribute( "width" ) ) }
				>
					<Table
						padding={ wichevr( padding, mjAttribute( "padding" ) ) }
						table-layout="auto"
						width="auto">
						<tr>
							<th
								align="left"
								style={ {
									"padding": "0px 0px 0px 0px",
									"fontSize": "10.5px",
									"fontWeight": "500",
									"letterSpacing": "0.3px",
									"textTransform": "uppercase",
									"textAlign": "left"
								} }
							>
								{ wichevr( mjAttribute( "title" ), mjAttribute( "label" ) ) }
							</th>
						</tr>
						<tr>
							<td
								align="left"
								style={ {
									"padding": "0px 0px 0px 0px",
									"fontSize": "12px",
									"letterSpacing": "0.3px",
									"textAlign": "left"
								} }
							>
								{ mjAttribute( "value" ) }
							</td>
						</tr>
					</Table>
				</Column> );
	}
}

SmallDetail.tagName = tagName;
SmallDetail.parentTag = parentTag;
SmallDetail.endingTag = endingTag;
SmallDetail.defaultMJMLDefinition = defaultMJMLDefinition;

export default SmallDetail;
