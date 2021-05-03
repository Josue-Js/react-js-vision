import { Svg, CircleBg, Circle, Text} from './styles';




const ProgressBar = ({ size, progress, strokeWidth }) => {

    const center = size / 2
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const value = (585 - (585 * (progress * 10) / 100))

    return (
        <Svg
            width={size}
            height={size}
        >
                <CircleBg
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    key="progress"
                    fill="none"
                    stroke="#96f"
                    cx={center}
                    cy={center} 
                    r={radius}   
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    animate={{
                        strokeDashoffset: [585, value]
                    }}
                    transition={{duration: 1, ease: "easeInOut"}}
                />
                <Text 
                    x={`${center}`} 
                    y={`${center}`}
                    textAnchor="middle" 
                >
                        {progress * 10}%
                </Text>
            </Svg>
    );
}



export default ProgressBar