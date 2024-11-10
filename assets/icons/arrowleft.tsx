import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.46 5.293L5.713 7.04a1.324 1.324 0 000 1.867l4.347 4.346m0-10.56l-.693.694"
        stroke="#272727"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowLeft