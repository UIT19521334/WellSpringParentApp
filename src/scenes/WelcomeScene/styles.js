import { StyleSheet } from "react-native";
import { FontSize } from '../../utils/fontSize';
import {  systemColor, UIColor } from "../../utils/colors";
const styles = StyleSheet.create({
    dotActive:{
        fontSize: FontSize.h2,
        color : systemColor(UIColor.accent3)
    },
    dot:{
        fontSize: FontSize.h2,
        color: systemColor(UIColor.accent6)
    },
    
    
});
export default styles;