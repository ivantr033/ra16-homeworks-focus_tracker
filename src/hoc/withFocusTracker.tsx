import {
    useState,
    useCallback,
    forwardRef,
    type ComponentType,
    type FocusEvent,
    type Ref,
} from 'react';
import { composeEventHandlers } from '../utils/composeEventHandlers';

export interface FocusTrackerInjectedProps {
    isFocused: boolean;
    onFocusChange?: (isFocused: boolean) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
}

export function withFocusTracker<P extends object, T extends HTMLElement = HTMLElement>(
    WrappedComponent: ComponentType<P & { ref?: Ref<T> }>
) {
    type ExternalProps = Omit<P, 'isFocused'> & Partial<FocusTrackerInjectedProps>;

    const ComponentWithFocusTracker = forwardRef<T, ExternalProps>(
        (props, ref) => {
            const {
                onFocusChange,
                onFocus,
                onBlur,
                ...restProps
            } = props as ExternalProps;

            const [isFocused, setIsFocused] = useState(false);

            const handleInternalFocus = useCallback(() => {
                setIsFocused(true);
                onFocusChange?.(true);
            }, [onFocusChange]);

            const handleInternalBlur = useCallback(() => {
                setIsFocused(false);
                onFocusChange?.(false);
            }, [onFocusChange]);

            const composedFocus = composeEventHandlers<FocusEvent<HTMLElement>>(
                handleInternalFocus,
                onFocus
            );

            const composedBlur = composeEventHandlers<FocusEvent<HTMLElement>>(
                handleInternalBlur,
                onBlur
            );

            const injectedProps = {
                ...restProps,
                isFocused,
                onFocus: composedFocus,
                onBlur: composedBlur,
                ref,
            } as unknown as P & { ref?: Ref<T> };

            return <WrappedComponent {...injectedProps} />;
        }
    );

    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithFocusTracker.displayName = `withFocusTracker(${displayName})`;

    return ComponentWithFocusTracker;
}
