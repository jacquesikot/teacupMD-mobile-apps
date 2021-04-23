import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export function NotificationIcon(props: SvgProps) {
  return (
    <Svg
      {...props}
      width={props.width ? props.width : 16}
      height={props.height ? props.height : 20}
      viewBox="0 0 16 20"
      fill="none"
    >
      <Path
        d="M7.999 2c-2.4 0-4.353 1.872-4.353 4.172v5.492c0 .528-.174 1.056-.487 1.482l-.208.283h10.097l-.205-.279a2.49 2.49 0 01-.49-1.468l-.001-.009V6.172c0-2.3-1.953-4.172-4.353-4.172zm0-2c3.509 0 6.353 2.763 6.353 6.172v5.492a.508.508 0 00.101.299l1.35 1.841c.128.174.196.383.196.597 0 .568-.474 1.028-1.059 1.028H1.059c-.221 0-.435-.067-.615-.191a1.01 1.01 0 01-.248-1.434l1.35-1.841a.507.507 0 00.1-.299V6.172C1.646 2.763 4.491 0 7.999 0z"
        fill="#5E6C84"
      />
      <Path
        d="M9.57 17.167H6.958a.417.417 0 00-.417.417v.166c0 .23.187.417.417.417H9.57c.23 0 .417-.187.417-.417v-.166a.417.417 0 00-.417-.417z"
        fill="#172B4D"
        stroke="#5E6C84"
        strokeWidth={2}
      />
    </Svg>
  );
}

export function FavoriteIcon(props: SvgProps) {
  return (
    <Svg {...props} width={22} height={20} viewBox="0 0 22 20" fill="none">
      <Path
        d="M6.886 2C4.192 2 2 4.163 2 6.823c0 5.998 6.75 9.87 8.963 10.977.93-.585 2.743-1.802 4.514-3.416C17.541 12.504 20 9.666 20 6.823 20 4.163 17.808 2 15.114 2a4.993 4.993 0 00-2.931.964L11 3.832l-1.183-.868A4.992 4.992 0 006.886 2zm0-2C8.37 0 9.812.48 11 1.351A6.962 6.962 0 0115.114 0C18.909 0 22 3.052 22 6.823c0 6.888-10.241 12.85-10.681 13.1a.46.46 0 01-.264.077.475.475 0 01-.209-.044C10.395 19.76 0 15.226 0 6.823 0 3.052 3.09 0 6.886 0z"
        fill="#5E6C84"
      />
      <Path
        d="M8.452 4.644a3 3 0 00-2.937.856c-.747.795-.918 1.58-.856 3.11"
        stroke="#0065FF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function DoctorIcon(props: SvgProps) {
  return (
    <Svg {...props} width={24} height={23} viewBox="0 0 24 23" fill="none">
      <Path
        d="M7.399 15.268a1.36 1.36 0 102.719.002 1.36 1.36 0 00-2.719-.002zM13.883 15.268a1.36 1.36 0 102.719.002 1.36 1.36 0 00-2.719-.002zM11.945 10.508c3.227 0 5.725-.382 6.65-.546l.01-.002.01-.002a.133.133 0 00.09-.05.201.201 0 00.028-.142l-1.099-6.233c-.01-.057-.079-.122-.14-.134a9.717 9.717 0 01-.863-.127l-.016-.003C15.855 3.143 14.995 3 12 3c-2.97 0-3.835.142-4.598.266l-.05.009-.05.008c-.284.055-.552.09-.778.116a.176.176 0 00-.145.138L5.267 9.78a.16.16 0 00.022.117l.007.01.007.012a.14.14 0 00.093.054c1.157.2 3.548.534 6.549.534zm0 2c-3.19 0-5.693-.357-6.889-.563a2.134 2.134 0 01-1.402-.894 2.156 2.156 0 01-.358-1.609L4.41 3.186a2.175 2.175 0 011.884-1.774c.233-.027.44-.055.646-.096l.082-.014C7.861 1.165 8.796 1 12 1c3.204 0 4.152.165 4.977.302.22.041.454.083.743.11a2.19 2.19 0 011.884 1.774l1.1 6.242a2.204 2.204 0 01-.358 1.623c-.33.467-.825.784-1.402.88-1.238.22-3.795.577-6.999.577z"
        fill="#5E6C84"
      />
      <Path
        d="M12 20.917c1.188 0 2.65-.587 3.91-1.569 1.162-.91 2.058-2.09 2.524-3.324l.397-1.052 1.105-.208C20.543 14.65 21 14.03 21 13.32c0-.46-.185-.873-.477-1.143-.39.319-.856.54-1.366.642l-.027.006-.028.004c-1.263.216-3.872.579-7.157.579-3.289 0-5.834-.364-7.059-.58l-.012-.003-.013-.002a3.087 3.087 0 01-1.385-.646c-.292.27-.476.684-.476 1.143 0 .71.457 1.33 1.064 1.444l1.11.208.394 1.058c.458 1.225 1.354 2.403 2.518 3.316 1.263.983 2.726 1.571 3.914 1.571zm0 2c-1.65 0-3.52-.729-5.143-1.994-1.457-1.141-2.571-2.612-3.162-4.193C2.155 16.44 1 15.01 1 13.32c0-1.747 1.224-3.218 2.86-3.438a.562.562 0 01.577.33c.028.069.069.138.11.206.165.234.399.385.688.44 1.169.207 3.602.55 6.71.55 3.121 0 5.61-.343 6.82-.55.275-.055.522-.206.687-.44a.69.69 0 00.11-.206.532.532 0 01.578-.33c1.636.22 2.86 1.691 2.86 3.438 0 1.691-1.155 3.12-2.695 3.41-.59 1.567-1.705 3.052-3.163 4.193-1.622 1.265-3.492 1.994-5.142 1.994z"
        fill="#5E6C84"
      />
      <Path
        d="M11.45 9.153V7.297H9.594a.55.55 0 110-1.1h1.856V4.341A.552.552 0 0112 3.79a.552.552 0 01.55.55v1.857h1.857a.552.552 0 01.389.939.551.551 0 01-.389.16H12.55v1.857a.55.55 0 01-1.1 0z"
        fill="#0065FF"
        stroke="#0065FF"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export function PatientIcon(props: SvgProps) {
  return (
    <Svg {...props} width={20} height={22} viewBox="0 0 20 22" fill="none">
      <Path
        d="M14.27 4.986l-1.476-.675.946-.554a3.948 3.948 0 00-1.2-1.174l-1.55.906-2.422-1.108c-.39.19-.747.44-1.057.743-.118.126-.228.26-.33.4l2.1.962L6.349 6.2a4 4 0 00.44 1.616l4.289-2.508 3.239 1.481c.055-.267.082-.54.083-.812a4.042 4.042 0 00-.13-.991z"
        fill="#0065FF"
      />
      <Path
        d="M6.87 20c.509 0 1.064-.009 1.599-.018.567-.01 1.23-.021 1.908-.021.683 0 1.343.011 1.906.021.523.01 1.08.018 1.601.018.903 0 3.018 0 3.627-.602.065-.064.237-.234.237-.776 0-.528-.158-1.028-.483-1.531-.338-.525-.838-1.006-1.484-1.428-1.427-.934-3.347-1.448-5.407-1.448-2.058 0-3.978.514-5.407 1.448-.646.422-1.146.903-1.485 1.43-.324.501-.482 1.001-.482 1.529 0 .542.172.712.234.772C3.85 20 5.967 20 6.87 20zm0 2c-2.241 0-4.005-.166-5.037-1.178-.553-.545-.833-1.284-.833-2.2 0-.913.27-1.792.802-2.615.492-.763 1.188-1.441 2.07-2.018 1.75-1.143 4.058-1.774 6.502-1.774 2.446 0 4.755.631 6.502 1.774.882.577 1.578 1.255 2.07 2.018.532.823.802 1.702.802 2.615 0 .914-.28 1.655-.833 2.2C17.89 21.836 16.127 22 13.884 22c-.521 0-1.066-.008-1.636-.018a102.22 102.22 0 00-1.871-.021c-.641 0-1.266.01-1.872.021-.568.01-1.115.018-1.635.018zM10.374 2a3.937 3.937 0 00-2.805 1.164 3.928 3.928 0 00-1.16 2.801A3.94 3.94 0 007.573 8.77a3.928 3.928 0 002.801 1.16c1.06 0 2.055-.412 2.8-1.16l.003-.002.002-.002a3.928 3.928 0 001.16-2.801 3.937 3.937 0 00-1.164-2.805A3.928 3.928 0 0010.374 2zm0-2c1.594 0 3.092.62 4.217 1.748a5.919 5.919 0 011.748 4.217c0 1.594-.62 3.092-1.748 4.217a5.915 5.915 0 01-4.217 1.748 5.915 5.915 0 01-4.217-1.748 5.92 5.92 0 01-1.748-4.217c0-1.594.62-3.092 1.748-4.217A5.919 5.919 0 0110.374 0z"
        fill="#5E6C84"
      />
    </Svg>
  );
}

export function AboutUsIcon(props: SvgProps) {
  return (
    <Svg {...props} width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"
        stroke="#5E6C84"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export function CustomerServiceIcon(props: SvgProps) {
  return (
    <Svg {...props} width={23} height={21} viewBox="0 0 23 21" fill="none">
      <Path
        d="M7.81 17.162l1.402-1.073.002-.002.003-.002a3.022 3.022 0 011.818-.614h5.672A3.304 3.304 0 0020 12.181V2.438A.438.438 0 0019.563 2H5.295A3.308 3.308 0 002 5.291v9.742c0 .242.197.438.439.438h3.23c1.038 0 1.91.722 2.14 1.69zM6.582 20.44l-.01-.001a.703.703 0 01-.703-.703v-2.065a.2.2 0 00-.2-.2h-3.23A2.438 2.438 0 010 15.033V5.291A5.301 5.301 0 015.291 0h14.272A2.438 2.438 0 0122 2.438v9.743a5.298 5.298 0 01-5.29 5.29h-5.675c-.22 0-.433.073-.608.206l-3.421 2.618a.693.693 0 01-.424.145z"
        fill="#5E6C84"
      />
      <Path
        d="M14.05 8.904a1.647 1.647 0 113.295.002 1.647 1.647 0 01-3.295-.002zM9.359 8.904a1.647 1.647 0 111.647 1.648 1.648 1.648 0 01-1.648-1.646l.001-.002zM4.655 8.904a1.648 1.648 0 111.649 1.648 1.648 1.648 0 01-1.648-1.646l-.001-.002z"
        fill="#0065FF"
      />
    </Svg>
  );
}

export function CartIcon(props: SvgProps) {
  return (
    <Svg {...props} width={27} height={27} viewBox="0 0 27 27" fill="none">
      <Path
        d="M9.469 23.058a1.846 1.846 0 100 3.692 1.846 1.846 0 000-3.692z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M22.211 23.058a1.845 1.845 0 10-.002 3.69 1.845 1.845 0 00.002-3.69z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M26.34 5.131a2.47 2.47 0 00-1.627-.582H7.384l-.338-2.238A2.714 2.714 0 004.353 0L1.961.005a.963.963 0 000 1.926l2.4-.006a.8.8 0 01.516.192.785.785 0 01.266.482l2.656 17.589a1.214 1.214 0 001.193 1.031l15.339.015a.963.963 0 100-1.926L9.61 19.293l-.295-1.951 14.1-.851a2.165 2.165 0 002.047-1.655l1.505-7.974a1.843 1.843 0 00-.627-1.731z"
        fill="url(#prefix__paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={7.623}
          y1={24.903}
          x2={11.314}
          y2={24.903}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCCE71" />
          <Stop offset={1} stopColor="#FCCE71" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={20.364}
          y1={24.904}
          x2={24.056}
          y2={24.904}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCCE71" />
          <Stop offset={1} stopColor="#FCCE71" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={0.998}
          y1={10.617}
          x2={26.995}
          y2={10.617}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCCE71" />
          <Stop offset={1} stopColor="#FFAB00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export function ConsultIcon(props: SvgProps) {
  return (
    <Svg {...props} width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Path
        d="M4.811 19.078l-.114 5.243a1.691 1.691 0 002.643 1.377l11.775-6.815-14.304.195z"
        fill="#75ABFE"
      />
      <Path
        d="M22 0H4a4 4 0 00-4 4v13a4 4 0 004 4h18a4 4 0 004-4V4a4 4 0 00-4-4z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M9.612 10h6.776M13 6.612v6.776"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={1.17}
          y1={11.676}
          x2={26}
          y2={11.676}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#75ABFE" />
          <Stop offset={1} stopColor="#0065FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export function AppointmentIcon(props: SvgProps) {
  return (
    <Svg {...props} width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Path
        d="M.4 8.387h25.2a.4.4 0 00.4-.4h-.008V5.5a4 4 0 00-4-4h-1.447a.4.4 0 00-.4.4v1.058a1.738 1.738 0 01-2.143 1.682c-.043-.011-.085-.021-.126-.035a1.775 1.775 0 01-.181-.074 1.693 1.693 0 01-.165-.082l-.021-.015a1.9 1.9 0 01-.839-1.586V1.9a.406.406 0 00-.4-.4H9.742a.406.406 0 00-.4.4v.948a1.9 1.9 0 01-.839 1.586l-.021.014a1.41 1.41 0 01-.165.083 1.663 1.663 0 01-.18.074c-.041.014-.084.024-.126.035a1.788 1.788 0 01-.607.034 1.737 1.737 0 01-1.536-1.716V1.9a.4.4 0 00-.4-.4H4.021a4 4 0 00-4 4v2.487H.012a.4.4 0 00.388.4z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M25.595 10.284H.406a.4.4 0 00-.4.4v10.792a4 4 0 004 4h17.989a4 4 0 004-4V10.684a.4.4 0 00-.4-.4zm-5.89 4.533l-7.579 7.578a.945.945 0 01-1.344 0L6.3 17.912a.948.948 0 111.341-1.341l3.817 3.817 6.91-6.909a.949.949 0 011.341 1.341l-.004-.003z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M18.387 4.035a.862.862 0 00.864-.864V.864a.864.864 0 00-1.728 0v2.31a.864.864 0 00.864.861zM7.637 4.035a.862.862 0 00.864-.864V.864a.864.864 0 10-1.728 0v2.31a.866.866 0 00.864.861z"
        fill="#9B8CEB"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={0.012}
          y1={4.944}
          x2={26}
          y2={4.944}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B8CEB" />
          <Stop offset={1} stopColor="#6554C0" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={0.006}
          y1={17.88}
          x2={25.995}
          y2={17.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B8CEB" />
          <Stop offset={1} stopColor="#6554C0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export function LectureIcon(props: SvgProps) {
  return (
    <Svg {...props} width={26} height={27} viewBox="0 0 26 27" fill="none">
      <Path
        d="M13.534 9.455L21.989 1M13.534 9.455L5.079 1"
        stroke="#FE8B72"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M22 4.931H4a4 4 0 00-4 4v14a4 4 0 004 4h18a4 4 0 004-4v-14a4 4 0 00-4-4z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M17.575 14.292L11.75 10.93a1.893 1.893 0 00-2.839 1.639v6.725a1.893 1.893 0 002.839 1.639l5.825-3.362a1.892 1.892 0 000-3.279z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={0}
          y1={15.931}
          x2={26}
          y2={15.931}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FE8B72" />
          <Stop offset={1} stopColor="#FF5630" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export function CartIcon2(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M5.267 18.649a1.39 1.39 0 102.78 0 1.39 1.39 0 00-2.78 0zM14.864 18.649a1.39 1.39 0 102.78 0 1.39 1.39 0 00-2.78 0zM5.74 5.764l.818 5.288 10.198-.544.976-4.744H5.739zm-2.334-2H18.04c.483 0 .952.149 1.295.426.413.336.596.804.502 1.266l-1.2 5.831c-.136.66-.806 1.157-1.63 1.21l-12.149.649-1.452-9.382z"
        fill="#5E6C84"
      />
      <Path
        d="M1.003 1.146h1.8c.314 0 .619.11.861.309.24.198.398.476.446.783l2 12.864a.18.18 0 00.182.153l11.552.011"
        stroke="#5E6C84"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}
