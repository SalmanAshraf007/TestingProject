import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

export default class Pin extends Component {
	render() {
		return (
			<View style={style.PinContainer}>
				<View style={style.PinHeader}>
					<View style={style.UtilityNav}>
						<Image source={require('../utils/icons/back1.png')} style={style.PngResizing} />
						<Image source={require('../utils/icons/Heart1.png')} style={style.PngResizing} />
						<Image source={require('../utils/icons/Elipses1.png')} style={style.PngResizing} />
						<Image source={require('../utils/icons/deliver1.png')} style={style.PngResizing} />
					</View>
					<View style={style.PinButtonContainer}>
						<View style={style.PinButton}>
							<Image
								source={require('../utils/icons/Thumb1.png')}
								style={[style.PngResizing, style.IconeColor]}
							/>
							<Text style={style.pinButtonTxt}>Save</Text>
						</View>
					</View>
				</View>

				<View style={style.PinPicContent}>
					<Text style={style.ImahePalceHolder}>PlaceHoler</Text>
					{/* <Image source={require('../utils/img/scenery.jpg')} style={style.SceneryStyle} /> */}
				</View>

				<View style={style.PinMeta}>
					<View style={style.PinMetaTextContainer}>
						<Text style={style.PinMetaText}>Saved as</Text>
						<Text style={[style.PinMetaText, style.PinMetaText1]}>website.com</Text>
					</View>
					<View style={style.PinButtonContainer}>
						<View style={[style.PinButton, style.PinButtonInfo]}>
							<Text style={[style.pinButtonTxt, style.PinButtonText]}>Visit</Text>
						</View>
					</View>
				</View>
				<View style={style.PinMeta2}>
					<View style={style.PinMeta2Pic} />
					<View style={style.PinMeta2RightMetaInfo}>
						<Text style={[style.PinMetaText, style.PinMetaText1]}>ThisText as Mytext</Text>
						<View style={style.PinMetaBelowMeta}>
							<Text style={style.PinMetaText}>
								All the meta Loream here.{'\n'}i am here and i am always here bro{'\n'} means i write
								anything...
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	PinContainer: {
		flex: 1,

		flexDirection: 'column',
		alignSelf: 'stretch',
	},
	PinHeader: {
		flexDirection: 'row',
		backgroundColor: 'white',
		height: '10%',
		justifyContent: 'space-between',
		alignItems: 'center',
		// padding: 8,
	},
	UtilityNav: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
	},
	PinButton: {
		flexDirection: 'row',
		backgroundColor: 'red',
		padding: 3,
		borderRadius: 6,
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: 'flex-end',
		paddingRight: '3%',
	},
	pinButtonTxt: {
		padding: '4%',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: '-2%',
	},

	PinPicContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '2%',
		paddingBottom: '2%',
		paddingRight: '2%',
		paddingLeft: '2%',
	},
	ImahePalceHolder: {
		backgroundColor: '#1e1e1e',
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: 8,
	},
	PinMeta2: {
		flex: 1,
		margin: '2%',
		flexDirection: 'row',
	},
	PinMeta2Pic: {
		width: 58,
		height: 58,
		margin: '1%',
		backgroundColor: 'black',
		borderRadius: 30,
	},
	PinMeta2RightMetaInfo: {
		margin: '2%',
	},
	SceneryStyle: {
		height: '60%',
		width: '85%',
		padding: '5%',
	},
	PinMeta: {
		backgroundColor: '#bcbcbc',
		flexDirection: 'row',
		flex: 0.2,
		padding: '3%',
		borderRadius: 6,
		margin: '2%',
	},
	PinButtonInfo: {
		backgroundColor: '#cecece',
	},
	PinButtonText: {
		color: '#000000',
	},
	PinMetaText1: {
		fontWeight: 'bold',
	},
	PinMetaText: {
		fontSize: 20,
	},
	PngResizing: {
		width: 40,
		height: 40,
	},
	IconeColor: {
		color: 'white',
	},
});
