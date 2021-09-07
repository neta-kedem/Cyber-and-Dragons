import { Box, Button, ButtonProps, makeStyles } from "@material-ui/core";
import { ProgressLoader } from "../../ProgressLoader";
import {
  blackColor,
  borderlyGray,
  brandBlueColor,
  brandGrayColor,
  gray10,
  gray15,
  gray20,
  gray40,
  greenDisableButton,
  lighterDarkGray,
  mediumButtonHeight,
  secondaryColor,
  smallButtonHeight,
  white,
} from "../../../theme";
import React, { ReactNode } from "react";
import { cond, stubTrue } from "lodash/fp";
import { AnimatedBalanceSlashIcon } from "../../SvgIcons/SvgIcons";
import SlashLogo from "../../../assets/slash-logo.svg";
import { MuiSvgIcon } from "../../MuiSvgIcon";

export interface StyledButtonProps
  extends Pick<ButtonProps, Exclude<keyof ButtonProps, "variant" | "color">> {
  variant?: "ghost" | "small" | ButtonProps["variant"];
  color?: "inherit" | "primary" | "secondary" | "default" | "branded";
  backgroundColor?: string;
  textColor?: string;
  isLoading?: undefined | boolean;
  icon?: ReactNode;
  border?: boolean;
  isHoverAnimation?: boolean;
  margin?: string;
  padding?: string;
  disabledBackgroundColor?: string;
  bold?: boolean;
  active?: boolean;
  width?: string;
}

const useStyles = ({ theme }: { theme: StyledButtonProps }) =>
  makeStyles({
    styledButton: {
      height: `${
        theme.variant === "small" ? smallButtonHeight : mediumButtonHeight
      }`,
      background: `${theme.backgroundColor || blackColor}`,
      color: `${theme.textColor || white}`,
      borderRadius: "0.25rem",
      padding: theme.variant === "small" ? "0px 24px" : "0.5rem 1.5rem",
      ...hoverAnimationCss(!!theme.isHoverAnimation),
      "&:hover": {
        background: `${theme.backgroundColor || gray40}`,
      },
      "&:disabled": {
        backgroundColor: gray10,
        color: gray20,
        cursor: "not-allowed",
      },
    },
    secondaryStyledButton: {
      height: `${
        theme.variant === "small" ? smallButtonHeight : mediumButtonHeight
      }`,
      width: theme.width ?? "auto",
      color: theme.textColor,
      padding: theme.variant === "small" ? "0px 24px" : "0.5rem 1.5rem",
      border: `${
        theme.border || theme.variant === "ghost"
          ? `1px solid ${theme.textColor || blackColor}`
          : "none"
      }`,
      ...hoverAnimationCss(!!theme.isHoverAnimation),
    },
    brandedStyledButton: {
      height: `${
        theme.variant === "small" ? smallButtonHeight : mediumButtonHeight
      }`,
      background: secondaryColor,
      color: blackColor,
      borderRadius: "0.25rem",
      padding: "0.5rem 1.5rem",
      ...hoverAnimationCss(!!theme.isHoverAnimation),
      "&:hover": {
        background: secondaryColor,
      },
      "&:disabled": {
        backgroundColor: greenDisableButton,
        color: blackColor,
        cursor: "not-allowed",
      },
    },
    styledMiniButton: {
      "&.MuiButton-text": {
        padding: theme.padding || "12px 24px",
      },
      height: "40px",
      background: `${theme.backgroundColor || brandGrayColor}`,
      color: `${theme.textColor || lighterDarkGray}`,
      borderRadius: "0.25rem",
      padding: theme.padding || "12px 24px",
      fontSize: "14px",
      lineHeight: "16.8px",
      "&:hover": {
        backgroundColor: `${theme.backgroundColor || gray15} !important`,
      },
      "&.Mui-disabled": {
        color: `${borderlyGray} !important`,
        cursor: "not-allowed",
        padding: theme.padding || "12px 24px !important",
      },
    },
    activeStyledMiniButton: {
      background: `${theme.backgroundColor || blackColor}`,
      color: `${theme.textColor || secondaryColor}`,
    },
    animatedUnderline: {
      "&": {
        display: "inline-block",
        color: "#000",
        textDecoration: "none",
      },
      "&::after": {
        content: "''",
        display: "block",
        width: "0",
        height: "2px",
        background: "#000",
        transition: "width .3s",
      },
      "&:hover::after": { width: "100%" },
    },
  });

const hoverAnimationCss = (isHoverAnimation: boolean) => {
  if (isHoverAnimation) {
    return {
      padding: "0.5rem 1.6rem",
      "&:hover svg": {
        transition: "all ease-in 300ms",
        transform: "rotate(180deg)",
      },
    };
  }
};

const StyledButton = ({
  variant,
  color,
  backgroundColor,
  textColor,
  icon,
  isLoading,
  border,
  isHoverAnimation,
  margin,
  padding,
  disabledBackgroundColor,
  bold = true,
  className,
  width,
  ...props
}: StyledButtonProps) => {
  const classes = useStyles({
    theme: {
      variant,
      backgroundColor,
      textColor,
      icon,
      isLoading,
      border,
      isHoverAnimation,
      margin,
      bold,
      width,
      padding,
    },
  })();

  const styleMapper = cond<string, any>([
    [(color) => color === "primary", () => classes.styledButton],
    [(color) => color === "secondary", () => classes.secondaryStyledButton],
    [(color) => color === "branded", () => classes.brandedStyledButton],
    [stubTrue, () => classes.styledButton],
  ]);

  return (
    <Button
      className={`${styleMapper(color ? color : "")} ${
        className ? className : ""
      }`}
      startIcon={
        icon !== null ? (
          isLoading ? (
            <ProgressLoader style={{ color: secondaryColor }} size={20} />
          ) : color !== "secondary" ? (
            isHoverAnimation ? (
              <AnimatedBalanceSlashIcon
                width={9}
                height={22}
                viewBox={"0 0 9 22"}
              />
            ) : (
              <MuiSvgIcon
                icon={SlashLogo}
                style={{ lineHeight: 1 }}
                height="100%"
              />
            )
          ) : (
            icon
          )
        ) : isLoading ? (
          <ProgressLoader style={{ color: secondaryColor }} size={20} />
        ) : null
      }
      {...props}
    >
      <Box>{bold ? <b>{props.children}</b> : props.children}</Box>
    </Button>
  );
};

const StyledMiniButton = ({
  variant,
  active,
  color,
  icon,
  isLoading,
  className,
  padding,
  backgroundColor,
  textColor,
  ...props
}: StyledButtonProps) => {
  const classes = useStyles({
    theme: {
      icon,
      active,
      className,
      padding,
      backgroundColor,
      textColor,
    },
  })();

  const styleMapper = cond<boolean, any>([
    [(active) => active, () => classes.activeStyledMiniButton],
    [stubTrue, () => classes.styledMiniButton],
  ]);
  return (
    <div>
      <Button
        startIcon={
          isLoading ? (
            <ProgressLoader style={{ color: brandBlueColor }} size={16} />
          ) : (
            icon
          )
        }
        className={`${styleMapper(active ? active : false)} ${
          className ? className : ""
        }`}
        {...props}
      />
    </div>
  );
};

export { StyledButton, StyledMiniButton };
