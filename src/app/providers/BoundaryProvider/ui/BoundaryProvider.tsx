import { Component, type ErrorInfo, type ReactNode } from "react";

import { PageError } from "widgets/PageError";

interface BoundaryProviderProps {
    children: ReactNode;
}

interface BoundaryProviderState {
    hasError: boolean;
}

export class BoundaryProvider extends Component<
    BoundaryProviderProps,
    BoundaryProviderState
> {
    constructor(props: BoundaryProviderProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): BoundaryProviderState {
        /* eslint n/handle-callback-err: "error" */
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("error, errorInfo");
    }

    render(): ReactNode {
        const { children } = this.props;
        const { hasError } = this.state;

        return hasError ? <PageError /> : children;
    }
}
