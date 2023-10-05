import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Button.module.scss';

export const enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
   theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...restProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...restProps}
        >
            {children}
        </button>

    );
};
