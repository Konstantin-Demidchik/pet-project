import { useEffect, useState } from 'react';

// Draft Component for testing ErrorBoundary
export const BugButton = () => {
    const [isError, setIsError] = useState(false);

    const onThrowError = () => {
        setIsError(true);
    }

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <button onClick={onThrowError}>
            throw error
        </button>
    );
};
