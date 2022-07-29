declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

interface CustomShadowOptions {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
}

declare module "pulse-portal-styleguide" {
  export function ThemeProvider(props: any): any;
  export function componentsOverride(props: any): any;
  export const palette;
  export const typography;
  export type ColorSchema =
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";

  export * from "notistack";

  // export mui
  export * from "@mui/material";
  export * from "@mui/material/styles";
  export * from "@mui/material/useMediaQuery";
  export * from "@mui/material/colors";
  export * from "@mui/lab";

  // @mui/icons-material
  // export * as PruIcons from "@mui/icons-material";

  //   export { LoadingButton } from '@mui/lab';

  import { Theme } from "@mui/material/styles/createTheme";

  export interface CustomTheme extends Theme {
    customShadows: CustomShadowOptions;
  }

  import { Color } from "@mui/material";

  export interface CustomColor extends Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }

  // export component

  import { AvatarProps } from "@mui/material";
  type AvatarColor =
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  interface PRUAvatarProps extends AvatarProps {
    color?: AvatarColor;
  }
  export const PRUAvatar: import("react").ForwardRefExoticComponent<
    Pick<
      PRUAvatarProps,
      | "children"
      | "slot"
      | "style"
      | "title"
      | "className"
      | "classes"
      | "color"
      | "sx"
      | "id"
      | "lang"
      | "role"
      | "tabIndex"
      | "aria-activedescendant"
      | "aria-atomic"
      | "aria-autocomplete"
      | "aria-busy"
      | "aria-checked"
      | "aria-colcount"
      | "aria-colindex"
      | "aria-colspan"
      | "aria-controls"
      | "aria-current"
      | "aria-describedby"
      | "aria-details"
      | "aria-disabled"
      | "aria-dropeffect"
      | "aria-errormessage"
      | "aria-expanded"
      | "aria-flowto"
      | "aria-grabbed"
      | "aria-haspopup"
      | "aria-hidden"
      | "aria-invalid"
      | "aria-keyshortcuts"
      | "aria-label"
      | "aria-labelledby"
      | "aria-level"
      | "aria-live"
      | "aria-modal"
      | "aria-multiline"
      | "aria-multiselectable"
      | "aria-orientation"
      | "aria-owns"
      | "aria-placeholder"
      | "aria-posinset"
      | "aria-pressed"
      | "aria-readonly"
      | "aria-relevant"
      | "aria-required"
      | "aria-roledescription"
      | "aria-rowcount"
      | "aria-rowindex"
      | "aria-rowspan"
      | "aria-selected"
      | "aria-setsize"
      | "aria-sort"
      | "aria-valuemax"
      | "aria-valuemin"
      | "aria-valuenow"
      | "aria-valuetext"
      | "dangerouslySetInnerHTML"
      | "onCopy"
      | "onCopyCapture"
      | "onCut"
      | "onCutCapture"
      | "onPaste"
      | "onPasteCapture"
      | "onCompositionEnd"
      | "onCompositionEndCapture"
      | "onCompositionStart"
      | "onCompositionStartCapture"
      | "onCompositionUpdate"
      | "onCompositionUpdateCapture"
      | "onFocus"
      | "onFocusCapture"
      | "onBlur"
      | "onBlurCapture"
      | "onChange"
      | "onChangeCapture"
      | "onBeforeInput"
      | "onBeforeInputCapture"
      | "onInput"
      | "onInputCapture"
      | "onReset"
      | "onResetCapture"
      | "onSubmit"
      | "onSubmitCapture"
      | "onInvalid"
      | "onInvalidCapture"
      | "onLoad"
      | "onLoadCapture"
      | "onError"
      | "onErrorCapture"
      | "onKeyDown"
      | "onKeyDownCapture"
      | "onKeyPress"
      | "onKeyPressCapture"
      | "onKeyUp"
      | "onKeyUpCapture"
      | "onAbort"
      | "onAbortCapture"
      | "onCanPlay"
      | "onCanPlayCapture"
      | "onCanPlayThrough"
      | "onCanPlayThroughCapture"
      | "onDurationChange"
      | "onDurationChangeCapture"
      | "onEmptied"
      | "onEmptiedCapture"
      | "onEncrypted"
      | "onEncryptedCapture"
      | "onEnded"
      | "onEndedCapture"
      | "onLoadedData"
      | "onLoadedDataCapture"
      | "onLoadedMetadata"
      | "onLoadedMetadataCapture"
      | "onLoadStart"
      | "onLoadStartCapture"
      | "onPause"
      | "onPauseCapture"
      | "onPlay"
      | "onPlayCapture"
      | "onPlaying"
      | "onPlayingCapture"
      | "onProgress"
      | "onProgressCapture"
      | "onRateChange"
      | "onRateChangeCapture"
      | "onSeeked"
      | "onSeekedCapture"
      | "onSeeking"
      | "onSeekingCapture"
      | "onStalled"
      | "onStalledCapture"
      | "onSuspend"
      | "onSuspendCapture"
      | "onTimeUpdate"
      | "onTimeUpdateCapture"
      | "onVolumeChange"
      | "onVolumeChangeCapture"
      | "onWaiting"
      | "onWaitingCapture"
      | "onAuxClick"
      | "onAuxClickCapture"
      | "onClick"
      | "onClickCapture"
      | "onContextMenu"
      | "onContextMenuCapture"
      | "onDoubleClick"
      | "onDoubleClickCapture"
      | "onDrag"
      | "onDragCapture"
      | "onDragEnd"
      | "onDragEndCapture"
      | "onDragEnter"
      | "onDragEnterCapture"
      | "onDragExit"
      | "onDragExitCapture"
      | "onDragLeave"
      | "onDragLeaveCapture"
      | "onDragOver"
      | "onDragOverCapture"
      | "onDragStart"
      | "onDragStartCapture"
      | "onDrop"
      | "onDropCapture"
      | "onMouseDown"
      | "onMouseDownCapture"
      | "onMouseEnter"
      | "onMouseLeave"
      | "onMouseMove"
      | "onMouseMoveCapture"
      | "onMouseOut"
      | "onMouseOutCapture"
      | "onMouseOver"
      | "onMouseOverCapture"
      | "onMouseUp"
      | "onMouseUpCapture"
      | "onSelect"
      | "onSelectCapture"
      | "onTouchCancel"
      | "onTouchCancelCapture"
      | "onTouchEnd"
      | "onTouchEndCapture"
      | "onTouchMove"
      | "onTouchMoveCapture"
      | "onTouchStart"
      | "onTouchStartCapture"
      | "onPointerDown"
      | "onPointerDownCapture"
      | "onPointerMove"
      | "onPointerMoveCapture"
      | "onPointerUp"
      | "onPointerUpCapture"
      | "onPointerCancel"
      | "onPointerCancelCapture"
      | "onPointerEnter"
      | "onPointerEnterCapture"
      | "onPointerLeave"
      | "onPointerLeaveCapture"
      | "onPointerOver"
      | "onPointerOverCapture"
      | "onPointerOut"
      | "onPointerOutCapture"
      | "onGotPointerCapture"
      | "onGotPointerCaptureCapture"
      | "onLostPointerCapture"
      | "onLostPointerCaptureCapture"
      | "onScroll"
      | "onScrollCapture"
      | "onWheel"
      | "onWheelCapture"
      | "onAnimationStart"
      | "onAnimationStartCapture"
      | "onAnimationEnd"
      | "onAnimationEndCapture"
      | "onAnimationIteration"
      | "onAnimationIterationCapture"
      | "onTransitionEnd"
      | "onTransitionEndCapture"
      | "key"
      | "defaultChecked"
      | "defaultValue"
      | "suppressContentEditableWarning"
      | "suppressHydrationWarning"
      | "accessKey"
      | "contentEditable"
      | "contextMenu"
      | "dir"
      | "draggable"
      | "hidden"
      | "placeholder"
      | "spellCheck"
      | "translate"
      | "radioGroup"
      | "about"
      | "datatype"
      | "inlist"
      | "prefix"
      | "property"
      | "resource"
      | "typeof"
      | "vocab"
      | "autoCapitalize"
      | "autoCorrect"
      | "autoSave"
      | "itemProp"
      | "itemScope"
      | "itemType"
      | "itemID"
      | "itemRef"
      | "results"
      | "security"
      | "unselectable"
      | "inputMode"
      | "is"
      | "alt"
      | "src"
      | "sizes"
      | "srcSet"
      | "variant"
      | "imgProps"
    > &
      import("react").RefAttributes<HTMLDivElement>
  >;

  import { ReactNode, ReactElement } from "react";
  type MotionLazyContainerProps = {
    children: ReactNode;
  };
  export function MotionLazyContainer({
    children,
  }: MotionLazyContainerProps): JSX.Element;

  // -----------------------------PRUImage-----------------------------------------

  import { BoxProps, SxProps } from "@mui/material";
  import { LazyLoadImageProps } from "react-lazy-load-image-component";

  export type ImageRato =
    | "4/3"
    | "3/4"
    | "6/4"
    | "4/6"
    | "16/9"
    | "9/16"
    | "21/9"
    | "9/21"
    | "1/1";

  type IProps = BoxProps & LazyLoadImageProps;
  interface PRUImageProps extends IProps {
    sx?: SxProps<Theme>;
    ratio?: ImageRato;
    disabledEffect?: boolean;
  }
  export function PRUImage({
    ratio,
    disabledEffect,
    effect,
    sx,
    ...other
  }: PRUImageProps): JSX.Element;

  /// <reference types="react" />
  type LoadingScreenProps = {
    isDashboard?: boolean;
    sx?: SxProps;
  };
  export function LoadingScreen({
    isDashboard,
    ...other
  }: LoadingScreenProps): JSX.Element;

  interface PageProps extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
  }
  export const Page: import("react").ForwardRefExoticComponent<
    Pick<
      PageProps,
      | "children"
      | "meta"
      | "p"
      | "slot"
      | "style"
      | "title"
      | "fontFamily"
      | "fontSize"
      | "fontWeight"
      | "letterSpacing"
      | "className"
      | "classes"
      | "color"
      | "sx"
      | "height"
      | "id"
      | "lang"
      | "width"
      | "role"
      | "tabIndex"
      | "display"
      | "fontStyle"
      | "order"
      | "overflow"
      | "visibility"
      | "aria-activedescendant"
      | "aria-atomic"
      | "aria-autocomplete"
      | "aria-busy"
      | "aria-checked"
      | "aria-colcount"
      | "aria-colindex"
      | "aria-colspan"
      | "aria-controls"
      | "aria-current"
      | "aria-describedby"
      | "aria-details"
      | "aria-disabled"
      | "aria-dropeffect"
      | "aria-errormessage"
      | "aria-expanded"
      | "aria-flowto"
      | "aria-grabbed"
      | "aria-haspopup"
      | "aria-hidden"
      | "aria-invalid"
      | "aria-keyshortcuts"
      | "aria-label"
      | "aria-labelledby"
      | "aria-level"
      | "aria-live"
      | "aria-modal"
      | "aria-multiline"
      | "aria-multiselectable"
      | "aria-orientation"
      | "aria-owns"
      | "aria-placeholder"
      | "aria-posinset"
      | "aria-pressed"
      | "aria-readonly"
      | "aria-relevant"
      | "aria-required"
      | "aria-roledescription"
      | "aria-rowcount"
      | "aria-rowindex"
      | "aria-rowspan"
      | "aria-selected"
      | "aria-setsize"
      | "aria-sort"
      | "aria-valuemax"
      | "aria-valuemin"
      | "aria-valuenow"
      | "aria-valuetext"
      | "dangerouslySetInnerHTML"
      | "onCopy"
      | "onCopyCapture"
      | "onCut"
      | "onCutCapture"
      | "onPaste"
      | "onPasteCapture"
      | "onCompositionEnd"
      | "onCompositionEndCapture"
      | "onCompositionStart"
      | "onCompositionStartCapture"
      | "onCompositionUpdate"
      | "onCompositionUpdateCapture"
      | "onFocus"
      | "onFocusCapture"
      | "onBlur"
      | "onBlurCapture"
      | "onChange"
      | "onChangeCapture"
      | "onBeforeInput"
      | "onBeforeInputCapture"
      | "onInput"
      | "onInputCapture"
      | "onReset"
      | "onResetCapture"
      | "onSubmit"
      | "onSubmitCapture"
      | "onInvalid"
      | "onInvalidCapture"
      | "onLoad"
      | "onLoadCapture"
      | "onError"
      | "onErrorCapture"
      | "onKeyDown"
      | "onKeyDownCapture"
      | "onKeyPress"
      | "onKeyPressCapture"
      | "onKeyUp"
      | "onKeyUpCapture"
      | "onAbort"
      | "onAbortCapture"
      | "onCanPlay"
      | "onCanPlayCapture"
      | "onCanPlayThrough"
      | "onCanPlayThroughCapture"
      | "onDurationChange"
      | "onDurationChangeCapture"
      | "onEmptied"
      | "onEmptiedCapture"
      | "onEncrypted"
      | "onEncryptedCapture"
      | "onEnded"
      | "onEndedCapture"
      | "onLoadedData"
      | "onLoadedDataCapture"
      | "onLoadedMetadata"
      | "onLoadedMetadataCapture"
      | "onLoadStart"
      | "onLoadStartCapture"
      | "onPause"
      | "onPauseCapture"
      | "onPlay"
      | "onPlayCapture"
      | "onPlaying"
      | "onPlayingCapture"
      | "onProgress"
      | "onProgressCapture"
      | "onRateChange"
      | "onRateChangeCapture"
      | "onSeeked"
      | "onSeekedCapture"
      | "onSeeking"
      | "onSeekingCapture"
      | "onStalled"
      | "onStalledCapture"
      | "onSuspend"
      | "onSuspendCapture"
      | "onTimeUpdate"
      | "onTimeUpdateCapture"
      | "onVolumeChange"
      | "onVolumeChangeCapture"
      | "onWaiting"
      | "onWaitingCapture"
      | "onAuxClick"
      | "onAuxClickCapture"
      | "onClick"
      | "onClickCapture"
      | "onContextMenu"
      | "onContextMenuCapture"
      | "onDoubleClick"
      | "onDoubleClickCapture"
      | "onDrag"
      | "onDragCapture"
      | "onDragEnd"
      | "onDragEndCapture"
      | "onDragEnter"
      | "onDragEnterCapture"
      | "onDragExit"
      | "onDragExitCapture"
      | "onDragLeave"
      | "onDragLeaveCapture"
      | "onDragOver"
      | "onDragOverCapture"
      | "onDragStart"
      | "onDragStartCapture"
      | "onDrop"
      | "onDropCapture"
      | "onMouseDown"
      | "onMouseDownCapture"
      | "onMouseEnter"
      | "onMouseLeave"
      | "onMouseMove"
      | "onMouseMoveCapture"
      | "onMouseOut"
      | "onMouseOutCapture"
      | "onMouseOver"
      | "onMouseOverCapture"
      | "onMouseUp"
      | "onMouseUpCapture"
      | "onSelect"
      | "onSelectCapture"
      | "onTouchCancel"
      | "onTouchCancelCapture"
      | "onTouchEnd"
      | "onTouchEndCapture"
      | "onTouchMove"
      | "onTouchMoveCapture"
      | "onTouchStart"
      | "onTouchStartCapture"
      | "onPointerDown"
      | "onPointerDownCapture"
      | "onPointerMove"
      | "onPointerMoveCapture"
      | "onPointerUp"
      | "onPointerUpCapture"
      | "onPointerCancel"
      | "onPointerCancelCapture"
      | "onPointerEnter"
      | "onPointerEnterCapture"
      | "onPointerLeave"
      | "onPointerLeaveCapture"
      | "onPointerOver"
      | "onPointerOverCapture"
      | "onPointerOut"
      | "onPointerOutCapture"
      | "onGotPointerCapture"
      | "onGotPointerCaptureCapture"
      | "onLostPointerCapture"
      | "onLostPointerCaptureCapture"
      | "onScroll"
      | "onScrollCapture"
      | "onWheel"
      | "onWheelCapture"
      | "onAnimationStart"
      | "onAnimationStartCapture"
      | "onAnimationEnd"
      | "onAnimationEndCapture"
      | "onAnimationIteration"
      | "onAnimationIterationCapture"
      | "onTransitionEnd"
      | "onTransitionEndCapture"
      | "key"
      | "defaultChecked"
      | "defaultValue"
      | "suppressContentEditableWarning"
      | "suppressHydrationWarning"
      | "accessKey"
      | "contentEditable"
      | "contextMenu"
      | "dir"
      | "draggable"
      | "hidden"
      | "placeholder"
      | "spellCheck"
      | "translate"
      | "radioGroup"
      | "about"
      | "datatype"
      | "inlist"
      | "prefix"
      | "property"
      | "resource"
      | "typeof"
      | "vocab"
      | "autoCapitalize"
      | "autoCorrect"
      | "autoSave"
      | "itemProp"
      | "itemScope"
      | "itemType"
      | "itemID"
      | "itemRef"
      | "results"
      | "security"
      | "unselectable"
      | "inputMode"
      | "is"
      | "left"
      | "right"
      | "top"
      | "bottom"
      | "border"
      | "boxShadow"
      | "zIndex"
      | "alignContent"
      | "alignItems"
      | "alignSelf"
      | "boxSizing"
      | "columnGap"
      | "flexBasis"
      | "flexDirection"
      | "flexGrow"
      | "flexShrink"
      | "flexWrap"
      | "gridAutoColumns"
      | "gridAutoFlow"
      | "gridAutoRows"
      | "gridTemplateAreas"
      | "gridTemplateColumns"
      | "gridTemplateRows"
      | "justifyContent"
      | "justifyItems"
      | "justifySelf"
      | "lineHeight"
      | "marginBottom"
      | "marginLeft"
      | "marginRight"
      | "marginTop"
      | "maxHeight"
      | "maxWidth"
      | "minHeight"
      | "minWidth"
      | "paddingBottom"
      | "paddingLeft"
      | "paddingRight"
      | "paddingTop"
      | "position"
      | "rowGap"
      | "textAlign"
      | "textOverflow"
      | "textTransform"
      | "whiteSpace"
      | "borderBottom"
      | "borderColor"
      | "borderLeft"
      | "borderRadius"
      | "borderRight"
      | "borderTop"
      | "flex"
      | "gap"
      | "gridArea"
      | "gridColumn"
      | "gridRow"
      | "margin"
      | "padding"
      | "bgcolor"
      | "m"
      | "mt"
      | "mr"
      | "mb"
      | "ml"
      | "mx"
      | "marginX"
      | "my"
      | "marginY"
      | "pt"
      | "pr"
      | "pb"
      | "pl"
      | "px"
      | "paddingX"
      | "py"
      | "paddingY"
      | "typography"
      | "displayPrint"
      | "component"
    > &
      import("react").RefAttributes<HTMLDivElement>
  >;

  export function ProgressBar(): null;
  export function ProgressBarStyle(): JSX.Element;

  import { PopoverProps } from "@mui/material";
  declare type MenuPopoverPropsArrow =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "left-top"
    | "left-center"
    | "left-bottom"
    | "right-top"
    | "right-center"
    | "right-bottom";
  interface MenuPopoverProps extends PopoverProps {
    arrow?: MenuPopoverPropsArrow;
    disabledArrow?: boolean;
  }
  export function MenuPopover({
    children,
    arrow,
    disabledArrow,
    sx,
    ...other
  }: MenuPopoverProps): JSX.Element;

  export function Logo({ sx }: BoxProps): JSX.Element;

  import { IconifyIcon } from "@iconify/react";
  interface IconifyProps extends BoxProps {
    sx?: SxProps;
    icon: IconifyIcon | string;
  }
  export function Iconify({ icon, sx, ...other }: IconifyProps): JSX.Element;

  import { Props as ScrollbarProps } from "simplebar-react";
  interface ScrollbarsProps extends ScrollbarProps {
    sx?: SxProps;
  }
  export function Scrollbar({
    children,
    sx,
    ...other
  }: ScrollbarsProps): JSX.Element;

  type NavListProps = {
    title: string;
    path: string;
    icon?: ReactElement;
    info?: ReactElement;
    caption?: string;
    disabled?: boolean;
    roles?: string[];
    children?: {
      title: string;
      path: string;
      children?: { title: string; path: string }[];
    }[];
  };

  type NavItemProps = {
    item: NavListProps;
    isCollapse?: boolean;
    active?: boolean | undefined;
    open?: boolean;
    onOpen?: VoidFunction;
    onMouseEnter?: VoidFunction;
    onMouseLeave?: VoidFunction;
  };

  // interface NavSectionVerticalProps extends BoxProps {
  //   isCollapse?: boolean;
  //   navConfig: {
  //     subheader: string;
  //     items: NavListProps[];
  //   }[];
  // }
  // export function NavSectionVertical({ navConfig, isCollapse, ...other }: NavSectionVerticalProps): JSX.Element;

  export function ScrollToTop(): null;

  declare type NotistackProviderProps = {
    children: ReactNode;
  };
  export function NotistackProvider({
    children,
  }: NotistackProviderProps): JSX.Element;

  interface EmptyContentProps extends BoxProps {
    title: string;
    img?: string;
    description?: string;
  }
  export function EmptyContent({
    title,
    description,
    img,
    ...other
  }: EmptyContentProps): JSX.Element;

  import { BreadcrumbsProps as _BreadcrumbsProps } from "@mui/material";
  type BreadcrumbsPropsTLink = {
    href?: string;
    name: string;
    icon?: ReactElement;
  };

  interface BreadcrumbsProps extends _BreadcrumbsProps {
    links: BreadcrumbsPropsTLink[];
    activeLast?: boolean;
  }

  interface HeaderBreadcrumbsProps extends BreadcrumbsProps {
    action?: ReactNode;
    heading: string;
    moreLink?: string | string[];
  }
  export function HeaderBreadcrumbs({
    links,
    action,
    heading,
    moreLink,
    sx,
    ...other
  }: HeaderBreadcrumbsProps): JSX.Element;

  type TableEmptyRowsProps = {
    height?: number;
    emptyRows: number;
  };
  export function TableEmptyRows({
    emptyRows,
    height,
  }: TableEmptyRowsProps): JSX.Element | null;

  type TableHeadCustomProps = {
    order?: "asc" | "desc";
    orderBy?: string;
    headLabel: any[];
    rowCount?: number;
    numSelected?: number;
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
    sx?: SxProps<Theme>;
  };
  export function TableHeadCustom({
    order,
    orderBy,
    rowCount,
    headLabel,
    numSelected,
    onSort,
    onSelectAllRows,
    sx,
  }: TableHeadCustomProps): JSX.Element;

  type TableMoreMenuProps = {
    actions: React.ReactNode;
    open?: HTMLElement | null;
    onClose?: VoidFunction;
    onOpen?: (event: React.MouseEvent<HTMLElement>) => void;
  };
  export function TableMoreMenu({
    actions,
    open,
    onClose,
    onOpen,
  }: TableMoreMenuProps): JSX.Element;

  declare type TableNoDataProps = {
    isNotFound: boolean;
  };
  export function TableNoData({ isNotFound }: TableNoDataProps): JSX.Element;

  import { StackProps } from "@mui/material";
  interface TableSelectedActionsProps extends StackProps {
    dense?: boolean;
    actions?: React.ReactNode;
    rowCount: number;
    numSelected: number;
    onSelectAllRows: (checked: boolean) => void;
  }
  export function TableSelectedActions({
    dense,
    actions,
    rowCount,
    numSelected,
    onSelectAllRows,
    sx,
    ...other
  }: TableSelectedActionsProps): JSX.Element;

  import { TableRowProps } from "@mui/material";
  export function TableSkeleton({ ...other }: TableRowProps): JSX.Element;

  import { UseFormReturn } from "react-hook-form";
  type FormProviderProps = {
    children: ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction;
  };
  export function FormProvider({
    children,
    onSubmit,
    methods,
  }: FormProviderProps): JSX.Element;

  import { FormControlLabelProps } from "@mui/material";
  interface RHFCheckboxProps extends Omit<FormControlLabelProps, "control"> {
    name: string;
  }
  export function RHFCheckbox({
    name,
    ...other
  }: RHFCheckboxProps): JSX.Element;
  interface RHFMultiCheckboxProps
    extends Omit<FormControlLabelProps, "control" | "label"> {
    name: string;
    options: {
      label: string;
      value: any;
    }[];
  }
  export function RHFMultiCheckbox({
    name,
    options,
    ...other
  }: RHFMultiCheckboxProps): JSX.Element;

  import { ReactQuillProps } from "react-quill";
  interface EditorProps extends ReactQuillProps {
    id?: string;
    error?: boolean;
    simple?: boolean;
    helperText?: ReactNode;
    sx?: BoxProps;
  }
  interface RHFEditorProps extends EditorProps {
    name: string;
  }
  export function RHFEditor({ name, ...other }: RHFEditorProps): JSX.Element;

  import { RadioGroupProps } from "@mui/material";
  type RHFRadioGroupIProps = {
    name: string;
    options: {
      label: string;
      value: any;
    }[];
  };
  type RHFRadioGroupProps = RHFRadioGroupIProps & RadioGroupProps;
  export function RHFRadioGroup({
    name,
    options,
    ...other
  }: RHFRadioGroupProps): JSX.Element;

  import { TextFieldProps } from "@mui/material";
  type RHFSelectIProps = {
    name: string;
    children: any;
  };
  type RHFSelectProps = RHFSelectIProps & TextFieldProps;
  export function RHFSelect({
    name,
    children,
    ...other
  }: RHFSelectProps): JSX.Element;

  type RHFSwitchIProps = Omit<FormControlLabelProps, "control">;
  interface RHFSwitchProps extends RHFSwitchIProps {
    name: string;
  }
  export function RHFSwitch({ name, ...other }: RHFSwitchProps): JSX.Element;

  type RHFTextFieldIProps = {
    name: string;
  };
  type RHFTextFieldProps = RHFTextFieldIProps & TextFieldProps;
  export function RHFTextField({
    name,
    ...other
  }: RHFTextFieldProps): JSX.Element;

  import { DropzoneOptions } from "react-dropzone";
  interface CustomFile extends File {
    path?: string;
    preview?: string;
    lastModifiedDate?: Date;
  }
  interface UploadProps extends DropzoneOptions {
    error?: boolean;
    file: CustomFile | string | null;
    helperText?: ReactNode;
    sx?: SxProps<Theme>;
  }
  interface UploadMultiFileProps extends DropzoneOptions {
    files: (File | string)[];
    error?: boolean;
    showPreview?: boolean;
    sx?: SxProps<Theme>;
    helperText?: ReactNode;
    onUpload?: VoidFunction;
    onRemove?: (file: File | string) => void;
    onRemoveAll?: VoidFunction;
  }
  interface RHFUploadProps extends Omit<UploadProps, "file"> {
    name: string;
  }
  export declare function RHFUploadAvatar({
    name,
    ...other
  }: RHFUploadProps): JSX.Element;
  export declare function RHFUploadSingleFile({
    name,
    ...other
  }: RHFUploadProps): JSX.Element;
  interface RHFUploadMultiFileProps
    extends Omit<UploadMultiFileProps, "files"> {
    name: string;
  }
  export declare function RHFUploadMultiFile({
    name,
    ...other
  }: RHFUploadMultiFileProps): JSX.Element;

  import { MotionProps } from "framer-motion";
  type MotionViewportIProps = BoxProps & MotionProps;
  interface MotionViewportProps extends MotionViewportIProps {
    children: ReactNode;
    disableAnimatedMobile?: boolean;
  }
  export function MotionViewport({
    children,
    disableAnimatedMobile,
    ...other
  }: MotionViewportProps): JSX.Element;

  declare type EaseType =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"
    | number[];
  type VariantsType = {
    distance?: number;
    durationIn?: number;
    durationOut?: number;
    easeIn?: EaseType;
    easeOut?: EaseType;
  };
  type TranHoverType = {
    duration?: number;
    ease?: EaseType;
  };
  type TranEnterType = {
    durationIn?: number;
    easeIn?: EaseType;
  };
  type TranExitType = {
    durationOut?: number;
    easeOut?: EaseType;
  };
  type BackgroundType = {
    colors?: string[];
    duration?: number;
    ease?: EaseType;
  };

  export const varFade: (props?: VariantsType) => {
    in: {
      initial: {
        opacity: number;
      };
      animate: {
        opacity: number;
        transition: (props?: TranEnterType | undefined) => {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        opacity: number;
        transition: (props?: TranExitType | undefined) => {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    inUp: {
      initial: {
        y: number;
        opacity: number;
      };
      animate: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    inDown: {
      initial: {
        y: number;
        opacity: number;
      };
      animate: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    inLeft: {
      initial: {
        x: number;
        opacity: number;
      };
      animate: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    inRight: {
      initial: {
        x: number;
        opacity: number;
      };
      animate: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    out: {
      initial: {
        opacity: number;
      };
      animate: {
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    outUp: {
      initial: {
        y: number;
        opacity: number;
      };
      animate: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    outDown: {
      initial: {
        y: number;
        opacity: number;
      };
      animate: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        y: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    outLeft: {
      initial: {
        x: number;
        opacity: number;
      };
      animate: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
    outRight: {
      initial: {
        x: number;
        opacity: number;
      };
      animate: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
      exit: {
        x: number;
        opacity: number;
        transition: {
          duration: number;
          ease:
            | "linear"
            | number[]
            | "easeIn"
            | "easeOut"
            | "easeInOut"
            | "circIn"
            | "circOut"
            | "circInOut"
            | "backIn"
            | "backOut"
            | "backInOut"
            | "anticipate";
        };
      };
    };
  };

  declare type MotionContainerIProps = BoxProps & MotionProps;
  export interface MotionContainerProps extends MotionContainerIProps {
    animate?: boolean;
    action?: boolean;
  }
  export function MotionContainer({
    animate,
    action,
    children,
    ...other
  }: MotionContainerProps): JSX.Element;

  type BadgeStatusEnum =
    | "away"
    | "busy"
    | "unread"
    | "online"
    | "offline"
    | "invisible"
    | string;
  type BadgeSize = "small" | "medium" | "large";
  interface BadgeStatusProps extends BoxProps {
    size?: BadgeSize;
    status?: BadgeStatusEnum;
  }
  export function BadgeStatus({
    size,
    status,
    sx,
  }: BadgeStatusProps): JSX.Element;

  export function PRUBreadcrumbs({
    links,
    activeLast,
    ...other
  }: BreadcrumbsProps): JSX.Element;

  declare type CopyClipboardProps = {
    value: string;
  };
  export function CopyClipboard({
    value,
    ...other
  }: CopyClipboardProps): JSX.Element;
  interface EmoijPickerProps extends BoxProps {
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
    alignRight?: boolean;
  }
  export function EmojiPicker({
    disabled,
    value,
    setValue,
    alignRight,
    ...other
  }: EmoijPickerProps): JSX.Element;

  type LabelColor =
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  type LabelVariant = "filled" | "outlined" | "ghost";
  interface LabelProps extends BoxProps {
    startIcon?: React.ReactElement | null;
    endIcon?: React.ReactElement | null;
    color?: LabelColor;
    variant?: LabelVariant;
  }
  export function Label({
    children,
    color,
    variant,
    startIcon,
    endIcon,
    sx,
  }: LabelProps): JSX.Element;

  import { ILightBoxProps } from "react-image-lightbox";
  interface LightboxModalProps extends ILightBoxProps {
    images: string[];
    photoIndex: number;
    setPhotoIndex: (index: number) => void;
    isOpen: boolean;
  }
  export function LightboxModal({
    images,
    photoIndex,
    setPhotoIndex,
    isOpen,
    ...other
  }: LightboxModalProps): JSX.Element;

  import { Options as MarkdownOptions } from "react-markdown";
  export function Markdown({ ...other }: MarkdownOptions): JSX.Element;

  import { PaperProps } from "@mui/material";
  interface SearchNotFoundProps extends PaperProps {
    searchQuery?: string;
  }
  export function SearchNotFound({
    searchQuery,
    ...other
  }: SearchNotFoundProps): JSX.Element;

  import { ButtonProps, IconButtonProps } from "@mui/material";
  type SocialLinks = {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  type SocialsButtonIProps = IconButtonProps & ButtonProps;
  interface SocialsButtonProps extends SocialsButtonIProps {
    simple?: boolean;
    initialColor?: boolean;
    links?: SocialLinks;
  }
  export function SocialsButton({
    initialColor,
    simple,
    links,
    sx,
    ...other
  }: SocialsButtonProps): JSX.Element;

  interface SvgIconStyleProps extends BoxProps {
    src: string;
  }
  export function SvgIconStyle({ src, sx }: SvgIconStyleProps): JSX.Element;

  interface TextIconLabelProps extends StackProps {
    icon: ReactElement;
    value: any;
    endIcon?: boolean;
    sx?: SxProps;
  }
  export function TextIconLabel({
    icon,
    value,
    endIcon,
    sx,
    ...other
  }: TextIconLabelProps): JSX.Element;

  import { Variant } from "@mui/material/styles/createTypography";
  import { TypographyProps, LinkProps } from "@mui/material";
  type TextMaxLineIProps = TypographyProps & LinkProps;
  interface TextMaxLineProps extends TextMaxLineIProps {
    line?: number;
    asLink?: boolean;
    persistent?: boolean;
    children: ReactNode;
    variant?: Variant;
  }
  export const TextMaxLine: import("react").ForwardRefExoticComponent<
    Pick<
      TextMaxLineProps,
      | "children"
      | "p"
      | "slot"
      | "style"
      | "title"
      | "line"
      | "fontFamily"
      | "fontSize"
      | "fontWeight"
      | "letterSpacing"
      | "className"
      | "classes"
      | "color"
      | "sx"
      | "height"
      | "id"
      | "lang"
      | "media"
      | "target"
      | "type"
      | "width"
      | "role"
      | "tabIndex"
      | "display"
      | "fontStyle"
      | "href"
      | "order"
      | "overflow"
      | "visibility"
      | "aria-activedescendant"
      | "aria-atomic"
      | "aria-autocomplete"
      | "aria-busy"
      | "aria-checked"
      | "aria-colcount"
      | "aria-colindex"
      | "aria-colspan"
      | "aria-controls"
      | "aria-current"
      | "aria-describedby"
      | "aria-details"
      | "aria-disabled"
      | "aria-dropeffect"
      | "aria-errormessage"
      | "aria-expanded"
      | "aria-flowto"
      | "aria-grabbed"
      | "aria-haspopup"
      | "aria-hidden"
      | "aria-invalid"
      | "aria-keyshortcuts"
      | "aria-label"
      | "aria-labelledby"
      | "aria-level"
      | "aria-live"
      | "aria-modal"
      | "aria-multiline"
      | "aria-multiselectable"
      | "aria-orientation"
      | "aria-owns"
      | "aria-placeholder"
      | "aria-posinset"
      | "aria-pressed"
      | "aria-readonly"
      | "aria-relevant"
      | "aria-required"
      | "aria-roledescription"
      | "aria-rowcount"
      | "aria-rowindex"
      | "aria-rowspan"
      | "aria-selected"
      | "aria-setsize"
      | "aria-sort"
      | "aria-valuemax"
      | "aria-valuemin"
      | "aria-valuenow"
      | "aria-valuetext"
      | "dangerouslySetInnerHTML"
      | "onCopy"
      | "onCopyCapture"
      | "onCut"
      | "onCutCapture"
      | "onPaste"
      | "onPasteCapture"
      | "onCompositionEnd"
      | "onCompositionEndCapture"
      | "onCompositionStart"
      | "onCompositionStartCapture"
      | "onCompositionUpdate"
      | "onCompositionUpdateCapture"
      | "onFocus"
      | "onFocusCapture"
      | "onBlur"
      | "onBlurCapture"
      | "onChange"
      | "onChangeCapture"
      | "onBeforeInput"
      | "onBeforeInputCapture"
      | "onInput"
      | "onInputCapture"
      | "onReset"
      | "onResetCapture"
      | "onSubmit"
      | "onSubmitCapture"
      | "onInvalid"
      | "onInvalidCapture"
      | "onLoad"
      | "onLoadCapture"
      | "onError"
      | "onErrorCapture"
      | "onKeyDown"
      | "onKeyDownCapture"
      | "onKeyPress"
      | "onKeyPressCapture"
      | "onKeyUp"
      | "onKeyUpCapture"
      | "onAbort"
      | "onAbortCapture"
      | "onCanPlay"
      | "onCanPlayCapture"
      | "onCanPlayThrough"
      | "onCanPlayThroughCapture"
      | "onDurationChange"
      | "onDurationChangeCapture"
      | "onEmptied"
      | "onEmptiedCapture"
      | "onEncrypted"
      | "onEncryptedCapture"
      | "onEnded"
      | "onEndedCapture"
      | "onLoadedData"
      | "onLoadedDataCapture"
      | "onLoadedMetadata"
      | "onLoadedMetadataCapture"
      | "onLoadStart"
      | "onLoadStartCapture"
      | "onPause"
      | "onPauseCapture"
      | "onPlay"
      | "onPlayCapture"
      | "onPlaying"
      | "onPlayingCapture"
      | "onProgress"
      | "onProgressCapture"
      | "onRateChange"
      | "onRateChangeCapture"
      | "onSeeked"
      | "onSeekedCapture"
      | "onSeeking"
      | "onSeekingCapture"
      | "onStalled"
      | "onStalledCapture"
      | "onSuspend"
      | "onSuspendCapture"
      | "onTimeUpdate"
      | "onTimeUpdateCapture"
      | "onVolumeChange"
      | "onVolumeChangeCapture"
      | "onWaiting"
      | "onWaitingCapture"
      | "onAuxClick"
      | "onAuxClickCapture"
      | "onClick"
      | "onClickCapture"
      | "onContextMenu"
      | "onContextMenuCapture"
      | "onDoubleClick"
      | "onDoubleClickCapture"
      | "onDrag"
      | "onDragCapture"
      | "onDragEnd"
      | "onDragEndCapture"
      | "onDragEnter"
      | "onDragEnterCapture"
      | "onDragExit"
      | "onDragExitCapture"
      | "onDragLeave"
      | "onDragLeaveCapture"
      | "onDragOver"
      | "onDragOverCapture"
      | "onDragStart"
      | "onDragStartCapture"
      | "onDrop"
      | "onDropCapture"
      | "onMouseDown"
      | "onMouseDownCapture"
      | "onMouseEnter"
      | "onMouseLeave"
      | "onMouseMove"
      | "onMouseMoveCapture"
      | "onMouseOut"
      | "onMouseOutCapture"
      | "onMouseOver"
      | "onMouseOverCapture"
      | "onMouseUp"
      | "onMouseUpCapture"
      | "onSelect"
      | "onSelectCapture"
      | "onTouchCancel"
      | "onTouchCancelCapture"
      | "onTouchEnd"
      | "onTouchEndCapture"
      | "onTouchMove"
      | "onTouchMoveCapture"
      | "onTouchStart"
      | "onTouchStartCapture"
      | "onPointerDown"
      | "onPointerDownCapture"
      | "onPointerMove"
      | "onPointerMoveCapture"
      | "onPointerUp"
      | "onPointerUpCapture"
      | "onPointerCancel"
      | "onPointerCancelCapture"
      | "onPointerEnter"
      | "onPointerEnterCapture"
      | "onPointerLeave"
      | "onPointerLeaveCapture"
      | "onPointerOver"
      | "onPointerOverCapture"
      | "onPointerOut"
      | "onPointerOutCapture"
      | "onGotPointerCapture"
      | "onGotPointerCaptureCapture"
      | "onLostPointerCapture"
      | "onLostPointerCaptureCapture"
      | "onScroll"
      | "onScrollCapture"
      | "onWheel"
      | "onWheelCapture"
      | "onAnimationStart"
      | "onAnimationStartCapture"
      | "onAnimationEnd"
      | "onAnimationEndCapture"
      | "onAnimationIteration"
      | "onAnimationIterationCapture"
      | "onTransitionEnd"
      | "onTransitionEndCapture"
      | "key"
      | "defaultChecked"
      | "defaultValue"
      | "suppressContentEditableWarning"
      | "suppressHydrationWarning"
      | "accessKey"
      | "contentEditable"
      | "contextMenu"
      | "dir"
      | "draggable"
      | "hidden"
      | "placeholder"
      | "spellCheck"
      | "translate"
      | "radioGroup"
      | "about"
      | "datatype"
      | "inlist"
      | "prefix"
      | "property"
      | "resource"
      | "typeof"
      | "vocab"
      | "autoCapitalize"
      | "autoCorrect"
      | "autoSave"
      | "itemProp"
      | "itemScope"
      | "itemType"
      | "itemID"
      | "itemRef"
      | "results"
      | "security"
      | "unselectable"
      | "inputMode"
      | "is"
      | "hrefLang"
      | "referrerPolicy"
      | "rel"
      | "download"
      | "ping"
      | "align"
      | "left"
      | "right"
      | "top"
      | "bottom"
      | "border"
      | "boxShadow"
      | "zIndex"
      | "alignContent"
      | "alignItems"
      | "alignSelf"
      | "boxSizing"
      | "columnGap"
      | "flexBasis"
      | "flexDirection"
      | "flexGrow"
      | "flexShrink"
      | "flexWrap"
      | "gridAutoColumns"
      | "gridAutoFlow"
      | "gridAutoRows"
      | "gridTemplateAreas"
      | "gridTemplateColumns"
      | "gridTemplateRows"
      | "justifyContent"
      | "justifyItems"
      | "justifySelf"
      | "lineHeight"
      | "marginBottom"
      | "marginLeft"
      | "marginRight"
      | "marginTop"
      | "maxHeight"
      | "maxWidth"
      | "minHeight"
      | "minWidth"
      | "paddingBottom"
      | "paddingLeft"
      | "paddingRight"
      | "paddingTop"
      | "position"
      | "rowGap"
      | "textAlign"
      | "textOverflow"
      | "textTransform"
      | "whiteSpace"
      | "borderBottom"
      | "borderColor"
      | "borderLeft"
      | "borderRadius"
      | "borderRight"
      | "borderTop"
      | "flex"
      | "gap"
      | "gridArea"
      | "gridColumn"
      | "gridRow"
      | "margin"
      | "padding"
      | "bgcolor"
      | "m"
      | "mt"
      | "mr"
      | "mb"
      | "ml"
      | "mx"
      | "marginX"
      | "my"
      | "marginY"
      | "pt"
      | "pr"
      | "pb"
      | "pl"
      | "px"
      | "paddingX"
      | "py"
      | "paddingY"
      | "typography"
      | "displayPrint"
      | "underline"
      | "variant"
      | "gutterBottom"
      | "noWrap"
      | "paragraph"
      | "variantMapping"
      | "TypographyClasses"
      | "asLink"
      | "persistent"
    > &
      import("react").RefAttributes<HTMLAnchorElement>
  >;
  interface CarouselArrowIndexProps extends BoxProps {
    index: number;
    total: number;
    customIcon?: IconifyIcon | string;
    onNext?: VoidFunction;
    onPrevious?: VoidFunction;
  }
  export function CarouselArrowIndex({
    index,
    total,
    onNext,
    onPrevious,
    customIcon,
    ...other
  }: CarouselArrowIndexProps): JSX.Element;

  type CarouselArrowsIProps = BoxProps & StackProps;
  interface CarouselArrowsProps extends CarouselArrowsIProps {
    filled?: boolean;
    children?: ReactNode;
    customIcon?: IconifyIcon | string;
    onNext?: VoidFunction;
    onPrevious?: VoidFunction;
  }
  export function CarouselArrows({
    filled,
    customIcon, // Set icon right
    onNext,
    onPrevious,
    children,
    ...other
  }: CarouselArrowsProps): JSX.Element;
  export interface CarouselDotsProps extends BoxProps {
    color?: string;
    rounded?: boolean;
  }
  export function CarouselDots(props?: CarouselDotsProps): {
    appendDots: (dots: ReactNode) => JSX.Element;
    customPaging: () => JSX.Element;
  };

  import { ApexOptions } from "apexcharts";
  export function BaseOptionChart(): ApexOptions;

  export function ChartStyle(): JSX.Element;

  import { CheckboxProps } from "@mui/material";
  interface ColorManyPickerProps extends CheckboxProps {
    colors: string[];
    onChangeColor: (color: string) => void;
  }
  export function ColorManyPicker({
    colors,
    onChangeColor,
    sx,
    ...other
  }: ColorManyPickerProps): JSX.Element;

  interface ColorPreviewProps extends BoxProps {
    colors: string[];
    limit?: number;
  }
  export function ColorPreview({
    colors,
    limit,
    sx,
  }: ColorPreviewProps): JSX.Element;
  interface ColorSinglePickerProps extends RadioGroupProps {
    colors: string[];
  }
  export function ColorSinglePicker({
    colors,
    ...other
  }: ColorSinglePickerProps): JSX.Element;
  export interface EditorProps extends ReactQuillProps {
    id?: string;
    error?: boolean;
    simple?: boolean;
    helperText?: ReactNode;
    sx?: BoxProps;
  }
  export function Editor({
    id,
    error,
    value,
    onChange,
    simple,
    helperText,
    sx,
    ...other
  }: EditorProps): JSX.Element;

  declare type EditorToolbarProps = {
    id: string;
    isSimple?: boolean;
  };
  export function EditorToolbar({
    id,
    isSimple,
    ...other
  }: EditorToolbarProps): JSX.Element;

  import { FullscreenControlProps } from "react-map-gl";
  export function MapControlFullscreen(
    props: FullscreenControlProps
  ): JSX.Element;

  import { GeolocateControlProps } from "react-map-gl/src/components/geolocate-control";
  export function MapControlGeolocate({
    ...props
  }: GeolocateControlProps): JSX.Element;

  import { MarkerProps } from "react-map-gl";
  interface MapControlMarkerProps extends MarkerProps {
    onClick?: React.MouseEventHandler<SVGSVGElement>;
  }
  export function MapControlMarker({
    onClick,
    ...other
  }: MapControlMarkerProps): JSX.Element;

  import { NavigationControlProps } from "react-map-gl/src/components/navigation-control";
  export function MapControlNavigation({
    ...other
  }: NavigationControlProps): JSX.Element;

  import { PopupProps } from "react-map-gl";
  interface MapControlPopupProps extends PopupProps {
    sx?: SxProps<Theme>;
  }
  export function MapControlPopup({
    onClose,
    sx,
    children,
    ...other
  }: MapControlPopupProps): JSX.Element;

  import { ScaleControlProps } from "react-map-gl/src/components/scale-control";
  interface MapControlScaleProps extends ScaleControlProps {
    sx?: SxProps<Theme>;
  }
  export function MapControlScale({
    sx,
    ...other
  }: MapControlScaleProps): JSX.Element;

  type Products = {
    name: string;
    image: string;
    path: string;
  };
  type MegaMenuTags = {
    name: string;
    path: string;
  };
  type MenuCarouselProps = {
    products: Products[];
    numberShow?: number;
    sx?: SxProps<Theme>;
  };
  type MenuHotProductsProps = {
    tags: MegaMenuTags[];
  };
  type MegaMenuParentItemProps = {
    title: string;
    path?: string;
    icon?: ReactElement;
    open?: boolean;
    hasSub?: boolean;
    onClick?: VoidFunction;
    onMouseEnter?: VoidFunction;
    onMouseLeave?: VoidFunction;
    component?: ReactNode;
    to?: string;
  };
  type MegaMenuItemProps = {
    title: string;
    path: string;
    icon: ReactElement;
    more?: {
      title: string;
      path: string;
    };
    products?: Products[];
    tags?: MegaMenuTags[];
    children?: {
      subheader: string;
      items: {
        title: string;
        path: string;
      }[];
    }[];
  };

  type MegaMenuProps = {
    navConfig: MegaMenuItemProps[];
  };
  export function MegaMenuDesktopHorizon({
    navConfig,
    ...other
  }: MegaMenuProps): JSX.Element;

  export function MegaMenuDesktopVertical({
    navConfig,
    ...other
  }: Props): JSX.Element;

  export function MegaMenuMobile({ navConfig }: Props): JSX.Element;

  export function MenuCarousel({
    products,
    numberShow,
    sx,
  }: MenuCarouselProps): JSX.Element;

  export const menuConfig: MegaMenuItemProps[];

  export function MenuHotProducts({
    tags,
    ...other
  }: MenuHotProductsProps): JSX.Element;

  export function SkeletonConversationItem(): JSX.Element;

  export function SkeletonKanbanColumn(): JSX.Element;

  export function SkeletonMap(): JSX.Element;

  export function SkeletonPost(): JSX.Element;

  export function SkeletonPostItem(): JSX.Element;

  export function SkeletonProduct(): JSX.Element;

  export function SkeletonProductItem(): JSX.Element;

  export function BlockContent(): JSX.Element;

  export function MultiFilePreview({
    showPreview,
    files,
    onRemove,
  }: UploadMultiFileProps): JSX.Element;

  import { FileRejection } from "react-dropzone";
  type RejectionFilesProps = {
    fileRejections: FileRejection[];
  };
  export function RejectionFiles({
    fileRejections,
  }: RejectionFilesProps): JSX.Element;

  export function UploadAvatar({
    error,
    file,
    helperText,
    sx,
    ...other
  }: UploadProps): JSX.Element;

  export function UploadMultiFile({
    error,
    showPreview,
    files,
    onUpload,
    onRemove,
    onRemoveAll,
    helperText,
    sx,
    ...other
  }: UploadMultiFileProps): JSX.Element;

  export function UploadSingleFile({
    error,
    file,
    helperText,
    sx,
    ...other
  }: UploadProps): JSX.Element;
}
