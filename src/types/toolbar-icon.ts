export type ToolbarIcon = NavLinkIcon | ButtonIcon;

interface BaseIcon {
    name: string;
    label: string;
    onClick: () => void;
    width: number;
    strokeWidth: number;
    stroke?: string;
    height: number;
    IconComponent: (props: {
        className: string;
        width: number;
        height: number;
        strokeWidth: number;
        stroke?: string;     
    }) => React.JSX.Element;
}

interface NavLinkIcon extends BaseIcon {
    navlink: true;
    to: string;  
}

interface ButtonIcon extends BaseIcon {
    navlink: false;
    to?: never;
}