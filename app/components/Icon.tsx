import clsx from "clsx";

type IconProps = JSX.IntrinsicElements["svg"] & {
  direction?: "up" | "right" | "down" | "left";
};

interface CartIconProps {
  color: string | undefined;
}

export const CartIcon = (props: CartIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      d="M20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V3C3.00488 2.44772 3.4526 2 4.00488 2H20.0049C20.5572 2 21.0049 2.44772 21.0049 3V21C21.0049 21.5523 20.5572 22 20.0049 22ZM9.00488 6H7.00488V8C7.00488 10.7614 9.24346 13 12.0049 13C14.7663 13 17.0049 10.7614 17.0049 8V6H15.0049V8C15.0049 9.65685 13.6617 11 12.0049 11C10.348 11 9.00488 9.65685 9.00488 8V6Z"
      fill={props.color}
    ></path>
  </svg>
);

export const AccountIcon = (props: CartIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
      fill={props.color}
    ></path>
  </svg>
);