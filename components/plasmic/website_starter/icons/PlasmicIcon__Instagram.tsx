/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramIcon(props: InstagramIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "sc-gKsewC cGdHMG"
      )}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.938 7.71a7.329 7.329 0 00-.456-2.394 4.615 4.615 0 00-1.1-1.694 4.61 4.61 0 00-1.7-1.1 7.318 7.318 0 00-2.393-.456C15.185 2.012 14.817 2 12 2s-3.185.012-4.29.062a7.329 7.329 0 00-2.394.456 4.615 4.615 0 00-1.694 1.1 4.61 4.61 0 00-1.1 1.7 7.318 7.318 0 00-.46 2.392C2.012 8.814 2 9.182 2 12s.012 3.186.062 4.29a7.329 7.329 0 00.456 2.394 4.615 4.615 0 001.1 1.694 4.61 4.61 0 001.7 1.1 7.318 7.318 0 002.393.456c1.1.05 1.472.062 4.29.062s3.186-.012 4.29-.062a7.329 7.329 0 002.394-.456 4.9 4.9 0 002.8-2.8 7.318 7.318 0 00.456-2.393c.05-1.1.062-1.472.062-4.29s-.015-3.181-.065-4.285zm-1 8.534a6.351 6.351 0 01-.388 2.077 3.9 3.9 0 01-2.228 2.229 6.363 6.363 0 01-2.078.388C15.159 20.988 14.8 21 12 21s-3.159-.012-4.244-.062a6.351 6.351 0 01-2.077-.388 3.627 3.627 0 01-1.35-.879 3.631 3.631 0 01-.879-1.349 6.363 6.363 0 01-.388-2.078C3.012 15.159 3 14.8 3 12s.012-3.159.062-4.244a6.351 6.351 0 01.388-2.077 3.627 3.627 0 01.879-1.35 3.631 3.631 0 011.349-.879 6.363 6.363 0 012.078-.388C8.842 3.012 9.205 3 12 3s3.158.012 4.244.062a6.351 6.351 0 012.077.388 3.627 3.627 0 011.35.879 3.631 3.631 0 01.879 1.349 6.363 6.363 0 01.388 2.078C20.988 8.841 21 9.2 21 12s-.012 3.159-.062 4.244z"
        }
      ></path>

      <path
        d={
          "M17.581 5.467a.953.953 0 10.952.952.954.954 0 00-.952-.952zM12 7.073A4.927 4.927 0 1016.927 12 4.932 4.932 0 0012 7.073zm0 8.854A3.927 3.927 0 1115.927 12 3.932 3.932 0 0112 15.927z"
        }
      ></path>
    </svg>
  );
}

export default InstagramIcon;
/* prettier-ignore-end */
