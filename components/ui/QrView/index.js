import React from 'react';
import QRCode from 'qrcode.react';
import { View } from 'react-native';

export default class QrView extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: this.props.bgColor}}>
                <View style={{margin: '10px'}}>
                    <QRCode
                        value={this.props.value}
                        size={this.props.size}
                        bgColor={this.props.bgColor}
                        fgColor={this.props.fgColor}
                        level="H"/>
                </View>
            </View>
        )
    }
}

QrView.propTypes = {
    value: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    bgColor: React.PropTypes.string,
    fgColor: React.PropTypes.string,
};
