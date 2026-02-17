import * as React from "react"
import Svg, { Circle, Ellipse, Path } from "react-native-svg"

function HomeIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 9.654l9.003-7.203a2.058 2.058 0 012.571 0l9.004 7.203"
        stroke={props?.color || "#0D6EFD"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.694 3.531L5.578 6.875c-.747.607-1.12.91-1.32 1.33-.2.42-.2.901-.2 1.864v3.7c0 3.88 0 5.82 1.205 7.025C6.47 22 8.41 22 12.29 22s5.82 0 7.025-1.206c1.206-1.205 1.206-3.145 1.206-7.025v-3.7c0-.963 0-1.444-.2-1.864-.2-.42-.573-.723-1.32-1.33L14.884 3.53c-1.243-1.01-1.864-1.515-2.595-1.515-.73 0-1.352.505-2.595 1.515z"
        stroke={props?.color || "#0D6EFD"}
        strokeWidth={2}
      />
      <Path
        d="M9.974 16.084h4.63"
        stroke={props?.color || "#0D6EFD"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

function BookingIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.144 5.472l.494 1.842a1.37 1.37 0 01-.415 1.38l-.066.056a2.143 2.143 0 00.95 3.801l.093.014a1.32 1.32 0 011.104.967l.502 1.875a1.714 1.714 0 01-1.212 2.1L5.207 22.166a1.714 1.714 0 01-2.099-1.213l-.473-1.764a1.496 1.496 0 01.428-1.483l.07-.06a2.144 2.144 0 00-1.016-3.777A1.484 1.484 0 01.92 12.79l-.475-1.77a1.714 1.714 0 011.213-2.1L19.045 4.26a1.714 1.714 0 012.1 1.212m-1.785.26L2.122 10.351a.446.446 0 00-.315.546l.339 1.266a4.015 4.015 0 011.862 6.95l.339 1.265c.064.238.308.379.546.315l17.237-4.619a.446.446 0 00.316-.546l-.339-1.265a4.016 4.016 0 01-1.863-6.95l-.338-1.265a.445.445 0 00-.546-.316zm-.55 9.24a1.287 1.287 0 01-2.263 1.115 1.286 1.286 0 112.262-1.115zm-.888-3.312a1.285 1.285 0 11-2.484.665 1.286 1.286 0 012.484-.665zm-.888-3.312a1.285 1.285 0 11-2.482.666 1.285 1.285 0 012.482-.666zM12.593 2.72l1.094 1.562c.016.023.03.046.045.07L3.27 7.156l6.936-4.857a1.715 1.715 0 012.388.421z"
        fill={props?.color || "#4E5155"}
      />
    </Svg>
  )
}

function HeartIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
        fill={props?.color == "#0D6EFD" ? "#0D6EFD" : "none"}
        stroke={props?.color || "#0D6EFD"}
        strokeWidth={2}
      />
    </Svg>
  )
}

function ProfileIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={12}
        cy={17.5}
        rx={7}
        ry={3.5}
        stroke={props?.color || "#7D848D"}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Circle
        cx={12}
        cy={7}
        r={4}
        stroke={props?.color || "#7D848D"}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SearchIcon(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={7.33963}
        cy={7.33992}
        rx={6.53982}
        ry={6.53993}
        stroke="#fff"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8 14.8l-2.47-2.47"
        stroke="#fff"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export { HomeIcon, BookingIcon, HeartIcon, ProfileIcon, SearchIcon }
