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
			"booleanize": "booleanize",
			"falzy": "falzy",
			"MJMLElement": "mjml-core",
			"React": "react",
			"Component": "react.Component",
			"Column": "mjml-column",
			"Table": "mjml-table",
			"wichevr": "wichevr"
		}
	@end-include
*/

import React, { Component } from "react";

import { MJMLElement } from "mjml-core";

import Column from "mjml-column";
import Table from "mjml-table";

import booleanize from "booleanize";
import falzy from "falzy";
import wichevr from "wichevr";

const tagName = "mj-small-detail";

const parentTag = [ "mj-container", "mj-section" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"title": "",
		"label": "",
		"value": "",
		"align": "left",
		"width": "100%",
		"reverse": false,
		"padding": "10px 10px 0px 10px",
		"background-color": "white",
		"foreground-color": "black"
	}
};

@MJMLElement
class SmallDetail extends Component {
	render( ){
		const { mjAttribute, width, padding } = this.props;

		let {
			title,
			label,
			value,
			align,
			reverse,
			backgroundColor,
			foregroundColor
		} = this.props;

		title = wichevr( title, label, mjAttribute( "title" ), mjAttribute( "label" ) );

		value = wichevr( value, mjAttribute( "value" ) );

		if( falzy( value ) ){
			title = "";
		}

		align = wichevr( align, mjAttribute( "align" ) );

		reverse = booleanize( wichevr( reverse, mjAttribute( "reverse" ) ) );

		backgroundColor = wichevr( backgroundColor, mjAttribute( "background-color" ) );

		foregroundColor = wichevr( foregroundColor, mjAttribute( "foreground-color" ) );

		let titleComponent = ( <td
								style={ {
									"padding": "0px 0px 0px 0px",
									"fontSize": "10.5px",
									"fontWeight": "500",
									"letterSpacing": "0.3px",
									"textTransform": "uppercase",
									"textAlign": align,
									"color": foregroundColor
								} }
							>
								{ title }
							</td> );

	 	let valueComponent = ( <td
								style={ {
									"padding": "0px 0px 0px 0px",
									"fontSize": "12.5px",
									"letterSpacing": "0.3px",
									"textAlign": align,
									"color": foregroundColor
								} }
							>
								{ value }
							</td> );

		return ( <Column
					width={ wichevr( width, mjAttribute( "width" ) ) }
					background-color={ backgroundColor }
				>
					<Table
						align={ align }
						padding={ wichevr( padding, mjAttribute( "padding" ) ) }
						table-layout="auto"
						width="auto"
					>
						<tr>
							{ reverse? valueComponent : titleComponent }
						</tr>
						<tr>
							{ reverse? titleComponent : valueComponent }
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
