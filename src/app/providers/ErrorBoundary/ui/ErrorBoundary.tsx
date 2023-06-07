import React, { Suspense, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from 'widgets/page-error';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError () {
        return { hasError: true };
    }

    componentDidCatch (error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render () {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
        // You can render any custom fallback UI
            // eslint-disable-next-line i18next/no-literal-string
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}
