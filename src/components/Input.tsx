import { forwardRef, type InputHTMLAttributes } from 'react';
import { type FocusTrackerInjectedProps } from '../hoc/withFocusTracker';

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onFocus' | 'onBlur'>,
    Partial<FocusTrackerInjectedProps> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ isFocused, className = '', ...rest }, ref) => {
        return (
            <input
                ref={ref}
                className={`custom-input ${isFocused ? 'focused' : ''} ${className}`.trim()}
                {...rest}
            />
        );
    }
);

Input.displayName = 'Input';

export default Input;
