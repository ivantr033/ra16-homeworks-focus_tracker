import { type SyntheticEvent } from 'react';

export function composeEventHandlers<E extends SyntheticEvent>(
    internalHandler?: (event: E) => void,
    externalHandler?: (event: E) => void
) {
    return (event: E) => {
        internalHandler?.(event);
        if (!event.defaultPrevented) {
            externalHandler?.(event);
        }
    };
}
