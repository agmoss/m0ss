import React, { ComponentType } from "react";

export const withAos =
    <T extends object>(WrappedComponent: ComponentType<T>): React.FC<T> =>
    ({ ...props }) =>
        (
            <div data-aos="fade-up">
                <WrappedComponent {...(props as T)} />
            </div>
        );
