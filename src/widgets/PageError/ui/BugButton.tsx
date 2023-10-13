import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const hClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button
            type="button"
            onClick={hClick}
        >
            {t('Пробросить ошибку')}
        </button>

    );
};
