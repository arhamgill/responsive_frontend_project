import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
const classes = cva("border py-3 px-6 rounded-full font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-500 border-lime-500 text-neutral-900",
            secondary: "bg-transparent border-white",
        },
    },
});

function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, ...rest } = props;
    return (
        <button
            className={classes({
                variant,
                className,
            })}
            {...rest}
        />
    );
}

export default Button;
