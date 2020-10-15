import React, { useRef,} from 'react';
import { View, Animated,} from 'react-native';
import Svg, {
    Circle,
    Path,
} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedPath = Animated.createAnimatedComponent(Path)

export default function AnimatedSuccess({
    chuvi = 2 * Math.PI * 60,
}) {
    const circleDashoffset = useRef(new Animated.Value(377)).current;
    const pathDashoffset = useRef(new Animated.Value(80)).current;
    // const rotateValue = useRef(new Animated.Value(-90)).current;

    const showCircle = () => {

        Animated.timing(circleDashoffset, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(pathDashoffset, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true, }).start()
        });

    };
    showCircle()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Svg height="128" width="128">

                <AnimatedCircle
                    rotation={-90}
                    origin={'64,64'}
                    cx="50%"
                    cy="50%"
                    r="60"
                    stroke="#93C22F"
                    strokeWidth="7"
                    fill='transparent'
                    strokeDasharray={chuvi}
                    strokeDashoffset={circleDashoffset}
                />
                <AnimatedPath
                    d="M40 64 L58 84 L88 44"
                    fill="none"
                    stroke="#93C22F"
                    strokeWidth="7"
                    strokeDasharray={80}
                    strokeDashoffset={pathDashoffset}
                />

            </Svg>
        </View>
    )

}
