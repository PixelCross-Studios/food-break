import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.3}
    height={24.301}
    {...props}
  >
    <G data-name="icon/24/home">
      <Path data-name="Rectangle 1604" fill="none" d="M.15.15h24v24h-24z" />
      <Path
        d="M12.136.15a.571.571 0 0 0-.3.092L.41 7.671a.571.571 0 0 0-.26.479v4a.571.571 0 0 0 .88.481l1.406-.902v11.85a.571.571 0 0 0 .571.571h2.572a.572.572 0 1 0 0-1.143h-2V10.995l1.451-.932a.571.571 0 1 0-.617-.962l-3.12 2V8.46L12.15 1.403 23.007 8.46v2.644L12.459 4.336a.571.571 0 0 0-.617 0L9.556 5.799a.571.571 0 0 0 .617.962l1.977-1.27 8.571 5.5v12.016H9.578a.572.572 0 1 0 0 1.143h11.715a.571.571 0 0 0 .571-.571v-11.85l1.406.9a.571.571 0 0 0 .88-.481v-4a.571.571 0 0 0-.26-.479L12.462.242a.571.571 0 0 0-.325-.092Z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={0.3}
      />
      <Path
        data-name="path828"
        d="M7.579 22.856a.723.723 0 1 0 .723.723.723.723 0 0 0-.723-.723Z"
        fill={props.color}
      />
    </G>
  </Svg>
)

export default HomeIcon;
